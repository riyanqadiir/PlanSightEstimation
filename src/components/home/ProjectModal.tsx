import { Check, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { getTradeShortLabel } from "../../categories";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { PortfolioProject } from "../../types";

interface ProjectModalProps {
  project: PortfolioProject;
  onClose: () => void;
  onInquiry: (project: PortfolioProject) => void;
}

export function ProjectModal({ project, onClose, onInquiry }: ProjectModalProps) {
  useBodyScrollLock(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const modal = (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        aria-label="Close project details"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[min(90vh,900px)] overflow-y-auto shadow-2xl animate-fadeIn">
        <div className="relative aspect-video shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 bg-zinc-950/80 hover:bg-zinc-950 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono border border-zinc-800 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded font-extrabold uppercase tracking-widest block mb-1">
                {getTradeShortLabel(project.category)} project details
              </span>
              <h3
                id="project-modal-title"
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
              >
                {project.title}
              </h3>
            </div>
            <span className="text-xs bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-700 font-mono text-zinc-400">
              {project.location}
            </span>
          </div>

          <div className="space-y-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
              Project Summary
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
            <div>
              <span className="block text-[9px] uppercase font-bold text-zinc-500">Structural footprint</span>
              <span className="text-xs font-bold text-white">{project.scopeSize}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-zinc-500 font-mono">Status</span>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                <Check className="w-3 h-3 shrink-0" /> Completed
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
              Specifications
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.specifications.map((spec, i) => (
                <div
                  key={`${project.id}-spec-${i}`}
                  className="bg-zinc-950/40 p-3 rounded-lg border border-zinc-800 flex items-start space-x-2"
                >
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-300">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold transition"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onInquiry(project);
                onClose();
              }}
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-1"
            >
              <span>Request Similar Estimate</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
