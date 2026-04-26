# AI Insurance Help Center

A full-stack Next.js help center for a fictional insurance company.

The app combines:

- structured help article browsing
- keyword search
- a streaming AI assistant grounded in local content (RAG)

## Implemented features

- Home page with topic categories, search entry point, and popular questions.
- Topic pages and article pages with markdown rendering.
- Search page with debounce, race-safe requests, and empty-state fallback.
- Streaming AI chat using Gemini.
- RAG pipeline using local Vectra index and source citations in chat.
- Cross-navigation between article pages and chat prefilled prompts.
- Error handling for quota/rate-limit scenarios in chat UI.
- Unit tests for search scoring logic.

## Development process

This project was built and refined using AI-assisted development tools,
including GitHub Copilot and Claude, for brainstorming, implementation
acceleration, and refactoring support.

All architecture decisions, implementation choices, debugging, integration,
and final validation were personally reviewed and owned by me.

## 5-minute setup (interviewer-friendly)

### Prerequisites

- Node.js 22 or newer
- npm 10 or newer
- Google Gemini API key

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example file and set your key:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

Optional overrides:

```env
GEMINI_MODEL=gemini-2.0-flash
GEMINI_EMBEDDING_MODEL=gemini-embedding-001
```

### 3. Build vector index (only if needed)

This repo usually includes a prebuilt index in `data/vectra-index`.
If you need to regenerate from markdown articles:

```bash
npm run ingest
```

### 4. Run locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If 3000 is occupied, Next will choose 3001 automatically.

## Quick verification

1. Open home page and click into Topics and a few Articles.
2. Search for claims and verify relevant results appear.
3. Search for nalin and verify no-result empty state appears.
4. Open chat and ask: How do I submit a car accident claim?
5. Verify chat answer includes source chips linking to article pages.

## Useful scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run start` - run production build output
- `npm run ingest` - rebuild local vector index
- `npm run test` - run unit tests
- `npm run test:watch` - watch-mode tests
- `npm run lint` - lint + prettier check
- `npm run lint:fix` - lint + prettier auto-fix

## Architecture summary

- Frontend: Next.js App Router with React 19 and Tailwind/shadcn components
- Search: keyword scoring from local markdown metadata/content
- AI: Vercel AI SDK + Gemini streaming
- Retrieval: Gemini embeddings + Vectra local index (top-k retrieval)
- Content source: markdown files under content/articles

### Request flow

1. User sends question from chat page.
2. Server embeds query and retrieves relevant docs from Vectra index.
3. Retrieved snippets are injected into prompt context.
4. Gemini streams response.
5. Source metadata is returned and rendered as citation chips.

## Important files

```text
src/app/api/chat/route.ts        streaming chat + retrieval prompt injection
src/app/api/search/route.ts      keyword search endpoint
src/app/page.tsx                 home
src/app/topics/[category]/page.tsx
src/app/articles/[slug]/page.tsx
src/app/search/page.tsx
src/app/chat/page.tsx
src/lib/rag/retrieve.ts          vectra query + query embedding
src/lib/search/score.ts          search ranking logic
src/lib/content/loader.ts        markdown loading helpers
scripts/ingest.mjs               index build script
```

## Known limitations

- Gemini free-tier quotas can return HTTP 429 (RESOURCE_EXHAUSTED).
- Chat history is client-local (browser session), not server-persisted.
- No authentication or policy personalization (out of scope for assignment).

## Troubleshooting

### Port already in use

```bash
pkill -f "next dev"
npm run dev
```

### Stale HMR/cache behavior

```bash
pkill -f "next dev"
rm -rf .next
npm run dev
```

### Quota exceeded in chat

- Verify API key/project quota in Google AI Studio.
- Wait for retry window or daily reset.
- Search and article browsing remain fully functional even if chat is quota-limited.
