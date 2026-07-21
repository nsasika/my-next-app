import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsRenderingPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].rendering,
        si: nextjsLessonsByLocale['si-LK'].rendering,
        ta: nextjsLessonsByLocale['ta-LK'].rendering,
      }}
    />
  );
}
