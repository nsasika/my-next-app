"use client";
import CollapsibleSection from "@/components/Sidebar/CollapsibleSection";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useMemo, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ROUTES } from "@/config/routes";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const title = useMemo(() => {
    return pathname === "/" ? "Home" : "Navigation";
  }, [pathname]);

  const onClickMenuOpen = useCallback(() => {
    setIsOpen(false);
    if (pathname !== "/") {
      router.push("/");
    }
  }, [pathname, router]);

  useEffect(() => {
    if(pathname !== "/" && !isOpen){
      router.push("/");
    }
  }, [pathname]);

  return (
    <nav className="w-64 bg-gray-800 text-white flex flex-col p-4">
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
              onClick={() => onClickMenuOpen()}
            >
              <MenuOpenIcon />
            </Button>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
          </div>
          <ul className="space-y-2">
            {ROUTES.map((section) => (
              <CollapsibleSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Sidebar);
