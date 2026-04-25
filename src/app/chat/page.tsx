'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

import { Button } from '@/components/ui/button';
import MessageList from '@/components/chat/MessageList';
import MessageInput from '@/components/chat/MessageInput';

/**
 * /chat — full-screen chat with the insurance assistant.
 *
 * State strategy:
 *  - useChat from @ai-sdk/react manages messages, streaming, and errors.
 *  - The textarea value is owned here (not by useChat) so we can clear it
 *    on send and let MessageInput stay a fully-controlled component.
 *
 * Task 2 scope: streaming chat works against /api/chat (no RAG yet).
 * Task 3 will add retrieval grounding behind the same endpoint —
 * the UI does not need to change.
 */
const ChatPage = () => {
  const [input, setInput] = useState('');

  const { messages, sendMessage, status, error, regenerate, stop } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  const isBusy = status === 'submitted' || status === 'streaming';

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput('');
  };

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

export default ChatPage;
