'use client';

import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import TheoryPanel from '@/components/learning/TheoryPanel';
import { learningContent } from '@/content/learning';
import { useZustandCounterStore } from '@/lib/zustand/useZustandCounterStore';

export default function ZustandPage() {
  const count = useZustandCounterStore((state) => state.count);
  const increment = useZustandCounterStore((state) => state.increment);
  const decrement = useZustandCounterStore((state) => state.decrement);
  const reset = useZustandCounterStore((state) => state.reset);

  return (
    <>
      <PageHeader {...learningContent.zustand.header} />

      <TheoryPanel {...learningContent.zustand.theory} />

      <ContentCard className="max-w-2xl">
        <div className="rounded-lg bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Zustand count
          </p>
          <p className="mt-2 text-5xl font-black text-slate-950">{count}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {learningContent.zustand.counterDescription}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <AppButton onClick={increment}>Increment</AppButton>
          <AppButton onClick={decrement} variant="secondary">
            Decrement
          </AppButton>
          <AppButton onClick={reset} variant="ghost">
            Reset
          </AppButton>
        </div>
      </ContentCard>
    </>
  );
}
