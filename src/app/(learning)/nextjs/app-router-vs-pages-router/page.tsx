import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { nextjsLessons } from '@/content/nextjsLessons';

export default function AppRouterVsPagesRouterPage() {
  return <ConceptLessonPage content={nextjsLessons.routers} />;
}
