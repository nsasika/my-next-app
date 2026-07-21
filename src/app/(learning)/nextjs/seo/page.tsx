import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsSeoPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.seo,
        si: nextjsLessonsByLocale.si.seo,
        ta: nextjsLessonsByLocale.ta.seo,
      }}
    />
  );
}
