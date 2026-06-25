'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

export default function UseMemoTest() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const bannerTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (bannerTimeoutRef.current) {
        clearTimeout(bannerTimeoutRef.current);
      }
    };
  }, []);

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

  // Function to show the banner
  const triggerBanner = () => {
    if (bannerTimeoutRef.current) {
      clearTimeout(bannerTimeoutRef.current); // Clear any existing timeout
    }
    setShowBanner(true);
    bannerTimeoutRef.current = setTimeout(() => {
      setShowBanner(false);
    }, 1000); // Hide banner after 1 second
  };

  return (
    <>
      {showBanner && (
        <div className="fixed left-0 top-0 z-50 w-full bg-rose-600 py-2 text-center text-sm font-bold text-white">
          Unnecessary Render Triggered!
        </div>
      )}

      <PageHeader
        description="Compare a normal calculation with a memoized calculation when state changes."
        eyebrow="Hooks"
        tags={['React', 'Client Component', 'useMemo']}
        title="useMemo Hook Test"
      />

      <ContentCard className="max-w-3xl">
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
              triggerBanner();
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
