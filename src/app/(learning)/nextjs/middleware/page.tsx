import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsMiddlewarePage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.middleware,
        si: nextjsLessonsByLocale.si.middleware,
        ta: nextjsLessonsByLocale.ta.middleware,
      }}
    />
  );
}
