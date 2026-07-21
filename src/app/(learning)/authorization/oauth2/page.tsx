import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { foundationLessons } from '@/content/foundations';

export default function OAuth2AuthorizationPage() {
  return <ConceptLessonPage content={foundationLessons.oauth2Authorization} />;
}
