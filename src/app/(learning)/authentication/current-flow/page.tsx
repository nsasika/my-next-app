import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { authenticationFlowByLocale } from '@/content/authenticationFlow';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function CurrentAuthenticationFlowPage() {
  const locale = await getRequestLocale();

  return (
    <ConceptLessonPage
      content={authenticationFlowByLocale[locale]}
      labels={LEARNING_UI[locale]}
    />
  );
}
