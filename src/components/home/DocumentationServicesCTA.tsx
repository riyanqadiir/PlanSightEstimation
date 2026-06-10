import { ArrowRight, ChevronRight, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContactDraft } from "../../context/ContactDraftContext";
import { useTheme } from "../../context/ThemeContext";
import { DOCUMENTATION_SERVICES } from "../../data/documentationServices";

export function DocumentationServicesCTA() {
  const { themeClasses } = useTheme();
  const navigate = useNavigate();
  const { setDraft } = useContactDraft();

  const handleClick = () => {
    setDraft({
      message:
        "Hello, I'm interested in shop drawings, architecture plans, and/or permit sets. Please contact me to discuss scope and timeline.",
    });
    navigate("/contact");
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border-2 border-amber-500/30 ${themeClasses.card}`}>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-8 md:p-10 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] bg-amber-500 text-zinc-950 px-3 py-1.5 rounded-full font-extrabold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>New Services</span>
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.heading} tracking-tight leading-tight`}>
            Shop Drawings, Architecture Plans, and{" "}
            <span className="text-amber-500">Permit Sets</span>
          </h3>
          <p className={`text-sm sm:text-base ${themeClasses.mutedText} leading-relaxed`}>
            We now offer full documentation packages along with our estimating services, from shop drawings through
            permit-ready plan sets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DOCUMENTATION_SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-5 space-y-3 text-left transition hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-md hover:shadow-amber-500/5"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-zinc-950 flex items-center justify-center shadow-sm">
                <service.icon className="w-5 h-5" />
              </div>
              <h4 className={`text-sm font-bold uppercase tracking-wide ${themeClasses.heading}`}>{service.title}</h4>
              <p className={`text-xs ${themeClasses.mutedText} leading-relaxed`}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleClick}
            className={`px-8 py-4 rounded-xl ${themeClasses.accentButton} text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-[1.02]`}
          >
            <Mail className="w-4 h-4" />
            <span>Send Request to Plan Sight Estimating</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className={`text-xs ${themeClasses.mutedText} flex items-center gap-1.5`}>
            <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
            <span>
              Opens the <strong className="text-amber-500">Contact</strong> page to tell us what you need
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
