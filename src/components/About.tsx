import React from 'react';
import { Check, ShieldCheck, Zap, Globe, Layers, Laptop } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

interface AboutProps {
  currentPhoto: string;
}

export const About: React.FC<AboutProps> = ({ currentPhoto }) => {
  const highlights = [
    { title: '2+ Years Experience', desc: 'Continuous dedicated WordPress development & Elementor design.' },
    { title: 'Elementor Pro Mastery', desc: 'Theme Builder, dynamic loops, and zero-bloat Flexbox containers.' },
    { title: 'WooCommerce E-Commerce', desc: 'High-converting online store setup, product funnels, and checkout flows.' },
    { title: 'LMS Online Learning', desc: 'Tutor LMS academies with course curricula, quizzes, and certificates.' },
    { title: 'Conversion Landing Pages', desc: 'Sales-funnel pages crafted specifically for advertising and leads.' },
    { title: 'Full Responsive Architecture', desc: 'Individually optimized for desktop, tablet, and mobile screens.' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/5 bg-[#090e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-emerald-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Designing Modern WordPress Websites That Balance Aesthetics & Conversions.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I am a professional WordPress Web Designer & Developer dedicated to crafting fast, responsive, and trustworthy web experiences for clients worldwide.
          </p>
        </div>

        {/* Main Grid: Story + Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Narrative & Focus Areas (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              My approach to WordPress is centered around <strong className="text-white font-semibold">clarity, performance, and real business results</strong>. Rather than using generic templates that look identical and load slowly, I design tailored WordPress websites using modern Elementor architecture that reflect your brand identity and persuade your visitors to take action.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              Over the past 2+ years, I have helped entrepreneurs, agency partners, and growing businesses launch corporate websites, WooCommerce online stores, educational LMS portals, and high-converting campaign landing pages. Every website is built with clean structure, making it simple for you to manage your own content without needing ongoing developer assistance.
            </p>

            {/* Core Capability Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800 border border-emerald-500/30 shrink-0">
                  <img
                    src={currentPhoto}
                    alt="Nurul Hoque"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">Nurul Hoque</h3>
                  <p className="text-xs text-emerald-400 font-medium">WordPress Web Designer & Developer</p>
                  <p className="text-xs text-slate-400 mt-0.5">2+ Years Specialization</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Primary Page Builder</span>
                  <span className="text-white font-medium">Elementor & Elementor Pro</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">E-Commerce System</span>
                  <span className="text-white font-medium">WooCommerce</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">E-Learning / LMS</span>
                  <span className="text-white font-medium">Tutor LMS</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Target Audience</span>
                  <span className="text-white font-medium">International Businesses & Brands</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Client Communication</span>
                  <span className="text-emerald-400 font-medium">English · Clear & Reliable</span>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full py-2.5 px-4 text-center rounded-xl bg-white/5 hover:bg-emerald-400 hover:text-slate-950 text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                Discuss Your Website Needs
              </a>
            </div>
          </div>
        </div>

        {/* Realistic Verified Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                  {stat.value}
                </span>
              </div>
              <div className="text-sm font-semibold text-emerald-400">{stat.label}</div>
              <p className="text-xs text-slate-400 leading-normal">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
