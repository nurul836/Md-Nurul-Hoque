import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  FileCode,
  Layers,
  AlertTriangle,
  FileJson,
  Code,
  CheckCircle2,
} from 'lucide-react';

interface ElementorKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ElementorKitModal: React.FC<ElementorKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedJSON, setCopiedJSON] = useState(false);
  const [copiedHTMLWidget, setCopiedHTMLWidget] = useState(false);
  const [activeTab, setActiveTab] = useState<'fix' | 'json' | 'downloads' | 'html-widget' | 'css'>('fix');

  if (!isOpen) return null;

  const elementorTemplateData = {
    version: "0.4",
    title: "Nurul Hoque - WordPress Web Designer & Developer Portfolio",
    type: "page",
    content: [
      {
        id: "nh_hero_section",
        elType: "section",
        isInner: false,
        settings: {
          layout: "boxed",
          custom_css: "selector { padding-top: 100px; padding-bottom: 80px; background-color: #080c14; }"
        },
        elements: [
          {
            id: "nh_hero_col_left",
            elType: "column",
            settings: { _column_size: 60 },
            elements: [
              {
                id: "nh_hero_badge",
                elType: "widget",
                widgetType: "html",
                settings: {
                  html: "<div class=\"nh-badge\"><span style=\"width:8px;height:8px;border-radius:50%;background:#34d399;display:inline-block;\"></span> WORDPRESS WEB DESIGNER · AVAILABLE WORLDWIDE</div>"
                }
              },
              {
                id: "nh_hero_title",
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: "I Build <span style=\"color:#34d399\">Modern WordPress Websites</span> That Help Businesses Grow.",
                  header_size: "h1"
                }
              },
              {
                id: "nh_hero_desc",
                elType: "widget",
                widgetType: "text-editor",
                settings: {
                  editor: "<p style=\"color:#cbd5e1;font-size:18px;line-height:1.7;\">I design fast, responsive and conversion-focused WordPress websites for businesses, entrepreneurs, agencies and online brands with Elementor and WooCommerce.</p>"
                }
              },
              {
                id: "nh_hero_buttons",
                elType: "widget",
                widgetType: "html",
                settings: {
                  html: "<div style=\"display:flex;gap:14px;flex-wrap:wrap;margin-top:20px;\"><a href=\"#projects\" class=\"nh-btn-primary\">View My Work</a><a href=\"https://wa.me/8801970277595?text=Hello%20Nurul,%20I%20am%20interested%20in%20a%20WordPress%20project\" target=\"_blank\" class=\"nh-btn-whatsapp\">WhatsApp: 01970277595</a><a href=\"#contact\" class=\"nh-btn-secondary\">Let's Work Together</a></div>"
                }
              }
            ]
          },
          {
            id: "nh_hero_col_right",
            elType: "column",
            settings: { _column_size: 40 },
            elements: [
              {
                id: "nh_hero_image_card",
                elType: "widget",
                widgetType: "html",
                settings: {
                  html: "<div class=\"nh-glass-card\" style=\"padding:16px;text-align:center;\"><img src=\"https://ais-pre-4ol6bizhh2x6jw5utvdr3j-586170754480.asia-southeast1.run.app/assets/images/nurul_hoque_official_portrait_1791264591190.jpg\" alt=\"Nurul Hoque\" style=\"width:100%;border-radius:12px;aspect-ratio:3/4;object-fit:cover;object-position:top;\" /><div style=\"margin-top:14px;text-align:left;\"><strong style=\"color:#ffffff;font-size:18px;\">Nurul Hoque</strong><div style=\"color:#34d399;font-size:13px;\">WordPress Web Designer & Developer · 2+ Years Exp</div><div style=\"color:#94a3b8;font-size:12px;margin-top:4px;\">WhatsApp: 01970277595 | mdnurulhoque1904@gmail.com</div></div></div>"
                }
              }
            ]
          }
        ]
      },
      {
        id: "nh_about_section",
        elType: "section",
        isInner: false,
        settings: {
          layout: "boxed",
          custom_css: "selector { padding-top: 80px; padding-bottom: 80px; background-color: #090e18; border-top: 1px solid rgba(255,255,255,0.06); }"
        },
        elements: [
          {
            id: "nh_about_col",
            elType: "column",
            settings: { _column_size: 100 },
            elements: [
              {
                id: "nh_about_heading",
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: "About Me & Core WordPress Specialization",
                  header_size: "h2"
                }
              },
              {
                id: "nh_about_stats",
                elType: "widget",
                widgetType: "html",
                settings: {
                  html: "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-top:30px;\"><div class=\"nh-glass-card\" style=\"padding:24px;\"><div style=\"font-size:32px;font-weight:800;color:#ffffff;\">2+</div><div style=\"color:#34d399;font-weight:600;font-size:14px;\">Years Experience</div><div style=\"color:#94a3b8;font-size:12px;\">Continuous WordPress Specialization</div></div><div class=\"nh-glass-card\" style=\"padding:24px;\"><div style=\"font-size:32px;font-weight:800;color:#ffffff;\">20+</div><div style=\"color:#34d399;font-weight:600;font-size:14px;\">Projects Built</div><div style=\"color:#94a3b8;font-size:12px;\">E-commerce, Business & LMS</div></div><div class=\"nh-glass-card\" style=\"padding:24px;\"><div style=\"font-size:32px;font-weight:800;color:#ffffff;\">100%</div><div style=\"color:#34d399;font-weight:600;font-size:14px;\">Responsive Design</div><div style=\"color:#94a3b8;font-size:12px;\">Flawless Mobile & Desktop QA</div></div><div class=\"nh-glass-card\" style=\"padding:24px;\"><div style=\"font-size:32px;font-weight:800;color:#ffffff;\">Client-Focused</div><div style=\"color:#34d399;font-weight:600;font-size:14px;\">Strategic Approach</div><div style=\"color:#94a3b8;font-size:12px;\">Prioritizing Business Conversions</div></div></div>"
                }
              }
            ]
          }
        ]
      },
      {
        id: "nh_contact_section",
        elType: "section",
        isInner: false,
        settings: {
          layout: "boxed",
          custom_css: "selector { padding-top: 80px; padding-bottom: 90px; background-color: #080c14; border-top: 1px solid rgba(255,255,255,0.06); }"
        },
        elements: [
          {
            id: "nh_contact_col",
            elType: "column",
            settings: { _column_size: 100 },
            elements: [
              {
                id: "nh_contact_heading",
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: "Have a project in mind? Let's build something great together.",
                  header_size: "h2"
                }
              },
              {
                id: "nh_contact_channels",
                elType: "widget",
                widgetType: "html",
                settings: {
                  html: "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px;\"><a href=\"https://wa.me/8801970277595?text=Hello%20Nurul,%20I%20am%20interested%20in%20a%20WordPress%20project\" target=\"_blank\" class=\"nh-glass-card\" style=\"padding:24px;text-decoration:none;display:block;\"><div style=\"color:#34d399;font-weight:700;font-size:12px;text-transform:uppercase;\">WhatsApp (Fastest Response)</div><div style=\"color:#ffffff;font-size:20px;font-weight:800;margin-top:6px;\">01970277595</div><div style=\"color:#94a3b8;font-size:13px;margin-top:4px;\">International: +880 1970 277595</div></a><a href=\"https://www.linkedin.com/in/md-nurul-hoque-191a4637a/\" target=\"_blank\" class=\"nh-glass-card\" style=\"padding:24px;text-decoration:none;display:block;\"><div style=\"color:#60a5fa;font-weight:700;font-size:12px;text-transform:uppercase;\">LinkedIn Profile</div><div style=\"color:#ffffff;font-size:18px;font-weight:700;margin-top:6px;\">md-nurul-hoque-191a4637a</div><div style=\"color:#94a3b8;font-size:13px;margin-top:4px;\">Connect Professionally</div></a><a href=\"https://www.facebook.com/nurlhoque22\" target=\"_blank\" class=\"nh-glass-card\" style=\"padding:24px;text-decoration:none;display:block;\"><div style=\"color:#38bdf8;font-weight:700;font-size:12px;text-transform:uppercase;\">Facebook Profile</div><div style=\"color:#ffffff;font-size:18px;font-weight:700;margin-top:6px;\">nurlhoque22</div><div style=\"color:#94a3b8;font-size:13px;margin-top:4px;\">Direct Social Contact</div></a><a href=\"mailto:mdnurulhoque1904@gmail.com\" class=\"nh-glass-card\" style=\"padding:24px;text-decoration:none;display:block;\"><div style=\"color:#34d399;font-weight:700;font-size:12px;text-transform:uppercase;\">Email Inquiries</div><div style=\"color:#ffffff;font-size:16px;font-weight:700;margin-top:6px;\">mdnurulhoque1904@gmail.com</div><div style=\"color:#94a3b8;font-size:13px;margin-top:4px;\">Response under 12 hours</div></a></div>"
                }
              }
            ]
          }
        ]
      }
    ]
  };

  const sampleCSS = `/* ==========================================================================
   NURUL HOQUE - WORDPRESS & ELEMENTOR PORTFOLIO CUSTOM STYLES
   Paste into: Appearance > Customize > Additional CSS
   ========================================================================== */

:root {
  --nh-bg-main: #080c14;
  --nh-bg-surface: #0f172a;
  --nh-bg-card: rgba(15, 23, 42, 0.75);
  --nh-border-subtle: rgba(255, 255, 255, 0.08);
  --nh-border-accent: rgba(16, 185, 129, 0.35);
  --nh-emerald-400: #34d399;
  --nh-emerald-500: #10b981;
}

body.nh-portfolio-body,
.elementor-page-nurul-portfolio {
  background-color: var(--nh-bg-main) !important;
  color: #f8fafc !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important;
}

.nh-glass-card {
  background: var(--nh-bg-card);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.nh-glass-card:hover {
  border-color: rgba(16, 185, 129, 0.35);
  transform: translateY(-3px);
  box-shadow: 0 20px 40px -15px rgba(16, 185, 129, 0.08);
}

.nh-gradient-text {
  background: linear-gradient(135deg, #34d399 0%, #2dd4bf 50%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nh-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #6ee7b7;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nh-btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
  background-color: #34d399;
  color: #04120c !important;
  text-decoration: none;
  box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.3);
}

.nh-btn-whatsapp {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  background: rgba(16, 185, 129, 0.15);
  color: #a7f3d0 !important;
  border: 1px solid rgba(16, 185, 129, 0.35);
  text-decoration: none;
}`;

  const htmlWidgetSnippet = `<!-- NURUL HOQUE PORTFOLIO - ELEMENTOR HTML WIDGET -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Syne:wght@700;800&display=swap">
<script src="https://cdn.tailwindcss.com"></script>

<div class="bg-[#080c14] text-slate-100 font-sans min-h-screen py-16 px-4 sm:px-8">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Hero Block -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span> WORDPRESS WEB DESIGNER
        </div>
        <h1 class="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          I Build <span class="text-emerald-400">Modern WordPress Websites</span> That Help Businesses Grow.
        </h1>
        <p class="text-slate-300 text-lg leading-relaxed">
          I design fast, responsive and conversion-focused WordPress websites with Elementor & WooCommerce.
        </p>
        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#nh-projects" class="px-7 py-3.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg">View My Work</a>
          <a href="https://wa.me/8801970277595?text=Hello%20Nurul,%20I%20am%20interested%20in%20a%20WordPress%20project" target="_blank" class="px-6 py-3.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold text-sm">
            WhatsApp: 01970277595
          </a>
        </div>
      </div>
      <div class="lg:col-span-5 text-center">
        <div class="bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl inline-block max-w-sm w-full">
          <img src="https://ais-pre-4ol6bizhh2x6jw5utvdr3j-586170754480.asia-southeast1.run.app/assets/images/nurul_hoque_official_portrait_1791264591190.jpg" alt="Nurul Hoque" class="w-full rounded-xl aspect-[3/4] object-cover object-top">
          <div class="mt-4 text-left">
            <h3 class="text-lg font-bold text-white">Nurul Hoque</h3>
            <p class="text-emerald-400 text-xs font-semibold">WordPress Web Designer & Developer</p>
            <p class="text-slate-400 text-xs mt-1">WhatsApp: 01970277595 · Remote Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // Direct In-Memory Browser File Generator (Forces Download in Any Browser)
  const downloadJSONDirectly = () => {
    const jsonStr = JSON.stringify(elementorTemplateData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'elementor-template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyCustomizerCSS = () => {
    navigator.clipboard.writeText(sampleCSS);
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2500);
  };

  const copyJSONCode = () => {
    const jsonStr = JSON.stringify(elementorTemplateData, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedJSON(true);
    setTimeout(() => setCopiedJSON(false), 2500);
  };

  const copyHTMLWidget = () => {
    navigator.clipboard.writeText(htmlWidgetSnippet);
    setCopiedHTMLWidget(true);
    setTimeout(() => setCopiedHTMLWidget(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0d1322] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                WordPress & Elementor Export Files
              </h2>
              <p className="text-xs text-slate-400">
                Direct File Downloads + 1-Click Copy Methods
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap border-b border-white/10 gap-2">
          <button
            onClick={() => setActiveTab('fix')}
            className={`pb-3 text-xs font-semibold px-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'fix'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct JSON Download</span>
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`pb-3 text-xs font-semibold px-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'json'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy JSON Code (Notepad Method)</span>
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`pb-3 text-xs font-semibold px-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'downloads'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All File Packages</span>
          </button>
          <button
            onClick={() => setActiveTab('html-widget')}
            className={`pb-3 text-xs font-semibold px-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'html-widget'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Elementor HTML Widget Code</span>
          </button>
        </div>

        {/* Tab 1: Instant Direct Download */}
        {activeTab === 'fix' && (
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/70 to-slate-900 border border-emerald-500/40 space-y-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[11px] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Elementor Ready (.JSON)</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">elementor-template.json</h3>
                  <p className="text-xs text-slate-300">
                    WordPress <strong>Templates &gt; Saved Templates &gt; Import Templates</strong> এর জন্য একক ফাইল।
                  </p>
                </div>

                <button
                  onClick={downloadJSONDirectly}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5 stroke-[2.5]" />
                  <span>এখনই ডাউনলোড করুন (.JSON)</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2 text-xs text-slate-300">
              <div className="font-bold text-white text-sm">ডাউনলোড হওয়ার পর কী করবেন?</div>
              <ol className="list-decimal pl-5 space-y-1.5 text-slate-400">
                <li>WordPress ড্যাশবোর্ডে <strong>Templates &gt; Saved Templates</strong>-এ যান।</li>
                <li>উপরে <strong>Import Templates</strong> বাটনে ক্লিক করুন।</li>
                <li>ডাউনলোড করা <strong>`elementor-template.json`</strong> সিলেক্ট করে আপলোড করে দিন।</li>
              </ol>
            </div>
          </div>
        )}

        {/* Tab 2: Copy JSON Code */}
        {activeTab === 'json' && (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs text-blue-200">
              <strong className="block font-bold text-white mb-1">
                ব্রাউজারে ডাউনলোড না হলে Notepad দিয়ে করার নিয়ম:
              </strong>
              ১. নিচে <strong>"Copy All JSON Code"</strong> বাটনে ক্লিক করুন।<br />
              ২. আপনার কম্পিউটারে <strong>Notepad</strong> (নোটপ্যাড) খুলুন এবং পেস্ট করুন।<br />
              ৩. <strong>File &gt; Save As</strong>-এ গিয়ে ফাইলের নাম দিন <code>elementor-template.json</code> (Save as type: All Files)। বাস, আপনার ফাইল তৈরি!
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">JSON Code Content:</span>
              <button
                onClick={copyJSONCode}
                className="px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedJSON ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedJSON ? 'সম্পূর্ণ কপি হয়েছে!' : 'Copy All JSON Code'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-[11px] overflow-x-auto max-h-56 leading-normal">
              {JSON.stringify(elementorTemplateData, null, 2)}
            </pre>
          </div>
        )}

        {/* Tab 3: Downloads */}
        {activeTab === 'downloads' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
                    <FileJson className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-sm">elementor-template.json</div>
                  <p className="text-xs text-slate-400">
                    Saved Templates &gt; Import Templates এর জন্য।
                  </p>
                </div>
                <button
                  onClick={downloadJSONDirectly}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .JSON</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 w-fit">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-sm">elementor-kit.zip</div>
                  <p className="text-xs text-slate-400">
                    Elementor &gt; Tools &gt; Import Kit মেনুর জন্য।
                  </p>
                </div>
                <a
                  href="/downloads/elementor-kit.zip"
                  download="elementor-kit.zip"
                  className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download Kit (.ZIP)</span>
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 w-fit">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-white text-sm">Full Bundle (.ZIP)</div>
                  <p className="text-xs text-slate-400">
                    সব ফাইল (HTML, CSS, JS, Images).
                  </p>
                </div>
                <a
                  href="/downloads/nurul-hoque-portfolio-elementor.zip"
                  download="nurul-hoque-portfolio-elementor.zip"
                  className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download Full (4.1MB)</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: HTML Widget Code */}
        {activeTab === 'html-widget' && (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">
              <strong className="block font-bold text-white mb-1">
                কোনো ফাইল আপলোড না করেই ১ ক্লিকে ব্যবহার:
              </strong>
              WordPress-এ যেকোনো নতুন পেজ খুলে <strong>Edit with Elementor</strong> দিন &gt; বাম পাশ থেকে <strong>HTML Widget</strong> ড্র্যাগ করে বসান &gt; নিচের কোডটি পেস্ট করুন &gt; সাথে সাথে আপনার ওয়েবসাইট তৈরি!
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Elementor HTML Widget Code:</span>
              <button
                onClick={copyHTMLWidget}
                className="px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedHTMLWidget ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHTMLWidget ? 'Copied to Clipboard!' : 'Copy HTML Widget Code'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-[11px] overflow-x-auto max-h-56 leading-normal">
              {htmlWidgetSnippet}
            </pre>
          </div>
        )}

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
