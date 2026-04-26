'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchForm = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get('q')?.toString().trim() ?? '';
    if (!q) {
      setError(true);
      return;
    }
    setError(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          name="q"
          type="search"
          placeholder="Search help articles…"
          onChange={() => error && setError(false)}
          className={`w-full rounded-lg border bg-background py-3 pl-9 pr-24 text-sm shadow-sm focus:outline-none focus:ring-2 ${
            error ? 'border-destructive focus:ring-destructive/40' : 'focus:ring-ring'
          }`}
        />
        <Button type="submit" size="sm" className="absolute right-1.5">
          Search
        </Button>
      </div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          Please enter a search term.
        </p>
      )}
    </form>
  );
};

export default SearchForm;
