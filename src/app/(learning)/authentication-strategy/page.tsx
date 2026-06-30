import CodeExample from '@/components/learning/CodeExample';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import { authContent } from '@/content/auth';

export default function AuthenticationStrategyPage() {
  return (
    <>
      <PageHeader {...authContent.strategy.header} />

      <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <ContentCard>
          <h2 className="text-xl font-black text-slate-950">
            {authContent.strategy.overviewTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {authContent.strategy.overviewPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </ContentCard>

        <ContentCard>
          <h2 className="text-xl font-black text-slate-950">
            {authContent.strategy.importantNoteTitle}
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {authContent.strategy.importantNote}
          </p>
        </ContentCard>
      </div>

      <section className="mt-6">
        <h2 className="mb-4 text-2xl font-black text-slate-950">
          {authContent.strategy.codeExamplesTitle}
        </h2>
        <div className="grid min-w-0 gap-4">
          {authContent.strategy.codeExamples.map((example) => (
            <CodeExample
              key={example.filePath}
              code={example.code}
              filePath={example.filePath}
              language={example.language}
              title={example.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
