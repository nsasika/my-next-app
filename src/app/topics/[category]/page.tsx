import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getArticlesByCategory, getCategories } from '@/lib/content/loader';
import { CATEGORY_META } from '@/lib/content/categories';
import BackButton from '@/components/BackButton';
import ArticleCard from '@/components/ArticleCard';

export const generateStaticParams = () =>
  getCategories().map(({ category }) => ({ category }));

type Props = { params: Promise<{ category: string }> };

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  if (!meta) notFound();

  const articles = getArticlesByCategory(category);
  const Icon = meta.icon;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-8 flex items-center gap-3">
          <BackButton href="/topics" label="Back to topics" />
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary/10 p-2">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{meta.label}</h1>
              <p className="text-sm text-muted-foreground">{meta.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-primary/5 p-5 text-center">
          <p className="mb-3 text-sm text-muted-foreground">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <Button asChild>
            <Link href={`/chat?q=I have a question about ${meta.label.toLowerCase()} insurance`}>
              <Sparkles className="mr-2 h-4 w-4" />
              Ask the AI assistant
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
