import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsLayoutsPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].layouts,
        si: nextjsLessonsByLocale['si-LK'].layouts,
        ta: nextjsLessonsByLocale['ta-LK'].layouts,
      }}
    />
  );
}
