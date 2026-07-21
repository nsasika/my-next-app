import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function AppRouterVsPagesRouterPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.routers,
        si: nextjsLessonsByLocale.si.routers,
        ta: nextjsLessonsByLocale.ta.routers,
      }}
    />
  );
}
