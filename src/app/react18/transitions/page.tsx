'use client';

import React, { useMemo, useState, useTransition } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
    <div style={{ padding: 16, fontFamily: 'system-ui' }}>
      <h1>React 18: startTransition / useTransition</h1>

      <p style={{ opacity: 0.8 }}>
        Type fast. The input should stay responsive while the list updates
        slightly later.
      </p>

      <label style={{ display: 'block', marginTop: 12 }}>
        Search:
        <input
          value={query}
          onChange={onChange}
          placeholder="Type something like 12, 999, Item 2..."
          style={{
            display: 'block',
            marginTop: 8,
            padding: 8,
            width: 360,
            maxWidth: '100%',
          }}
        />
      </label>

      <div style={{ marginTop: 12 }}>
        <span style={{ marginRight: 12 }}>
          <b>Urgent input value:</b> {query}
        </span>
        <span>
          <b>Deferred (filtered) value:</b> {deferredQuery}
        </span>
      </div>

      {isPending && <CircularIndeterminate />}

      <p style={{ marginTop: 12 }}>
        Results: <b>{filtered.length}</b> / {items.length}
      </p>

      <div
        style={{
          marginTop: 8,
          border: '1px solid #ddd',
          borderRadius: 8,
          height: 320,
          overflow: 'auto',
          padding: 8,
        }}
      >
        {filtered.slice(0, 200).map((x) => (
          <div key={x}>{x}</div>
        ))}
        {filtered.length > 200 && (
          <div style={{ opacity: 0.7, marginTop: 8 }}>
            Showing first 200 results…
          </div>
        )}
      </div>

      <p style={{ marginTop: 12, opacity: 0.75 }}>
        What to notice: <b>query</b> updates immediately, while{' '}
        <b>deferredQuery</b> (and results) may lag a bit when typing
        quickly—this is the transition at work.
      </p>
      <p style={{ marginTop: 12, opacity: 0.75 }}>
  <b>What does <code>isPending</code> really mean?</b>
</p>
<ul style={{ marginTop: 8, opacity: 0.75, paddingLeft: 20 }}>
  <li>
    <code>const [isPending, startTransition] = useTransition();</code>
  </li>
  <li>
    <b>When <code>isPending === true</code>:</b> React is currently working on low-priority updates.
  </li>
  <li>
    <b>What it does NOT do:</b>
    <ul style={{ marginTop: 4, paddingLeft: 20 }}>
      <li>It does NOT trigger concurrency.</li>
      <li>It does NOT slow down rendering.</li>
      <li>It does NOT block anything.</li>
    </ul>
  </li>
  <li>
    <b>What it is:</b> <code>isPending</code> is just a status flag that you can use to show:
    <ul style={{ marginTop: 4, paddingLeft: 20 }}>
      <li>A spinner.</li>
      <li>An "Updating..." message.</li>
      <li>A skeleton UI.</li>
    </ul>
  </li>
</ul>
    </div>
  );
}
