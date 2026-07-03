import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import { APP_PATHS } from '@/config/routes';

const changes = [
  {
    body: 'Tie a form action to result state and pending state without hand-writing loading reducers.',
    href: APP_PATHS.react19ActionState,
    title: 'useActionState',
  },
  {
    body: 'Show immediate draft UI while a mutation is still saving in the background.',
    href: APP_PATHS.react19Optimistic,
    title: 'useOptimistic',
  },
  {
    body: 'Read async resources during render with Suspense boundaries around the pending work.',
    href: APP_PATHS.react19Use,
    title: 'use() API',
  },
] as const;

export default function React19Page() {
  return (
    <>
      <PageHeader
        description="React 19 was released on December 05, 2024. These lessons split Actions, optimistic updates, and the use() API so each feature can be learned independently."
        eyebrow="React"
        tags={['React 19', 'Released December 05, 2024', 'Actions']}
        title="React 19 Changes"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {changes.map((change) => (
          <ContentCard key={change.href}>
            <h2 className="text-lg font-black text-slate-950">
              {change.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {change.body}
            </p>
            <div className="mt-5">
              <AppButton href={change.href} variant="secondary">
                Open lesson
              </AppButton>
            </div>
          </ContentCard>
        ))}
      </div>
    </>
  );
}
