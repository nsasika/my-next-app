import Image from 'next/image';
import Link from 'next/link';
import { APP_PATHS } from '@/config/routes';

type BrandMarkProps = {
  compact?: boolean;
};

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      href={APP_PATHS.home}
      className="inline-flex min-w-0 items-center gap-3"
    >
      <Image
        src="/nalinsacademy.png"
        alt="Nalin's Academy logo"
        width={44}
        height={44}
        className="h-11 w-11 rounded-lg object-cover"
        priority
      />
      {!compact ? (
        <span className="block min-w-0 truncate text-base font-black tracking-tight text-slate-950">
          Nalin&apos;s Academy
        </span>
      ) : null}
    </Link>
  );
}
