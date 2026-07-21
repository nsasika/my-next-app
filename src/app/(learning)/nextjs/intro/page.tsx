import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function IntroToNextjsPage() {
  return <ConceptLessonPage content={nextjsLessons.intro} />;
}
