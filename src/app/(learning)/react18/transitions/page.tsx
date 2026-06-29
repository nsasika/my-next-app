'use client';

import React, { useMemo, useState, useTransition } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import TheoryPanel from '@/components/learning/TheoryPanel';
import { learningContent } from '@/content/learning';

function makeItems(n: number) {
  // deterministic list
  return Array.from(
    { length: n },
    (_, i) => `Item ${String(i).padStart(5, '0')}`,
  );
}

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export default function TransitionDemo() {
  const [query, setQuery] = useState('');
  const [deferredQuery, setDeferredQuery] = useState(''); // we will update this via transition
  const [isPending, startTransition] = useTransition();

  const items = useMemo(() => makeItems(50000), []);

  const filtered = useMemo(() => {
    // intentionally heavy work to make the difference obvious
    const q = deferredQuery.toLowerCase();
    const out: string[] = [];
    for (let i = 0; i < items.length; i++) {
      const v = items[i];
      if (v.toLowerCase().includes(q)) out.push(v);
    }
    return out;
  }, [items, deferredQuery]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    // 1) urgent update: input text should never lag
    setQuery(value);

    // 2) non-urgent update: heavy filtering can be interrupted
    startTransition(() => {
      setDeferredQuery(value);
    });
  }

  return (
    <>
      <PageHeader {...learningContent.transitions.header} />

      <TheoryPanel {...learningContent.transitions.theory} />

      <ContentCard>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Search
          <input
            value={query}
            onChange={onChange}
            placeholder="Type something like 12, 999, Item 2..."
            className="w-full max-w-xl rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4">
            <b>Urgent input value:</b> {query}
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <b>Deferred (filtered) value:</b> {deferredQuery}
          </div>
        </div>

        {isPending ? (
          <div className="mt-4">
            <CircularIndeterminate />
          </div>
        ) : null}

        <p className="mt-5 text-sm text-slate-600">
          Results: <b>{filtered.length}</b> / {items.length}
        </p>

        <div className="mt-3 h-80 overflow-auto rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {filtered.slice(0, 200).map((x) => (
            <div key={x} className="rounded-md px-2 py-1 hover:bg-white">
              {x}
            </div>
          ))}
          {filtered.length > 200 && (
            <div className="mt-2 text-slate-500">
              Showing first 200 results...
            </div>
          )}
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          What to notice: <b>query</b> updates immediately, while{' '}
          <b>deferredQuery</b> (and results) may lag a bit when typing quickly.
          This is the transition at work.
        </p>
        <p className="mt-5 text-sm leading-6 text-slate-600">
          <b>
            What does <code>isPending</code> really mean?
          </b>
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>
            <code>const [isPending, startTransition] = useTransition();</code>
          </li>
          <li>
            <b>
              When <code>isPending === true</code>:
            </b>{' '}
            React is currently working on low-priority updates.
          </li>
          <li>
            <b>What it does NOT do:</b>
            <ul className="mt-1 list-disc pl-5">
              <li>It does NOT trigger concurrency.</li>
              <li>It does NOT slow down rendering.</li>
              <li>It does NOT block anything.</li>
            </ul>
          </li>
          <li>
            <b>What it is:</b> <code>isPending</code> is just a status flag that
            you can use to show:
            <ul className="mt-1 list-disc pl-5">
              <li>A spinner.</li>
              <li>An &quot;Updating...&quot; message.</li>
              <li>A skeleton UI.</li>
            </ul>
          </li>
        </ul>
      </ContentCard>
    </>
  );
}
