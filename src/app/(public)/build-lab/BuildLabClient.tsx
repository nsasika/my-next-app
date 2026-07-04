'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CommitIcon from '@mui/icons-material/Commit';
import { useState } from 'react';
import {
  PublicHero,
  PublicPageShell,
} from '@/components/public/CompactPublicLayout';
import CompactPublicSlider from '@/components/public/CompactPublicSlider';
import {
  deliveryFlow,
  deploymentLanes,
  engineeringHeroContent,
  pipelineChecks,
  qualitySignals,
  technologyStack,
} from './content';

const flowIcons = [
  <BuildCircleIcon key="build" fontSize="small" />,
  <AutoAwesomeIcon key="ai" fontSize="small" />,
  <CommitIcon key="repo" fontSize="small" />,
  <CloudDoneIcon key="deploy" fontSize="small" />,
] as const;

export default function BuildLabClient() {
  const [activeStep, setActiveStep] = useState(0);
  const activeFlow = deliveryFlow[activeStep];
  const stackPanels = [
    ...technologyStack.map((stack) => ({
      body: `${stack.category} used inside the academy build.`,
      icon:
        stack.category === 'AI-assisted engineering'
          ? ('ai' as const)
          : stack.category === 'Delivery platform'
            ? ('cloud' as const)
            : stack.category === 'Backend layer'
              ? ('tools' as const)
              : ('code' as const),
      id: stack.category,
      items: stack.items,
      label: stack.category,
      tone:
        stack.category === 'Delivery platform'
          ? ('vercel' as const)
          : stack.category === 'AI-assisted engineering'
            ? ('purple' as const)
            : stack.category === 'Backend layer'
              ? ('emerald' as const)
              : ('typescript' as const),
      title: stack.category,
    })),
    ...qualitySignals.map((signal) => ({
      body: signal.status,
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
      label: signal.metric,
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
      title: signal.label,
    })),
  ];
  const releasePanels = [
    ...pipelineChecks.map((check) => ({
      body: check.detail,
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
      label: check.title,
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
      title: check.title,
    })),
    ...deploymentLanes.map((lane) => ({
      body: lane.detail,
      icon:
        lane.name === 'Production' ? ('rocket' as const) : ('cloud' as const),
      id: lane.name,
      label: lane.name,
      metric: lane.branch,
      tone: lane.name === 'Production' ? ('red' as const) : ('vercel' as const),
      title: lane.branch,
    })),
  ];

  return (
    <PublicPageShell>
      <PublicHero
        aside={
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                  Delivery model
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
              {deliveryFlow.map((item, index) => {
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
        }
        body={engineeringHeroContent.body}
        compact
        eyebrow={engineeringHeroContent.eyebrow}
        title={engineeringHeroContent.heading}
      />

      <div className="mt-8 grid min-w-0 gap-4 lg:grid-cols-2">
        <CompactPublicSlider
          eyebrow="System snapshot"
          panels={stackPanels}
          title="Stack and quality signals"
        />
        <CompactPublicSlider
          eyebrow="Release flow"
          panels={releasePanels}
          title="Checks and deployment lanes"
        />
      </div>
    </PublicPageShell>
  );
}
