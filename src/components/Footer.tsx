import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { Mail, ArrowUp, FileDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerResumeConfetti = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.9 },
        colors: ['#06b6d4', '#38bdf8', '#818cf8', '#34d399'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <footer className="relative bg-[#02050e] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Identity */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 font-mono font-bold text-sm">
                PK
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
            </div>
            <p className="text-xs font-mono text-cyan-400/80">
              {PERSONAL_INFO.identity}
            </p>
            <p className="text-xs text-slate-400 max-w-sm">
              Turning data into insights and ideas into intelligent solutions with Python and a cybersecurity mindset.
            </p>
          </div>

          {/* Social Icons & Resume CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.emailMailto}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFileName}
              onClick={triggerResumeConfetti}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Three.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
