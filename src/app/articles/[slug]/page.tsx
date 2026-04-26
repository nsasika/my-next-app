import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getArticle, getAllArticles } from '@/lib/content/loader';
import BackButton from '@/components/BackButton';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const generateStaticParams = () =>
  getAllArticles().map((a) => ({ slug: a.slug }));

type Props = { params: Promise<{ slug: string }> };

const ArticlePage = async ({ params }: Props) => {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const askUrl = `/chat?q=${encodeURIComponent(`Tell me more about: ${article.title}`)}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-6 flex items-center gap-2">
          <BackButton href={`/topics/${article.category}`} label="Back to category" />
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/topics" className="hover:text-foreground transition-colors">
              Topics
            </Link>
            <span>/</span>
            <Link
              href={`/topics/${article.category}`}
              className="capitalize hover:text-foreground transition-colors"
            >
              {article.category}
            </Link>
          </nav>
        </div>

        <header className="mb-8 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">{article.title}</h1>
          <p className="text-muted-foreground">{article.summary}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {article.updated && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Updated {article.updated}
              </span>
            )}
            <span className="flex items-center gap-1 capitalize">
              <Tag className="h-3 w-3" />
              {article.category}
            </span>
          </div>
        </header>

        <article>
          <MarkdownRenderer variant="article">{article.body}</MarkdownRenderer>
        </article>

        <div className="mt-10 rounded-xl border bg-muted/30 p-6 text-center">
          <Sparkles className="mx-auto mb-2 h-5 w-5 text-primary" />
          <h2 className="mb-1 font-semibold">Still have questions?</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Our AI assistant can give you step-by-step guidance based on this article and more.
          </p>
          <Button asChild>
            <Link href={askUrl}>Ask the assistant</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
