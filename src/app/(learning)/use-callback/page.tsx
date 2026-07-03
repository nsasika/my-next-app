'use client';

import { memo, useCallback, useState } from 'react';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';

const content = {
  header: {
    description:
      'useCallback keeps a function reference stable so memoized child components do not re-render for unrelated parent state.',
    eyebrow: 'React Hooks',
    tags: ['React', 'useCallback', 'Memoization'],
    title: 'useCallback Demo',
  },
  theory: {
    title: 'Rules of Hooks and useCallback',
    summary:
      'Hooks must be called at the top level of a React function component or custom hook. useCallback is useful when function identity matters, usually with React.memo children or hook dependency arrays.',
    points: [
      'Do not call hooks inside loops, conditions, nested functions, or event handlers.',
      'Keep dependency arrays accurate so callbacks always see the values they need.',
      'Use useCallback for measurable render stability, not for every small function by default.',
    ],
    code: `const onSave = useCallback(() => {
  saveCustomer(customerId);
}, [customerId]);`,
    whatToTry: [
      'Click Parent Counter and compare the callback identity status.',
      'Toggle useCallback and notice when the memoized child receives a new function.',
    ],
  },
} as const;

const SaveButton = memo(function SaveButton({
  onSave,
  renderLabel,
}: {
  onSave: () => void;
  renderLabel: string;
}) {
  return (
    <button
      className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:border-sky-300 hover:bg-sky-50"
      onClick={onSave}
      type="button"
    >
      Save customer ({renderLabel})
    </button>
  );
});

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [saved, setSaved] = useState(0);
  const [enabled, setEnabled] = useState(true);

  const stableSave = useCallback(() => {
    setSaved((value) => value + 1);
  }, []);

  const inlineSave = () => {
    setSaved((value) => value + 1);
  };

  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/use-callback/page.tsx"
      header={content.header}
      theory={content.theory}
    >
      <ContentCard className="max-w-3xl">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Parent counter
            </p>
            <p className="mt-2 text-4xl font-black text-slate-950">{count}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Saves
            </p>
            <p className="mt-2 text-4xl font-black text-slate-950">{saved}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <AppButton onClick={() => setCount((value) => value + 1)}>
            Parent Counter
          </AppButton>
          <AppButton
            onClick={() => setEnabled((current) => !current)}
            variant="secondary"
          >
            useCallback {enabled ? 'ON' : 'OFF'}
          </AppButton>
          <SaveButton
            onSave={enabled ? stableSave : inlineSave}
            renderLabel={enabled ? 'stable' : 'new function'}
          />
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          When useCallback is on, the child receives the same function reference
          during unrelated parent renders. When it is off, the inline function
          is recreated on every render.
        </p>
      </ContentCard>
    </LearningExamplePage>
  );
}
