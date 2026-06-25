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

      <div className="grid gap-4 sm:grid-cols-2">
        <ContentCard>
          <h2 className="text-lg font-bold text-slate-950">
            Automatic Batching
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            See how multiple state updates can be batched into one render.
          </p>
          <div className="mt-5">
            <AppButton href={APP_PATHS.react18Batching} variant="secondary">
              Open batching demo
            </AppButton>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="text-lg font-bold text-slate-950">Transitions</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Keep urgent input responsive while lower-priority work updates.
          </p>
          <div className="mt-5">
            <AppButton href={APP_PATHS.react18Transitions} variant="secondary">
              Open transition demo
            </AppButton>
          </div>
        </ContentCard>
      </div>
    </>
  );
};

export default React18ChangesPage;
