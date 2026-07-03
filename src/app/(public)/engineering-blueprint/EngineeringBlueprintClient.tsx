'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CommitIcon from '@mui/icons-material/Commit';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import JavascriptIcon from '@mui/icons-material/Javascript';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RuleIcon from '@mui/icons-material/Rule';
import { useState } from 'react';
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

const signalIcons = {
  coverage: CheckCircleIcon,
  eslint: RuleIcon,
  git: CommitIcon,
  typescript: JavascriptIcon,
  vercel: CloudDoneIcon,
} as const;

const checkIcons = {
  coverage: CheckCircleIcon,
  eslint: RuleIcon,
  git: CommitIcon,
  release: RocketLaunchIcon,
  typescript: JavascriptIcon,
  vercel: CloudDoneIcon,
} as const;

export default function EngineeringBlueprintClient() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-8">
      <section className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="animate-fade-rise">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
            {engineeringHeroContent.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">
            {engineeringHeroContent.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {engineeringHeroContent.body}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {technologyStack.map((stack) => (
              <article
                key={stack.category}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <h2 className="text-sm font-black text-slate-950">
                  {stack.category}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <section className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm animate-fade-rise [animation-delay:120ms]">
          <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full border border-sky-100" />
          <div className="pointer-events-none absolute -bottom-14 left-10 size-28 rounded-full border border-emerald-100" />
          <div className="absolute inset-x-6 top-12 h-1 rounded-full bg-slate-100">
            <span className="block h-full w-2/3 animate-blueprint-scan rounded-full bg-sky-500" />
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2">
            {deliveryFlow.map((item, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={item.title}
                  aria-pressed={isActive}
                  className={`rounded-lg border p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-md ${
                    isActive
                      ? 'border-sky-400 bg-sky-50 shadow-md'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                  type="button"
                >
                  <span className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
                    {flowIcons[index]}
                  </span>
                  <span className="mt-4 block text-lg font-bold text-slate-950">
                    {item.title}
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-slate-600">
                    {item.body}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="relative mt-4 rounded-lg border border-slate-200 bg-slate-950 p-4 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200">
              Active architecture step
            </p>
            <h2 className="mt-2 text-lg font-black">
              {deliveryFlow[activeStep].title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {deliveryFlow[activeStep].body}
            </p>
          </div>
        </section>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex rounded-lg bg-slate-950 p-3 text-white">
            <IntegrationInstructionsIcon fontSize="small" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              Implementation diagram
            </p>
            <h2 className="text-2xl font-black text-slate-950">
              From code to production release
            </h2>
          </div>
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
          <DiagramNode
            active={activeStep === 0}
            items={[
              'Next.js + React UI',
              'TypeScript contracts',
              'Node.js backend routes',
            ]}
            title="Application stack"
          />
          <DiagramArrow />
          <DiagramNode
            active={activeStep === 2}
            items={[
              'ESLint',
              'TypeScript check',
              'Unit coverage >= 80%',
              'Meaningful commits',
            ]}
            title="Quality pipeline"
          />
          <DiagramArrow />
          <DiagramNode
            active={activeStep === 3}
            items={[
              'Preview deployments',
              'Production branch',
              'Public academy',
            ]}
            title="Vercel release"
          />
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-5">
        {qualitySignals.map((signal) => {
          const Icon = signalIcons[signal.icon];

          return (
            <article
              key={signal.metric}
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <div className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800 transition group-hover:scale-110">
                <Icon fontSize="small" />
              </div>
              <p className="mt-5 text-3xl font-black text-slate-950">
                {signal.metric}
              </p>
              <h2 className="mt-2 text-sm font-bold text-slate-800">
                {signal.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {signal.status}
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-16 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Release checklist
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
            Checks before a production promotion
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            The checks are ordered the same way I explain delivery in
            interviews: code quality first, then typed contracts, tests,
            preview, and promotion.
          </p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {pipelineChecks.map((check, index) => {
            const Icon = checkIcons[check.icon];

            return (
              <li
                key={check.title}
                className="group rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white transition group-hover:bg-sky-700">
                    <Icon fontSize="small" />
                  </span>
                  <div>
                    <p className="font-black text-slate-950">
                      {index + 1}. {check.title}
                    </p>
                    <p className="mt-1 leading-6 text-slate-600">
                      {check.detail}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        {deploymentLanes.map((lane) => (
          <article
            key={lane.name}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              Vercel {lane.name}
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              {lane.name} deployment lane
            </h2>
            <p className="mt-2 text-sm font-bold text-slate-500">
              {lane.branch}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {lane.detail}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}

function DiagramNode({
  active,
  items,
  title,
}: {
  active: boolean;
  items: string[];
  title: string;
}) {
  return (
    <article
      className={`min-h-60 rounded-lg border p-6 shadow-sm transition duration-300 ${
        active
          ? 'border-sky-400 bg-sky-50'
          : 'border-slate-200 bg-white hover:border-sky-300'
      }`}
    >
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function DiagramArrow() {
  return (
    <div
      aria-hidden="true"
      className="hidden h-1 w-12 animate-blueprint-pulse rounded-full bg-sky-500 lg:block"
    />
  );
}
