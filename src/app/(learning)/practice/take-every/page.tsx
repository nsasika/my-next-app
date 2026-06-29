'use client';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import TheoryPanel from '@/components/learning/TheoryPanel';
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
    <>
      <PageHeader {...learningContent.takeEvery.header}></PageHeader>

      <TheoryPanel {...learningContent.takeEvery.theory} />

      <ContentCard className="max-w-2xl">
        <p className="text-sm leading-6 text-slate-600">
          {learningContent.takeEvery.demoDescription}
        </p>
        <div className="mt-5">
          <AppButton onClick={handleButtonClick}>Log Event</AppButton>
        </div>
      </ContentCard>
    </>
  );
};

export default TakeEveryPage;
