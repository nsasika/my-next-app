import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { frontendTestingByLocale } from '@/content/foundationsLocalized';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function FrontendTestingPage() {
  const locale = await getRequestLocale();
  return (
    <ConceptLessonPage
      content={frontendTestingByLocale[locale]}
      labels={LEARNING_UI[locale]}
    />
  );
}
