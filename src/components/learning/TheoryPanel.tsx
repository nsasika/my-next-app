import CodeBlock from '@/components/ui/CodeBlock';
import ContentCard from '@/components/ui/ContentCard';
import { LEARNING_UI, type LearningUiCopy } from '@/i18n/learning/ui';

type TheoryPanelProps = {
  code?: string;
  points: readonly string[];
  summary: string;
  title: string;
  whatToTry?: readonly string[];
  labels?: LearningUiCopy;
};

export default function TheoryPanel({
  code,
  points,
  summary,
  title,
  whatToTry = [],
  labels = LEARNING_UI['en-US'],
}: TheoryPanelProps) {
  return (
    <ContentCard className="mb-6">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            {labels.theoryFirst}
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 space-y-4">
          {code ? <CodeBlock code={code} language="mental model" /> : null}
          {whatToTry.length > 0 ? (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-slate-950">
                {labels.tryThis}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                {whatToTry.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </ContentCard>
  );
}
