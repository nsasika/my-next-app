'use client';

import { useSyncExternalStore } from 'react';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import ContentCard from '@/components/ui/ContentCard';

const content = {
  header: {
    description:
      'React 18 useSyncExternalStore is the official way to read external stores safely during concurrent rendering.',
    eyebrow: 'React 18',
    tags: ['React', 'useSyncExternalStore', 'Stores'],
    title: 'useSyncExternalStore',
  },
  theory: {
    title: 'What problem it solves',
    summary:
      'Some state lives outside React: browser APIs, custom stores, Redux-style stores, or websocket state. useSyncExternalStore gives React a subscribe function and a consistent snapshot reader.',
    points: [
      'getSnapshot reads the current value synchronously.',
      'subscribe tells React when the external value changed.',
      'getServerSnapshot gives a safe value during server rendering.',
    ],
    code: `const isOnline = useSyncExternalStore(
  subscribe,
  getSnapshot,
  getServerSnapshot,
);`,
    whatToTry: [
      'Resize the browser and watch the width update from a window subscription.',
      'Notice the component does not own the source value in useState.',
    ],
  },
} as const;

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return `${window.innerWidth} x ${window.innerHeight}`;
}

function getServerSnapshot() {
  return '0 x 0';
}

export default function ExternalStorePage() {
  const sizeText = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [width, height] = sizeText.split(' x ');

  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/react18/external-store/page.tsx"
      header={content.header}
      theory={content.theory}
    >
      <ContentCard className="max-w-3xl">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Window width', `${width}px`],
            ['Window height', `${height}px`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600">
          This page subscribes directly to the browser resize event. React reads
          the current snapshot whenever the external source changes.
        </p>
      </ContentCard>
    </LearningExamplePage>
  );
}
