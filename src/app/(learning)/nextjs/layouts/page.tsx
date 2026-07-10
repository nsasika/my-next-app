import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function NextjsLayoutsPage() {
  return <ConceptLessonPage content={nextjsLessons.layouts} />;
}
