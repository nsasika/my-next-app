'use client';

import { useMemo, useState } from 'react';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import ReduxBanner from '@/components/learning/ReduxBanner';
import TheoryPanel from '@/components/learning/TheoryPanel';
import { learningContent } from '@/content/learning';
import { showBanner } from '@/lib/features/ui/uiSlice';
import { useAppDispatch } from '@/lib/hooks';

export default function UseMemoTest() {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Non-memoized calculation
  const nonMemoizedCalculation = () => {
    console.log('Non-memoized calculation...');
    return count * 2;
  };

  // Memoized calculation
  const memoizedCalculation = useMemo(() => {
    console.log('Memoized calculation...');
    return count * 2;
  }, [count]);

  return (
    <>
      <PageHeader {...learningContent.useMemo.header} />

      <TheoryPanel {...learningContent.useMemo.theory} />

      <ContentCard className="max-w-3xl">
        <div className="mb-5">
          <ReduxBanner />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Count', count],
            ['Other Count', otherCount],
            ['Non-memoized result', nonMemoizedCalculation()],
            ['Memoized result', memoizedCalculation],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <AppButton onClick={() => setCount(count + 1)}>
            Increment Count
          </AppButton>
          <AppButton
            onClick={() => {
              setOtherCount(otherCount + 1);
              dispatch(showBanner(learningContent.useMemo.banner));
            }}
            variant="secondary"
          >
            Increment Other Count
          </AppButton>
        </div>
      </ContentCard>
    </>
  );
}
