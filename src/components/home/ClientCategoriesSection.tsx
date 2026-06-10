import { useNavigate } from "react-router-dom";
import { CLIENT_CATEGORIES } from "../../categories";
import { useContactDraft } from "../../context/ContactDraftContext";
import { useTheme } from "../../context/ThemeContext";

export function ClientCategoriesSection() {
  const { themeClasses } = useTheme();
  const navigate = useNavigate();
  const { setDraft } = useContactDraft();

  const handleClientClick = (label: string) => {
    setDraft({
      message: `Hi, I'm a ${label} looking for construction cost estimates and material takeoffs.`,
    });
    navigate("/contact");
  };

  return (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Who We Serve</span>
        <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.heading}`}>We Work With</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CLIENT_CATEGORIES.map((client) => (
          <button
            key={client.id}
            type="button"
            onClick={() => handleClientClick(client.label)}
            className={`text-left rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 space-y-2 transition hover:border-amber-500/40 hover:bg-amber-500/10 hover:shadow-md ${themeClasses.card}`}
          >
            <h3 className={`text-sm font-bold ${themeClasses.heading}`}>{client.label}</h3>
            <p className={`text-xs ${themeClasses.mutedText} leading-relaxed`}>{client.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
