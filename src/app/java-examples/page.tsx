import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CodeBlock from '@/components/ui/CodeBlock';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

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
    <>
      <PageHeader
        description="A starter workspace for Java interview examples. We can expand this into focused pages as we add real implementations."
        eyebrow="Java track"
        tags={['Java', 'Spring Boot', 'Backend', 'Practice']}
        title="Java Examples"
      />

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

      <ContentCard className="mt-6">
        <h2 className="text-xl font-bold text-slate-950">
          First Java sample direction
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          We can use this shape for upcoming Java examples: short explanation,
          runnable code, and interview notes.
        </p>
        <div className="mt-5">
          <CodeBlock
            language="java"
            code={`public List<String> activeUserNames(List<User> users) {
    return users.stream()
        .filter(User::isActive)
        .map(User::name)
        .sorted()
        .toList();
}`}
          />
        </div>
      </ContentCard>
    </>
  );
}
