# AI Insurance Help Center — Plan

## What we're building
A Next.js help center for a fictional insurance company combining:
1. **Browsing** — categories, articles, search
2. **AI assistant** — chat interface that answers grounded in the help content (RAG)
3. **Seamless handoff** — user can move between browsing and asking AI

## Stack (locked)
| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router, TS) | Required by brief; full-stack in one repo (UI + API routes) |
| Styling | Tailwind + shadcn/ui | Brief allows; fastest path to polished UI |
| LLM | Google Gemini (free tier) | Generous free tier, easy auth, good for RAG |
| Embeddings | Gemini `text-embedding-004` | Same provider, no extra account |
| Vector DB | [Vectra](https://www.npmjs.com/package/vectra) — file-based vector index | Real named vector DB. Pure JS, no external service, persists to disk. Right-sized for the 25-doc corpus; cosine search built in |
| Document store | Markdown files in `content/articles/` + Vectra metadata | Articles are version-controlled source of truth. Vectra stores the full chunk text as metadata alongside vectors, so retrieval returns documents + scores in one query |
| State (chat) | React state + `useChat` from `ai/react` (Vercel AI SDK) | Streaming, message history, easy retries |

**Tradeoffs to call out in README:**
- **Vector DB choice (Vectra over Pinecone/Supabase):** Vectra is a lightweight, file-based vector DB that fits a 25-document corpus better than cloud-hosted alternatives. No external service to depend on, zero network latency on retrieval, persists across deploys via the committed index. The retrieval abstraction (`retrieve(query, k)`) makes swapping in a heavier DB trivial if the corpus grows.
- **Document store:** Markdown files in `content/articles/` are the source of truth (version-controlled, easy to inspect). Vectra metadata holds the chunk text needed for grounding context, so the vector store doubles as the retrieved-document store.
- **Dataset choice (synthetic over crawled):** The brief allows either. Synthetic guarantees coverage of every sample question and avoids scraper brittleness; the generator script is committed so the corpus is reproducible and extensible.

## Architecture

```
Browser
  ├── /                    → home (search bar, top categories)
  ├── /topics/[category]   → article list
  ├── /articles/[slug]     → article detail (with "Ask AI about this" CTA)
  └── /chat                → full-screen AI chat (also embeddable as a widget)
                                │
                                ▼
                          POST /api/chat
                                │
                                ├── retrieve top-K chunks from vector index
                                ├── build prompt with grounded context + citations
                                └── stream response from Gemini
```

Key file layout (target):
```
src/
  app/
    page.tsx                 # home
    topics/[slug]/page.tsx
    articles/[slug]/page.tsx
    chat/page.tsx
    api/chat/route.ts        # streaming endpoint
    api/search/route.ts      # keyword + semantic search
  components/
    chat/                    # MessageList, MessageInput, SourceList
    help/                    # CategoryCard, ArticleCard, SearchBar
    layout/                  # Header, Sidebar
  lib/
    rag/
      embed.ts               # Gemini embeddings client
      index.ts               # load/save vector index
      retrieve.ts            # cosine top-K
    llm/gemini.ts            # streaming wrapper
    content/loader.ts        # read MD/JSON content
content/
  articles/*.md              # source content with frontmatter (slug, category, title)
data/
  index.json                 # generated: { id, slug, embedding[] } per chunk
scripts/
  ingest.ts                  # build data/index.json from content/
```

## Task sequence (vertical slice → expand)

### Task 1 — Foundation (1–2h)
- Confirm Next.js scaffold runs (`npm run dev` shows starter page)
- Install deps: `tailwindcss`, `shadcn`, `ai`, `@google/generative-ai`, `gray-matter`, `zod`
- Init shadcn (`npx shadcn@latest init`)
- Get Gemini API key (https://aistudio.google.com → Get API key, free tier)
- Set up `.env.local` with `GOOGLE_GENERATIVE_AI_API_KEY=...`
- Generate ~25 synthetic insurance articles in `content/articles/*.md` (auto, AI-generated, covering claims, coverage, billing, life/health/auto/travel/home)
- Commit on `assignment/task-1-foundation`

### Task 2 — Chat MVP, no RAG yet (2–3h)
- `app/api/chat/route.ts`: streaming endpoint calling Gemini with a hardcoded "you are an insurance support assistant" system prompt
- `app/chat/page.tsx`: chat UI using Vercel AI SDK `useChat` — message list, input, streaming render
- Loading + error states
- Verify end-to-end: ask "what is a deductible?" → get a streaming answer
- This proves AI integration works before adding RAG complexity
- Commit on `assignment/task-2-chat-mvp`

### Task 3 — Add RAG with Vectra (3–4h)
- Add `vectra` dependency
- `scripts/ingest.ts`: read `content/articles/*.md`, chunk (~500 tokens), embed via Gemini `text-embedding-004`, upsert into Vectra index at `data/vectra-index/`
- `lib/rag/retrieve.ts`: open the Vectra index on cold start, query top-K (K=4) with metadata
- Update `/api/chat`: retrieve before generation, inject context with explicit "cite the article slug" instruction, return sources alongside the response
- UI: render source citations under each AI message as clickable chips → article page
- Commit on `assignment/task-3-rag`

### Task 4 — Browsing UI (3–4h)
- Home: hero + search bar + category grid
- `/topics/[slug]`: article list per category
- `/articles/[slug]`: rendered MD article + "Ask AI about this" button (deep-links to /chat with prefilled context)
- `/api/search`: keyword search across titles + semantic search via embeddings; merged ranking
- Search results page or inline dropdown
- Commit on `assignment/task-4-browse`

### Task 5 — Polish + integration touches (2–3h)
- Mobile responsive pass (chat and article pages especially)
- Empty states, error boundaries, retry on chat failure
- Skeleton loaders during streaming
- "Suggested follow-ups" chips after each AI answer (3 contextual prompts)
- Persist chat history in `localStorage` (session-scoped)
- Cross-link: AI answer cites article → click → article page → "Ask follow-up" → /chat with thread restored
- Commit on `assignment/task-5-polish`

### Task 6 — Submission (2h)
- README.md with: setup, env vars, AI provider, architecture diagram, tradeoffs, assumptions
- Optional 2-min demo video (Loom or QuickTime)
- Run `next build` to confirm no errors
- ZIP the repo (excluding `node_modules`, `.next`, `.git`)
- Submit via Google Form

## Decisions / open questions
- **Auth?** Not in brief. Skip. (Note in README as assumption.)
- **Multi-tenancy / accounts?** Skip. Stateless demo.
- **Persisting chat history server-side?** Skip. localStorage only.
- **Streaming?** Yes — Vercel AI SDK handles it.
- **Markdown rendering for AI responses?** Yes — `react-markdown` + `remark-gfm`.

## Time budget total: ~14–18h focused work
Spread across evenings/weekend. Each task is committable in isolation.
