import type { ReactNode } from 'react';

type PageHeaderProps = {
  actions?: ReactNode;
  description?: string;
  eyebrow?: string;
  tags?: readonly string[];
  title: string;
};

export default function PageHeader({
  actions,
  description,
  eyebrow,
  tags = [],
  title,
}: PageHeaderProps) {
  return (
    <header className="mb-6 flex min-w-0 flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        {eyebrow ? (
          <p className="max-w-full text-xs font-bold uppercase tracking-[0.16em] text-sky-700 [overflow-wrap:anywhere] sm:tracking-[0.2em]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 max-w-full text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {description}
          </p>
        ) : null}
        {tags.length > 0 ? (
          <div className="mt-4 flex max-w-full flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="max-w-full rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {actions ? (
        <div className="flex min-w-0 flex-wrap gap-2">{actions}</div>
      ) : null}
    </header>
  );
}
