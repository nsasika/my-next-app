# AI Insurance Help Center - Implementation Plan and Status

This document summarizes completed implementation status for reviewer clarity.
It is intentionally brief and practical.

## Development process

This project was built and refined using AI-assisted development tools,
including GitHub Copilot and Claude, for brainstorming, implementation
acceleration, and refactoring support.

All architecture decisions, implementation choices, debugging, integration,
and final validation were personally reviewed and owned by me.

## 1) Assignment goal

Build a Next.js insurance help-center that combines:

1. Structured browsing (topics, articles, search)
2. AI assistant chat
3. Grounded answers using local help content (RAG)

## 2) Final stack used

| Layer | Choice | Status |
|---|---|---|
| Framework | Next.js App Router + TypeScript | Done |
| Styling | Tailwind + shadcn/ui | Done |
| LLM | Gemini via Vercel AI SDK | Done |
| Embeddings | Gemini embedding model | Done |
| Vector store | Vectra local file index | Done |
| Content store | Markdown in content/articles | Done |
| Search | Local keyword scoring API | Done |
| Tests | Vitest (search logic) | Done |

## 3) Task-by-task completion

| Task | Planned scope | Final status |
|---|---|---|
| Task 1 Foundation | project setup, content seed, env wiring | Completed |
| Task 2 Chat MVP | streaming chat endpoint + UI | Completed |
| Task 3 RAG | retrieval + source citations | Completed |
| Task 4 Browse UI | topics, article pages, search | Completed |
| Task 5 Polish | follow-ups, persistence, empty/error states, responsive | Completed |
| Task 6 Submission prep | docs + build verification | Completed |

## 4) Implemented architecture

User flow:

1. Home page introduces categories, search, and quick AI prompts.
2. Users browse topic pages and article pages.
3. Search page and search API provide keyword-based matches.
4. Chat endpoint retrieves top-k relevant article content from Vectra.
5. Gemini response is streamed and citations are attached as metadata.
6. Chat UI renders source chips linking back to article pages.

High-level routes:

- /: home
- /topics: all categories
- /topics/[category]: articles by category
- /articles/[slug]: article details
- /search: interactive search page
- /chat: AI chat
- /api/search: search API
- /api/chat: streaming AI + retrieval

## 5) Important design decisions

1. Vectra over managed cloud vector DB
Reason: easier setup for reviewers, no external vector service needed.

2. Markdown as source of truth
Reason: version-controlled, transparent, and easy to inspect.

3. Word-boundary scoring for search
Reason: prevents false positives like nalin matching journaling.

4. Retrieval-first chat prompt
Reason: keeps answers grounded and enables clickable citations.

5. Client-side session persistence for chat
Reason: enough for take-home scope without adding auth/back-end persistence.

## 6) Reviewer test plan (manual)

1. Start app and open home page.
2. Navigate to topics, then into an article.
3. Click Ask AI from an article and verify chat prefill behavior.
4. Ask: How do I submit a car accident claim?
Expected: answer plus relevant source chip.
5. Search for claims.
Expected: relevant claim-related articles.
6. Search for nalin.
Expected: no-result state.

## 7) Build and test status

- `npm run build`: passing
- `npm run test`: passing
- Core routes tested locally with successful responses

## 8) Known constraints

1. Gemini free-tier quota can return 429 RESOURCE_EXHAUSTED during chat tests.
2. No authentication or account-level policy personalization.
3. Chat history is local (browser), not server persisted.

## 9) Optional future improvements

1. Add semantic re-ranking for search endpoint.
2. Add citation confidence/score display in chat UI.
3. Add authenticated user context and policy-aware answers.
4. Add E2E tests for chat, search, and navigation flows.
