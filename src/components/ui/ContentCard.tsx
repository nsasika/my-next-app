import type { ReactNode } from 'react';

type ContentCardProps = {
  children: ReactNode;
  className?: string;
};

export default function ContentCard({
  children,
  className = '',
}: ContentCardProps) {
  return (
    <section
      className={`min-w-0 max-w-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}
