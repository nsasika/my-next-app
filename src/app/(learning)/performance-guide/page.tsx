import SpeedIcon from '@mui/icons-material/Speed';
import TimelineIcon from '@mui/icons-material/Timeline';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

const steps = [
  {
    body: 'Open Chrome DevTools, go to Performance, record the slow interaction, stop recording, then inspect long tasks, scripting time, rendering time, and layout shifts.',
    title: '1. Record in the Performance tab',
  },
  {
    body: 'Open React DevTools Profiler, record the same interaction, then check which components rendered and why. Look for expensive commits and repeated child renders.',
    title: '2. Profile React commits',
  },
  {
    body: 'Apply the smallest fix: split state, move derived work to useMemo, stabilize handlers with useCallback, wrap expensive children with React.memo, debounce network requests, or virtualize long lists.',
    title: '3. Optimize one bottleneck',
  },
  {
    body: 'Record again and compare before/after. Keep the change only if the measured interaction is faster or the render count is meaningfully lower.',
    title: '4. Re-test before shipping',
  },
] as const;

const tools = [
  {
    icon: SpeedIcon,
    label: 'Performance tab',
    text: 'Best for CPU cost, layout, long tasks, network timing, and browser-level issues.',
  },
  {
    icon: TimelineIcon,
    label: 'React Profiler',
    text: 'Best for component render counts, commit time, and prop/state-driven re-renders.',
  },
  {
    icon: TroubleshootIcon,
    label: 'Production signals',
    text: 'Use Web Vitals, slow API logs, user reports, and error monitoring to choose what matters.',
  },
] as const;

export default function PerformanceGuidePage() {
  return (
    <>
      <PageHeader
        description="Before using hooks such as useMemo, useCallback, and React.memo, identify the real bottleneck and prove the fix with profiling."
        eyebrow="React Performance"
        tags={['Performance tab', 'React Profiler', 'Web Vitals']}
        title="Why and How to Test Performance"
      />

      <section className="grid gap-4 md:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <ContentCard key={tool.label}>
              <div className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
                <Icon fontSize="small" />
              </div>
              <h2 className="mt-4 text-lg font-black text-slate-950">
                {tool.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {tool.text}
              </p>
            </ContentCard>
          );
        })}
      </section>

      <section className="mt-6">
        <ContentCard>
          <h2 className="text-xl font-black text-slate-950">
            Step-by-step example workflow
          </h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {steps.map((step) => (
              <li key={step.title} className="rounded-lg bg-slate-50 p-4">
                <h3 className="font-black text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </ContentCard>
      </section>
    </>
  );
}
