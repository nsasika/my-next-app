import { OptimisticDemo } from '@/components/learning/react19/React19Demos';
import LearningExamplePage from '@/components/learning/LearningExamplePage';

const content = {
  header: {
    description:
      'useOptimistic lets the UI show a temporary value immediately while the real mutation finishes.',
    eyebrow: 'React 19',
    tags: ['React 19', 'Optimistic UI', 'Mutations'],
    title: 'useOptimistic',
  },
  theory: {
    title: 'Immediate feedback for slow saves',
    summary:
      'Optimistic UI improves perceived performance. The user sees the expected result right away, then the server result confirms or corrects it.',
    points: [
      'Use it when the expected success path is common and rollback is understandable.',
      'Keep the optimistic value visually distinct when it is still pending.',
      'Pair it with real error handling for failed saves in production.',
    ],
    code: `const [optimisticItems, addOptimisticItem] = useOptimistic(
  items,
  (current, draft) => [draft, ...current],
);`,
    whatToTry: [
      'Add a note and notice it appears before the simulated save finishes.',
      'Use this mental model for comments, likes, profile updates, and saved drafts.',
    ],
  },
} as const;

export default function OptimisticPage() {
  return (
    <LearningExamplePage
      codeFilePath="src/components/learning/react19/React19Demos.tsx"
      header={content.header}
      theory={content.theory}
    >
      <OptimisticDemo />
    </LearningExamplePage>
  );
}
