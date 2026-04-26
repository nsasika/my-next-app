'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

import { Button } from '@/components/ui/button';
import MessageList from '@/components/chat/MessageList';
import MessageInput from '@/components/chat/MessageInput';
import type { ChatMessage } from '@/lib/chat/types';

const ChatInner = () => {
  const searchParams = useSearchParams();
  const prefill = searchParams.get('q') ?? '';
  const [input, setInput] = useState(prefill);
  const [prefillSent, setPrefillSent] = useState(false);

  const { messages, sendMessage, status, error, regenerate, stop } =
    useChat<ChatMessage>({
      transport: new DefaultChatTransport({ api: '/api/chat' }),
    });

  const isBusy = status === 'submitted' || status === 'streaming';

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput('');
  };

  // Auto-send prefilled question from article pages / home links
  useEffect(() => {
    if (prefill && !prefillSent && messages.length === 0) {
      setPrefillSent(true);
      handleSend(prefill);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill, prefillSent]);

  return (
    <main className="mx-auto flex h-[100dvh] max-w-3xl flex-col gap-3 px-4 py-3 sm:py-6">
      <header className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon" aria-label="Back to home">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-base font-semibold sm:text-lg">
            Insurance Assistant
          </h1>
          <p className="text-xs text-muted-foreground">
            Ask anything about claims, coverage, billing, and more.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/topics">
            <BookOpen className="mr-1.5 h-3.5 w-3.5" />
            Browse topics
          </Link>
        </Button>
      </header>

      <MessageList
        messages={messages}
        status={status}
        error={error}
        onRetry={regenerate}
        onSuggestion={handleSend}
      />

      <MessageInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
        disabled={status === 'submitted'}
        onStop={isBusy ? stop : undefined}
      />
    </main>
  );
};

const ChatPage = () => (
  <Suspense>
    <ChatInner />
  </Suspense>
);

export default ChatPage;
