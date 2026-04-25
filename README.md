# AI Insurance Help Center

A modern customer support portal for a fictional insurance company that combines structured browsing with a grounded AI assistant. Built as a take-home assignment.

> **Status:** in development. See [PLAN.md](./PLAN.md) for the full architecture, tradeoffs, and task plan. This README will be expanded for the final submission.

## What's working today

- Tailwind v4 + shadcn/ui scaffold
- Synthetic insurance content corpus (25 markdown articles) under `content/articles/`
- Streaming chat API at `POST /api/chat` backed by Google Gemini

## What's coming

- Chat UI page (`/chat`) — in progress (Task 2)
- RAG retrieval grounding via [Vectra](https://www.npmjs.com/package/vectra) (Task 3)
- Browsing UI: categories, articles, search (Task 4)
- Polish: responsive, follow-ups, chat persistence (Task 5)
- Final README, architecture diagram, demo video (Task 6)

## Quick start (local)

```bash
# 1. Install deps
npm install

# 2. Configure environment
cp .env.example .env.local
# then edit .env.local and add your Gemini API key
# get one at: https://aistudio.google.com/app/apikey

# 3. Run dev server
npm run dev

# Open http://localhost:3000
```

You'll need:

- Node.js 20+
- A free Google Gemini API key (no card required)

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| LLM | Google Gemini (free tier) via `@ai-sdk/google` |
| Embeddings | Gemini `text-embedding-004` (planned) |
| Vector DB | [Vectra](https://www.npmjs.com/package/vectra) — file-based, in-process (planned) |
| Document store | Markdown files in `content/articles/` (version-controlled source of truth) |
| AI SDK | Vercel AI SDK v6 (`ai`, `@ai-sdk/google`, `@ai-sdk/react`) |

## Project structure

```
src/
  app/
    api/chat/route.ts     # streaming chat endpoint (Gemini)
    layout.tsx            # root layout (font, theme, toaster)
    page.tsx              # home (links to /chat and /topics)
  components/ui/          # shadcn primitives
  lib/                    # helpers (cn, future RAG utilities)
content/articles/         # 25 synthetic insurance help articles
scripts/
  seed-articles.mjs       # regenerates content/articles/ from inline data
data/                     # (planned) Vectra index lives here after Task 3
PLAN.md                   # full architecture and task plan
```

## Environment variables

| Name | Required | Purpose |
|---|---|---|
| `GOOGLE_GENERATIVE_AI_API_KEY` | yes | Gemini API key for chat and embeddings |
| `GEMINI_MODEL` | no | Override the default chat model (`gemini-2.0-flash`) |
| `GEMINI_EMBEDDING_MODEL` | no | Override the default embedding model (`text-embedding-004`) |

For Vercel deploys, set these in **Project Settings → Environment Variables** in addition to local `.env.local`.

## Branching

- `main` — unrelated existing work, untouched
- `assignment-release` — production branch (auto-deployed on Vercel)
- `assignment/task-N-*` — feature branches per task

Each task lives on its own branch and merges into `assignment-release` when complete.
