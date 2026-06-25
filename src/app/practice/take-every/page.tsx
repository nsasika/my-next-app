'use client';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
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
      <PageHeader
        description="takeEvery processes every matching action. It is useful when every event matters."
        eyebrow="Redux Saga"
        tags={['takeEvery', 'Client Component', 'Events']}
        title="takeEvery Example"
      ></PageHeader>

      <ContentCard className="max-w-2xl">
        <p className="text-sm leading-6 text-slate-600">
          This page dispatches a log event on mount and every time you click the
          button.
        </p>
        <div className="mt-5">
          <AppButton onClick={handleButtonClick}>Log Event</AppButton>
        </div>
      </ContentCard>
    </>
  );
};

export default TakeEveryPage;
