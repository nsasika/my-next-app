import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function NextjsMiddlewarePage() {
  return <ConceptLessonPage content={nextjsLessons.middleware} />;
}
