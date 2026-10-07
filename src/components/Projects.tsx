import React, { useState } from 'react';
import { ArrowUpRight, Eye, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onRequestSimilar: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onRequestSimilar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'E-commerce', 'LMS / Education', 'Business', 'Landing Page', 'Portfolio'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-t border-white/5 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Featured WordPress Websites & Case Studies.
            </h2>
            <p className="text-base text-slate-300 font-normal">
              Realistic, high-converting websites crafted for international businesses, creators, and brands.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-white/5 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0f172a]/70 hover:bg-[#121c33] border border-white/8 hover:border-emerald-500/35 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/5 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Image Showcase Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-1.5">
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3">
                  {/* Category & Client */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
                      {project.category}
                    </span>
                    <span className="text-slate-400">{project.clientType}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech stack tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[11px] font-mono text-slate-500 py-0.5 px-1">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-white/5 bg-slate-950/30 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Click for case study</span>
                <span className="text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1">
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestSimilar={onRequestSimilar}
      />
    </section>
  );
};
