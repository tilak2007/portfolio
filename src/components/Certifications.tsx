import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';
import { Card3D } from './3d/Card3D';

export const Certifications: React.FC = () => {
  const { showToast } = useToast();

  const handleCredentialClick = (e: React.MouseEvent, title: string, url: string) => {
    if (url.includes('placeholder')) {
      e.preventDefault();
      navigator.clipboard.writeText(url);
      showToast(`Placeholder verification URL: You can connect your direct certificate link in src/data/portfolioData.ts. URL copied!`, 'info', title);
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background crimson glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-red-600/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-red-500/25 text-xs font-mono text-red-400 mb-3 shadow-glow-red-subtle">
              <Award className="w-3.5 h-3.5 text-red-500" />
              <span>06 // CREDENTIALS & SPECIALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Certifications & Academic Milestones
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              Curated verification pathways across SQL analytics, applied Python data science, and relational database systems.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1.5 p-2 rounded-lg bg-[#0A0A0A] border border-white/[0.08]">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Ready for your verification IDs</span>
          </div>
        </div>

        {/* Certifications Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificationsData.map((cert) => {
            const isCompleted = cert.status === 'Completed';
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card3D maxTilt={6} glareOpacity={0.2} className="h-full">
                  <div className="group h-full relative rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-red-500/35 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl">
                    <div>
                      {/* Status Badge & Issuer */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xs font-mono text-[#A1A1AA]">
                          {cert.issuer}
                        </span>

                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-red-600/10 text-red-400 border border-red-500/25">
                            <CheckCircle2 className="w-3 h-3 text-red-500" />
                            <span>Completed</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <span>In Progress</span>
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                        {cert.title}
                      </h3>

                      <div className="text-xs font-mono text-[#A1A1AA] mb-4">
                        Timeline: {cert.issueDate}
                      </div>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cert.skillsLearned.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-white/[0.05] group-hover:border-red-500/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-neutral-500">
                        Credential URL Placeholder
                      </span>

                      <a
                        href={cert.credentialUrl}
                        onClick={(e) => handleCredentialClick(e, cert.title, cert.credentialUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#050505] hover:bg-[#141414] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-red-500/40 transition-all shadow-sm"
                      >
                        <span>View Credential</span>
                        <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06] text-xs font-mono text-[#A1A1AA] shadow-md">
          💡 You can customize these certificates or swap in your direct Coursera, HackerRank, or University verification links anytime in <code className="text-red-400 bg-red-950/20 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
        </div>

      </div>
    </section>
  );
};
