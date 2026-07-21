import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { foundationLessons } from '@/content/foundations';

export default function FrontendTestingPage() {
  return <ConceptLessonPage content={foundationLessons.frontendTesting} />;
}
