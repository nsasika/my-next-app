import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function ServerClientComponentsPage() {
  return <ConceptLessonPage content={nextjsLessons.components} />;
}
