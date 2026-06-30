'use client';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';
import useCounter from '@/hooks/useCounter';

export default function CustomHooks() {
  const { count, increment, decrement } = useCounter();
  return (
    <LearningExamplePage
      codeFilePath="src/hooks/useCounter.ts"
      header={learningContent.customHooks.header}
      theory={learningContent.customHooks.theory}
    >
      <ContentCard className="max-w-2xl">
        <p className="text-sm leading-6 text-slate-600">
          {learningContent.customHooks.demoDescription}
        </p>
        <div className="mt-5 rounded-lg bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Counter
          </p>
          <p className="mt-2 text-4xl font-black text-slate-950">{count}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <AppButton onClick={increment}>Increment</AppButton>
          <AppButton onClick={decrement} variant="secondary">
            Decrement
          </AppButton>
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
}
