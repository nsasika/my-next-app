import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function NextjsSeoPage() {
  return <ConceptLessonPage content={nextjsLessons.seo} />;
}
