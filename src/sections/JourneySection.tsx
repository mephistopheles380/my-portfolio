import React from 'react';
import { JOURNEY_TIMELINE } from '../data/portfolioData';
import { Milestone } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>Evolutionary Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            My Learning Journey
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A deliberate progression bridging academic computer science & cybersecurity foundations into advanced data analytics and predictive modeling.
          </p>
        </div>

        {/* MODERN VERTICAL TIMELINE */}
        <div className="relative">
          
          {/* Central Vertical Guide Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500/30" />

          <div className="space-y-12">
            {JOURNEY_TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const isActive = item.status === 'active';
              const isEvolving = item.status === 'evolving';

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all shadow-md ${
                        isActive
                          ? 'bg-slate-950 border-cyan-400 text-cyan-300 shadow-[0_0_16px_rgba(6,182,212,0.6)]'
                          : isEvolving
                          ? 'bg-slate-950 border-purple-400 text-purple-300'
                          : 'bg-slate-950 border-blue-500/60 text-blue-400'
                      }`}
                    >
                      {isActive ? (
                        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                      ) : (
                        <span className="font-mono text-xs font-bold">{item.step}</span>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div
                      className={`rounded-2xl p-6 transition-all duration-300 border ${
                        isActive
                          ? 'glass-card border-cyan-500/40 bg-slate-900/80 shadow-[0_12px_36px_rgba(6,182,212,0.15)]'
                          : isEvolving
                          ? 'glass-card border-purple-500/30 bg-slate-900/50'
                          : 'glass-panel border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
                      }`}
                    >
                      {/* Phase & Status Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-medium text-cyan-400/90">
                          {item.phase}
                        </span>
                        
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                            isActive
                              ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-300'
                              : isEvolving
                              ? 'bg-purple-950/60 border border-purple-500/40 text-purple-300'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      {/* Focus Tag Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                        {item.focus.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
