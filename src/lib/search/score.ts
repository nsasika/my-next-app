import type { ArticleMeta } from '@/lib/content/loader';

export const scoreArticles = (articles: ArticleMeta[], query: string): ArticleMeta[] => {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return articles
    .map((article) => {
      const haystack = `${article.title} ${article.summary} ${article.category}`.toLowerCase();
      const score = terms.reduce((acc, term) => acc + (haystack.includes(term) ? 1 : 0), 0);
      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);
};
