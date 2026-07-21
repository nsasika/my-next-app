import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function ServerClientComponentsPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale.en.components,
        si: nextjsLessonsByLocale.si.components,
        ta: nextjsLessonsByLocale.ta.components,
      }}
    />
  );
}
