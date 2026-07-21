import ReadingList from '@/components/learning/ReadingList';
import PageHeader from '@/components/ui/PageHeader';
import { javaContentByLocale, javaPageCopy } from '@/content/java/localized';
import { getRequestLocale } from '@/i18n/server';
import { LEARNING_UI } from '@/i18n/learning/ui';

export default async function JavaChapterTwoPage() {
  const locale = await getRequestLocale();
  const copy = javaPageCopy[locale];
  return (
    <>
      <PageHeader
        description={copy.chapterTwoDescription}
        eyebrow="Core Java for the Impatient"
        tags={['Chapter 2', 'Objects', 'Classes']}
        title={copy.chapterTwoTitle}
      />
      <ReadingList
        codeLanguage="java"
        items={javaContentByLocale[locale].chapterTwo}
        labels={LEARNING_UI[locale]}
      />
    </>
  );
}
