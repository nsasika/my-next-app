type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-4">
      {language ? (
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
          {language}
        </div>
      ) : null}
      <pre className="max-w-full overflow-x-auto whitespace-pre text-xs leading-6 text-slate-100 sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
