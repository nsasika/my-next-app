'use client';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '@/lib/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useState } from 'react';

const CounterSlicePage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const [amount, setAmount] = useState<number>(0);

  const handleOnClick = () => {
    if (amount === 0) return;
    dispatch(incrementByAmount(amount));
  };

  return (
    <LearningExamplePage
      codeFilePath="src/lib/features/counter/counterSlice.ts"
      header={learningContent.counterSlice.header}
      theory={learningContent.counterSlice.theory}
    >
      <ContentCard className="max-w-3xl">
        <div className="rounded-lg bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Current count
          </p>
          <p className="mt-2 text-5xl font-black text-slate-950">{count}</p>
        </div>

        <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Type a number"
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <div className="mt-5 flex flex-wrap gap-2">
          <AppButton onClick={() => dispatch(increment())}>
            Increment by 1
          </AppButton>
          <AppButton onClick={() => dispatch(decrement())} variant="secondary">
            Decrement by 1
          </AppButton>
          <AppButton onClick={handleOnClick} variant="secondary">
            Increment By Amount
          </AppButton>
          <AppButton onClick={() => dispatch(reset())} variant="ghost">
            Reset
          </AppButton>
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
};

export default CounterSlicePage;
