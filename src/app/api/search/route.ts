import { getAllArticles } from '@/lib/content/loader';
import { scoreArticles } from '@/lib/search/score';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') ?? '').trim();

  if (!q) return Response.json({ results: [] });

  const results = scoreArticles(getAllArticles(), q);
  return Response.json({ results });
}
