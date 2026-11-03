import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Hero3DScene } from './3d/Hero3DScene';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[96vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Cinematic Ambient Red Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-crimson-800/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-950/[0.1] rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern overlay with soft vignette */}
      <div className="absolute inset-0 bg-grid-dots opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]" />

      {/* Hero Ambient 3D Scene Layer (Clean, high-tech neural constellation in background depth) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-70 sm:opacity-85 overflow-hidden">
        <Hero3DScene className="w-full h-full scale-105" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A0A0A]/90 border border-white/[0.09] shadow-lg backdrop-blur-md hover:border-red-500/30 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 shadow-sm shadow-red-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-neutral-300">
                {personalInfo.statusBadge}
              </span>
            </motion.div>

            {/* Large Heading & Headline */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-[0.28em] text-red-500 font-mono font-semibold">
                    Data Analyst • Artificial Intelligence & Data Science
                  </span>
                  <span className="w-8 h-[1px] bg-red-500/50" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  <span className="text-gradient">Vinayaka Tilak PS</span>
                </h1>
              </motion.div>

              {/* Headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-gradient-red"
              >
                {personalInfo.headline}
              </motion.p>
            </div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl font-normal"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-crimson-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium text-sm transition-all duration-300 shadow-glow-red hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0A0A0A] hover:bg-[#141414] text-neutral-200 hover:text-white font-medium text-sm border border-white/[0.1] hover:border-red-500/40 transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-glow-red-subtle"
              >
                <Mail className="w-4 h-4 text-red-500 group-hover:text-red-400" />
                <span>Contact Me</span>
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-neutral-400 hover:text-white text-xs font-mono tracking-wide hover:bg-white/[0.04] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Curriculum Vitae</span>
                </button>
              )}
            </motion.div>

            {/* Core Tech Stack Mini Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA]"
            >
              <span className="text-neutral-500 flex items-center gap-1.5 mr-1 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                Specialization:
              </span>
              {['Python', 'SQL', 'Pandas', 'NumPy', 'DBMS', 'Power BI', 'EDA'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-[#0A0A0A] border border-white/[0.07] text-neutral-300 hover:border-red-500/40 hover:text-white transition-colors shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.07] max-w-lg"
            >
              <div>
                <div className="text-xl font-bold font-display text-white">2nd Year</div>
                <div className="text-[11px] font-mono text-[#A1A1AA]">B.Tech AI & DS</div>
              </div>
              <div>
                <div className="text-xl font-bold font-display text-white">5+ Projects</div>
                <div className="text-[11px] font-mono text-[#A1A1AA]">Full-Stack & EDA</div>
              </div>
              <div>
                <div className="text-xl font-bold font-display text-red-400">Production</div>
                <div className="text-[11px] font-mono text-[#A1A1AA]">SQL & Python</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Seamless Cutout Photo Integration into Website 3D Background */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center"
            >
              {/* Cinematic Red Halo Glow behind Vinayaka's Cutout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-[480px] bg-red-600/[0.16] rounded-full blur-[110px] pointer-events-none -z-10 animate-glow-pulse" />

              {/* Subtle Tech Cyber Circle in the 3D space behind him */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 rounded-full border border-red-500/[0.15] pointer-events-none -z-10 animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-84 sm:w-92 h-84 sm:h-92 rounded-full border border-dashed border-red-500/[0.08] pointer-events-none -z-10" />

              {/* The Transparent Cutout Standing Directly in the 3D Space */}
              <div className="relative w-full h-[490px] sm:h-[550px] flex items-end justify-center overflow-hidden">
                <img
                  src={personalInfo.photoUrl || '/profile-cutout.png'}
                  alt={personalInfo.name}
                  className="w-full h-full object-contain object-bottom select-none drop-shadow-[0_20px_50px_rgba(220,38,38,0.3)] transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                  }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('profile-cutout.png')) {
                      target.src = '/profile-cutout-studio.png';
                    }
                  }}
                />
              </div>

              {/* Minimalist Floating Pill below Photo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-3 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A0A0A]/90 border border-white/[0.09] shadow-xl backdrop-blur-md hover:border-red-500/40 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                <span className="text-xs font-mono font-medium text-white">{personalInfo.name}</span>
                <span className="text-neutral-500">•</span>
                <span className="text-xs font-mono text-neutral-300">B.Tech AI & DS</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
