'use client';
import UserCard from '@/components/UserCard';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import React, { useState } from 'react';

const PerformancePage: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log('PerformancePage rendered');
  return (
    <>
      <PageHeader
        description="Practice rerenders, memoization, API debounce, and large-list reasoning with small focused examples."
        eyebrow="Performance"
        tags={['React', 'Client Component', 'Memoization']}
        title="React Performance Practice"
      />

      <ContentCard className="max-w-2xl">
        <div className="rounded-lg bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Render trigger count
          </p>
          <p className="mt-2 text-4xl font-black text-slate-950">{count}</p>
        </div>
        <div className="mt-5">
          <AppButton onClick={() => setCount(count + 1)}>
            Increment Count
          </AppButton>
        </div>
        <UserCard name="John Doe" />
      </ContentCard>
    </>
  );
};

export default PerformancePage;
