import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import { APP_PATHS } from '@/config/routes';

const React18ChangesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        description="Explore React 18 rendering behavior through focused examples."
        eyebrow="React"
        tags={['React 18', 'Server Component', 'Learning Track']}
        title="React 18 Changes"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            body: 'See how multiple state updates can be batched into one render.',
            href: APP_PATHS.react18Batching,
            title: 'Automatic Batching',
          },
          {
            body: 'Keep urgent input responsive while lower-priority work updates.',
            href: APP_PATHS.react18Transitions,
            title: 'Transitions',
          },
          {
            body: 'Let an expensive result lag behind immediate typing without blocking the input.',
            href: APP_PATHS.react18DeferredValue,
            title: 'useDeferredValue',
          },
          {
            body: 'Generate stable, hydration-safe IDs for labels, hints, and repeated form fields.',
            href: APP_PATHS.react18Id,
            title: 'useId',
          },
          {
            body: 'Subscribe to external mutable stores without tearing in concurrent rendering.',
            href: APP_PATHS.react18ExternalStore,
            title: 'useSyncExternalStore',
          },
        ].map((change) => (
          <ContentCard key={change.href}>
            <h2 className="text-lg font-bold text-slate-950">{change.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {change.body}
            </p>
            <div className="mt-5">
              <AppButton href={change.href} variant="secondary">
                Open demo
              </AppButton>
            </div>
          </ContentCard>
        ))}
      </div>
    </>
  );
};

export default React18ChangesPage;
