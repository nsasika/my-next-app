import ReadingList from '@/components/learning/ReadingList';
import PageHeader from '@/components/ui/PageHeader';
import { chapterTwoTopics } from '@/content/java/coreJava';

export default function JavaChapterTwoPage() {
  return (
    <>
      <PageHeader
        description="Chapter 2 notes move from simple statements into methods, objects, records, static members, and packages."
        eyebrow="Core Java for the Impatient"
        tags={['Chapter 2', 'Objects', 'Classes']}
        title="Chapter 2: Object-Oriented Programming"
      />
      <ReadingList codeLanguage="java" items={chapterTwoTopics} />
    </>
  );
}
