import { UseApiDemo } from '@/components/learning/react19/React19Demos';
import LearningExamplePage from '@/components/learning/LearningExamplePage';

const content = {
  header: {
    description:
      'The React 19 use() API can read promises during render when a Suspense boundary handles the pending state.',
    eyebrow: 'React 19',
    tags: ['React 19', 'use()', 'Suspense'],
    title: 'use() API',
  },
  theory: {
    title: 'Reading async resources during render',
    summary:
      'use() is useful when a component receives an async resource and should suspend until the value is ready.',
    points: [
      'Wrap the component in Suspense so the pending state has a proper fallback.',
      'Prefer framework-supported data patterns for production data loading.',
      'Use it for resources that fit naturally into render-time async boundaries.',
    ],
    code: `function Profile({ profilePromise }) {
  const profile = use(profilePromise);
  return <p>{profile.name}</p>;
}`,
    whatToTry: [
      'Refresh the page and watch the Suspense fallback briefly appear.',
      'Think of this as render-time resource reading, not an event handler fetch.',
    ],
  },
} as const;

export default function UseApiPage() {
  return (
    <LearningExamplePage
      codeFilePath="src/components/learning/react19/React19Demos.tsx"
      header={content.header}
      theory={content.theory}
    >
      <UseApiDemo />
    </LearningExamplePage>
  );
}
