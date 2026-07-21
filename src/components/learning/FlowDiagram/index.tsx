import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContentCard from '@/components/ui/ContentCard';

export type FlowDiagramStep = {
  description: string;
  label: string;
};

type FlowDiagramProps = {
  steps: readonly FlowDiagramStep[];
  title: string;
};

export default function FlowDiagram({ steps, title }: FlowDiagramProps) {
  return (
    <ContentCard className="mb-6">
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      <ol className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.label} className="min-w-0">
            <div className="flex h-full min-w-0 items-stretch gap-3">
              <div className="flex min-w-0 flex-1 flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-black text-slate-950">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="hidden items-center text-sky-700 xl:flex"
                >
                  <ArrowForwardIcon fontSize="small" />
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </ContentCard>
  );
}
