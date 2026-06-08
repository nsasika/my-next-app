import type { ReactNode } from 'react';

export type StepListItem = {
  body: string;
  icon: ReactNode;
  title: string;
};

type StepListProps = {
  steps: readonly StepListItem[];
};

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-4">
      {steps.map((item, index) => (
        <div
          key={item.title}
          className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
            {item.icon}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Step {index + 1}
            </p>
            <h3 className="mt-1 font-bold text-slate-950">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
