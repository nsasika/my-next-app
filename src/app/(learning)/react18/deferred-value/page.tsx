'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import ContentCard from '@/components/ui/ContentCard';

const products = Array.from({ length: 12000 }, (_, index) => {
  const departments = ['Banking', 'Insurance', 'Loans', 'Cards', 'Payments'];
  return `${departments[index % departments.length]} product ${String(
    index + 1,
  ).padStart(5, '0')}`;
});

const content = {
  header: {
    description:
      'React 18 useDeferredValue lets urgent typing update now while expensive derived UI catches up shortly after.',
    eyebrow: 'React 18',
    tags: ['React', 'useDeferredValue', 'Performance'],
    title: 'useDeferredValue',
  },
  theory: {
    title: 'When deferred values help',
    summary:
      'useDeferredValue returns a lagging version of a value. The input state stays urgent, while heavy filtering can render with the deferred value when React has room.',
    points: [
      'Keep the controlled input bound to immediate state so typing stays responsive.',
      'Use the deferred value for expensive results such as search lists, charts, and previews.',
      'It is not debouncing: React still renders the latest value, but it can prioritize visible input first.',
    ],
    code: `const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query);

const results = useMemo(() => {
  return products.filter((product) =>
    product.toLowerCase().includes(deferredQuery.toLowerCase()),
  );
}, [deferredQuery]);`,
    whatToTry: [
      'Type banking, card, or payment quickly.',
      'Compare the immediate query with the deferred query and result count.',
    ],
  },
} as const;

export default function DeferredValuePage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  const results = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase();
    return products.filter((product) =>
      product.toLowerCase().includes(normalized),
    );
  }, [deferredQuery]);

  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/react18/deferred-value/page.tsx"
      header={content.header}
      theory={content.theory}
    >
      <ContentCard className="max-w-4xl">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Search products
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try banking, card, loan..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ['Immediate query', query || 'Empty'],
            ['Deferred query', deferredQuery || 'Empty'],
            ['Results', results.length.toLocaleString()],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold text-slate-600">
          {isStale
            ? 'Results are catching up to your latest typing.'
            : 'Results are in sync with the input.'}
        </p>

        <div
          className={`mt-4 h-72 overflow-auto rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm transition ${
            isStale ? 'opacity-55' : 'opacity-100'
          }`}
        >
          {results.slice(0, 120).map((product) => (
            <div key={product} className="rounded-md px-2 py-1 text-slate-700">
              {product}
            </div>
          ))}
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
}
