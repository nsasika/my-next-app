'use client';

import { useId } from 'react';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import ContentCard from '@/components/ui/ContentCard';

const content = {
  header: {
    description:
      'React 18 useId creates stable IDs that match between server rendering and client hydration.',
    eyebrow: 'React 18',
    tags: ['React', 'useId', 'Accessibility'],
    title: 'useId',
  },
  theory: {
    title: 'Why useId exists',
    summary:
      'Component libraries need IDs for labels, descriptions, and ARIA relationships. useId avoids duplicate IDs and prevents server/client mismatch.',
    points: [
      'Use it for accessibility attributes such as htmlFor, aria-describedby, and aria-labelledby.',
      'Do not use it as a key in a rendered list because keys should come from your data.',
      'Add readable suffixes when one component needs multiple related IDs.',
    ],
    code: `const id = useId();
const inputId = \`\${id}-email\`;
const helpId = \`\${id}-email-help\`;`,
    whatToTry: [
      'Inspect both forms and notice each field has its own generated ID.',
      'The label click still focuses the correct input.',
    ],
  },
} as const;

function ProfileField({ label }: { label: string }) {
  const id = useId();
  const inputId = `${id}-field`;
  const helpId = `${id}-help`;

  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <input
        aria-describedby={helpId}
        id={inputId}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
      />
      <span id={helpId} className="text-xs font-semibold text-slate-500">
        Generated field id: {inputId}
      </span>
    </label>
  );
}

export default function UseIdPage() {
  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/react18/id/page.tsx"
      header={content.header}
      theory={content.theory}
    >
      <ContentCard className="max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <ProfileField label="Email" />
          <ProfileField label="Mobile number" />
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
}
