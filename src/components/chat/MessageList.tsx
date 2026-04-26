'use client';

import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AlertCircle, RotateCw, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ChatMessage } from '@/lib/chat/types';

type Status = 'submitted' | 'streaming' | 'ready' | 'error';

type Props = {
  messages: ChatMessage[];
  status: Status;
  error: Error | undefined;
  onRetry: () => void;
  onSuggestion: (text: string) => void;
};

// Sourced from the brief's sample questions so reviewers can replay the
// expected UX in one click.
const SAMPLE_QUESTIONS = [
  'What does deductible mean in my policy?',
  'How do I submit a car accident claim?',
  'Am I covered if my luggage is lost during travel?',
  'What is the difference between term and whole life insurance?',
];

const MessageList = ({
  messages,
  status,
  error,
  onRetry,
  onSuggestion,
}: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Keep the latest content visible during streaming.
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto rounded-lg border bg-muted/30 p-4">
        <EmptyState onSuggestion={onSuggestion} />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto rounded-lg border bg-muted/30 p-3 sm:p-4">
      <div className="space-y-4">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}

        {status === 'submitted' && <ThinkingBubble />}

        {error && (
          <div
            role="alert"
            className="flex items-center gap-3 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span className="flex-1">
              {error.message || 'Something went wrong.'}
            </span>
            <Button size="sm" variant="outline" onClick={onRetry}>
              <RotateCw className="mr-1 h-3 w-3" /> Retry
            </Button>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

// ---- subcomponents ----------------------------------------------------------

const MessageBubble = ({ message }: { message: ChatMessage }) => {
  const isUser = message.role === 'user';
  // UIMessage.parts is an array; we only render text parts here. Tool-call
  // parts (if added later) would be rendered by an extended switch.
  const text = message.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('');
  const sources = message.metadata?.sources ?? [];

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] rounded-lg px-4 py-2.5 text-sm sm:px-4 sm:py-3',
          isUser
            ? 'bg-primary text-primary-foreground'
            : 'border bg-background',
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{text}</p>
        ) : (
          <div className="space-y-3">
            <MarkdownContent>{text}</MarkdownContent>

            {sources.length > 0 && (
              <div className="space-y-1">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Sources
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sources.map((source) => (
                    <a
                      key={`${message.id}-${source.slug}`}
                      href={`/articles/${source.slug}`}
                      title={source.title}
                      className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] transition hover:bg-accent"
                    >
                      {source.slug}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ThinkingBubble = () => (
  <div className="flex justify-start">
    <div className="rounded-lg border bg-background px-4 py-3 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-2">
        <Sparkles className="h-4 w-4 animate-pulse" />
        Thinking…
      </span>
    </div>
  </div>
);

// Custom markdown renderer that doesn't depend on @tailwindcss/typography.
// Keeps the dep footprint small and styling local to chat bubbles.
const MarkdownContent = ({ children }: { children: string }) => (
  <div className="space-y-2 text-sm leading-relaxed">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <p>{children}</p>,
        ul: ({ children }) => (
          <ul className="my-1 list-disc space-y-1 pl-5">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="my-1 list-decimal space-y-1 pl-5">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-snug">{children}</li>,
        h1: ({ children }) => (
          <h1 className="mt-2 text-base font-semibold">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-2 text-base font-semibold">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-2 text-sm font-semibold">{children}</h3>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            {children}
          </a>
        ),
        code: ({ children, className }) => {
          const isBlock = (className ?? '').startsWith('language-');
          return isBlock ? (
            <code className={className}>{children}</code>
          ) : (
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="my-2 overflow-x-auto rounded-md bg-muted p-3 text-xs">
            {children}
          </pre>
        ),
        table: ({ children }) => (
          <div className="my-2 overflow-x-auto">
            <table className="w-full text-xs">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border-b px-2 py-1 text-left font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => <td className="border-b px-2 py-1">{children}</td>,
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);

const EmptyState = ({
  onSuggestion,
}: {
  onSuggestion: (text: string) => void;
}) => (
  <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
    <div className="space-y-2">
      <Sparkles className="mx-auto h-6 w-6 text-primary" />
      <h2 className="text-base font-semibold">
        Hi, I&apos;m your insurance assistant
      </h2>
      <p className="text-sm text-muted-foreground">
        Pick a starter question or type your own below.
      </p>
    </div>
    <ul className="flex w-full max-w-md flex-col gap-2">
      {SAMPLE_QUESTIONS.map((q) => (
        <li key={q}>
          <button
            type="button"
            onClick={() => onSuggestion(q)}
            className="w-full rounded-md border bg-background px-3 py-2 text-left text-sm transition hover:bg-accent hover:text-accent-foreground"
          >
            {q}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default MessageList;
