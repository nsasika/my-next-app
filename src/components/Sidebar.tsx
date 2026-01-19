import CollapsibleSection from "@/components/CollapsibleSection";

export default function Sidebar() {
  return (
    <nav className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
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
    </nav>
  );
}