'use client';

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CodeIcon from '@mui/icons-material/Code';
import CommitIcon from '@mui/icons-material/Commit';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RuleIcon from '@mui/icons-material/Rule';
import { useState, type ElementType } from 'react';
import { TagCluster } from './CompactPublicLayout';

export type CompactSliderIcon =
  | 'ai'
  | 'architecture'
  | 'business'
  | 'check'
  | 'cloud'
  | 'code'
  | 'commit'
  | 'delivery'
  | 'psychology'
  | 'rocket'
  | 'rule'
  | 'tools';

export type CompactSliderPanel = {
  body: string;
  icon?: CompactSliderIcon;
  id: string;
  items?: readonly string[];
  label: string;
  metric?: string;
  tone?: CompactSliderTone;
  title: string;
};

type CompactPublicSliderProps = {
  eyebrow?: string;
  panels: readonly CompactSliderPanel[];
  title: string;
};

type CompactSliderTone =
  | 'amber'
  | 'blue'
  | 'emerald'
  | 'github'
  | 'indigo'
  | 'purple'
  | 'red'
  | 'sky'
  | 'slate'
  | 'typescript'
  | 'vercel';

const iconMap: Record<CompactSliderIcon, ElementType> = {
  ai: AutoAwesomeIcon,
  architecture: AccountTreeIcon,
  business: BusinessCenterIcon,
  check: CheckCircleIcon,
  cloud: CloudDoneIcon,
  code: CodeIcon,
  commit: CommitIcon,
  delivery: IntegrationInstructionsIcon,
  psychology: PsychologyIcon,
  rocket: RocketLaunchIcon,
  rule: RuleIcon,
  tools: BuildCircleIcon,
};

const toneClasses: Record<
  CompactSliderTone,
  {
    activeTab: string;
    article: string;
    dot: string;
    icon: string;
    metric: string;
  }
> = {
  amber: {
    activeTab: 'border-amber-500 bg-amber-500 text-white',
    article: 'bg-amber-50',
    dot: 'bg-amber-500',
    icon: 'bg-amber-100 text-amber-800',
    metric: 'bg-amber-100 text-amber-800',
  },
  blue: {
    activeTab: 'border-blue-600 bg-blue-600 text-white',
    article: 'bg-blue-50',
    dot: 'bg-blue-600',
    icon: 'bg-blue-100 text-blue-800',
    metric: 'bg-blue-100 text-blue-800',
  },
  emerald: {
    activeTab: 'border-emerald-600 bg-emerald-600 text-white',
    article: 'bg-emerald-50',
    dot: 'bg-emerald-600',
    icon: 'bg-emerald-100 text-emerald-800',
    metric: 'bg-emerald-100 text-emerald-800',
  },
  github: {
    activeTab: 'border-slate-950 bg-slate-950 text-white',
    article: 'bg-slate-50',
    dot: 'bg-slate-950',
    icon: 'bg-slate-950 text-white',
    metric: 'bg-slate-200 text-slate-900',
  },
  indigo: {
    activeTab: 'border-indigo-600 bg-indigo-600 text-white',
    article: 'bg-indigo-50',
    dot: 'bg-indigo-600',
    icon: 'bg-indigo-100 text-indigo-800',
    metric: 'bg-indigo-100 text-indigo-800',
  },
  purple: {
    activeTab: 'border-purple-600 bg-purple-600 text-white',
    article: 'bg-purple-50',
    dot: 'bg-purple-600',
    icon: 'bg-purple-100 text-purple-800',
    metric: 'bg-purple-100 text-purple-800',
  },
  red: {
    activeTab: 'border-red-600 bg-red-600 text-white',
    article: 'bg-red-50',
    dot: 'bg-red-600',
    icon: 'bg-red-100 text-red-800',
    metric: 'bg-red-100 text-red-800',
  },
  sky: {
    activeTab: 'border-sky-600 bg-sky-600 text-white',
    article: 'bg-sky-50',
    dot: 'bg-sky-600',
    icon: 'bg-sky-100 text-sky-800',
    metric: 'bg-sky-100 text-sky-800',
  },
  slate: {
    activeTab: 'border-slate-950 bg-slate-950 text-white',
    article: 'bg-slate-50',
    dot: 'bg-slate-950',
    icon: 'bg-slate-100 text-slate-800',
    metric: 'bg-slate-100 text-slate-800',
  },
  typescript: {
    activeTab: 'border-[#3178C6] bg-[#3178C6] text-white',
    article: 'bg-blue-50',
    dot: 'bg-[#3178C6]',
    icon: 'bg-[#3178C6] text-white',
    metric: 'bg-blue-100 text-[#235A97]',
  },
  vercel: {
    activeTab: 'border-black bg-black text-white',
    article: 'bg-neutral-50',
    dot: 'bg-black',
    icon: 'bg-black text-white',
    metric: 'bg-neutral-200 text-neutral-950',
  },
};

export default function CompactPublicSlider({
  eyebrow,
  panels,
  title,
}: CompactPublicSliderProps) {
  const [activePanelId, setActivePanelId] = useState(panels[0]?.id ?? '');
  const activeIndex = Math.max(
    panels.findIndex((panel) => panel.id === activePanelId),
    0,
  );
  const activePanel =
    panels.find((panel) => panel.id === activePanelId) ?? panels[0];
  const Icon = iconMap[activePanel?.icon ?? 'code'];
  const tone = toneClasses[activePanel?.tone ?? 'sky'];

  if (!activePanel) {
    return null;
  }

  function move(direction: -1 | 1) {
    const nextIndex = (activeIndex + direction + panels.length) % panels.length;
    setActivePanelId(panels[nextIndex].id);
  }

  return (
    <section className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-1 text-xl font-black leading-tight text-slate-950">
            {title}
          </h2>
        </div>
        {activePanel.metric ? (
          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-black ${tone.metric}`}
          >
            {activePanel.metric}
          </span>
        ) : null}
      </div>

      <div
        aria-label={`${title} options`}
        className="mt-4 flex w-full min-w-0 snap-x gap-2 overflow-x-auto pb-1"
        role="tablist"
      >
        {panels.map((panel) => {
          const active = panel.id === activePanel.id;

          return (
            <button
              key={panel.id}
              aria-selected={active}
              className={`snap-start whitespace-nowrap rounded-full border px-3 py-2 text-xs font-black transition ${
                active
                  ? tone.activeTab
                  : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-slate-950'
              }`}
              onClick={() => setActivePanelId(panel.id)}
              role="tab"
              type="button"
            >
              {panel.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] items-center gap-2">
        <button
          aria-label="Previous slide"
          className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
          onClick={() => move(-1)}
          type="button"
        >
          <ArrowBackIosNewIcon fontSize="inherit" />
        </button>

        <article
          className={`grid min-w-0 gap-4 rounded-lg p-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start ${tone.article}`}
        >
          <span
            className={`flex size-12 items-center justify-center rounded-xl shadow-sm ${tone.icon}`}
          >
            <Icon fontSize="small" />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-black leading-tight text-slate-950">
              {activePanel.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {activePanel.body}
            </p>
            {activePanel.items?.length ? (
              <div className="mt-3">
                <TagCluster tags={activePanel.items} />
              </div>
            ) : null}
          </div>
        </article>

        <button
          aria-label="Next slide"
          className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
          onClick={() => move(1)}
          type="button"
        >
          <ArrowForwardIosIcon fontSize="inherit" />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {panels.map((panel) => {
          const active = panel.id === activePanel.id;

          return (
            <button
              key={panel.id}
              aria-label={`Show ${panel.label}`}
              className={`h-2 rounded-full transition ${
                active ? `w-6 ${tone.dot}` : 'w-2 bg-slate-300'
              }`}
              onClick={() => setActivePanelId(panel.id)}
              type="button"
            />
          );
        })}
      </div>
    </section>
  );
}
