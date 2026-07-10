import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function NextjsRenderingPage() {
  return <ConceptLessonPage content={nextjsLessons.rendering} />;
}
