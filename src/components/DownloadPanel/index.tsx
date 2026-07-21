import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

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
    <div className="mt-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
          <DownloadIcon fontSize="small" />
        </span>
        <div className="min-w-0">
          <h2 className="text-base font-black text-slate-950">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {hasOptions ? successHint : emptyHint}
          </p>
        </div>
      </div>

      {hasOptions ? (
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <a
              key={option.href}
              href={option.href}
              download
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:border-sky-300 hover:bg-sky-50"
            >
              {option.label.toLowerCase().includes('pdf') ? (
                <PictureAsPdfIcon fontSize="small" />
              ) : (
                <DescriptionIcon fontSize="small" />
              )}
              {option.label}
            </a>
          ))}
        </div>
      ) : emptyPathLabel ? (
        <code className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-600">
          <FolderOpenIcon fontSize="small" />
          {emptyPathLabel}
        </code>
      ) : null}
    </div>
  );
}
