type InfoCardProps = {
  body: string;
  title: string;
};

export default function InfoCard({ body, title }: InfoCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}
