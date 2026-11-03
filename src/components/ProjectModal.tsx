import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Layers, CheckCircle2, Workflow, Database } from 'lucide-react';
import { ProjectItem } from '../types';
import { useToast } from '../context/ToastContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { showToast } = useToast();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleGithubClick = (e: React.MouseEvent) => {
    if (project.githubUrl.includes('your-username') || project.githubUrl.includes('placeholder')) {
      e.preventDefault();
      navigator.clipboard.writeText(project.githubUrl);
      showToast(`Placeholder repo URL copied! Update with your repository link in src/data/portfolioData.ts.`, 'info', 'GitHub Repository');
    }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    if (project.demoUrl?.includes('your-username') || project.demoUrl?.includes('#readme') || project.demoUrl?.includes('placeholder')) {
      e.preventDefault();
      showToast(`This is an exploratory data analysis project documented above. Live pipeline preview available in this modal.`, 'info', 'Project Dossier');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#0A0A0A] border border-red-500/30 rounded-2xl p-6 sm:p-8 shadow-glow-red-lg z-10 my-8 overflow-hidden text-left"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-red-600/10 text-red-400 border border-red-500/25">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#A1A1AA] bg-white/[0.03] border border-white/[0.06]">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] hover:border-red-500/30 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-6 space-y-6">
            
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-red-500" />
                <span>Analytical Context & Scope</span>
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Pipeline */}
            {project.architectureOverview && (
              <div className="p-4 rounded-xl bg-black/50 border border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-red-500" />
                  <span>Pipeline Architecture</span>
                </h4>
                <div className="text-xs font-mono text-neutral-300 bg-[#050505] p-3 rounded-lg border border-white/[0.05] overflow-x-auto text-red-300/90">
                  {project.architectureOverview}
                </div>
              </div>
            )}

            {/* Key Analytical Highlights */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                <span>Key Technical Focus Areas</span>
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-sm shadow-red-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-red-500" />
                <span>Technologies Applied</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-neutral-200 border border-white/[0.07]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <div className="text-[11px] font-mono text-[#A1A1AA]">
              Repository URL is configurable in portfolioData.ts
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                onClick={handleGithubClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-[#050505] hover:bg-white/[0.08] text-neutral-200 hover:text-white border border-white/[0.1] hover:border-red-500/40 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  onClick={handleDemoClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-glow-red transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Details</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
