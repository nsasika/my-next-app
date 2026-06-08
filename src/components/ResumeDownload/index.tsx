export type ResumeDownloadOption = {
  href: string;
  label: string;
};

type ResumeDownloadProps = {
  options: ResumeDownloadOption[];
};

export default function ResumeDownload({ options }: ResumeDownloadProps) {
  const hasOptions = options.length > 0;

  return (
    <div className="mt-8 flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-base font-bold text-slate-950">Resume</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          {hasOptions
            ? 'Download my latest resume in your preferred format.'
            : 'Resume upload pending. Add a PDF or DOCX to enable downloads.'}
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
      ) : (
        <code className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-600">
          public/resume/
        </code>
      )}
    </div>
  );
}
