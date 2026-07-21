import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsLayoutsPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.layouts,
        si: nextjsLessonsByLocale.si.layouts,
        ta: nextjsLessonsByLocale.ta.layouts,
      }}
    />
  );
}
