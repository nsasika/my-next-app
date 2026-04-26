import Link from 'next/link';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
    <Shield className="h-10 w-10 text-muted-foreground" />
    <div className="space-y-2">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
    <div className="flex gap-3">
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="/topics">Browse topics</Link>
      </Button>
    </div>
  </main>
);

export default NotFound;
