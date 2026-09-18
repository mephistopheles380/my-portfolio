import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DCanvas } from '../components/Hero3DCanvas';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/SocialIcons';
import {
  ArrowDownRight,
  Send,
  FileDown,
  Mail,
  MapPin,
  Terminal,
  ShieldCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroSection: React.FC = () => {
  const triggerResumeConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.3 },
        colors: ['#06b6d4', '#38bdf8', '#818cf8', '#34d399'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Text & Introduction */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left z-10">
            
            {/* Status & Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-medium text-emerald-400">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20">
                <span className="text-xs font-mono font-medium tracking-wider text-cyan-300">
                  {PERSONAL_INFO.eyebrow}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.headline}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text-cyan-purple tracking-tight">
                {PERSONAL_INFO.secondaryHeading}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Location & Focus Sub-badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-slate-600">•</span>
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Python & Data Ecosystem</span>
              <span className="text-slate-600">•</span>
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Cybersecurity Foundations</span>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFileName}
                onClick={triggerResumeConfetti}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-950/20 hover:bg-cyan-900/30 border border-cyan-500/30 hover:border-cyan-400 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95"
                title="Download Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social / Direct Quick Links */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Connect & Inspect:
                </span>
                
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.emailMailto}
                    className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    aria-label="Send Email to Pranav Kumar"
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-label="Chat on WhatsApp"
                  >
                    <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Interactive 3D Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]">
            <div className="absolute inset-0 rounded-3xl bg-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
            
            {/* 3D WebGL Sphere */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Hero3DCanvas className="w-full h-full max-w-[480px] max-h-[480px]" />

              {/* Floating micro-badges around the 3D sphere */}
              <div className="absolute top-6 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel border border-cyan-500/20 text-[11px] font-mono text-cyan-300 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Node Cluster: Live</span>
              </div>

              <div className="absolute bottom-6 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel border border-purple-500/20 text-[11px] font-mono text-purple-300 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Neural Matrix • 3D</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
