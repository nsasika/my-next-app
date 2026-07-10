import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function NextjsCachingPage() {
  return <ConceptLessonPage content={nextjsLessons.caching} />;
}
