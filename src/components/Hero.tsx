import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2, Layers, Zap, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  currentPhoto: string;
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentPhoto, onOpenPhotoModal }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden radial-glow-emerald">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Pitch & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PERSONAL_INFO.badge}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300 normal-case font-normal text-xs">Available Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              I Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Modern WordPress Websites
              </span>{' '}
              That Help Businesses Grow.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {PERSONAL_INFO.heroSubheading}
            </p>

            {/* Micro Highlights / Trust Badges */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Elementor & Elementor Pro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WooCommerce Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Mobile Responsive</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>WhatsApp: {PERSONAL_INFO.whatsapp}</span>
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Let's Work Together</span>
              </a>
            </div>

            {/* Social / Email proof strip with direct WhatsApp, LinkedIn, Facebook */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1"
              >
                <span>WhatsApp</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium flex items-center gap-1"
              >
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium flex items-center gap-1"
              >
                <span>Facebook</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-300 hover:text-emerald-400 transition-colors font-mono underline decoration-slate-700 underline-offset-4"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Right Column: Premium Hero Image Composition (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Layered Architectural Card Backdrop with Ambient Gradient */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/10 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-3xl bg-[#0f172a] border border-white/10 p-3 sm:p-4 shadow-2xl">
                {/* Image Frame with Clean Dark Studio Treatment */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
                  <img
                    src={currentPhoto}
                    alt="Nurul Hoque - Professional WordPress Web Designer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-80" />

                  {/* Quick Photo Switcher Button Overlay */}
                  <button
                    onClick={onOpenPhotoModal}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-emerald-500 hover:text-slate-950 text-white text-xs font-medium backdrop-blur-md border border-white/10 transition-all flex items-center gap-1.5 shadow-md"
                    title="Change / Upload your own photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Upload Photo</span>
                  </button>

                  {/* Identity Label Overlay at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="text-white font-bold text-lg leading-tight">Nurul Hoque</div>
                    <div className="text-emerald-400 text-xs font-medium flex items-center gap-1.5 mt-0.5">
                      <span>WordPress Specialist</span>
                      <span className="text-slate-500">·</span>
                      <span>2+ Years Experience</span>
                    </div>
                  </div>
                </div>

                {/* Floating Architectural Badge: Status Card */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0f172a]/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-3.5 shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-left pr-2">
                    <div className="text-xs font-semibold text-white">High Conversion Focus</div>
                    <div className="text-[11px] text-slate-400">Fast, SEO & Mobile-First</div>
                  </div>
                </div>

                {/* Floating Architectural Badge: Top Right Experience Pill */}
                <div className="absolute -top-4 -right-3 sm:-right-5 bg-[#0f172a]/95 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">Elementor Pro</div>
                    <div className="text-[10px] text-emerald-400">Theme Builder Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
