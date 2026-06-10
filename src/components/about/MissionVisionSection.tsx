import { Eye, Target } from "lucide-react";
import { BRAND, getStackedLogo } from "../../config/brand";
import { ABOUT_INTRO, MISSION_STATEMENT, VISION_STATEMENT } from "../../data/about";
import { useTheme } from "../../context/ThemeContext";

export function MissionVisionSection() {
  const { theme, themeClasses } = useTheme();
  const logoSrc = getStackedLogo(theme);

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <img
          src={logoSrc}
          alt={BRAND.name}
          className="h-28 sm:h-36 md:h-40 lg:h-48 w-auto max-w-[90vw] md:max-w-[420px] lg:max-w-[480px] mx-auto object-contain"
        />
        <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500">About Plan Sight Estimating</span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold ${themeClasses.heading} tracking-tight`}>
          Building Bids on <span className="text-amber-500">Clear Plan Sight</span>
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.mutedText} leading-relaxed`}>{ABOUT_INTRO}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`rounded-2xl border border-amber-500/25 bg-amber-500/5 p-8 space-y-4 ${themeClasses.card}`}>
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className={`text-xl font-extrabold ${themeClasses.heading}`}>Our Mission</h2>
          <p className={`text-sm ${themeClasses.mutedText} leading-relaxed`}>{MISSION_STATEMENT}</p>
        </div>

        <div className={`rounded-2xl border border-amber-500/25 bg-amber-500/5 p-8 space-y-4 ${themeClasses.card}`}>
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className={`text-xl font-extrabold ${themeClasses.heading}`}>Our Vision</h2>
          <p className={`text-sm ${themeClasses.mutedText} leading-relaxed`}>{VISION_STATEMENT}</p>
        </div>
      </div>
    </div>
  );
}
