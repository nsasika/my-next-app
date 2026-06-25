'use client';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import useCounter from '../../hooks/useCounter';

export default function CustomHooks() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <PageHeader
        description="Extract reusable stateful behavior into custom hooks while keeping UI components focused."
        eyebrow="Hooks"
        tags={['React', 'Client Component', 'Custom Hook']}
        title="Custom Hooks"
      />

      <ContentCard className="max-w-2xl">
        <p className="text-sm leading-6 text-slate-600">
          This page demonstrates a reusable counter hook.
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
    </>
  );
}
