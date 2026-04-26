'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ArticleMeta } from '@/lib/content/loader';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get('q') ?? '';
  const [results, setResults] = useState<ArticleMeta[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(q);

  useEffect(() => {
    if (!q.trim()) return;
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Search failed: ${r.status}`);
        return r.json();
      })
      .then((data: { results: ArticleMeta[] }) => setResults(data.results))
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [q]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('q') as HTMLInputElement;
    const val = input.value.trim();
    if (!val) return;
    router.push(`/search?q=${encodeURIComponent(val)}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-6 flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href="/" aria-label="Back to home">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Search</h1>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              name="q"
              type="search"
              defaultValue={q}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles…"
              className="w-full rounded-lg border bg-background py-3 pl-9 pr-24 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" size="sm" className="absolute right-1.5">
              Search
            </Button>
          </div>
        </form>

        {/* Results */}
        {loading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground py-8 justify-center">
            <Loader2 className="h-4 w-4 animate-spin" />
            Searching…
          </div>
        )}

        {!loading && q && results.length === 0 && (
          <div className="py-12 text-center space-y-4">
            <p className="text-muted-foreground">
              No articles found for &ldquo;{q}&rdquo;
            </p>
            <Button asChild>
              <Link href={`/chat?q=${encodeURIComponent(q)}`}>
                <Sparkles className="mr-2 h-4 w-4" />
                Ask the AI assistant instead
              </Link>
            </Button>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-4">
              {results.length} result{results.length !== 1 ? 's' : ''} for
              &ldquo;{q}&rdquo;
            </p>
            {results.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex items-start justify-between gap-3 rounded-lg border bg-card p-4 shadow-sm transition hover:border-primary/50 hover:shadow-md"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-medium group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] capitalize text-muted-foreground">
                      {article.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {article.summary}
                  </p>
                </div>
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}

            {/* AI fallback */}
            <div className="mt-6 rounded-lg border bg-primary/5 px-4 py-3 flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                Want a more detailed answer?
              </p>
              <Button asChild size="sm">
                <Link href={`/chat?q=${encodeURIComponent(query || q)}`}>
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  Ask AI
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
  <Suspense>
    <SearchResults />
  </Suspense>
);

export default SearchPage;
