import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  updated: string;
  body: string;
};

export type ArticleMeta = Omit<Article, 'body'>;

const parseArticle = (filename: string): Article => {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf8');
  const { data, content } = matter(raw);
  return {
    slug: String(data.slug ?? filename.replace(/\.md$/, '')),
    title: String(data.title ?? ''),
    category: String(data.category ?? 'coverage'),
    summary: String(data.summary ?? ''),
    updated: String(data.updated ?? ''),
    body: content.trim(),
  };
};

export const getAllArticles = (): ArticleMeta[] => {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));
  return files.map((f) => {
    const { body: _body, ...meta } = parseArticle(f);
    return meta;
  });
};

export const getArticlesByCategory = (category: string): ArticleMeta[] =>
  getAllArticles().filter((a) => a.category === category);

export const getArticle = (slug: string): Article | null => {
  const filename = `${slug}.md`;
  const filepath = path.join(ARTICLES_DIR, filename);
  if (!fs.existsSync(filepath)) return null;
  return parseArticle(filename);
};

export const getCategories = (): Array<{ category: string; count: number }> => {
  const articles = getAllArticles();
  const counts: Record<string, number> = {};
  for (const a of articles) {
    counts[a.category] = (counts[a.category] ?? 0) + 1;
  }
  return Object.entries(counts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
};
