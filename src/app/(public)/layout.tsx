import SiteHeader from '@/components/layout/SiteHeader';
import { getRequestLocale } from '@/i18n/server';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getRequestLocale();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader initialLocale={locale} />
      <main>{children}</main>
    </div>
  );
}
