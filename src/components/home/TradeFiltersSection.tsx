import { TRADE_CATEGORIES } from "../../categories";
import { useTheme } from "../../context/ThemeContext";
import { ProjectCategory } from "../../types";
import { PORTFOLIO_PROJECTS } from "../../data/portfolio";

interface TradeFiltersSectionProps {
  portfolioFilter: ProjectCategory | "all";
  onFilterChange: (filter: ProjectCategory | "all") => void;
}

export function TradeFiltersSection({ portfolioFilter, onFilterChange }: TradeFiltersSectionProps) {
  const { themeClasses } = useTheme();

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Our Trades</span>
        <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.heading}`}>Estimating Specialties</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <button
          type="button"
          onClick={() => onFilterChange("all")}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wide transition ${
            portfolioFilter === "all" ? themeClasses.badgeSelected : themeClasses.badgeUnselected
          }`}
        >
          All Trades ({PORTFOLIO_PROJECTS.length})
        </button>
        {TRADE_CATEGORIES.map((trade) => (
          <button
            key={trade.id}
            type="button"
            onClick={() => onFilterChange(trade.id)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wide transition ${
              portfolioFilter === trade.id ? themeClasses.badgeSelected : themeClasses.badgeUnselected
            }`}
          >
            {trade.emoji} {trade.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
