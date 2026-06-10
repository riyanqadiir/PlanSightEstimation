import { Home, Info, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import { BRAND, getHorizontalLogo } from "../../config/brand";
import { useTheme } from "../../context/ThemeContext";
import { MobileThemeBanner, ThemePicker } from "./ThemePicker";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-1.5 sm:px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5 ${
    isActive
      ? "bg-amber-500 text-zinc-950 font-bold shadow-sm"
      : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
  }`;

export function Header() {
  const { theme, themeClasses } = useTheme();
  const logoSrc = getHorizontalLogo(theme);

  return (
    <>
      <header className={`border-b ${themeClasses.navbar} sticky top-0 z-50 backdrop-blur-md overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center shrink-0" aria-label={BRAND.name}>
            <img
              src={logoSrc}
              alt={BRAND.name}
              className="h-[5.5rem] sm:h-[6.5rem] md:h-[8.5rem] lg:h-[8.5rem] w-auto max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] object-contain rounded-md"
            />
          </NavLink>

          <div className="flex items-center space-x-3 md:space-x-4">
            <nav className="flex bg-zinc-400/10 p-1 rounded-xl border border-zinc-500/10">
              <NavLink to="/" end className={navLinkClass}>
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                <Info className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">About</span>
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </NavLink>
            </nav>
            <ThemePicker className="hidden md:flex" />
          </div>
        </div>
      </header>
      <MobileThemeBanner />
    </>
  );
}
