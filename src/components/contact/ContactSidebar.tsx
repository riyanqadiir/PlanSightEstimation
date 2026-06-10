import { Info, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND, getStackedAltLogo } from "../../config/brand";
import { useTheme } from "../../context/ThemeContext";

export function ContactSidebar() {
  const { theme, themeClasses } = useTheme();
  const logoSrc = getStackedAltLogo(theme);

  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="space-y-4 text-left">
        <img
          src={logoSrc}
          alt={BRAND.name}
          className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto max-w-full md:max-w-[320px] object-contain rounded-xl"
        />
        <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.heading} tracking-tight`}>
          Request an <span className="text-amber-500">Estimate</span>
        </h2>
        <p className={`text-sm ${themeClasses.mutedText} leading-relaxed`}>
          Send us your project details and we will get back to you at{" "}
          <strong>contact@plansightestimating.com</strong>.
        </p>
      </div>

      <div className={`p-4 rounded-xl border ${themeClasses.card} flex items-start space-x-3`}>
        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
        <div>
          <span className={`block text-xs font-bold ${themeClasses.heading}`}>Secure Contact Form</span>
          <p className="text-[10px] text-zinc-500">Your message is sent directly to our estimating team.</p>
        </div>
      </div>

      <div className="space-y-3 pt-2 text-left">
        <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">What happens next?</span>
        {[
          "Your request reaches us within minutes",
          "We analyze materials, labor allocations, and local markups",
          "A detailed estimate is returned to your email inbox",
        ].map((step, i) => (
          <div key={step} className="flex items-center space-x-2.5 text-xs">
            <div className="w-5 h-5 bg-emerald-500/10 text-emerald-500 rounded-lg flex items-center justify-center font-bold">
              {i + 1}
            </div>
            <span className={themeClasses.mutedText}>{step}</span>
          </div>
        ))}
      </div>

      <div
        className={`p-5 rounded-2xl border ${
          theme === "dark"
            ? "border-zinc-800 bg-zinc-900"
            : theme === "warm"
              ? "border-[#ecdcb8] bg-[#fcf8f0]"
              : "border-zinc-200 bg-white"
        } text-left space-y-3`}
      >
        <h4
          className={`text-xs font-bold uppercase tracking-wider ${
            theme === "dark" ? "text-amber-400" : "text-amber-800"
          } flex items-center gap-1.5`}
        >
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Fast Turnaround</span>
        </h4>
        <p className="text-[11px] text-zinc-500 leading-relaxed">
          Most construction estimates and quantity takeoffs are delivered within <strong>24 to 48 hours</strong>.
          Small-scale projects may be completed in a few hours.
        </p>
      </div>
    </div>
  );
}
