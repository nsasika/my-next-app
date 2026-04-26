import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getAllArticles, getCategories } from '@/lib/content/loader';
import { CATEGORY_META } from '@/lib/content/categories';
import BackButton from '@/components/BackButton';

const TopicsPage = () => {
  const categories = getCategories();
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8 flex items-center gap-3">
          <BackButton href="/" label="Back to home" />
          <div>
            <h1 className="text-2xl font-semibold">All Topics</h1>
            <p className="text-sm text-muted-foreground">
              {articles.length} articles across {categories.length} categories
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {categories.map(({ category, count }) => {
            const meta = CATEGORY_META[category];
            if (!meta) return null;
            const Icon = meta.icon;
            const categoryArticles = articles.filter((a) => a.category === category).slice(0, 3);

            return (
              <div key={category} className="rounded-xl border bg-card shadow-sm">
                <div className="flex items-center justify-between p-4 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold">{meta.label}</h2>
                      <p className="text-xs text-muted-foreground">{meta.description}</p>
                    </div>
                  </div>
                  <Link
                    href={`/topics/${category}`}
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    See all {count} <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="border-t px-4 pb-3">
                  {categoryArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group flex items-center justify-between border-b py-2.5 text-sm last:border-0 transition-colors hover:text-primary"
                    >
                      <span>{article.title}</span>
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default TopicsPage;
