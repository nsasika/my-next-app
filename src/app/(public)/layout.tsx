import SiteHeader from '@/components/layout/SiteHeader';
import { AUTH_COOKIE_NAME } from '@/config/auth';
import { verifyToken } from '@/server/auth/session';
import { cookies } from 'next/headers';
import { getRequestLocale } from '@/i18n/server';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const verifiedUser = token ? await verifyToken(token) : null;
  const locale = await getRequestLocale();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader
        isAuthenticated={Boolean(verifiedUser)}
        persistedLocale={locale}
      />
      <main>{children}</main>
    </div>
  );
}
