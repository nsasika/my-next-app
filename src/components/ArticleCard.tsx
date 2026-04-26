import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { ArticleMeta } from '@/lib/content/loader';

type Props = {
  article: ArticleMeta;
  /** Show the category badge — useful in search results where articles span categories */
  showCategory?: boolean;
};

const ArticleCard = ({ article, showCategory = false }: Props) => (
  <Link
    href={`/articles/${article.slug}`}
    className="group flex items-start justify-between gap-3 rounded-lg border bg-card p-4 shadow-sm transition hover:border-primary/50 hover:shadow-md"
  >
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h2 className="font-medium group-hover:text-primary transition-colors">
          {article.title}
        </h2>
        {showCategory && (
          <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] capitalize text-muted-foreground">
            {article.category}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-snug">{article.summary}</p>
    </div>
    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
  </Link>
);

export default ArticleCard;
