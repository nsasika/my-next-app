import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsCachingPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].caching,
        si: nextjsLessonsByLocale['si-LK'].caching,
        ta: nextjsLessonsByLocale['ta-LK'].caching,
      }}
    />
  );
}
