import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Terminal,
  BarChart3,
  Shield,
  Cpu,
  Users,
  Languages,
  Layers,
} from 'lucide-react';

const CATEGORY_ICON_MAP = {
  Terminal: Terminal,
  BarChart3: BarChart3,
  Shield: Shield,
  Cpu: Cpu,
  Users: Users,
  Languages: Languages,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [, setActiveTooltip] = useState<string | null>(null);

  const categoriesToDisplay =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-slate-950/60 border-t border-b border-slate-800/80">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Practical proficiencies across data exploration, core software scripting, defensive cybersecurity utilities, and analytical methods.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesToDisplay.map((cat) => {
            const IconComp = CATEGORY_ICON_MAP[cat.iconName as keyof typeof CATEGORY_ICON_MAP] || Terminal;

            return (
              <div
                key={cat.id}
                className="glass-card rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips / Items */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                    {cat.skills.map((skill) => {
                      const skillKey = `${cat.id}-${skill.name}`;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveTooltip(skillKey)}
                          onMouseLeave={() => setActiveTooltip(null)}
                          className={`relative group/item p-3 rounded-xl border transition-all duration-200 cursor-default ${
                            skill.highlight
                              ? 'bg-slate-900/90 border-cyan-500/30 hover:border-cyan-400/60 shadow-sm'
                              : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  skill.highlight ? 'bg-cyan-400 shadow-[0_0_6px_#06b6d4]' : 'bg-slate-500'
                                }`}
                              />
                              <span className="text-sm font-semibold text-slate-100 group-hover/item:text-cyan-300 transition-colors">
                                {skill.name}
                              </span>
                            </div>

                            {skill.level && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/60">
                                {skill.level}
                              </span>
                            )}
                          </div>

                          {/* Subtle Description */}
                          {skill.description && (
                            <p className="text-xs text-slate-400/90 mt-1.5 pl-3.5 leading-relaxed font-normal">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/50">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-cyan-400/60">Verified practice</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
