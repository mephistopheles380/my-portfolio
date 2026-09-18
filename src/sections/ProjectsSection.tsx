import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';
import {
  FolderGit2,
  ScanFace,
  CheckCircle2,
  ArrowUpRight,
  Clock,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [simulationState, setSimulationState] = useState<'masked' | 'reconstructed'>('reconstructed');
  const featuredProject = PROJECTS_DATA.find((p) => p.isFeatured) || PROJECTS_DATA[0];
  const placeholderProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects Showcase
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hands-on implementation applying computer vision, dataset preparation, and structured empirical testing in Python.
          </p>
        </div>

        {/* LARGE FEATURED PROJECT CARD */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-[0_20px_50px_rgba(6,182,212,0.1)] mb-12 relative overflow-hidden group">
          
          {/* Subtle top right ambient glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Project Meta & Description */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/40">
                  {featuredProject.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700">
                  Role: <strong className="text-white">{featuredProject.role}</strong>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                {featuredProject.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {featuredProject.description}
              </p>

              {/* Structured Key Achievements / Points from Resume */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Deliverables & Testing Validation:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {featuredProject.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-slate-900/90 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: GitHub Link */}
              <div className="pt-4 flex items-center gap-4">
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Col: Bespoke Interactive Face Reconstruction Visualizer */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 shadow-2xl relative">
                
                {/* Visualizer Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ScanFace className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-mono font-semibold text-slate-200">
                      CV Pipeline Simulator
                    </span>
                  </div>
                  
                  {/* Toggle Mode */}
                  <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setSimulationState('masked')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                        simulationState === 'masked'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Masked
                    </button>
                    <button
                      type="button"
                      onClick={() => setSimulationState('reconstructed')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                        simulationState === 'reconstructed'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Reconstructed
                    </button>
                  </div>
                </div>

                {/* Cyber Facial Mesh SVG Canvas */}
                <div className="relative aspect-square max-w-[280px] mx-auto flex items-center justify-center p-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Face Contour */}
                    <path
                      d="M 60 50 C 60 20, 140 20, 140 50 C 140 100, 150 140, 100 180 C 50 140, 60 100, 60 50 Z"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="2"
                    />

                    {/* Eyes Landmarks */}
                    <circle cx="80" cy="75" r="5" fill="#38bdf8" />
                    <circle cx="120" cy="75" r="5" fill="#38bdf8" />
                    <line x1="72" y1="75" x2="88" y2="75" stroke="#06b6d4" strokeWidth="1.5" />
                    <line x1="112" y1="75" x2="128" y2="75" stroke="#06b6d4" strokeWidth="1.5" />

                    {/* Eyebrows */}
                    <path d="M 70 65 Q 80 60 90 65" fill="none" stroke="#64748b" strokeWidth="2" />
                    <path d="M 110 65 Q 120 60 130 65" fill="none" stroke="#64748b" strokeWidth="2" />

                    {/* Nose Bridge */}
                    <line x1="100" y1="75" x2="100" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />

                    {/* Masked vs Reconstructed Condition */}
                    {simulationState === 'masked' ? (
                      /* Mask Overlay */
                      <g className="transition-all duration-300">
                        <path
                          d="M 62 95 Q 100 105 138 95 L 132 155 Q 100 175 68 155 Z"
                          fill="rgba(15, 23, 42, 0.9)"
                          stroke="#06b6d4"
                          strokeWidth="2"
                          strokeDasharray="4 2"
                        />
                        <text
                          x="100"
                          y="135"
                          textAnchor="middle"
                          fill="#38bdf8"
                          fontSize="10"
                          fontFamily="monospace"
                        >
                          [OCCLUDED]
                        </text>
                      </g>
                    ) : (
                      /* Reconstructed Mouth, Jaw & Feature Landmarks */
                      <g className="transition-all duration-300">
                        {/* Nose tip */}
                        <circle cx="100" cy="105" r="3" fill="#a855f7" />
                        {/* Mouth landmark dots */}
                        <circle cx="85" cy="130" r="3" fill="#06b6d4" />
                        <circle cx="100" cy="126" r="3" fill="#06b6d4" />
                        <circle cx="115" cy="130" r="3" fill="#06b6d4" />
                        <circle cx="100" cy="135" r="3" fill="#06b6d4" />
                        {/* Lips connecting lines */}
                        <path d="M 85 130 Q 100 126 115 130 Q 100 137 85 130 Z" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="1.5" />
                        {/* Chin landmark */}
                        <circle cx="100" cy="158" r="3" fill="#3b82f6" />
                        {/* Triangulation reconstruction mesh */}
                        <line x1="80" y1="75" x2="100" y2="105" stroke="#334155" strokeWidth="1" />
                        <line x1="120" y1="75" x2="100" y2="105" stroke="#334155" strokeWidth="1" />
                        <line x1="100" y1="105" x2="85" y2="130" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="100" y1="105" x2="115" y2="130" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="85" y1="130" x2="100" y2="158" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="115" y1="130" x2="100" y2="158" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                        <text
                          x="100"
                          y="172"
                          textAnchor="middle"
                          fill="#34d399"
                          fontSize="9"
                          fontFamily="monospace"
                        >
                          CONFIDENCE: 94.8%
                        </text>
                      </g>
                    )}
                  </svg>

                  {/* Corner cyber markers */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
                </div>

                {/* Status Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>OpenCV Test Suite</span>
                  </div>
                  <span className="text-cyan-400">Lighting Invariant</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* MODULAR COMING-SOON PLACEHOLDERS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Pipeline & Future Releases</span>
            </h4>
            <span className="text-xs font-mono text-slate-500">Modular Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placeholderProjects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-2xl p-6 border border-dashed border-slate-800 hover:border-slate-700 bg-slate-950/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-cyan-400/80 bg-cyan-950/30 border border-cyan-500/20">
                      {proj.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{proj.role}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Editable template slot</span>
                  <span className="text-cyan-400/50">Ready for data release</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
