import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function NextjsAuthenticationPage() {
  return <ConceptLessonPage content={nextjsLessons.authentication} />;
}
