/**
 * src/lib/rag/retrieve.ts
 *
 * Vectra-backed top-K retrieval for the chat endpoint.
 *
 * Design notes:
 *  - Embeddings come from Gemini `gemini-embedding-001` with `RETRIEVAL_QUERY`
 *    task-type so the query and document embeddings live in the same space.
 *  - The Vectra index is loaded lazily on the first call and cached for the
 *    process lifetime. In serverless this means a small cold-start hit per
 *    container — acceptable for a 25-doc corpus.
 *  - Falls back to an empty result set (rather than throwing) when the index
 *    isn't built yet, so the chat endpoint can still respond with "no
 *    grounding context available" rather than failing the request.
 */
import path from 'node:path';
import { LocalIndex } from 'vectra';

export type RetrievedChunk = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  excerpt: string;
  score: number;
};

type ArticleMetadata = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string;
};

const INDEX_DIR = path.join(process.cwd(), 'data', 'vectra-index');
const EMBEDDING_MODEL =
  process.env.GEMINI_EMBEDDING_MODEL ?? 'gemini-embedding-001';

let cachedIndex: LocalIndex | null = null;
let cachedReady: Promise<boolean> | null = null;

const getIndex = async () => {
  if (cachedIndex && cachedReady && (await cachedReady)) {
    return cachedIndex;
  }

  cachedIndex = new LocalIndex(INDEX_DIR);
  cachedReady = cachedIndex.isIndexCreated();
  return (await cachedReady) ? cachedIndex : null;
};

const embedQuery = async (text: string): Promise<number[]> => {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_GENERATIVE_AI_API_KEY is not set');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      content: { parts: [{ text }] },
      taskType: 'RETRIEVAL_QUERY',
    }),
  });

  if (!res.ok) {
    throw new Error(`Embedding API ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as { embedding?: { values?: number[] } };
  if (!data.embedding?.values) {
    throw new Error('Embedding API returned no values');
  }

  return data.embedding.values;
};

const buildExcerpt = (body: string, maxChars = 480) => {
  const compact = body.replace(/\s+/g, ' ').trim();
  if (compact.length <= maxChars) return compact;
  return `${compact.slice(0, maxChars).trimEnd()}…`;
};

export const retrieveRelevantChunks = async (
  query: string,
  topK = 4,
): Promise<RetrievedChunk[]> => {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const index = await getIndex();
  if (!index) {
    console.warn(
      '[rag] Vectra index not found at',
      INDEX_DIR,
      '— run `npm run ingest` to build it.',
    );
    return [];
  }

  let queryVector: number[];
  try {
    queryVector = await embedQuery(trimmed);
  } catch (err) {
    console.error('[rag] embedQuery failed', err);
    return [];
  }

  // Vectra's queryItems signature: (vector, query, topK). The `query` string
  // is for hybrid BM25 boosting; an empty string keeps it pure cosine.
  const results = await index.queryItems<ArticleMetadata>(queryVector, '', topK);

  return results.map((result) => ({
    slug: result.item.metadata.slug,
    title: result.item.metadata.title,
    category: result.item.metadata.category,
    summary: result.item.metadata.summary,
    excerpt: buildExcerpt(result.item.metadata.body),
    score: result.score,
  }));
};
