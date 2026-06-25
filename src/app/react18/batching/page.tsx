'use client';

import { useState } from 'react';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

const AutoBatchingDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [msg, setMsg] = useState<string>('Hello World!');

  console.log('Automatic batching component rendered');

  const runWithoutAsync = () => {
    // React has always batched updates inside React event handlers.
    setCount((c) => c + 1);
    setText('Sync update');
    setMsg('Updated synchronously!');
  };

  const runWithAsync = () => {
    // React 18 batches these too (async boundary).
    setTimeout(() => {
      setCount((c) => c + 1);
      setText('Async update');
      setMsg('Updated after timeout!');
    }, 300);
  };

  const runReset = () => {
    setCount(0);
    setText('');
    setMsg('Hello World!');
  };

  return (
    <>
      <PageHeader
        description="React batches multiple state updates into fewer renders, including async boundaries in modern React."
        eyebrow="React 18"
        tags={['React', 'Client Component', 'Batching']}
        title="Automatic Batching"
      />

      <ContentCard className="max-w-3xl">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ['Count', count],
            ['Text', text || 'Empty'],
            ['Message', msg],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <AppButton onClick={runWithoutAsync} variant="secondary">
            Update sync
          </AppButton>
          <AppButton onClick={runWithAsync} variant="secondary">
            Update async setTimeout
          </AppButton>
          <AppButton onClick={runReset} variant="ghost">
            Reset
          </AppButton>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          Tip: open DevTools and watch the render log. Each action triggers
          three state updates, but React can batch them into a single render.
        </p>
      </ContentCard>
    </>
  );
};
export default AutoBatchingDemo;
