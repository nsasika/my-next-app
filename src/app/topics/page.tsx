import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TopicsPage = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Topics — coming soon
        </h1>
        <p className="text-muted-foreground">
          The browsing experience (categories, articles, search) is under
          construction. In the meantime, the AI assistant can help you with
          insurance questions directly.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/chat">Ask the assistant</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
};

export default TopicsPage;
