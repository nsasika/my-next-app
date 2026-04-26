/**
 * scripts/ingest.mjs
 *
 * Builds the Vectra index from `content/articles/*.md`.
 *
 * Strategy:
 *  - One vector per article. The corpus is small (25 docs) and each article is
 *    short enough that whole-article embeddings preserve more semantic context
 *    than aggressive chunking.
 *  - Embeddings come from Gemini `gemini-embedding-001` via the public REST API.
 *    Using fetch keeps the script free of build-time deps on the AI SDK.
 *  - The full markdown body is stored in vector metadata so retrieve.ts can
 *    return grounding text in a single round trip.
 *
 * Run with: `npm run ingest` (loads .env.local for GOOGLE_GENERATIVE_AI_API_KEY).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { LocalIndex } from 'vectra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const ARTICLES_DIR = path.join(ROOT, 'content', 'articles');
const INDEX_DIR = path.join(ROOT, 'data', 'vectra-index');
const EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL ?? 'gemini-embedding-001';

const loadEnvLocal = async () => {
  // We avoid pulling in dotenv as a dep; .env.local is a flat key=value file.
  try {
    const raw = await fs.readFile(path.join(ROOT, '.env.local'), 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq < 0) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = value;
    }
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
};

const embed = async (text, apiKey) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      content: { parts: [{ text }] },
      // taskType improves embedding quality for retrieval workloads. The
      // ingest side uses RETRIEVAL_DOCUMENT; query side uses RETRIEVAL_QUERY.
      taskType: 'RETRIEVAL_DOCUMENT',
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Embedding API ${res.status}: ${body}`);
  }

  const data = await res.json();
  if (!data?.embedding?.values) {
    throw new Error(`Embedding API returned unexpected payload: ${JSON.stringify(data)}`);
  }

  return data.embedding.values;
};

const main = async () => {
  await loadEnvLocal();
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    console.error('GOOGLE_GENERATIVE_AI_API_KEY is not set. Add it to .env.local.');
    process.exit(1);
  }

  const files = (await fs.readdir(ARTICLES_DIR)).filter((file) => file.endsWith('.md'));
  if (files.length === 0) {
    console.error(`No markdown files found in ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const index = new LocalIndex(INDEX_DIR);
  if (await index.isIndexCreated()) {
    // Rebuild from scratch each time so the on-disk index always matches the
    // current articles. With 25 docs this is cheap; with thousands we'd diff.
    await fs.rm(INDEX_DIR, { recursive: true, force: true });
  }
  await index.createIndex();

  console.log(`Embedding ${files.length} articles with ${EMBEDDING_MODEL}...`);

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const raw = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(raw);

    const slug = String(data.slug ?? file.replace(/\.md$/, ''));
    const title = String(data.title ?? slug);
    const category = String(data.category ?? 'coverage');
    const summary = String(data.summary ?? '');
    const body = content.trim();

    // Embed the title + summary + body so the vector captures both the topic
    // signal (title) and the prose (body) in one representation.
    const embedInput = `${title}\n\n${summary}\n\n${body}`;
    const vector = await embed(embedInput, apiKey);

    await index.insertItem({
      id: slug,
      vector,
      metadata: { slug, title, category, summary, body },
    });

    console.log(`  ✓ ${slug}`);
  }

  console.log(`\nIndex written to ${path.relative(ROOT, INDEX_DIR)}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
