import ConceptLessonPage from '@/components/learning/ConceptLessonPage';
import { PRODUCTION_DIAGNOSTICS_CONTENT } from '@/content/observability';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function FrontendProductionDiagnosticsPage() {
  const locale = await getRequestLocale();

  return (
    <ConceptLessonPage
      content={PRODUCTION_DIAGNOSTICS_CONTENT[locale]}
      labels={LEARNING_UI[locale]}
    />
  );
}
