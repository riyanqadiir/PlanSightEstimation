import { Coffee, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Theme } from "../../theme";

export function ThemePicker({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const buttons: { id: Theme; icon: typeof Sun; title: string; activeClass: string }[] = [
    {
      id: "light",
      icon: Sun,
      title: "Ergonomic Light Desk",
      activeClass: "bg-white text-amber-600 shadow-sm border border-zinc-200",
    },
    {
      id: "warm",
      icon: Coffee,
      title: "Warm Cedar Clay",
      activeClass: "bg-[#f5ebd9] text-amber-800 shadow-sm border border-[#e2d5bd]",
    },
    {
      id: "dark",
      icon: Moon,
      title: "Nordic Slate Midnight",
      activeClass: "bg-zinc-800 text-amber-400 shadow-sm border border-zinc-700",
    },
  ];

  return (
    <div className={`flex items-center space-x-1 bg-zinc-400/10 p-1 rounded-xl border border-zinc-500/10 ${className}`}>
      {buttons.map(({ id, icon: Icon, title, activeClass }) => (
        <button
          key={id}
          type="button"
          onClick={() => setTheme(id)}
          title={title}
          className={`p-1.5 rounded-lg flex items-center justify-center transition ${
            theme === id ? activeClass : "text-zinc-400 hover:text-zinc-500"
          }`}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}

export function MobileThemeBanner() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="md:hidden py-3 px-4 bg-amber-500/10 border-b border-amber-500/10 flex items-center justify-between">
      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 flex items-center space-x-1">
        <span>Active Theme</span>
      </span>
      <div className="flex space-x-1 bg-zinc-900/10 p-0.5 rounded-lg">
        {(["light", "warm", "dark"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`px-2.5 py-1 rounded text-[10px] font-extrabold uppercase transition-all ${
              theme === t ? "bg-amber-500 text-zinc-950 shadow-xs" : "text-zinc-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </section>
  );
}
