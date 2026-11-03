import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { Card3D } from './3d/Card3D';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background crimson ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[300px] bg-red-600/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-red-500/25 text-xs font-mono text-red-400 mb-3 shadow-glow-red-subtle">
            <GraduationCap className="w-3.5 h-3.5 text-red-500" />
            <span>05 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Academic Track
          </h2>
          <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
            Formal engineering curriculum establishing theoretical depth in AI & Data Science (AI & DS), computational mathematics, and database management.
          </p>
        </div>

        {/* Education Hero Card with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card3D maxTilt={5} glareOpacity={0.2}>
            <div className="rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-red-500/35 p-6 sm:p-8 md:p-10 backdrop-blur-2xl relative overflow-hidden shadow-2xl transition-all duration-300">
              {/* Crimson top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-crimson-600 to-red-950 opacity-90 shadow-glow-red-subtle" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Degree & Institution Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-600/10 text-red-400 border border-red-500/25">
                    <Sparkles className="w-3 h-3 text-red-500" />
                    <span>Undergraduate Degree Program</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {educationData.degree}
                  </h3>

                  <div className="text-base sm:text-lg font-medium text-neutral-200">
                    {educationData.institution}
                  </div>

                  {/* Configurable Year Display */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[#A1A1AA]">Current Academic Standing:</span>
                      <span className="font-mono font-semibold text-red-400 bg-red-600/10 px-2 py-0.5 rounded border border-red-500/25">
                        {educationData.currentYear}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        <span>Duration:</span>
                      </span>
                      <span className="text-neutral-200">{educationData.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        <span>Campus Location:</span>
                      </span>
                      <span className="text-neutral-200">{educationData.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#A1A1AA] font-mono">
                    * Note: Current academic year is centralized and easily configurable in <code className="text-red-400 bg-red-950/20 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
                  </p>
                </div>

                {/* Right Column: Key Coursework & Focus Areas */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Coursework */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-red-500" />
                      <span>Relevant Academic Coursework</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {educationData.coursework.map((course, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-[#050505] border border-white/[0.06] text-xs text-neutral-300 flex items-center gap-2 hover:border-red-500/30 transition-colors shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-sm shadow-red-500" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applied Competencies */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-red-500" />
                      <span>Core Academic Specializations</span>
                    </h4>
                    <div className="space-y-2">
                      {educationData.keyFocusAreas.map((area, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-neutral-300 p-2.5 rounded-lg bg-[#050505] border border-white/[0.04]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </Card3D>
        </motion.div>

      </div>
    </section>
  );
};
