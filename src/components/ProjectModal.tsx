import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowRight, Layers, Tag, ShieldCheck } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d1322] border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <span>{project.category}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400 font-normal">{project.clientType}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">{project.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Mockup Visual */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
          {/* Left Details (7 cols) */}
          <div className="md:col-span-7 space-y-6 text-sm text-slate-300">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Overview</h4>
              <p className="text-slate-200 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Deliverables</h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Details (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            {/* Tech Stack */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-white/5 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance & Highlights */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Results & Impact</h4>
              <ul className="space-y-2 text-xs text-emerald-300">
                {project.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal CTA */}
            <button
              onClick={() => {
                onRequestSimilar(project.title);
                onClose();
              }}
              className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>Request a Similar Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
