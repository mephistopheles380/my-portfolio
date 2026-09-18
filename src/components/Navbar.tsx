import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'What I Work With', href: '#pillars' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pipeline', href: '#automation' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerResumeConfetti = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.2 },
        colors: ['#06b6d4', '#38bdf8', '#a855f7', '#10b981'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-slate-100 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
            aria-label="Pranav Kumar Homepage"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-cyan-500/50 transition-all shadow-inner">
              <span className="font-mono font-bold text-base tracking-tighter text-cyan-400 group-hover:scale-105 transition-transform">
                PK
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-slate-950 animate-pulse" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-200 group-hover:text-white transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[11px] text-cyan-400/80">
                CS & Cyber Sec • Data
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)] border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFileName}
              onClick={triggerResumeConfetti}
              className="relative group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 hover:border-cyan-400 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95"
              aria-label="Download Pranav Kumar's Resume PDF"
            >
              <FileDown className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFileName}
              onClick={triggerResumeConfetti}
              className="inline-flex items-center justify-center p-2 text-cyan-400 bg-slate-900 border border-cyan-500/30 rounded-lg hover:bg-slate-800"
              aria-label="Download Resume PDF"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-500">→</span>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800/80">
              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFileName}
                onClick={() => {
                  triggerResumeConfetti();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/50 rounded-xl shadow-lg shadow-cyan-950/50"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
