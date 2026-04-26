import type { ArticleMeta } from '@/lib/content/loader';

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const scoreArticles = (articles: ArticleMeta[], query: string): ArticleMeta[] => {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  // Build start-boundary patterns: \bclaim matches "claim" and "claims",
  // but \bnalin won't match "journaling" because "nalin" never starts a word.
  const patterns = terms.map((t) => new RegExp(`\\b${escapeRegExp(t)}`, 'i'));

  return articles
    .map((article) => {
      const haystack = `${article.title} ${article.summary} ${article.category}`;
      const score = patterns.reduce((acc, re) => acc + (re.test(haystack) ? 1 : 0), 0);
      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);
};
