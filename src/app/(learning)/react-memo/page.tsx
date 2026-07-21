'use client';

import { memo, useState } from 'react';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';

const content = {
  header: {
    description:
      'React.memo skips child re-renders when props are unchanged. It is useful for expensive child components in frequently updating parents.',
    eyebrow: 'React Performance',
    tags: ['React', 'React.memo', 'Profiling'],
    title: 'React.memo Demo',
  },
  theory: {
    title: 'When React.memo helps',
    summary:
      'React normally re-renders children when a parent re-renders. React.memo lets a child reuse its last output when its props are the same.',
    points: [
      'Use React.memo for components that render often and have stable props.',
      'Pair it with useCallback or useMemo when function/object props break memoization.',
      'Measure with React DevTools Profiler before and after applying it.',
    ],
    code: `const CustomerCard = memo(function CustomerCard({ name }) {
  return <article>{name}</article>;
});`,
    whatToTry: [
      'Click Parent Counter and watch the memoized child stay logically unchanged.',
      'Change the customer name and notice the memoized child must render again.',
    ],
  },
} as const;

const CustomerCard = memo(function CustomerCard({ name }: { name: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        Memoized customer
      </p>
      <p className="mt-2 text-xl font-black text-slate-950">{name}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        This card is wrapped with React.memo.
      </p>
    </div>
  );
});

export default function ReactMemoPage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Nalin');

  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/react-memo/page.tsx"
      header={content.header}
      theory={content.theory}
    >
      <ContentCard className="max-w-3xl">
        <div className="rounded-lg bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Parent render trigger
          </p>
          <p className="mt-2 text-4xl font-black text-slate-950">{count}</p>
        </div>

        <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
          Customer name prop
          <input
            className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>

        <div className="mt-5 flex flex-wrap gap-3">
          <AppButton onClick={() => setCount((value) => value + 1)}>
            Parent Counter
          </AppButton>
        </div>

        <div className="mt-5">
          <CustomerCard name={name} />
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
}
