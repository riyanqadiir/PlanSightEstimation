import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { TRADE_CATEGORIES } from "../../categories";
import { BRAND } from "../../config/brand";
import { useTheme } from "../../context/ThemeContext";
import { ProjectCategory } from "../../types";

export function Footer() {
  const { themeClasses } = useTheme();
  const navigate = useNavigate();

  const goToTrade = (tradeId: ProjectCategory) => {
    navigate(`/?trade=${tradeId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`${themeClasses.footer} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-zinc-800 min-w-0">
          <div className="space-y-4 text-left md:col-span-1">
            <Link to="/">
              <img
                src={BRAND.logos.headerDark}
                alt={BRAND.name}
                className="h-10 sm:h-12 lg:h-18 w-auto max-w-[200px] sm:max-w-[260px] lg:max-w-[320px] object-contain "
              />
            </Link>
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              Accurate construction cost estimates and material takeoffs for projects nationwide.
            </p>
          </div>

          <div className="space-y-2 text-left">
            <span className="block text-xs uppercase font-bold tracking-wider text-white">Pages</span>
            <div className="flex flex-col gap-2 text-xs text-zinc-500 font-semibold">
              <Link to="/" className="hover:text-amber-500">Home</Link>
              <Link to="/about" className="hover:text-amber-500">About Us</Link>
              <Link to="/contact" className="hover:text-amber-500">Contact</Link>
            </div>
          </div>

          <div className="space-y-2 text-left">
            <span className="block text-xs uppercase font-bold tracking-wider text-white">Our Trades</span>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-500 font-semibold">
              {TRADE_CATEGORIES.map((trade) => (
                <button
                  key={trade.id}
                  type="button"
                  onClick={() => goToTrade(trade.id)}
                  className="hover:text-amber-500 text-left"
                >
                  {trade.emoji} {trade.shortLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-left min-w-0">
            <span className="block text-xs uppercase font-bold tracking-wider text-white">Contact</span>
            <div className="text-xs text-zinc-500 space-y-2 min-w-0">
              <div className="flex items-start gap-2 min-w-0">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BRAND.contactEmail}`}
                  className="font-medium text-amber-500 break-all text-[11px] sm:text-xs leading-snug min-w-0"
                >
                  {BRAND.contactEmail}
                </a>
              </div>
              <p className="text-[10px] text-zinc-500 leading-relaxed">
                Mon-Fri 8am-6pm PST. 24/7 support for urgent requests.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 gap-4">
            <p>© {new Date().getFullYear()} Plan Sight Estimating. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
