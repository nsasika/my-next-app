import CodeExample from '@/components/learning/CodeExample';
import FlowDiagram from '@/components/learning/FlowDiagram';
import TheoryPanel from '@/components/learning/TheoryPanel';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import { LEARNING_UI, type LearningUiCopy } from '@/i18n/learning/ui';

export type ConceptLessonContent = {
  codeExamples?: readonly {
    code: string;
    filePath: string;
    language?: string;
    title: string;
  }[];
  flow?: {
    steps: readonly {
      description: string;
      label: string;
    }[];
    title: string;
  };
  header: {
    description: string;
    eyebrow: string;
    tags: readonly string[];
    title: string;
  };
  references?: readonly {
    href: string;
    label: string;
  }[];
  theory: {
    code?: string;
    points: readonly string[];
    summary: string;
    title: string;
    whatToTry?: readonly string[];
  };
};

export default function ConceptLessonPage({
  content,
  labels = LEARNING_UI['en-US'],
}: {
  content: ConceptLessonContent;
  labels?: LearningUiCopy;
}) {
  return (
    <>
      <PageHeader {...content.header} />
      <TheoryPanel {...content.theory} labels={labels} />

      {content.flow ? (
        <FlowDiagram steps={content.flow.steps} title={content.flow.title} />
      ) : null}

      {content.codeExamples?.length ? (
        <section className="mb-6 grid min-w-0 gap-4">
          {content.codeExamples.map((example) => (
            <CodeExample
              key={`${example.filePath}-${example.title}`}
              {...example}
            />
          ))}
        </section>
      ) : null}

      {content.references?.length ? (
        <ContentCard>
          <h2 className="text-xl font-black text-slate-950">
            {labels.referenceLinks}
          </h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {content.references.map((reference) => (
              <a
                key={reference.href}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-slate-950"
                href={reference.href}
                rel="noreferrer"
                target="_blank"
              >
                {reference.label}
              </a>
            ))}
          </div>
        </ContentCard>
      ) : null}
    </>
  );
}
