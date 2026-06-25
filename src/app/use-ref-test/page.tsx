'use client';

import { useRef, useState, useEffect } from 'react';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

export default function UseRefTest() {
  const inputRef = useRef<HTMLInputElement>(null); // Ref for accessing the DOM element
  const renderCount = useRef(0); // Ref for storing a mutable value
  const [text, setText] = useState('');
  const [visibleRenderCount, setVisibleRenderCount] = useState(0);

  // Function to focus the input field
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field
    }
  };

  // Increment render count after the component renders
  useEffect(() => {
    renderCount.current += 1;
    setVisibleRenderCount(renderCount.current);
  }, [text]);

  return (
    <>
      <PageHeader
        description="Use refs for mutable values and direct DOM access without making those values part of render state."
        eyebrow="Hooks"
        tags={['React', 'Client Component', 'useRef']}
        title="useRef Hook Example"
      />

      <ContentCard className="max-w-2xl">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Demo input
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            placeholder="Type something..."
          />
        </label>

        <div className="mt-4">
          <AppButton onClick={focusInput}>Focus Input</AppButton>
        </div>

        <p className="mt-5 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
          This component has rendered <strong>{visibleRenderCount}</strong>{' '}
          times.
        </p>
      </ContentCard>
    </>
  );
}
