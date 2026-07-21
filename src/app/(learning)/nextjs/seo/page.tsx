import LocalizedConceptLessonPage from '@/components/learning/LocalizedConceptLessonPage';
import { nextjsLessonsByLocale } from '@/content/nextjsLocalized';

export default function NextjsSeoPage() {
  return (
    <LocalizedConceptLessonPage
      content={{
        en: nextjsLessonsByLocale['en-US'].seo,
        si: nextjsLessonsByLocale['si-LK'].seo,
        ta: nextjsLessonsByLocale['ta-LK'].seo,
      }}
    />
  );
}
