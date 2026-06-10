import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Check, ChevronRight, ExternalLink, MapPin } from "lucide-react";
import { getTradeShortLabel } from "../../categories";
import { useContactDraft } from "../../context/ContactDraftContext";
import { useTheme } from "../../context/ThemeContext";
import { PORTFOLIO_PROJECTS } from "../../data/portfolio";
import { PortfolioProject, ProjectCategory } from "../../types";
import { ProjectModal } from "./ProjectModal";
import { TradeFiltersSection } from "./TradeFiltersSection";

export function PortfolioGrid() {
  const { themeClasses } = useTheme();
  const navigate = useNavigate();
  const { setDraft } = useContactDraft();
  const [searchParams] = useSearchParams();
  const tradeParam = searchParams.get("trade") as ProjectCategory | null;

  const [portfolioFilter, setPortfolioFilter] = useState<ProjectCategory | "all">("all");
  const [selectedModalProject, setSelectedModalProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    if (tradeParam && PORTFOLIO_PROJECTS.some((p) => p.category === tradeParam)) {
      setPortfolioFilter(tradeParam);
    }
  }, [tradeParam]);

  const filteredProjects = useMemo(() => {
    if (portfolioFilter === "all") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === portfolioFilter);
  }, [portfolioFilter]);

  const handleInitiateInquiry = (project: PortfolioProject) => {
    setDraft({
      selectedProjectInterest: project.title,
      projectType: project.category,
      message: `Hi, we saw your sample project "${project.title}" in ${project.location} and would like a similar estimate for our job.`,
    });
    navigate("/contact");
  };

  const handleRequestEstimate = () => {
    setDraft({});
    navigate("/contact");
  };

  return (
    <>
      <TradeFiltersSection portfolioFilter={portfolioFilter} onFilterChange={setPortfolioFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {filteredProjects.length === 0 && (
          <div className={`md:col-span-2 text-center py-12 rounded-2xl border ${themeClasses.card}`}>
            <p className={`text-sm ${themeClasses.mutedText}`}>No portfolio samples in this category yet.</p>
            <button
              type="button"
              onClick={handleRequestEstimate}
              className={`mt-4 px-5 py-2.5 rounded-xl ${themeClasses.accentButton} text-xs font-bold uppercase tracking-wider`}
            >
              Request an Estimate
            </button>
          </div>
        )}

        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-2xl border ${themeClasses.card} overflow-hidden flex flex-col transition-all duration-300`}
          >
            <div className="relative aspect-video overflow-hidden bg-zinc-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-zinc-950/80 text-white font-extrabold uppercase py-1 px-2.5 rounded-md text-[9px] tracking-widest backdrop-blur-xs">
                  {getTradeShortLabel(project.category)}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center bg-zinc-950/80 text-white font-mono text-[10px] py-1 px-2 rounded backdrop-blur-xs">
                <MapPin className="w-3 h-3 text-amber-500 mr-1" />
                {project.location}
              </div>
            </div>

            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3
                  className={`text-xl font-bold ${themeClasses.heading} tracking-tight group-hover:text-amber-500 transition-colors`}
                >
                  {project.title}
                </h3>
                <p className={`text-sm ${themeClasses.mutedText} leading-relaxed`}>{project.description}</p>
                <ul className="grid grid-cols-1 gap-1 pt-2">
                  {project.specifications.slice(0, 3).map((spec, i) => (
                    <li key={i} className="flex items-start text-xs space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <span className={themeClasses.mutedText}>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-300/10 p-3.5 rounded-xl text-center">
                <span className="block text-[9px] uppercase font-bold text-zinc-500">Footprint</span>
                <span className="text-xs sm:text-sm font-extrabold">{project.scopeSize}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedModalProject(project);
                  }}
                  className={`flex-1 ${themeClasses.outlineButton} border rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-1`}
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => handleInitiateInquiry(project)}
                  className={`flex-1 ${themeClasses.accentButton} rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-1`}
                >
                  <span>Request Estimate</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedModalProject && (
        <ProjectModal
          project={selectedModalProject}
          onClose={() => setSelectedModalProject(null)}
          onInquiry={handleInitiateInquiry}
        />
      )}
    </>
  );
}
