import type { UIMessage } from 'ai';

/**
 * A single retrieved help-center article cited as a source for an AI answer.
 * Stored in message metadata so the UI can render citation chips that link
 * back to the article detail page.
 */
export type ChatSource = {
  slug: string;
  title: string;
  category: string;
};

export type ChatMessageMetadata = {
  sources?: ChatSource[];
};

/**
 * Project-wide chat message type. Wraps Vercel AI SDK's UIMessage with a
 * typed metadata payload so source chips, follow-ups, etc. are type-safe
 * end-to-end.
 */
export type ChatMessage = UIMessage<ChatMessageMetadata>;
