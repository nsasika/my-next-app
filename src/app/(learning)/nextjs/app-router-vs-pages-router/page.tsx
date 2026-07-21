import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function AppRouterVsPagesRouterPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].routers,
        si: nextjsLessonsByLocale['si-LK'].routers,
        ta: nextjsLessonsByLocale['ta-LK'].routers,
      }}
    />
  );
}
