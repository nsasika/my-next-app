import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { javaContentByLocale } from '@/content/java/localized';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function JavaBackendTestingPage() {
  const locale = await getRequestLocale();
  return (
    <ConceptLessonPage
      content={javaContentByLocale[locale].backendTesting}
      labels={LEARNING_UI[locale]}
    />
  );
}
