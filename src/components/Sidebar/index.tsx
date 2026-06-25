'use client';

import CollapsibleSection from '@/components/Sidebar/CollapsibleSection';
import { APP_PATHS, SIDEBAR_ROUTES } from '@/config/routes';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Button from '@mui/material/Button';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(true);

  const title = useMemo(() => {
    return pathname === APP_PATHS.home ? 'Home' : 'Navigation';
  }, [pathname]);

  const onClickMenuClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const logout = useCallback(async () => {
    await fetch(APP_PATHS.authLogout, {
      method: 'POST',
    });

    router.push(APP_PATHS.login);
  }, [router]);

  return (
    <nav className="flex w-64 flex-col border-r border-slate-200 bg-white p-4 text-slate-950">
      {!isOpen ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </Button>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="contained"
              color="secondary"
              onClick={onClickMenuClose}
            >
              <MenuOpenIcon />
            </Button>

            <h2 className="text-xl font-bold mb-4">{title}</h2>
          </div>

          <ul className="space-y-2">
            {SIDEBAR_ROUTES.map((section) => (
              <CollapsibleSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </ul>

          <div className="mt-6">
            <Button variant="contained" color="error" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Sidebar);
