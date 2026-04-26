import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = { href: string; label?: string };

const BackButton = ({ href, label = 'Back' }: Props) => (
  <Button asChild variant="ghost" size="icon" aria-label={label}>
    <Link href={href}>
      <ArrowLeft className="h-4 w-4" />
    </Link>
  </Button>
);

export default BackButton;
