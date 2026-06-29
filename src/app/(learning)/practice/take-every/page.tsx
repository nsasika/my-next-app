'use client';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';
import { userLogEvent } from '@/lib/features/user/usersSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useEffect } from 'react';

const TakeEveryPage = () => {
  const dispatch = useAppDispatch();

  // Dispatch an event when the page loads
  useEffect(() => {
    dispatch(userLogEvent({ type: userLogEvent.type, at: Date.now() }));
  }, [dispatch]);

  // Handle button click to dispatch a user log event
  const handleButtonClick = () => {
    dispatch(userLogEvent({ type: userLogEvent.type, at: Date.now() }));
  };

  return (
    <LearningExamplePage
      codeFilePath="src/lib/features/user/sagas/watchers.ts"
      codeLanguage="ts"
      header={learningContent.takeEvery.header}
      theory={learningContent.takeEvery.theory}
    >
      <ContentCard className="max-w-2xl">
        <p className="text-sm leading-6 text-slate-600">
          {learningContent.takeEvery.demoDescription}
        </p>
        <div className="mt-5">
          <AppButton onClick={handleButtonClick}>Log Event</AppButton>
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
};

export default TakeEveryPage;
