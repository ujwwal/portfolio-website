import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutGrid } from "lucide-react";

const ITEMS = [
  { id: "a", label: "A · Terminal" },
  { id: "b", label: "B · Editorial" },
  { id: "c", label: "C · Dossier" },
];

/**
 * Floating pill that lets the user swap between design variants.
 * `theme` controls light vs dark surface so it matches whichever design it sits on.
 */
const DesignSwitcher = ({ theme = "light" }) => {
  const { pathname } = useLocation();
  const current = pathname.split("/").pop();

  const surface =
    theme === "dark"
      ? "bg-[#171a1f]/90 border-[#262a2f] text-[#e8e4d9] backdrop-blur-md"
      : theme === "warm"
      ? "bg-[#f3ede2]/90 border-[#d6cdbd] text-[#1a1613] backdrop-blur-md"
      : "bg-white/90 border-neutral-200 text-neutral-900 backdrop-blur-md";

  const activeBg =
    theme === "dark"
      ? "bg-[#d4a574] text-[#0e1013]"
      : theme === "warm"
      ? "bg-[#1a1613] text-[#f3ede2]"
      : "bg-neutral-900 text-[#fafaf9]";

  const homeColor =
    theme === "dark" ? "text-[#8c8478]" : theme === "warm" ? "text-[#5a4c3d]" : "text-neutral-500";

  return (
    <div className="fixed top-4 right-4 z-[60]">
      <div className={`flex items-center gap-1 border px-1.5 py-1 shadow-sm ${surface}`}>
        <Link
          to="/"
          className={`px-2 py-1 font-mono text-[10px] flex items-center gap-1 hover:opacity-100 ${homeColor}`}
          title="Back to picker"
        >
          <LayoutGrid size={11} /> all
        </Link>
        <span className="w-px h-4 bg-current opacity-20" />
        {ITEMS.map((it) => (
          <Link
            key={it.id}
            to={`/design/${it.id}`}
            className={`px-2.5 py-1 font-mono text-[10px] transition-colors ${
              current === it.id ? activeBg : "hover:opacity-70"
            }`}
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesignSwitcher;
