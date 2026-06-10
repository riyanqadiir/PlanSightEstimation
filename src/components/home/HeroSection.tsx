import { Award } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function HeroSection() {
  const { themeClasses } = useTheme();

  return (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <div
        className={`inline-flex items-center space-x-1.5 ${themeClasses.pillBg} text-amber-700 dark:text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-amber-600/10`}
      >
        <Award className="w-4 h-4 text-amber-500" />
        <span>Construction Cost Estimating</span>
      </div>
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${themeClasses.heading} leading-none`}>
        Accurate Estimates, <span className="text-amber-500">Clear Plan Sight</span>
      </h1>
      <p className={`text-base md:text-lg ${themeClasses.mutedText} max-w-2xl mx-auto leading-relaxed`}>
        Construction cost estimates and material takeoffs for general contractors, subcontractors, architects,
        engineers, and developers.
      </p>
    </div>
  );
}
