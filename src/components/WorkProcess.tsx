import React, { useState } from 'react';
import { Check, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const WorkProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-24 sm:py-32 relative border-t border-white/5 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-emerald-400" />
            <span>Structured Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            A Proven 6-Step Process from Discovery to Launch.
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Every project follows a transparent, disciplined timeline so you always know what to expect and your website launches smoothly without surprises.
          </p>
        </div>

        {/* 6 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`cursor-pointer p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? 'bg-[#111a2f] border-emerald-400/60 shadow-xl shadow-emerald-500/10'
                    : 'bg-[#0f172a]/60 hover:bg-[#121c33] border-white/8 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-emerald-400">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block">
                    Deliverable / Milestone
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
