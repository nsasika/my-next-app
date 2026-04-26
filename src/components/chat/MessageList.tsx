'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AlertCircle, RotateCw, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ChatMessage, ChatMessageMetadata } from '@/lib/chat/types';

type Status = 'submitted' | 'streaming' | 'ready' | 'error';

type Props = {
  messages: ChatMessage[];
  status: Status;
  error: Error | undefined;
  onRetry: () => void;
  onSuggestion: (text: string) => void;
};

const SAMPLE_QUESTIONS = [
  'What does deductible mean in my policy?',
  'How do I submit a car accident claim?',
  'Am I covered if my luggage is lost during travel?',
  'What is the difference between term and whole life insurance?',
];

const CATEGORY_FOLLOWUPS: Record<string, string[]> = {
  claims: [
    'How long does it take to process a claim?',
    'What documents do I need to file a claim?',
    'How do I track my claim status?',
    'What happens if my claim is denied?',
  ],
  coverage: [
    'What is a deductible?',
    'How do coverage limits work?',
    'What is the difference between comprehensive and collision coverage?',
    'What is liability coverage?',
  ],
  billing: [
    'How do I set up autopay?',
    'What happens if I miss a payment?',
    'How do I update my payment method?',
  ],
  health: [
    'What is the difference between HMO and PPO?',
    'What preventive care is covered at no cost?',
    'How do in-network and out-of-network providers differ?',
  ],
  auto: [
    'Does my auto policy cover rental cars?',
    'How does adding a teen driver affect my premium?',
    'What does roadside assistance cover?',
  ],
  travel: [
    'When does trip cancellation insurance pay out?',
    'What happens if my luggage is delayed rather than lost?',
  ],
  life: [
    'How do I name or update a beneficiary?',
    'What is the difference between term and whole life insurance?',
  ],
  home: [
    'Is flood damage covered under my homeowners policy?',
    'How does personal property coverage work?',
  ],
};

const getFollowUps = (category: string): string[] =>
  (CATEGORY_FOLLOWUPS[category] ?? []).slice(0, 3);

const MessageList = ({ messages, status, error, onRetry, onSuggestion }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  const lastAssistantIdx = [...messages]
    .map((m, i) => ({ m, i }))
    .filter(({ m }) => m.role === 'assistant')
    .at(-1)?.i ?? -1;

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
        {messages.map((m, i) => (
          <div key={m.id}>
            <MessageBubble message={m} />
            {/* Follow-up chips only after the last completed assistant message */}
            {m.role === 'assistant' &&
              i === lastAssistantIdx &&
              status === 'ready' && (
                <FollowUpChips
                  sources={m.metadata?.sources ?? []}
                  onSuggestion={onSuggestion}
                />
              )}
          </div>
        ))}

        {status === 'submitted' && <ThinkingBubble />}

        {error && (
          isQuotaExhaustedError(error) ? (
            <QuotaExhaustedBanner />
          ) : isRateLimitError(error) ? (
            <RateLimitBanner error={error} onRetry={onRetry} />
          ) : (
            <div
              role="alert"
              className="flex items-center gap-3 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span className="flex-1">{error.message || 'Something went wrong.'}</span>
              <Button size="sm" variant="outline" onClick={onRetry}>
                <RotateCw className="mr-1 h-3 w-3" /> Retry
              </Button>
            </div>
          )
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

// ---- error helpers ----------------------------------------------------------

const isQuotaExhaustedError = (err: Error) => {
  const msg = err.message.toLowerCase();
  return msg.includes('limit: 0') || msg.includes('quota exceeded') || msg.includes('exceeded your current quota');
};

const isRateLimitError = (err: Error) => {
  const msg = err.message.toLowerCase();
  return msg.includes('429') || msg.includes('rate') || (msg.includes('quota') && !isQuotaExhaustedError(err));
};

const parseRetrySeconds = (err: Error): number => {
  const match = err.message.match(/retry in ([\d.]+)s/i);
  return match ? Math.ceil(parseFloat(match[1])) : 35;
};

const QuotaExhaustedBanner = () => (
  <div
    role="alert"
    className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm"
  >
    <div className="flex items-start gap-3">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
      <div className="space-y-1">
        <p className="font-semibold text-destructive">Daily AI quota reached</p>
        <p className="text-muted-foreground leading-snug">
          The free-tier request limit for today has been exhausted. The quota resets at midnight
          Pacific Time. In the meantime you can still{' '}
          <Link href="/topics" className="underline underline-offset-2 hover:text-foreground">
            browse help articles
          </Link>{' '}
          or{' '}
          <Link href="/search" className="underline underline-offset-2 hover:text-foreground">
            search topics
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
);

const RateLimitBanner = ({ error, onRetry }: { error: Error; onRetry: () => void }) => {
  const total = parseRetrySeconds(error);
  const [seconds, setSeconds] = useState(total);

  useEffect(() => {
    if (seconds <= 0) { onRetry(); return; }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, onRetry]);

  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-300"
    >
      <AlertCircle className="h-4 w-4 shrink-0" />
      <span className="flex-1">
        Too many requests — auto-retrying in <strong>{seconds}s</strong>…
      </span>
      <Button size="sm" variant="outline" onClick={onRetry}>
        Retry now
      </Button>
    </div>
  );
};

// ---- subcomponents ----------------------------------------------------------

const MessageBubble = ({ message }: { message: ChatMessage }) => {
  const isUser = message.role === 'user';
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
          isUser ? 'bg-primary text-primary-foreground' : 'border bg-background',
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
                    <Link
                      key={`${message.id}-${source.slug}`}
                      href={`/articles/${source.slug}`}
                      title={source.title}
                      className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] transition hover:bg-accent"
                    >
                      {source.slug}
                    </Link>
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

const FollowUpChips = ({
  sources,
  onSuggestion,
}: {
  sources: ChatMessageMetadata['sources'];
  onSuggestion: (text: string) => void;
}) => {
  const category = sources?.[0]?.category ?? '';
  const suggestions = getFollowUps(category);
  if (!suggestions.length) return null;

  return (
    <div className="mt-2 pl-1">
      <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        Follow-up questions
      </p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => onSuggestion(q)}
            className="rounded-full border bg-background px-3 py-1 text-xs transition hover:border-primary/60 hover:bg-accent"
          >
            {q}
          </button>
        ))}
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
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
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
          <th className="border-b px-2 py-1 text-left font-semibold">{children}</th>
        ),
        td: ({ children }) => (
          <td className="border-b px-2 py-1">{children}</td>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);

const EmptyState = ({ onSuggestion }: { onSuggestion: (text: string) => void }) => (
  <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
    <div className="space-y-2">
      <Sparkles className="mx-auto h-6 w-6 text-primary" />
      <h2 className="text-base font-semibold">Hi, I&apos;m your insurance assistant</h2>
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
