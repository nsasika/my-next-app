'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CommitIcon from '@mui/icons-material/Commit';
import { useState } from 'react';
import { PublicPageShell } from '@/components/public/CompactPublicLayout';
import CompactPublicSlider from '@/components/public/CompactPublicSlider';
import {
  deploymentLanes,
  pipelineChecks,
  qualitySignals,
  technologyStack,
} from './content';
import type { AppCopy } from '@/i18n/app/types';

const flowIcons = [
  <BuildCircleIcon key="build" fontSize="small" />,
  <AutoAwesomeIcon key="ai" fontSize="small" />,
  <CommitIcon key="repo" fontSize="small" />,
  <CloudDoneIcon key="deploy" fontSize="small" />,
] as const;

export default function BuildLabClient({
  copy,
}: {
  copy: AppCopy['buildLab'];
}) {
  const [activeStep, setActiveStep] = useState(0);
  const activeFlow = copy.flow[activeStep];
  const translate = (value: string) => copy.labels[value] ?? value;
  const stackPanels = [
    ...technologyStack.map((stack) => ({
      body: `${translate(stack.category)} — ${copy.stackUsageBody}`,
      icon:
        stack.category === 'AI-assisted engineering'
          ? ('ai' as const)
          : stack.category === 'Delivery platform'
            ? ('cloud' as const)
            : stack.category === 'Backend layer'
              ? ('tools' as const)
              : ('code' as const),
      id: stack.category,
      items: stack.items.map(translate),
      label: translate(stack.category),
      tone:
        stack.category === 'Delivery platform'
          ? ('vercel' as const)
          : stack.category === 'AI-assisted engineering'
            ? ('purple' as const)
            : stack.category === 'Backend layer'
              ? ('emerald' as const)
              : ('typescript' as const),
      title: translate(stack.category),
    })),
    ...qualitySignals.map((signal) => ({
      body: translate(signal.status),
      icon:
        signal.icon === 'vercel'
          ? ('cloud' as const)
          : signal.icon === 'git'
            ? ('commit' as const)
            : signal.icon === 'coverage'
              ? ('check' as const)
              : signal.icon === 'eslint'
                ? ('rule' as const)
                : ('code' as const),
      id: signal.label,
      label: translate(signal.metric),
      metric: signal.metric,
      tone:
        signal.icon === 'vercel'
          ? ('vercel' as const)
          : signal.icon === 'git'
            ? ('github' as const)
            : signal.icon === 'coverage'
              ? ('emerald' as const)
              : signal.icon === 'eslint'
                ? ('purple' as const)
                : ('typescript' as const),
      title: translate(signal.label),
    })),
  ];
  const releasePanels = [
    ...pipelineChecks.map((check) => ({
      body: translate(check.detail),
      icon:
        check.icon === 'vercel'
          ? ('cloud' as const)
          : check.icon === 'git'
            ? ('commit' as const)
            : check.icon === 'coverage'
              ? ('check' as const)
              : check.icon === 'release'
                ? ('rocket' as const)
                : check.icon === 'eslint'
                  ? ('rule' as const)
                  : ('code' as const),
      id: check.title,
      label: translate(check.title),
      tone:
        check.icon === 'vercel'
          ? ('vercel' as const)
          : check.icon === 'git'
            ? ('github' as const)
            : check.icon === 'coverage'
              ? ('emerald' as const)
              : check.icon === 'release'
                ? ('red' as const)
                : check.icon === 'eslint'
                  ? ('purple' as const)
                  : ('typescript' as const),
      title: translate(check.title),
    })),
    ...deploymentLanes.map((lane) => ({
      body: translate(lane.detail),
      icon:
        lane.name === 'Production' ? ('rocket' as const) : ('cloud' as const),
      id: lane.name,
      label: translate(lane.name),
      metric: translate(lane.branch),
      tone: lane.name === 'Production' ? ('red' as const) : ('vercel' as const),
      title: translate(lane.branch),
    })),
  ];

  return (
    <PublicPageShell>
      <section className="mb-5 grid min-w-0 gap-3 border-b border-slate-200 pb-5 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] lg:items-end">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
            {copy.eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight text-slate-950">
            {copy.heading}
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-600 lg:justify-self-end">
          {copy.heroBody}
        </p>
      </section>

      <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                {copy.deliveryModelLabel}
              </p>
              <h2 className="mt-1 text-lg font-black text-slate-950">
                {activeFlow.title}
              </h2>
            </div>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
              {flowIcons[activeStep]}
            </span>
          </div>
          <div className="mt-3 grid gap-2">
            {copy.flow.map((item, index) => {
              const active = activeStep === index;

              return (
                <button
                  key={item.title}
                  aria-pressed={active}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left transition ${
                    active
                      ? 'bg-sky-50 text-sky-950'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                  onClick={() => setActiveStep(index)}
                  type="button"
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-md ${
                      active ? 'bg-sky-700 text-white' : 'bg-slate-100'
                    }`}
                  >
                    {flowIcons[index]}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black">
                      {item.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
            {activeFlow.body}
          </p>
        </section>

        <CompactPublicSlider
          eyebrow={copy.stackEyebrow}
          panels={stackPanels}
          title={copy.stackTitle}
        />
        <CompactPublicSlider
          eyebrow={copy.releaseEyebrow}
          panels={releasePanels}
          title={copy.releaseTitle}
        />
      </div>
    </PublicPageShell>
  );
}
