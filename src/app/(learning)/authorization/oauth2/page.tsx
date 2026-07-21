import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { oauthLessonByLocale } from '@/content/foundationsLocalized';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function OAuth2AuthorizationPage() {
  const locale = await getRequestLocale();
  return (
    <ConceptLessonPage
      content={oauthLessonByLocale[locale]}
      labels={LEARNING_UI[locale]}
    />
  );
}
