'use client';

import { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, BookOpen, Trash2 } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

import { Button } from '@/components/ui/button';
import MessageList from '@/components/chat/MessageList';
import MessageInput from '@/components/chat/MessageInput';
import type { ChatMessage } from '@/lib/chat/types';

const STORAGE_KEY = 'insurance-chat-history';

const loadHistory = (): ChatMessage[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ChatMessage[];
    // Validate shape before trusting saved data
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (m) => m && typeof m.id === 'string' && typeof m.role === 'string' && Array.isArray(m.parts),
    );
  } catch {
    return [];
  }
};

const saveHistory = (messages: ChatMessage[]) => {
  // Only persist the fields that round-trip cleanly through JSON
  const slim = messages.map((m) => ({
    id: m.id,
    role: m.role,
    parts: m.parts,
    metadata: m.metadata ?? null,
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slim));
};

const ChatInner = () => {
  const searchParams = useSearchParams();
  const prefill = searchParams.get('q') ?? '';
  const [input, setInput] = useState('');
  const prefillSentRef = useRef(false);

  // Memoize transport so useChat doesn't reset on every re-render
  const transport = useMemo(() => new DefaultChatTransport({ api: '/api/chat' }), []);

  const { messages, setMessages, sendMessage, status, error, regenerate, stop } =
    useChat<ChatMessage>({ transport });

  const isBusy = status === 'submitted' || status === 'streaming';

  // Restore history only when NOT coming from a prefill link.
  // Prefill links (from articles or home page popular questions) always start fresh —
  // restoring old history AND sending a new message causes the duplicate-message bug.
  useEffect(() => {
    if (prefill) return;
    const saved = loadHistory();
    if (saved.length > 0) setMessages(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist on every message change
  useEffect(() => {
    if (messages.length > 0) saveHistory(messages as ChatMessage[]);
  }, [messages]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput('');
  };

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  // Auto-send the prefilled question exactly once.
  // Using a ref instead of state so the guard never triggers a re-render.
  useEffect(() => {
    if (!prefill || prefillSentRef.current) return;
    prefillSentRef.current = true;
    handleSend(prefill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mx-auto flex h-[100dvh] max-w-3xl flex-col gap-3 px-4 py-3 sm:py-6">
      <header className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon" aria-label="Back to home">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-base font-semibold sm:text-lg">Insurance Assistant</h1>
          <p className="text-xs text-muted-foreground">
            Ask anything about claims, coverage, billing, and more.
          </p>
        </div>
        {messages.length > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            aria-label="Clear chat history"
            title="Clear chat"
          >
            <Trash2 className="h-4 w-4 text-muted-foreground" />
          </Button>
        )}
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
