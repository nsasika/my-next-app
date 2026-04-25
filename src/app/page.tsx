import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          AI Insurance Help Center
        </h1>
        <p className="text-muted-foreground sm:text-lg">
          Browse help topics or ask the assistant — answers are grounded in our
          help articles and cite their sources.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/chat">Ask the assistant</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/topics">Browse topics</Link>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Scaffold ready. Browsing and chat pages are wired up in Tasks 2–4.
      </p>
    </main>
  );
};

export default HomePage;
