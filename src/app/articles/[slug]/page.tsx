import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Sparkles, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getArticle, getAllArticles } from '@/lib/content/loader';

export const generateStaticParams = () =>
  getAllArticles().map((a) => ({ slug: a.slug }));

type Props = { params: { slug: string } };

const ArticlePage = async ({ params }: Props) => {
  const { slug } = params;
  const article = getArticle(slug);
  if (!article) notFound();

  const askUrl = `/chat?q=${encodeURIComponent(`Tell me more about: ${article.title}`)}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Back nav */}
        <div className="mb-6 flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link href={`/topics/${article.category}`} aria-label="Back to category">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
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

        {/* Article header */}
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

        {/* Ask AI banner */}
        <div className="mb-8 flex items-center justify-between gap-3 rounded-lg border bg-primary/5 px-4 py-3">
          <p className="text-sm text-muted-foreground">
            Have a follow-up question about this topic?
          </p>
          <Button asChild size="sm">
            <Link href={askUrl}>
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Ask AI
            </Link>
          </Button>
        </div>

        {/* Article body */}
        <article className="prose-custom">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="mt-8 mb-3 text-2xl font-semibold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-6 mb-2 text-xl font-semibold">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-4 mb-1.5 text-base font-semibold">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="my-3 leading-relaxed text-foreground/90">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="my-3 list-disc space-y-1.5 pl-5">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="my-3 list-decimal space-y-1.5 pl-5">{children}</ol>
              ),
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-3 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">
                  {children}
                </code>
              ),
            }}
          >
            {article.body}
          </ReactMarkdown>
        </article>

        {/* Bottom Ask AI CTA */}
        <div className="mt-10 rounded-xl border bg-muted/30 p-6 text-center">
          <Sparkles className="mx-auto mb-2 h-5 w-5 text-primary" />
          <h2 className="font-semibold mb-1">Still have questions?</h2>
          <p className="text-sm text-muted-foreground mb-4">
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
