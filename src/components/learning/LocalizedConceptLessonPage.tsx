import ConceptLessonPage, {
  type ConceptLessonContent,
} from './ConceptLessonPage';
import { getLanguageForLocale, type Language } from '@/i18n/config';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function LocalizedConceptLessonPage({
  content,
}: {
  content: Record<Language, ConceptLessonContent>;
}) {
  const locale = await getRequestLocale();
  return (
    <ConceptLessonPage
      content={content[getLanguageForLocale(locale)]}
      labels={LEARNING_UI[locale]}
    />
  );
}
