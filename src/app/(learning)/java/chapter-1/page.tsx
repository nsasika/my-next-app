import ReadingList from '@/components/learning/ReadingList';
import PageHeader from '@/components/ui/PageHeader';
import { chapterOneTopics } from '@/content/java/coreJava';

export default function JavaChapterOnePage() {
  return (
    <>
      <PageHeader
        description="Chapter 1 notes focus on the core building blocks used in small Java programs and interview examples."
        eyebrow="Core Java for the Impatient"
        tags={['Chapter 1', 'Java basics', 'Syntax']}
        title="Chapter 1: Fundamental Programming Structures"
      />
      <ReadingList codeLanguage="java" items={chapterOneTopics} />
    </>
  );
}
