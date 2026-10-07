import React from 'react';
import { Sparkles, Smartphone, TrendingUp, Compass, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { TRUST_PILLARS } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      case 'MessageSquareCheck':
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 relative border-t border-white/5 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-emerald-400" />
            <span>Why Work With Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            A Reliable Partner for Your International Web Projects.
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            I don't just deliver pages; I build digital assets designed to position your brand with international credibility and produce measurable returns.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0f172a]/60 hover:bg-[#121c33] border border-white/8 hover:border-emerald-500/30 transition-all duration-300 space-y-4 shadow-lg group transform hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-emerald-500/10 transition-colors w-fit">
                {getIcon(pillar.iconName)}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
