type StatusMessageProps = {
  children: React.ReactNode;
  tone?: 'info' | 'error' | 'success';
};

const toneClasses = {
  info: 'border-sky-200 bg-sky-50 text-slate-700',
  error: 'border-rose-200 bg-rose-50 text-rose-700',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
};

export default function StatusMessage({
  children,
  tone = 'info',
}: StatusMessageProps) {
  return (
    <p className={`rounded-lg border px-4 py-3 text-sm ${toneClasses[tone]}`}>
      {children}
    </p>
  );
}
