export type DownloadOption = {
  href: string;
  label: string;
};

type DownloadPanelProps = {
  emptyHint?: string;
  emptyPathLabel?: string;
  options: DownloadOption[];
  successHint?: string;
  title: string;
};

export default function DownloadPanel({
  emptyHint = 'Downloads are pending.',
  emptyPathLabel,
  options,
  successHint = 'Download in your preferred format.',
  title,
}: DownloadPanelProps) {
  const hasOptions = options.length > 0;

  return (
    <div className="mt-8 flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-base font-bold text-slate-950">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          {hasOptions ? successHint : emptyHint}
        </p>
      </div>

      {hasOptions ? (
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <a
              key={option.href}
              href={option.href}
              download
              className="inline-flex shrink-0 justify-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              {option.label}
            </a>
          ))}
        </div>
      ) : emptyPathLabel ? (
        <code className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-600">
          {emptyPathLabel}
        </code>
      ) : null}
    </div>
  );
}
