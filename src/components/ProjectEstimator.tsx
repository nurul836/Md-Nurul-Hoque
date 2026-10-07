import React, { useState } from 'react';
import { Calculator, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';

interface EstimatorProps {
  onApplyEstimate: (summary: string) => void;
}

export const ProjectEstimator: React.FC<EstimatorProps> = ({ onApplyEstimate }) => {
  const [siteType, setSiteType] = useState<'landing' | 'business' | 'ecommerce' | 'lms' | 'redesign'>('business');
  const [pageScope, setPageScope] = useState<'1-3' | '4-7' | '8-15' | '15+'>('4-7');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['speed', 'seo']);

  const siteTypes = [
    { id: 'landing', label: 'Landing Page', baseDays: 3, desc: 'High-converting single page funnel' },
    { id: 'business', label: 'Business Website', baseDays: 6, desc: 'Corporate site with trust & lead focus' },
    { id: 'ecommerce', label: 'E-commerce Store', baseDays: 10, desc: 'WooCommerce with checkout & payments' },
    { id: 'lms', label: 'LMS Platform', baseDays: 12, desc: 'Tutor LMS course academy & student portal' },
    { id: 'redesign', label: 'Website Redesign', baseDays: 5, desc: 'Modern visual overhaul & mobile fix' },
  ];

  const pageScopes = [
    { id: '1-3', label: '1 - 3 Pages', multiplier: 1 },
    { id: '4-7', label: '4 - 7 Pages', multiplier: 1.3 },
    { id: '8-15', label: '8 - 15 Pages', multiplier: 1.7 },
    { id: '15+', label: '15+ Pages', multiplier: 2.2 },
  ];

  const addonsList = [
    { id: 'figma', label: 'Figma to Elementor', desc: 'Pixel-perfect translation from your Figma files' },
    { id: 'speed', label: 'Speed Optimization 90+', desc: 'Asset minification, WP Rocket & Core Web Vitals' },
    { id: 'seo', label: 'Technical SEO & Schema', desc: 'RankMath setup, rich snippets & meta configuration' },
    { id: 'payments', label: 'WooCommerce Payment Setup', desc: 'Stripe, PayPal, currency converter & testing' },
    { id: 'migration', label: 'Zero-Downtime Migration', desc: 'Moving from old host/domain without data loss' },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const currentSite = siteTypes.find((s) => s.id === siteType) || siteTypes[1];
  const currentPages = pageScopes.find((p) => p.id === pageScope) || pageScopes[1];
  const estimatedDays = Math.round(currentSite.baseDays * currentPages.multiplier + selectedAddons.length * 1);

  const handleTransferToContact = () => {
    const summary = `Project Scope: ${currentSite.label} (${currentPages.label}). Add-ons: ${
      selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None'
    }. Estimated Timeline: ~${estimatedDays} business days.`;
    onApplyEstimate(summary);
  };

  return (
    <section className="py-20 relative border-t border-white/5 bg-[#080d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-emerald-500/20 backdrop-blur-md shadow-2xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Interactive Project Planner</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Estimate Your Website Scope & Timeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Select your requirements to get an immediate estimated turnaround time and pre-fill your proposal inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Website Type */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  1. Select Website Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {siteTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSiteType(type.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        siteType === type.id
                          ? 'border-emerald-400 bg-emerald-500/10 text-white shadow-sm'
                          : 'border-white/5 bg-slate-900/40 text-slate-400 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white">{type.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Page Count Scope */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  2. Select Page Volume
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {pageScopes.map((scope) => (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setPageScope(scope.id as any)}
                      className={`p-2.5 rounded-xl text-center border text-xs font-medium transition-all ${
                        pageScope === scope.id
                          ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300 font-semibold'
                          : 'border-white/5 bg-slate-900/40 text-slate-400 hover:text-white'
                      }`}
                    >
                      {scope.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  3. Key Features & Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 rounded-xl border cursor-pointer flex items-start gap-2.5 transition-all ${
                          isChecked
                            ? 'border-emerald-500/40 bg-emerald-500/5 text-white'
                            : 'border-white/5 bg-slate-900/30 text-slate-400 hover:border-white/10'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-emerald-400 border-emerald-400 text-slate-950'
                              : 'border-slate-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-medium text-white">{addon.label}</div>
                          <div className="text-[10px] text-slate-400">{addon.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Estimate Summary Box (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Estimated Timeline
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white tabular-nums">~{estimatedDays}</span>
                  <span className="text-sm font-medium text-slate-400">Business Days</span>
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Fast delivery with milestone reviews
                </p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4 text-xs">
                <div className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                  Included in This Build
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Custom responsive design for desktop, tablet & mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Elementor Pro setup & client-editable layout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Speed optimization, clean assets & SEO baseline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Complete handover video walkthrough</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleTransferToContact}
                className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>Apply & Start Project with This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
