import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-white/5 py-14 sm:py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-bold text-xl text-white tracking-tight">Nurul Hoque</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              WordPress Web Designer & Website Developer specializing in Elementor, WooCommerce, and high-converting websites for international clients.
            </p>
            <div className="text-xs text-emerald-400 font-mono">
              WhatsApp: {PERSONAL_INFO.whatsapp} · Available Worldwide
            </div>

            {/* Direct Social Links Strip */}
            <div className="flex items-center gap-3 pt-1 text-xs">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-colors border border-white/5"
              >
                WhatsApp
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-colors border border-white/5"
              >
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-colors border border-white/5"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-400 transition-colors">
                  Work Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">Core Specializations</div>
            <ul className="space-y-2 text-xs">
              <li>WordPress Website Design</li>
              <li>WooCommerce Online Stores</li>
              <li>Elementor & Elementor Pro Theme Building</li>
              <li>Tutor LMS / Online Learning Academies</li>
              <li>High-Converting Landing Pages</li>
              <li>Website Redesign & Speed Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © 2026 Nurul Hoque. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
