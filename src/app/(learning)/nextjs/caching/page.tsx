import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsCachingPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.caching,
        si: nextjsLessonsByLocale.si.caching,
        ta: nextjsLessonsByLocale.ta.caching,
      }}
    />
  );
}
