'use client';

import type { FormEvent, KeyboardEvent } from 'react';
import { Send, Square } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: (text: string) => void;
  /** When provided, the send button is replaced with a stop button. */
  onStop?: () => void;
  /** Disables submission (e.g. during the brief pre-stream window). */
  disabled?: boolean;
};

const MessageInput = ({
  value,
  onChange,
  onSend,
  onStop,
  disabled,
}: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (disabled || !value.trim()) return;
    onSend(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter sends; Shift+Enter inserts a newline (standard chat affordance).
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const showStop = !!onStop;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 rounded-lg border bg-background p-2 focus-within:ring-2 focus-within:ring-ring"
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about claims, coverage, billing, policies…"
        rows={1}
        className={cn(
          'flex-1 resize-none border-0 bg-transparent px-2 py-1.5 text-sm',
          'placeholder:text-muted-foreground focus:outline-none',
          'min-h-[2.25rem] max-h-32',
        )}
        aria-label="Message input"
      />

      {showStop ? (
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={onStop}
          aria-label="Stop generating"
        >
          <Square className="h-4 w-4" fill="currentColor" />
        </Button>
      ) : (
        <Button
          type="submit"
          size="icon"
          disabled={disabled || !value.trim()}
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      )}
    </form>
  );
};

export default MessageInput;
