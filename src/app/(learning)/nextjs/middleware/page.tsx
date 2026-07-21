import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsMiddlewarePage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].middleware,
        si: nextjsLessonsByLocale['si-LK'].middleware,
        ta: nextjsLessonsByLocale['ta-LK'].middleware,
      }}
    />
  );
}
