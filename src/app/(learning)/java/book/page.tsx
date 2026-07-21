import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';
import { APP_PATHS } from '@/config/routes';
import { javaContentByLocale, javaPageCopy } from '@/content/java/localized';
import { getRequestLocale } from '@/i18n/server';
import { localizePath } from '@/i18n/config';

export default async function JavaBookPage() {
  const locale = await getRequestLocale();
  const content = javaContentByLocale[locale];
  const copy = javaPageCopy[locale];
  const chapters = [
    {
      body: copy.chapterOneBody,
      count: content.chapterOne.length,
      href: localizePath(locale, APP_PATHS.javaChapter1),
      title: copy.chapterOneTitle,
    },
    {
      body: copy.chapterTwoBody,
      count: content.chapterTwo.length,
      href: localizePath(locale, APP_PATHS.javaChapter2),
      title: copy.chapterTwoTitle,
    },
  ];
  return (
    <>
      <PageHeader
        description={copy.bookDescription}
        eyebrow={copy.bookEyebrow}
        tags={['Java', 'Book notes', 'Interview basics']}
        title={content.bookReference.title}
      />

      <ContentCard className="mb-6 overflow-hidden border-sky-200 bg-white">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white shadow-sm">
            <AutoStoriesIcon fontSize="large" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              {copy.bookReference}
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">
              {content.bookReference.title}
            </h2>
            <p className="mt-2 text-sm font-bold text-slate-700">
              {copy.author}: {content.bookReference.author}
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              {content.bookReference.note}
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
              {chapter.count} {copy.topics}
            </p>
            <div className="mt-5">
              <AppButton href={chapter.href} variant="secondary">
                {copy.openChapter}
              </AppButton>
            </div>
          </ContentCard>
        ))}
      </section>
    </>
  );
}
