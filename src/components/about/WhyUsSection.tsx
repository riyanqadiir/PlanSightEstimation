import { WHY_US_ITEMS } from "../../data/whyUs";
import { useTheme } from "../../context/ThemeContext";

export function WhyUsSection() {
  const { themeClasses } = useTheme();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Our Advantage</span>
        <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.heading}`}>
          Why <span className="text-amber-500">Plan Sight Estimating</span>
        </h2>
        <p className={`text-sm ${themeClasses.mutedText} max-w-2xl mx-auto`}>
          Quality estimates, fair pricing, and a team that knows construction.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHY_US_ITEMS.map((item) => (
          <div
            key={item.title}
            className={`rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 space-y-3 transition hover:border-amber-500/40 hover:bg-amber-500/10 hover:shadow-md ${themeClasses.card}`}
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-zinc-950 flex items-center justify-center shadow-sm">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className={`text-sm font-bold ${themeClasses.heading}`}>{item.title}</h3>
            <p className={`text-xs ${themeClasses.mutedText} leading-relaxed`}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
