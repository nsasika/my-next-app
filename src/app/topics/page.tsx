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
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllArticles, getCategories } from '@/lib/content/loader';

const CATEGORY_META: Record<
  string,
  { label: string; icon: React.ElementType; description: string }
> = {
  claims: { label: 'Claims', icon: FileText, description: 'File, track, and dispute insurance claims' },
  coverage: { label: 'Coverage', icon: Shield, description: 'Understand what your policy covers' },
  billing: { label: 'Billing', icon: CreditCard, description: 'Payments, autopay, and grace periods' },
  health: { label: 'Health', icon: Heart, description: 'Plans, networks, and preventive care' },
  auto: { label: 'Auto', icon: Car, description: 'Car insurance, teens, and roadside help' },
  travel: { label: 'Travel', icon: Plane, description: 'Luggage, cancellation, and trip coverage' },
  life: { label: 'Life', icon: Users, description: 'Term, whole life, and beneficiaries' },
  home: { label: 'Home', icon: Home, description: 'Property coverage and water damage' },
};

const TopicsPage = () => {
  const categories = getCategories();
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8 flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href="/" aria-label="Back to home">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-semibold">All Topics</h1>
            <p className="text-sm text-muted-foreground">
              {articles.length} articles across {categories.length} categories
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {categories.map(({ category, count }) => {
            const meta = CATEGORY_META[category];
            if (!meta) return null;
            const Icon = meta.icon;
            const categoryArticles = articles
              .filter((a) => a.category === category)
              .slice(0, 3);

            return (
              <div key={category} className="rounded-xl border bg-card shadow-sm">
                <div className="flex items-center justify-between p-4 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold">{meta.label}</h2>
                      <p className="text-xs text-muted-foreground">{meta.description}</p>
                    </div>
                  </div>
                  <Link
                    href={`/topics/${category}`}
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    See all {count} <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="border-t px-4 pb-3">
                  {categoryArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="flex items-center justify-between py-2.5 text-sm hover:text-primary transition-colors group border-b last:border-0"
                    >
                      <span>{article.title}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default TopicsPage;
