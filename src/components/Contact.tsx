import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialServiceOrScope?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialServiceOrScope }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('WordPress Website Design');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialServiceOrScope) {
      if (initialServiceOrScope.startsWith('Project Scope:')) {
        setMessage((prev) => (prev ? `${prev}\n\n${initialServiceOrScope}` : initialServiceOrScope));
      } else {
        setProjectType(initialServiceOrScope);
        setMessage((prev) => (prev ? `${prev}\n\nSelected Service: ${initialServiceOrScope}` : `Hi Nurul, I am interested in: ${initialServiceOrScope}.`));
      }
    }
  }, [initialServiceOrScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Trigger submission success state
    setIsSubmitted(true);
  };

  const copyInquiry = () => {
    const text = `From: ${name} (${email})\nProject: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${projectType} - ${name || 'New Client'}`
  )}&body=${encodeURIComponent(
    `Hello Nurul,\n\nMy Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you!`
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-white/5 bg-[#080c14] overflow-hidden radial-glow-emerald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Top Banner */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            <span className="w-6 h-px bg-emerald-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            Have a project in mind?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Let's build something great together.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Whether you need a new WordPress website from scratch, a WooCommerce store, or an Elementor redesign, I'm ready to bring your ideas to reality. Reach out via WhatsApp or email for a quick response.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0f172a]/80 border border-white/10 shadow-2xl backdrop-blur-md">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Ready!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Your project brief has been formatted. You can directly launch your email client, connect instantly on WhatsApp, or copy the message.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/10 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-emerald-400" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyInquiry}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/5 transition-colors"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs text-slate-400 hover:text-white pt-4 block mx-auto underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Project Type
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="WordPress Website Design">WordPress Website Design</option>
                        <option value="Business Website">Business Website</option>
                        <option value="E-commerce Store (WooCommerce)">E-commerce Store (WooCommerce)</option>
                        <option value="LMS / Online Course Website">LMS / Online Course Website</option>
                        <option value="Landing Page Design">Landing Page Design</option>
                        <option value="WordPress Redesign">WordPress Redesign</option>
                        <option value="Website Customization & Speed">Website Customization & Speed</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Estimated Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="$300 - $600">$300 - $600 (Landing Page / Fix)</option>
                        <option value="$600 - $1,200">$600 - $1,200 (Standard Business Site)</option>
                        <option value="$1,200 - $2,500">$1,200 - $2,500 (WooCommerce / Custom LMS)</option>
                        <option value="$2,500+">$2,500+ (Full Brand & Multi-page Portal)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your website goals, key features needed, or share a link to your current site..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                    >
                      <span>Start a Project</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Quick Chat</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Direct Details & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-[#0f172a]/60 border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-4 text-sm">
                {/* WhatsApp Direct */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      WhatsApp (Fastest Response)
                    </div>
                    <div className="text-white font-bold group-hover:text-emerald-300 transition-colors text-base">
                      {PERSONAL_INFO.whatsapp}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      International: {PERSONAL_INFO.whatsappFormatted} · Click to chat
                    </div>
                  </div>
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <div className="text-white font-medium group-hover:text-emerald-300 transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Response Commitment */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Response Commitment</div>
                    <div className="text-white font-medium">Under 12 hours (7 days a week)</div>
                  </div>
                </div>
              </div>

              {/* Verified Social Channels */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Social & Professional Profiles
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {/* LinkedIn */}
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/10 text-slate-200 hover:text-white border border-white/5 hover:border-emerald-500/30 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="font-semibold">LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                  </a>

                  {/* Facebook */}
                  <a
                    href={PERSONAL_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/10 text-slate-200 hover:text-white border border-white/5 hover:border-emerald-500/30 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="font-semibold">Facebook Page</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                  </a>

                  {/* WhatsApp Direct Card */}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/10 text-slate-200 hover:text-white border border-white/5 hover:border-emerald-500/30 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-semibold">WhatsApp Chat</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                  </a>

                  {/* Upwork Profile */}
                  <a
                    href="https://www.upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Upwork Freelance</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

