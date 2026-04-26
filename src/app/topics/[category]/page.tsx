import { notFound } from 'next/navigation';
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
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getArticlesByCategory, getCategories } from '@/lib/content/loader';

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

export const generateStaticParams = () =>
  getCategories().map(({ category }) => ({ category }));

type Props = { params: Promise<{ category: string }> };

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  if (!meta) notFound();

  const articles = getArticlesByCategory(category);
  const Icon = meta.icon;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link href="/topics" aria-label="Back to topics">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary/10 p-2">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{meta.label}</h1>
              <p className="text-sm text-muted-foreground">{meta.description}</p>
            </div>
          </div>
        </div>

        {/* Article list */}
        <div className="space-y-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex items-start justify-between gap-3 rounded-lg border bg-card p-4 shadow-sm transition hover:border-primary/50 hover:shadow-md"
            >
              <div className="space-y-1">
                <h2 className="font-medium group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-snug">
                  {article.summary}
                </p>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>

        {/* AI CTA */}
        <div className="mt-8 rounded-xl border bg-primary/5 p-5 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <Button asChild>
            <Link href={`/chat?q=I have a question about ${meta.label.toLowerCase()} insurance`}>
              <Sparkles className="mr-2 h-4 w-4" />
              Ask the AI assistant
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
