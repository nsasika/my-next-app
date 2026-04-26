import { getAllArticles } from '@/lib/content/loader';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') ?? '').trim().toLowerCase();

  if (!q) {
    return Response.json({ results: [] });
  }

  const terms = q.split(/\s+/).filter(Boolean);
  const articles = getAllArticles();

  const scored = articles
    .map((article) => {
      const haystack =
        `${article.title} ${article.summary} ${article.category}`.toLowerCase();
      const score = terms.reduce(
        (acc, term) => acc + (haystack.includes(term) ? 1 : 0),
        0,
      );
      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);

  return Response.json({ results: scored });
}
