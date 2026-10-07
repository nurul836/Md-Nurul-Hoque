import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera, MessageCircle, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenPhotoModal: () => void;
  onOpenElementorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPhotoModal, onOpenElementorModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-white/8 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-2 group text-white hover:text-emerald-400 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              Nurul Hoque
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text links, single-line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenElementorModal}
              title="Download Elementor Kit, HTML, CSS & JS ZIP"
              className="p-2 text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 rounded-lg transition-colors text-xs flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline font-semibold">Elementor Kit (.ZIP)</span>
            </button>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (01970277595)"
              className="p-2 text-emerald-400 hover:text-emerald-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-xs flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline font-medium">WhatsApp</span>
            </a>

            <button
              onClick={onOpenPhotoModal}
              title="Change / Upload Your Profile Photo"
              className="p-2 text-slate-400 hover:text-emerald-400 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-xs flex items-center gap-1.5"
            >
              <Camera className="w-4 h-4" />
              <span className="hidden xl:inline text-xs font-normal">Photo</span>
            </button>

            <a
              href="#contact"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c121e] border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 text-base font-medium py-2 transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenElementorModal();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 text-sm font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Elementor Kit (.ZIP)</span>
            </button>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-lg bg-white/5 text-emerald-400 hover:text-white border border-white/10 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 01970277595</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotoModal();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-white/5 text-slate-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2"
            >
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>Change / Upload Photo</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
