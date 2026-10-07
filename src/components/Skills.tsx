import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, Award, Zap, Code, Layout, ShoppingCart, BookOpen } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-white/5 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-emerald-400" />
            <span>Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Modern Tech Stack & Specialized WordPress Skills.
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            I combine visual page-building mastery with performance-focused development to build websites that are fast, dependable, and effortless to maintain.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0f172a]/70 hover:bg-[#121c33] border border-white/8 hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
