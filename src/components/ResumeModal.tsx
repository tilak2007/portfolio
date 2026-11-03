import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import { personalInfo, educationData, projectsData, socialLinks } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainResume = `
${personalInfo.name.toUpperCase()}
Career Focus: ${personalInfo.careerFocus}
Email: ${socialLinks.email} | Location: ${socialLinks.location}
LinkedIn: ${socialLinks.linkedin} | GitHub: ${socialLinks.github}

SUMMARY
${personalInfo.shortBio}

EDUCATION
${educationData.degree}
${educationData.institution} | ${educationData.currentYear} (${educationData.duration})
Coursework: ${educationData.coursework.join(', ')}

TECHNICAL SKILLS
- Programming: Python (Proficient), SQL (Proficient)
- Data Analytics: Pandas (Proficient), NumPy (Proficient), Data Visualization (Proficient)
- Computer Science: DBMS (Proficient), DSA (Developing)
- Tools: Git, GitHub, VS Code

FEATURED PROJECTS
${projectsData.map(p => `• ${p.title} (${p.technologies.join(', ')})\n  ${p.description}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    showToast('Plaintext resume copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl no-print"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-[#0A0A0A] border border-red-500/30 rounded-2xl p-6 sm:p-8 shadow-glow-red-lg z-10 max-h-[90vh] flex flex-col my-auto text-left"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] no-print">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-red-600/10 border border-red-500/25 text-red-500">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">Curriculum Vitae</h3>
                <p className="text-xs font-mono text-[#A1A1AA]">Vinayaka Tilak PS • Data Analyst Profile</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#141414] hover:bg-[#1C1C1C] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-red-500/30 transition-colors shadow-sm"
                title="Copy plaintext summary"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-red-400" /> : <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium transition-colors shadow-glow-red"
                title="Print or export as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] hover:border-red-500/30 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Container */}
          <div id="resume-printable-area" className="overflow-y-auto py-6 space-y-6 text-neutral-200 text-xs sm:text-sm font-sans pr-2">
            
            {/* Header / Contact */}
            <div className="border-b border-white/[0.08] pb-5">
              <h1 className="text-2xl font-bold text-white tracking-tight">{personalInfo.name}</h1>
              <p className="text-sm font-semibold text-red-400 font-mono mt-0.5">{personalInfo.careerFocus}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#A1A1AA] font-mono mt-2">
                <span>Email: {socialLinks.email}</span>
                <span>•</span>
                <span>Location: {socialLinks.location}</span>
                <span>•</span>
                <span>Degree: B.Tech AI & DS</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs uppercase tracking-wider font-mono font-semibold text-white mb-2 border-b border-white/[0.06] pb-1">
                Professional Profile
              </h2>
              <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
                {personalInfo.shortBio} {personalInfo.fullBio[0]}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase tracking-wider font-mono font-semibold text-white mb-2 border-b border-white/[0.06] pb-1">
                Education
              </h2>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-white">{educationData.degree}</h3>
                  <span className="text-xs font-mono text-red-400 font-medium">{educationData.currentYear}</span>
                </div>
                <div className="text-xs text-neutral-300">{educationData.institution} • {educationData.location}</div>
                <p className="text-xs text-[#A1A1AA] font-mono pt-1">
                  Key Coursework: {educationData.coursework.join(', ')}
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs uppercase tracking-wider font-mono font-semibold text-white mb-2 border-b border-white/[0.06] pb-1">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <strong className="text-white font-mono">Programming:</strong>{' '}
                  <span className="text-neutral-300">Python (Proficient), SQL (Proficient)</span>
                </div>
                <div>
                  <strong className="text-white font-mono">Data Analytics:</strong>{' '}
                  <span className="text-neutral-300">Pandas, NumPy, Data Visualization (Proficient)</span>
                </div>
                <div>
                  <strong className="text-white font-mono">Computer Science:</strong>{' '}
                  <span className="text-neutral-300">DBMS (Proficient), DSA (Developing)</span>
                </div>
                <div>
                  <strong className="text-white font-mono">Tools:</strong>{' '}
                  <span className="text-neutral-300">Git, GitHub, VS Code (Proficient)</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs uppercase tracking-wider font-mono font-semibold text-white mb-3 border-b border-white/[0.06] pb-1">
                Selected Analytical Projects
              </h2>
              <div className="space-y-4">
                {projectsData.slice(0, 2).map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs sm:text-sm font-semibold text-white">
                        {proj.title}
                      </h3>
                      <span className="text-[11px] font-mono text-red-400">
                        {proj.technologies.slice(0, 3).join(' • ')}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {proj.description}
                    </p>
                    <ul className="list-disc list-inside text-xs text-[#A1A1AA] space-y-0.5">
                      {proj.highlights.slice(0, 2).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA] no-print">
            <span>Configurable data loaded from portfolioData.ts</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] text-white border border-white/[0.08] hover:border-red-500/30 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
