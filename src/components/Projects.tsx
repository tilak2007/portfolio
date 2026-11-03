import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Sparkles, Layers, ArrowUpRight, Info } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { useToast } from '../context/ToastContext';
import { Card3D } from './3d/Card3D';

export const Projects: React.FC = () => {
  const { showToast } = useToast();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const handleProjectGithubClick = (e: React.MouseEvent, project: ProjectItem) => {
    if (project.githubUrl.includes('your-username') || project.githubUrl.includes('placeholder')) {
      e.preventDefault();
      setSelectedProject(project);
      showToast(`Repository placeholder: You can customize your GitHub link in src/data/portfolioData.ts. Opening architecture dossier.`, 'info', project.title);
    }
  };

  const handleProjectDemoClick = (e: React.MouseEvent, project: ProjectItem) => {
    if (project.demoUrl?.includes('your-username') || project.demoUrl?.includes('#readme') || project.demoUrl?.includes('placeholder')) {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background crimson ambient glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[380px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-red-500/25 text-xs font-mono text-red-400 mb-3 shadow-glow-red-subtle">
              <FolderGit2 className="w-3.5 h-3.5 text-red-500" />
              <span>03 // FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Data & Analytical Projects
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              Engineered studies and analytics frameworks demonstrating structured querying, exploratory data analysis, and predictive modeling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-red-600 text-white font-semibold shadow-glow-red'
                    : 'bg-[#0A0A0A] text-[#A1A1AA] hover:text-white hover:bg-[#141414] border border-white/[0.08] hover:border-red-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with 3D Tilt */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card3D maxTilt={6} glareOpacity={0.25} className="h-full">
                  <div className="group h-full relative rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl">
                    
                    <div>
                      {/* Category and Featured Pill */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-red-600/10 text-red-400 border border-red-500/25">
                          {project.category}
                        </span>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-red-400 font-medium">
                            <Sparkles className="w-3 h-3 text-red-500" />
                            <span>Featured Case Study</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline with 3D Pop */}
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-red-500" />
                      </h3>

                      <p className="text-xs font-mono text-[#A1A1AA] mt-1 mb-3">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Highlights Bullet List */}
                      <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-black/40 border border-white/[0.04]">
                        {project.highlights.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-sm shadow-red-500" />
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Technologies Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-white/[0.06] group-hover:border-red-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons: GitHub & Live Demo */}
                      <div className="flex items-center justify-between gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-mono text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors group-hover:text-red-300"
                        >
                          <Layers className="w-3.5 h-3.5 text-red-500" />
                          <span>Architecture Details</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            onClick={(e) => handleProjectGithubClick(e, project)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#050505] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white border border-white/[0.08] hover:border-red-500/40 transition-all shadow-sm"
                            aria-label={`View ${project.title} on GitHub`}
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              onClick={(e) => handleProjectDemoClick(e, project)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-600/15 hover:bg-red-600/25 text-red-300 hover:text-white border border-red-500/35 transition-all shadow-glow-red-subtle"
                              title="View Case Study / Demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                              <span>Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Methodology Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06] flex items-center gap-3 shadow-md">
          <Info className="w-4 h-4 text-red-500 shrink-0" />
          <p className="text-xs text-[#A1A1AA] font-mono">
            <strong className="text-white">Analytical Integrity:</strong> These projects represent realistic data analytics frameworks with real architectural workflows, schema designs, and analysis methodologies. Repository links can be updated to specific GitHub URLs via <code className="text-red-400 bg-red-950/20 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
          </p>
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
