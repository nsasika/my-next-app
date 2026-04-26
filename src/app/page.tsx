import Link from 'next/link';
import {
  Shield,
  FileText,
  CreditCard,
  Heart,
  Car,
  Plane,
  Users,
  Home,
  Search,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCategories } from '@/lib/content/loader';

const CATEGORY_META: Record<
  string,
  { label: string; icon: React.ElementType; description: string }
> = {
  claims: {
    label: 'Claims',
    icon: FileText,
    description: 'File, track, and dispute insurance claims',
  },
  coverage: {
    label: 'Coverage',
    icon: Shield,
    description: 'Understand what your policy covers',
  },
  billing: {
    label: 'Billing',
    icon: CreditCard,
    description: 'Payments, autopay, and grace periods',
  },
  health: {
    label: 'Health',
    icon: Heart,
    description: 'Plans, networks, and preventive care',
  },
  auto: {
    label: 'Auto',
    icon: Car,
    description: 'Car insurance, teens, and roadside help',
  },
  travel: {
    label: 'Travel',
    icon: Plane,
    description: 'Luggage, cancellation, and trip coverage',
  },
  life: {
    label: 'Life',
    icon: Users,
    description: 'Term, whole life, and beneficiaries',
  },
  home: {
    label: 'Home',
    icon: Home,
    description: 'Property coverage and water damage',
  },
};

const HomePage = () => {
  const categories = getCategories();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/30 px-6 py-14 text-center">
        <div className="mx-auto max-w-2xl space-y-5">
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-7 w-7 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              InsureAI
            </span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Insurance Help Center
          </h1>
          <p className="text-muted-foreground sm:text-lg">
            Browse help topics or ask our AI assistant — answers are grounded in
            our help articles and always cite their sources.
          </p>

          {/* Search bar → /search */}
          <form action="/search" method="GET" className="mx-auto max-w-lg">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                name="q"
                type="search"
                placeholder="Search help articles…"
                className="w-full rounded-lg border bg-background py-3 pl-9 pr-24 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1.5"
              >
                Search
              </Button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-3 pt-1">
            <Button asChild size="lg">
              <Link href="/chat">
                <Sparkles className="mr-2 h-4 w-4" />
                Ask the assistant
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/topics">Browse all topics</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-xl font-semibold">Browse by category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map(({ category, count }) => {
            const meta = CATEGORY_META[category];
            if (!meta) return null;
            const Icon = meta.icon;
            return (
              <Link
                key={category}
                href={`/topics/${category}`}
                className="group flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm transition hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-primary/10 p-1.5">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {meta.label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  {meta.description}
                </p>
                <span className="text-xs text-muted-foreground">
                  {count} {count === 1 ? 'article' : 'articles'}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Sample questions strip */}
      <section className="border-t bg-muted/20 px-6 py-10">
        <div className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold">Popular questions</h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              'How do I submit a car accident claim?',
              'What does deductible mean in my policy?',
              'Am I covered if my luggage is lost during travel?',
              'How long does it take to process a claim?',
              'What is the difference between term and whole life insurance?',
              'What happens if I miss a payment?',
            ].map((q) => (
              <Link
                key={q}
                href={`/chat?q=${encodeURIComponent(q)}`}
                className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2.5 text-sm transition hover:border-primary/50 hover:bg-accent"
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
                {q}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
