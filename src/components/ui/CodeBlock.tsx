type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      {language ? (
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
          {language}
        </div>
      ) : null}
      <pre className="overflow-x-auto text-sm leading-6 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
