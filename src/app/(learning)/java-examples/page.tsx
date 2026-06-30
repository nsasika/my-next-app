import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';

const javaTopics = [
  {
    icon: StorageIcon,
    title: 'Core Java',
    body: 'Collections, generics, streams, optionals, and exception handling.',
  },
  {
    icon: ApiIcon,
    title: 'Spring Boot APIs',
    body: 'Controller design, service boundaries, validation, and REST trade-offs.',
  },
  {
    icon: AccountTreeIcon,
    title: 'System Reasoning',
    body: 'Layering, transactions, database access, and production concerns.',
  },
] as const;

export default function JavaExamplesPage() {
  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/java-examples/page.tsx"
      codeLanguage="java"
      header={learningContent.javaExamples.header}
      theory={learningContent.javaExamples.theory}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {javaTopics.map((topic) => {
          const Icon = topic.icon;

          return (
            <ContentCard key={topic.title}>
              <div className="mb-4 inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
                <Icon fontSize="small" />
              </div>
              <h2 className="text-lg font-bold text-slate-950">
                {topic.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {topic.body}
              </p>
            </ContentCard>
          );
        })}
      </div>
    </LearningExamplePage>
  );
}
