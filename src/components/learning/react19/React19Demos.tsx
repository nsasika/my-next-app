'use client';

import { Suspense, use, useActionState, useOptimistic, useState } from 'react';
import ContentCard from '@/components/ui/ContentCard';

type FeedbackState = {
  message: string;
  submittedName: string;
};

type CommentItem = {
  id: string;
  pending?: boolean;
  text: string;
};

const initialFeedbackState: FeedbackState = {
  message: 'Waiting for a profile update.',
  submittedName: '',
};

async function saveProfile(
  _previousState: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  const name = String(formData.get('name') ?? '').trim();
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (!name) {
    return {
      message: 'Name is required before saving.',
      submittedName: '',
    };
  }

  return {
    message: 'Profile saved through a React 19 action.',
    submittedName: name,
  };
}

const profilePromise = new Promise<{ role: string; team: string }>(
  (resolve) => {
    setTimeout(() => {
      resolve({
        role: 'Senior Frontend Engineer',
        team: 'Digital banking platform',
      });
    }, 500);
  },
);

function ProfileResource() {
  const profile = use(profilePromise);

  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        use() async resource
      </p>
      <p className="mt-2 font-bold text-slate-950">{profile.role}</p>
      <p className="text-sm text-slate-600">{profile.team}</p>
    </div>
  );
}

export function ActionStateDemo() {
  const [state, formAction, isPending] = useActionState(
    saveProfile,
    initialFeedbackState,
  );

  return (
    <ContentCard>
      <h2 className="text-lg font-black text-slate-950">useActionState</h2>
      <form action={formAction} className="mt-4 grid gap-3">
        <input
          className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          name="name"
          placeholder="Your display name"
        />
        <button
          className="rounded-lg bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          disabled={isPending}
          type="submit"
        >
          {isPending ? 'Saving...' : 'Save profile'}
        </button>
      </form>
      <p className="mt-4 text-sm font-semibold text-slate-700">
        {state.message}
      </p>
      {state.submittedName ? (
        <p className="mt-1 text-sm text-slate-600">
          Saved name: {state.submittedName}
        </p>
      ) : null}
    </ContentCard>
  );
}

export function OptimisticDemo() {
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'comment-1',
      text: 'Prepare ACID transaction answer with notification example.',
    },
  ]);
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, text: string) => [
      {
        id: `optimistic-${text}`,
        pending: true,
        text,
      },
      ...currentComments,
    ],
  );

  const addComment = async (formData: FormData) => {
    const text = String(formData.get('comment') ?? '').trim();
    if (!text) {
      return;
    }

    addOptimisticComment(text);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setComments((currentComments) => [
      {
        id: crypto.randomUUID(),
        text,
      },
      ...currentComments,
    ]);
  };

  return (
    <ContentCard>
      <h2 className="text-lg font-black text-slate-950">useOptimistic</h2>
      <form action={addComment} className="mt-4 grid gap-3">
        <input
          className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          name="comment"
          placeholder="Add interview prep note"
        />
        <button
          className="rounded-lg bg-sky-700 px-4 py-3 text-sm font-black text-white transition hover:bg-sky-800"
          type="submit"
        >
          Add note
        </button>
      </form>
      <div className="mt-4 space-y-2">
        {optimisticComments.map((comment) => (
          <div key={comment.id} className="rounded-lg bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-800">
              {comment.text}
            </p>
            {comment.pending ? (
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                Saving
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </ContentCard>
  );
}

export function UseApiDemo() {
  return (
    <ContentCard>
      <h2 className="text-lg font-black text-slate-950">use()</h2>
      <div className="mt-4">
        <Suspense
          fallback={
            <div className="rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-600">
              Loading profile resource...
            </div>
          }
        >
          <ProfileResource />
        </Suspense>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">
        In production, use() is most natural with framework-provided async
        resources and Suspense boundaries.
      </p>
    </ContentCard>
  );
}
