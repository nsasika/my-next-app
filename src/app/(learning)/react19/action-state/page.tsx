import { ActionStateDemo } from '@/components/learning/react19/React19Demos';
import LearningExamplePage from '@/components/learning/LearningExamplePage';

const content = {
  header: {
    description:
      'useActionState connects a form action, previous result state, and pending status in one hook.',
    eyebrow: 'React 19',
    tags: ['React 19', 'Forms', 'Actions'],
    title: 'useActionState',
  },
  theory: {
    title: 'Form submission without extra loading state',
    summary:
      'useActionState is useful when a form submit should return a result message and expose whether the action is pending.',
    points: [
      'The action receives the previous state and FormData.',
      'React gives back the latest action result and pending status.',
      'Use it for profile forms, settings saves, checkout steps, and validation messages.',
    ],
    code: `const [state, formAction, isPending] = useActionState(
  saveProfile,
  initialState,
);`,
    whatToTry: [
      'Submit an empty name and read the validation message.',
      'Submit a name and watch the pending button text change.',
    ],
  },
} as const;

export default function ActionStatePage() {
  return (
    <LearningExamplePage
      codeFilePath="src/components/learning/react19/React19Demos.tsx"
      header={content.header}
      theory={content.theory}
    >
      <ActionStateDemo />
    </LearningExamplePage>
  );
}
