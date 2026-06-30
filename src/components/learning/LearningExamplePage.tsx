import type { ReactNode } from 'react';
import CodeExample from '@/components/learning/CodeExample';
import TheoryPanel from '@/components/learning/TheoryPanel';
import PageHeader from '@/components/ui/PageHeader';

type HeaderContent = {
  description?: string;
  eyebrow?: string;
  tags?: readonly string[];
  title: string;
};

type TheoryContent = {
  code?: string;
  points: readonly string[];
  summary: string;
  title: string;
  whatToTry?: readonly string[];
};

type LearningExamplePageProps = {
  children: ReactNode;
  codeFilePath: string;
  codeLanguage?: string;
  codeTitle?: string;
  header: HeaderContent;
  theory: TheoryContent;
};

export default function LearningExamplePage({
  children,
  codeFilePath,
  codeLanguage = 'tsx',
  codeTitle = 'Code example',
  header,
  theory,
}: LearningExamplePageProps) {
  const { code, ...theoryWithoutCode } = theory;

  return (
    <>
      <PageHeader {...header} />
      <TheoryPanel {...theoryWithoutCode} />
      {code ? (
        <CodeExample
          code={code}
          filePath={codeFilePath}
          language={codeLanguage}
          title={codeTitle}
        />
      ) : null}
      <section aria-labelledby="demo-section" className="mt-6">
        <div className="mb-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Demo
          </p>
          <h2 id="demo-section" className="mt-1 text-2xl font-black">
            See it working
          </h2>
        </div>
        {children}
      </section>
    </>
  );
}
