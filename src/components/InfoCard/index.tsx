import type { ReactNode } from 'react';

type InfoCardProps = {
  body: string;
  icon?: ReactNode;
  title: string;
};

export default function InfoCard({ body, icon, title }: InfoCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      {icon ? (
        <div className="mb-4 inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
          {icon}
        </div>
      ) : null}
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}
