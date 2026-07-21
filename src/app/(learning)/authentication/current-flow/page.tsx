import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { foundationLessons } from '@/content/foundations';

export default function CurrentAuthenticationFlowPage() {
  return (
    <ConceptLessonPage content={foundationLessons.currentAuthenticationFlow} />
  );
}
