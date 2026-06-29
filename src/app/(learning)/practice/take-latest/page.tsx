'use client';

import LearningExamplePage from '@/components/learning/LearningExamplePage';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';
import { APP_PATHS } from '@/config/routes';

const TakeLatestPage = () => {
  return (
    <LearningExamplePage
      codeFilePath="src/lib/features/user/sagas/watchers.ts"
      codeLanguage="ts"
      header={learningContent.takeLatest.header}
      theory={learningContent.takeLatest.theory}
    >
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
    </LearningExamplePage>
  );
};

export default TakeLatestPage;
