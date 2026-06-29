'use client';

import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import TheoryPanel from '@/components/learning/TheoryPanel';
import { learningContent } from '@/content/learning';
import { APP_PATHS } from '@/config/routes';

const TakeLatestPage = () => {
  return (
    <>
      <PageHeader {...learningContent.takeLatest.header} />

      <TheoryPanel {...learningContent.takeLatest.theory} />

      <ContentCard className="max-w-3xl">
        <div className="space-y-4 text-sm leading-6 text-slate-600">
          {learningContent.takeLatest.demoParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
