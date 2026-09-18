import React, { useState } from 'react';
import { WORK_PILLARS } from '../data/portfolioData';
import { Database, Code2, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

const ICON_MAP = {
  Database: Database,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
};

export const WhatIWorkWithSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="pillars" className="relative py-24 bg-slate-950/60 border-t border-b border-slate-800/80">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-cyber-dots opacity-40 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I Work With
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A tripartite fusion of data intelligence, structured software development, and defensive cybersecurity principles.
          </p>
        </div>

        {/* The 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORK_PILLARS.map((pillar) => {
            const IconComponent = ICON_MAP[pillar.icon as keyof typeof ICON_MAP] || Database;
            const isHovered = hoveredCard === pillar.number;

            return (
              <div
                key={pillar.number}
                onMouseEnter={() => setHoveredCard(pillar.number)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group rounded-2xl p-8 glass-card border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-cyan-500/40 shadow-[0_16px_40px_rgba(6,182,212,0.15)] -translate-y-1.5'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Number & Icon Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 text-cyan-400 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80 uppercase tracking-wide mb-4">
                    {pillar.tagline}
                  </p>

                  {/* Core Description */}
                  <p className="text-slate-300/90 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
                  {pillar.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/70 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle bottom indicator glow */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r ${pillar.accentColor} rounded-full transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
