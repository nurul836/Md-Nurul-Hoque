import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Plus, CheckCircle, Info } from 'lucide-react';
import { INITIAL_TESTIMONIALS } from '../data/portfolioData';
import { Testimonial } from '../types/portfolio';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('nh_portfolio_testimonials');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_TESTIMONIALS;
      }
    }
    return INITIAL_TESTIMONIALS;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newQuote, setNewQuote] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newProjectType, setNewProjectType] = useState('WordPress Website');

  useEffect(() => {
    localStorage.setItem('nh_portfolio_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote.trim() || !newRole.trim()) return;

    const newEntry: Testimonial = {
      id: `test-${Date.now()}`,
      clientRole: newRole,
      companyOrNiche: newCompany || 'Verified Business Client',
      quote: `“${newQuote.replace(/^["“]|["”]$/g, '')}”`,
      rating: 5,
      projectType: newProjectType,
      isPlaceholderNotice: false,
    };

    setTestimonials([newEntry, ...testimonials]);
    setNewQuote('');
    setNewRole('');
    setNewCompany('');
    setIsEditing(false);
  };

  return (
    <section className="py-24 sm:py-32 relative border-t border-white/5 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              <span>Client Feedback & Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Testimonials & Client Feedback.
            </h2>
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Real endorsements from business owners and founders. Clearly marked template cards ready for your incoming client reviews.
            </p>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium flex items-center gap-2 transition-colors shrink-0"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            <span>Add / Customize Testimonial</span>
          </button>
        </div>

        {/* Add Testimonial Form Drawer */}
        {isEditing && (
          <form
            onSubmit={handleAddTestimonial}
            className="mb-12 p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-4 animate-fade-in"
          >
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Add a Client Testimonial
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Client Role (e.g. Founder, Marketing Director)"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                required
                className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <input
                type="text"
                placeholder="Company or Niche (e.g. Retail Apparel, SaaS)"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <input
                type="text"
                placeholder="Project (e.g. WooCommerce Store, Business Site)"
                value={newProjectType}
                onChange={(e) => setNewProjectType(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Enter the testimonial quote..."
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors"
              >
                Save Review
              </button>
            </div>
          </form>
        )}

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-2xl bg-[#0f172a]/60 hover:bg-[#121c33] border border-white/8 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-emerald-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400" />
                    ))}
                  </div>

                  {test.isPlaceholderNotice && (
                    <span className="text-[10px] uppercase font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      Placeholder Slot
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  {test.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="text-sm font-bold text-white">{test.clientRole}</div>
                <div className="text-xs text-slate-400">{test.companyOrNiche}</div>
                <div className="text-[11px] text-emerald-400 font-mono mt-1">
                  Project: {test.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
