import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  MessageSquare,
  Mail,
  Phone,
  FileDown,
  Copy,
  Check,
  Send,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  const triggerResumeConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#06b6d4', '#38bdf8', '#818cf8', '#34d399'],
      });
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950/70 border-t border-slate-800/80 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let's Build Something.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Have a project, opportunity, or idea? Feel free to reach out. I am always open to exploring meaningful technical collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* PRIMARY WHATSAPP SHOWCASE CTA */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-slate-900/80 to-slate-950 shadow-[0_16px_40px_rgba(16,185,129,0.12)] relative overflow-hidden group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Communication Channel</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Chat on WhatsApp
                </h3>
                <p className="text-slate-300 text-sm max-w-md">
                  Send a pre-filled introductory message directly to my phone for prompt discussion regarding data analytics or development opportunities.
                </p>
              </div>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-2xl transition-all duration-200 shadow-[0_0_24px_rgba(16,185,129,0.4)] hover:shadow-[0_0_36px_rgba(16,185,129,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 active:scale-95 shrink-0"
                aria-label="Send message to Pranav Kumar via WhatsApp"
              >
                <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
                <span>Message on WhatsApp</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>

          {/* CONTACT CHANNELS GRID: EMAIL, PHONE, RESUME */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Email Me</h4>
                <p className="text-xs font-mono text-slate-400 break-all mb-4">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              <a
                href={PERSONAL_INFO.emailMailto}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all"
              >
                <span>Open Mail Client</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-colors"
                    title="Copy Phone"
                    aria-label="Copy Phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Call Me</h4>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {PERSONAL_INFO.phone}
                </p>
              </div>

              <a
                href={PERSONAL_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-blue-300 border border-slate-800 hover:border-blue-500/40 transition-all"
              >
                <span>Launch Dialer</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Resume Download Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400">
                    <FileDown className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
                    PDF Document
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Official Resume</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Comprehensive academic, technical skills, and project history in PDF format.
                </p>
              </div>

              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFileName}
                onClick={triggerResumeConfetti}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/70 text-xs font-semibold text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 transition-all shadow-md"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Location Bar */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Location: {PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Open for Onsite / Hybrid / Remote Opportunities</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
