import React from 'react';
import { ABOUT_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Compass, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {ABOUT_DATA.title}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {ABOUT_DATA.lead}
          </p>
        </div>

        {/* 2-Column Content: Left Story, Right Education & Attributes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Story & Key Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-8 border border-slate-800/80 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Engineering Philosophy</h3>
              </div>

              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300/90 text-sm sm:text-base leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {/* Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                {ABOUT_DATA.traits.map((trait, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {trait.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-100">
                      {trait.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Skills Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-cyan-500/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Hands-on Technical Focus</h4>
                  <p className="text-xs text-slate-400">
                    Python • Computer Vision (OpenCV) • Traffic Auditing • Analytical Modeling
                  </p>
                </div>
              </div>
              <a
                href="#skills"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-cyan-300 hover:text-cyan-200 border border-slate-700 hover:border-cyan-500/40 transition-all shrink-0"
              >
                <span>View All Skills</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Education Cards (Visually Secondary, Clean & Structured) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Record</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Verified Credentials</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((item, idx) => {
                const isPrimary = idx === 0;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-6 transition-all duration-200 border ${
                      isPrimary
                        ? 'glass-card border-cyan-500/30 bg-slate-900/70 shadow-[0_8px_24px_rgba(6,182,212,0.1)]'
                        : 'glass-panel border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 mb-2">
                          {item.period}
                        </span>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {item.degree}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.institution} • {item.location}
                        </p>
                      </div>

                      {/* Score Badge */}
                      <div className="text-right shrink-0">
                        <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                          <span className="text-xs font-mono text-slate-400 block text-[10px] uppercase">
                            {item.scoreType}
                          </span>
                          <span className="text-base font-bold font-mono text-cyan-400">
                            {item.score}
                          </span>
                        </div>
                      </div>
                    </div>

                    {item.details && (
                      <p className="text-xs text-slate-400/90 mt-3 pt-3 border-t border-slate-800/60 leading-relaxed">
                        {item.details}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
