/**
 * POST /api/chat
 *
 * Streaming chat endpoint backed by Google Gemini via the Vercel AI SDK.
 * Accepts UIMessage[] from the client (`useChat` hook) and streams the
 * response back as a UI message stream.
 *
 * Task 2 scope: chat works without retrieval grounding. RAG (Vectra-backed
 * top-K retrieval injected into the system prompt) is added in Task 3.
 */

import { google } from '@ai-sdk/google';
import {
  streamText,
  convertToModelMessages,
  type UIMessage,
} from 'ai';

// Allow up to 30s for streaming responses on serverless deploys (Vercel default
// is 10s, which is too short for slower model warm-ups).
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

export async function POST(req: Request) {
  // Fail fast and clearly if the server isn't configured. Surfacing this as a
  // 500 with a specific message helps in dev; in prod the message is generic.
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json(
      { error: 'Server is missing GOOGLE_GENERATIVE_AI_API_KEY' },
      { status: 500 },
    );
  }

  let messages: UIMessage[];
  try {
    const body = (await req.json()) as { messages?: UIMessage[] };
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      throw new Error('messages must be a non-empty array');
    }
    messages = body.messages;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    const result = streamText({
      model: google(process.env.GEMINI_MODEL ?? 'gemini-2.0-flash'),
      system: SYSTEM_PROMPT,
      messages: convertToModelMessages(messages),
      // Low temperature for support-style content — we want consistent,
      // factual answers more than creative variation.
      temperature: 0.3,
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error('[/api/chat] streamText failed', err);
    return Response.json(
      { error: 'Failed to generate a response. Please try again.' },
      { status: 500 },
    );
  }
}
