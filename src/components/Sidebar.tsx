"use client";
import CollapsibleSection from "@/components/CollapsibleSection";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useMemo, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Sidebar = () => {
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
            <CollapsibleSection
              title="Hooks"
              links={[
                { href: "/use-ref-test", label: "useRef Test" },
                { href: "/use-memo-test", label: "useMemo Test" },
              ]}
            />
            <CollapsibleSection
              title="Components"
              links={[
                { href: "/button-test", label: "Button Test" },
                { href: "/card-test", label: "Card Test" },
              ]}
            />
            <CollapsibleSection
              title="Utilities"
              links={[
                { href: "/utility-one", label: "Utility One" },
                { href: "/utility-two", label: "Utility Two" },
              ]}
            />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Sidebar);
