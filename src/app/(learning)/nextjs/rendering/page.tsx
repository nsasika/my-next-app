import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsRenderingPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.rendering,
        si: nextjsLessonsByLocale.si.rendering,
        ta: nextjsLessonsByLocale.ta.rendering,
      }}
    />
  );
}
