import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import { APP_PATHS } from '@/config/routes';
import {
  bookReference,
  chapterOneTopics,
  chapterTwoTopics,
} from '@/content/java/coreJava';

const chapters = [
  {
    body: 'Primitive data types, variables, arithmetic operations, strings, input/output, arrays, and array lists.',
    count: chapterOneTopics.length,
    href: APP_PATHS.javaChapter1,
    title: 'Chapter 1: Fundamental programming structures',
  },
  {
    body: 'Functional decomposition, classes, object construction, records, factory methods, static members, and packages.',
    count: chapterTwoTopics.length,
    href: APP_PATHS.javaChapter2,
    title: 'Chapter 2: Object-oriented programming',
  },
] as const;

export default function JavaBookPage() {
  return (
    <>
      <PageHeader
        description="This is one guided study option inside the Java track. The notes are split by chapter so each section can grow independently as you continue studying."
        eyebrow="Java book option"
        tags={['Java', 'Book notes', 'Interview basics']}
        title={bookReference.title}
      />

      <ContentCard className="mb-6 overflow-hidden border-sky-200 bg-white">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white shadow-sm">
            <AutoStoriesIcon fontSize="large" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              Book reference
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">
              {bookReference.title}
            </h2>
            <p className="mt-2 text-sm font-bold text-slate-700">
              Author: {bookReference.author}
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              {bookReference.note}
            </p>
          </div>
        </div>
      </ContentCard>

      <section className="grid gap-4 md:grid-cols-2">
        {chapters.map((chapter) => (
          <ContentCard key={chapter.href}>
            <div className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
              <MenuBookIcon fontSize="small" />
            </div>
            <h2 className="mt-4 text-xl font-black leading-7 text-slate-950">
              {chapter.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {chapter.body}
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              {chapter.count} topics
            </p>
            <div className="mt-5">
              <AppButton href={chapter.href} variant="secondary">
                Open chapter
              </AppButton>
            </div>
          </ContentCard>
        ))}
      </section>
    </>
  );
}
