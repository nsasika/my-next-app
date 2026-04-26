'use client';

import { useEffect, useRef, useState, useTransition, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ArrowLeft, ChevronRight, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ArticleMeta } from '@/lib/content/loader';

const DEBOUNCE_MS = 300;

const useSearch = (initial: string) => {
  const [query, setQuery] = useState(initial);
  const [results, setResults] = useState<ArticleMeta[]>([]);
  const [isPending, startTransition] = useTransition();
  const [fetching, setFetching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Abort controller for the in-flight fetch — cancels stale requests when a
  // newer query fires before the previous one completes.
  const abortRef = useRef<AbortController | null>(null);

  const runSearch = (q: string) => {
    if (!q.trim()) { setResults([]); return; }

    // Cancel any in-flight request for an older query
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setFetching(true);
    startTransition(() => {
      fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: controller.signal })
        .then((r) => r.json())
        .then((data: { results: ArticleMeta[] }) => setResults(data.results))
        .catch((err) => { if (err.name !== 'AbortError') setResults([]); })
        .finally(() => setFetching(false));
    });
  };

  const handleChange = (value: string) => {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => runSearch(value), DEBOUNCE_MS);
  };

  useEffect(() => {
    if (initial.trim()) runSearch(initial);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      abortRef.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { query, results, loading: isPending || fetching, handleChange };
};

const SearchResults = () => {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q') ?? '';
  const { query, results, loading, handleChange } = useSearch(initialQ);
  const isEmpty = !loading && query.trim() && results.length === 0;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-6 flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href="/" aria-label="Back to home"><ArrowLeft className="h-4 w-4" /></Link>
          </Button>
          <h1 className="text-xl font-semibold">Search</h1>
        </div>

        <div className="relative mb-8 flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
          {loading && <Loader2 className="absolute right-3 h-4 w-4 animate-spin text-muted-foreground" />}
          <input
            type="search"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search help articles…"
            autoFocus
            className="w-full rounded-lg border bg-background py-3 pl-9 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {!query.trim() && (
          <p className="text-center text-sm text-muted-foreground py-12">
            Start typing to search across all help articles.
          </p>
        )}

        {isEmpty && (
          <div className="py-12 text-center space-y-4">
            <p className="text-muted-foreground">No articles found for &ldquo;{query}&rdquo;</p>
            <Button asChild>
              <Link href={`/chat?q=${encodeURIComponent(query)}`}>
                <Sparkles className="mr-2 h-4 w-4" />Ask the AI assistant instead
              </Link>
            </Button>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-4">
              {results.length} result{results.length !== 1 ? 's' : ''}
              {query.trim() && <> for &ldquo;{query}&rdquo;</>}
            </p>
            {results.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex items-start justify-between gap-3 rounded-lg border bg-card p-4 shadow-sm transition hover:border-primary/50 hover:shadow-md"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-medium group-hover:text-primary transition-colors">{article.title}</h2>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] capitalize text-muted-foreground">{article.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{article.summary}</p>
                </div>
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
            <div className="mt-6 rounded-lg border bg-primary/5 px-4 py-3 flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">Want a more detailed answer?</p>
              <Button asChild size="sm">
                <Link href={`/chat?q=${encodeURIComponent(query)}`}>
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />Ask AI
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

const SearchPage = () => (
  <Suspense><SearchResults /></Suspense>
);

export default SearchPage;
