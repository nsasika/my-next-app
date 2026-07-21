import ConceptLessonPage, {
  type ConceptLessonContent,
} from './ConceptLessonPage';
import type { Locale } from '@/i18n/config';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function LocalizedConceptLessonPage({
  content,
}: {
  content: Record<Locale, ConceptLessonContent>;
}) {
  const locale = await getRequestLocale();
  return (
    <ConceptLessonPage content={content[locale]} labels={LEARNING_UI[locale]} />
  );
}
