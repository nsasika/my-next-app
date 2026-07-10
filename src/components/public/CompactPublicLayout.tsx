import type { ReactNode } from 'react';

type PublicPageShellProps = {
  children: ReactNode;
};

type PublicHeroProps = {
  actions?: ReactNode;
  aside?: ReactNode;
  body: string;
  compact?: boolean;
  density?: 'default' | 'tight';
  eyebrow: string;
  title: string;
};

type SectionIntroProps = {
  body?: string;
  eyebrow?: string;
  title: string;
};

type StatStripProps = {
  stats: readonly {
    label: string;
    value: string;
  }[];
};

type TagClusterProps = {
  tags: readonly string[];
};

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:py-12 lg:px-8">
      {children}
    </div>
  );
}

export function PublicHero({
  actions,
  aside,
  body,
  compact = false,
  density = 'default',
  eyebrow,
  title,
}: PublicHeroProps) {
  const tight = density === 'tight';

  return (
    <section
      className={`grid min-w-0 ${
        tight
          ? 'lg:grid-cols-[minmax(0,0.75fr)_minmax(22rem,1fr)] lg:items-start'
          : 'lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.75fr)] lg:items-center'
      } ${compact || tight ? 'gap-5' : 'gap-8'}`}
    >
      <div
        className={`min-w-0 animate-fade-rise ${
          tight ? 'max-w-2xl lg:pt-2' : ''
        }`}
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
          {eyebrow}
        </p>
        <h1
          className={`mt-3 max-w-4xl font-black leading-tight tracking-tight text-slate-950 ${
            tight
              ? 'text-2xl sm:text-3xl'
              : compact
                ? 'text-3xl sm:text-4xl'
                : 'text-4xl sm:text-5xl'
          }`}
        >
          {title}
        </h1>
        <p
          className={`max-w-3xl text-slate-700 ${
            tight
              ? 'mt-2 text-sm leading-6'
              : compact
                ? 'mt-3 text-sm leading-6 sm:text-base'
                : 'mt-4 text-base leading-7 sm:text-lg'
          }`}
        >
          {body}
        </p>
        {actions ? (
          <div className="mt-6 flex flex-wrap gap-2">{actions}</div>
        ) : null}
      </div>
      {aside ? (
        <div className="min-w-0 animate-fade-rise [animation-delay:120ms]">
          {aside}
        </div>
      ) : null}
    </section>
  );
}

export function SectionIntro({ body, eyebrow, title }: SectionIntroProps) {
  return (
    <div className="min-w-0">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">
        {title}
      </h2>
      {body ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function StatStrip({ stats }: StatStripProps) {
  return (
    <dl className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-slate-200 bg-white px-4 py-3"
        >
          <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
            {stat.label}
          </dt>
          <dd className="mt-1 text-2xl font-black text-slate-950">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function TagCluster({ tags }: TagClusterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
