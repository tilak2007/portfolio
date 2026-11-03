import React from 'react';
import { motion } from 'framer-motion';
import { User, Compass, Brain, Target, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo, educationData, aboutHighlights } from '../data/portfolioData';
import { Card3D } from './3d/Card3D';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background ambient radial crimson glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-red-500/25 text-xs font-mono text-red-400 mb-3 shadow-glow-red-subtle">
            <User className="w-3.5 h-3.5 text-red-500" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Analytical Curiosity Meets Applied AI & Data Science
          </h2>
          <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-2xl">
            A focused profile combining theoretical computer science with pragmatic data analytics.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-red-500/30 transition-all duration-300 backdrop-blur-xl space-y-5 text-neutral-300 leading-relaxed shadow-xl">
              {personalInfo.fullBio.map((paragraph, index) => (
                <p key={index} className="text-base font-normal text-neutral-200">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA]">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-red-500" />
                  Primary Track: <strong className="text-white">Data Analytics & Business Intelligence</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-red-500" />
                  Institution: <strong className="text-white">{educationData.institution}</strong>
                </span>
              </div>
            </div>

            {/* 3 Core Highlights with 3D Tilt */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {aboutHighlights.map((item, idx) => (
                <Card3D key={idx} maxTilt={6} glareOpacity={0.2} className="h-full">
                  <div className="h-full p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.07] hover:border-red-500/40 transition-all duration-300 shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-semibold mb-1.5">
                      {item.badge}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] leading-normal">
                      {item.description}
                    </p>
                  </div>
                </Card3D>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Snapshot Card with 3D Tilt (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card3D maxTilt={7} glareOpacity={0.25}>
              <div className="rounded-2xl bg-[#0A0A0A] border border-white/[0.09] hover:border-red-500/35 p-6 space-y-6 shadow-2xl backdrop-blur-2xl transition-all duration-300">
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                  <img
                    src={personalInfo.photoUrl || '/profile.jpg'}
                    alt={personalInfo.name}
                    className="w-12 h-12 rounded-xl object-cover object-top border border-red-500/30 shadow-md shadow-red-500/10 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white truncate">{personalInfo.name}</h3>
                    <p className="text-xs font-mono text-red-400">{personalInfo.careerFocus} • Quick Facts</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/25 flex items-center justify-center shadow-sm shadow-red-500/20 shrink-0">
                    <Brain className="w-4 h-4 text-red-500" />
                  </div>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#A1A1AA]">Full Name</span>
                    <span className="text-white font-sans font-medium">{personalInfo.name}</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#A1A1AA]">Career Focus</span>
                    <span className="text-red-400 font-sans font-semibold">{personalInfo.careerFocus}</span>
                  </div>

                  <div className="flex justify-between items-start py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#A1A1AA]">Degree</span>
                    <span className="text-neutral-200 text-right font-sans font-medium max-w-[200px]">
                      {educationData.degree}
                    </span>
                  </div>

                  <div className="flex justify-between items-start py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#A1A1AA]">University</span>
                    <span className="text-neutral-200 text-right font-sans font-medium max-w-[200px]">
                      {educationData.institution}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#A1A1AA]">Academic Stage</span>
                    <span className="text-neutral-200 font-sans font-medium">{educationData.currentYear}</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#A1A1AA]">Location</span>
                    <span className="text-neutral-200 flex items-center gap-1 font-sans">
                      <MapPin className="w-3 h-3 text-red-500" />
                      <span>{educationData.location}</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-[#A1A1AA]">Core Foundations</span>
                    <span className="text-neutral-200 font-sans font-medium">SQL, Python, DBMS</span>
                  </div>
                </div>

                {/* Work philosophy callout */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 shadow-glow-red-subtle">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-1">
                    <Target className="w-3.5 h-3.5 text-red-500" />
                    <span>Guiding Principle</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    "{personalInfo.headline}"
                  </p>
                </div>
              </div>
            </Card3D>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
