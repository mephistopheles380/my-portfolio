import React, { useState, useEffect } from 'react';
import { AUTOMATION_PIPELINE } from '../data/portfolioData';
import {
  Database,
  FileCode2,
  LineChart,
  Lightbulb,
  Zap,
  Workflow,
  Play,
  Pause,
  RotateCcw,
} from 'lucide-react';

const ICON_MAP = {
  Database: Database,
  FileCode2: FileCode2,
  LineChart: LineChart,
  Lightbulb: Lightbulb,
  Zap: Zap,
};

export const AutomationPipelineSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % AUTOMATION_PIPELINE.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeNode = AUTOMATION_PIPELINE[activeStepIndex];
  const ActiveIcon = ICON_MAP[activeNode.icon as keyof typeof ICON_MAP] || Database;

  return (
    <section id="automation" className="relative py-24 bg-slate-950/70 border-t border-b border-slate-800/80 overflow-hidden">
      {/* Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Workflow Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            From Data to Automation
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            The five-stage operational continuum transforming disparate inputs into continuous, automated intelligence.
          </p>
        </div>

        {/* Pipeline Controls */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-cyan-400" />
                <span>Pause Flow</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span>Resume Simulation</span>
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => setActiveStepIndex(0)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs font-mono text-slate-400 hover:text-slate-200 transition-all"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* CONNECTED HORIZONTAL PIPELINE (Desktop / Tablet) */}
        <div className="relative mb-12">
          
          {/* Glowing Continuous Line behind nodes */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-800 rounded-full z-0">
            {/* Animated glowing progress segment */}
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-500 shadow-[0_0_12px_#06b6d4]"
              style={{
                width: `${(activeStepIndex / (AUTOMATION_PIPELINE.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 relative z-10">
            {AUTOMATION_PIPELINE.map((node, index) => {
              const Icon = ICON_MAP[node.icon as keyof typeof ICON_MAP] || Database;
              const isActive = index === activeStepIndex;
              const isPast = index < activeStepIndex;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => {
                    setActiveStepIndex(index);
                    setIsPlaying(false);
                  }}
                  className={`relative flex flex-col items-center p-5 rounded-2xl transition-all duration-300 text-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'bg-slate-900/90 border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] -translate-y-2'
                      : isPast
                      ? 'bg-slate-900/60 border border-cyan-500/30'
                      : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Node Icon Container */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-950/80 border border-cyan-400 text-cyan-300 shadow-[0_0_16px_rgba(6,182,212,0.4)] scale-110'
                        : isPast
                        ? 'bg-slate-900 border border-slate-700 text-cyan-400/80'
                        : 'bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-slate-300'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step indicator */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                    Stage 0{index + 1}
                  </span>

                  {/* Label */}
                  <h3
                    className={`text-sm font-bold tracking-tight mb-1 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {node.label}
                  </h3>

                  {/* Sublabel */}
                  <p className="text-[11px] font-mono text-cyan-400/80">
                    {node.sublabel}
                  </p>

                  {/* Micro Live Pulse when active */}
                  {isActive && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* DETAILED ACTIVE NODE INSPECTOR CARD */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Stage Info */}
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 text-cyan-400 shrink-0 shadow-lg">
                <ActiveIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    Active Pipeline Stage • 0{activeStepIndex + 1} / 05
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {activeNode.label} — {activeNode.sublabel}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  {activeNode.description}
                </p>
              </div>
            </div>

            {/* Simulated Stage Telemetry */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-right">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">
                  Data State
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED
                </span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-right">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">
                  Throughput
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400">
                  OPTIMAL
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
