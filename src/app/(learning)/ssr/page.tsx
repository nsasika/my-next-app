import LearningExamplePage from '@/components/learning/LearningExamplePage';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';

type User = {
  id: number;
  name: string;
  email: string;
};

const SSRPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/ssr/page.tsx"
      codeLanguage="ts"
      header={learningContent.ssr.header}
      theory={learningContent.ssr.theory}
    >
      <ContentCard>
        <div className="grid gap-3 sm:grid-cols-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <h2 className="font-bold text-slate-950">{user.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{user.email}</p>
            </div>
          ))}
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
};

export default SSRPage;
