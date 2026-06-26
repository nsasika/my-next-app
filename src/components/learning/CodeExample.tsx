import CodeBlock from '@/components/ui/CodeBlock';
import ContentCard from '@/components/ui/ContentCard';

type CodeExampleProps = {
  code: string;
  filePath: string;
  language?: string;
  title: string;
};

export default function CodeExample({
  code,
  filePath,
  language,
  title,
}: CodeExampleProps) {
  return (
    <ContentCard>
      <div className="mb-4">
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
        <p className="mt-1 font-mono text-xs font-semibold text-slate-500">
          {filePath}
        </p>
      </div>
      <CodeBlock code={code} language={language} />
    </ContentCard>
  );
}
