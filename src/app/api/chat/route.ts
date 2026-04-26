/**
 * POST /api/chat
 *
 * Streaming chat endpoint backed by Google Gemini via the Vercel AI SDK.
 *
 * Pipeline:
 *  1. Pull the latest user message from the UIMessage[] payload.
 *  2. Run Vectra-backed top-K retrieval against the help-center index.
 *  3. Inject the retrieved snippets into the system prompt with explicit
 *     citation rules and a Sources: footer template.
 *  4. Stream the response back as a UI message stream, attaching the
 *     retrieved sources as message metadata so the client can render
 *     citation chips under the AI bubble.
 */
import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages, type UIMessage } from 'ai';

import { retrieveRelevantChunks } from '@/lib/rag/retrieve';
import type { ChatMessage } from '@/lib/chat/types';

// Allow up to 30s for streaming responses on serverless deploys (Vercel's
// default is 10s, which is too short for slower model warm-ups).
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are the assistant for the AI Insurance Help Center, a customer-support portal for a fictional insurance company.

Your role:
- Help users understand insurance topics: claims, coverage, billing, policies, and product types (auto, home, health, life, travel).
- Provide clear, factual, step-by-step guidance.
- Be warm and professional. Many users may be stressed about claims, money, or paperwork.

Guidelines:
- If a question requires specifics from the user's actual policy (their exact deductible, their specific limits), say so plainly and suggest they check their policy document or contact a representative — do not invent numbers.
- Present numeric details (deductibles, coverage limits, processing timelines) as common ranges or examples, not guarantees.
- Use markdown formatting (headings, lists, bold) when the answer benefits from structure. Keep prose tight; prefer concise over verbose.
- If a question is outside the insurance domain, redirect briefly and offer to help with a related insurance question instead.`;

const extractLatestUserText = (messages: UIMessage[]) => {
  const latestUser = [...messages].reverse().find((message) => message.role === 'user');
  if (!latestUser) return '';

  return latestUser.parts
    .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
    .map((part) => part.text)
    .join(' ')
    .trim();
};

const buildContextBlock = (
  chunks: Array<{ slug: string; title: string; excerpt: string }>,
) => {
  if (chunks.length === 0) {
    return 'No relevant article snippets were found. Answer conservatively and ask a clarifying question when needed.';
  }

  return chunks
    .map(
      (chunk, index) =>
        `${index + 1}. [${chunk.slug}] ${chunk.title}\n${chunk.excerpt}`,
    )
    .join('\n\n');
};

export async function POST(req: Request) {
  // Fail fast and clearly if the server isn't configured.
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json(
      { error: 'Server is missing GOOGLE_GENERATIVE_AI_API_KEY' },
      { status: 500 },
    );
  }

  let messages: ChatMessage[];
  try {
    const body = (await req.json()) as { messages?: ChatMessage[] };
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      throw new Error('messages must be a non-empty array');
    }
    messages = body.messages;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    const latestUserText = extractLatestUserText(messages);
    const retrieved = await retrieveRelevantChunks(latestUserText, 4);

    const retrievalPrompt = `Use these retrieved help-center snippets as your primary grounding context.

${buildContextBlock(retrieved)}

Rules for grounding:
- Prefer these sources when answering.
- Do not invent a source slug.
- If context is missing, say what is unknown and ask for a clarifying detail.
- End your answer with a short line in this format: Sources: [slug](/articles/slug), [slug](/articles/slug)`;

    // In AI SDK v6, convertToModelMessages may return a Promise (it was
    // synchronous in v5). Awaiting it resolves the "expected array, received
    // Promise" zod error from streamText.
    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: google(process.env.GEMINI_MODEL ?? 'gemini-2.0-flash'),
      system: `${SYSTEM_PROMPT}\n\n${retrievalPrompt}`,
      messages: modelMessages,
      temperature: 0.3,
      // Disable SDK retries — on rate-limit the SDK retries immediately with
      // no delay, burning quota. The client shows a countdown and retries instead.
      maxRetries: 0,
    });

    return result.toUIMessageStreamResponse<ChatMessage>({
      originalMessages: messages,
      messageMetadata: ({ part }) => {
        if (part.type !== 'finish') return undefined;

        // Attach the retrieved sources so the client can render citation
        // chips under the AI message. Only the slug + title travel over
        // the wire — the body text stays server-side.
        return {
          sources: retrieved.map((item) => ({
            slug: item.slug,
            title: item.title,
            category: item.category,
          })),
        };
      },
    });
  } catch (err) {
    console.error('[/api/chat] streamText failed', err);
    return Response.json(
      { error: 'Failed to generate a response. Please try again.' },
      { status: 500 },
    );
  }
}
