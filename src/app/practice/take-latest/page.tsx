'use client';

import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import { APP_PATHS } from '@/config/routes';

const TakeLatestPage = () => {
  return (
    <>
      <PageHeader
        description="takeLatest cancels older matching work and keeps only the newest request active."
        eyebrow="Redux Saga"
        tags={['takeLatest', 'Client Component', 'Cancellation']}
        title="takeLatest Example"
      />

      <ContentCard className="max-w-3xl">
        <div className="space-y-4 text-sm leading-6 text-slate-600">
          <p>
            The <strong>takeLatest</strong> effect ensures that only the latest
            dispatched action is processed, canceling ongoing work from previous
            actions.
          </p>
          <p>
            This is especially useful for searches or API calls where only the
            newest result should update the UI.
          </p>
          <p>
            Compare this with <strong>takeEvery</strong>, which processes every
            matching action without cancellation.
          </p>
        </div>
        <div className="mt-5">
          <AppButton href={APP_PATHS.reduxSaga} variant="secondary">
            Open Redux Saga Example
          </AppButton>
        </div>
      </ContentCard>
    </>
  );
};

export default TakeLatestPage;
