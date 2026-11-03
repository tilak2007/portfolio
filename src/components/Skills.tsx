import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Database,
  Table,
  Cpu,
  BarChart3,
  Server,
  Network,
  GitBranch,
  Github,
  Terminal,
  CheckCircle,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, ProficiencyLevel } from '../types';
import { Card3D } from './3d/Card3D';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [proficiencyFilter, setProficiencyFilter] = useState<ProficiencyLevel | 'All'>('All');

  const categories: (SkillCategory | 'All')[] = [
    'All',
    'Programming',
    'Data Analytics',
    'Computer Science',
    'Tools',
  ];

  // Helper to map icon string to Lucide icon component
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Table':
        return <Table className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5" />;
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  const filteredSkills = skillsData.filter((skill) => {
    const categoryMatch = selectedCategory === 'All' || skill.category === selectedCategory;
    const proficiencyMatch = proficiencyFilter === 'All' || skill.proficiency === proficiencyFilter;
    return categoryMatch && proficiencyMatch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background ambient crimson lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-red-500/25 text-xs font-mono text-red-400 mb-3 shadow-glow-red-subtle">
              <Layers className="w-3.5 h-3.5 text-red-500" />
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Skills & Competencies
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              Curated stack focused on data analysis, relational systems, and applied computational problem solving.
            </p>
          </div>

          {/* Proficiency Status Legend */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#0A0A0A] border border-white/[0.08] text-xs font-mono shadow-md">
            <span className="text-[#A1A1AA] text-[11px] px-1">Proficiency:</span>
            <button
              onClick={() => setProficiencyFilter(proficiencyFilter === 'Proficient' ? 'All' : 'Proficient')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                proficiencyFilter === 'Proficient'
                  ? 'bg-red-600/20 text-red-300 border border-red-500/50 shadow-glow-red-subtle'
                  : 'bg-white/[0.03] text-neutral-300 hover:text-white border border-white/[0.06]'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5 text-red-500" />
              <span>Proficient</span>
            </button>
            <button
              onClick={() => setProficiencyFilter(proficiencyFilter === 'Developing' ? 'All' : 'Developing')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                proficiencyFilter === 'Developing'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-white/[0.03] text-neutral-300 hover:text-white border border-white/[0.06]'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Developing</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/[0.07] mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white font-semibold shadow-glow-red'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-[#0A0A0A] border border-transparent hover:border-white/[0.1]'
              }`}
            >
              {category}
            </button>
          ))}

          {proficiencyFilter !== 'All' && (
            <button
              onClick={() => setProficiencyFilter('All')}
              className="ml-auto text-xs font-mono text-red-400 hover:text-red-300 underline underline-offset-4"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Skills Grid with 3D Tilt */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const isProficient = skill.proficiency === 'Proficient';
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <Card3D maxTilt={7} glareOpacity={0.2} className="h-full">
                    <div className="group h-full relative rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-red-500/40 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-xl">
                      <div>
                        {/* Top Row: Icon & Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-red-600/10 border border-red-500/25 text-red-500 group-hover:text-red-400 group-hover:border-red-500/50 group-hover:scale-105 transition-all shadow-sm">
                              {getSkillIcon(skill.iconName)}
                            </div>
                            <div>
                              <h3 className="text-base font-semibold text-white tracking-tight">
                                {skill.name}
                              </h3>
                              <span className="text-[11px] font-mono text-[#A1A1AA]">
                                {skill.category}
                              </span>
                            </div>
                          </div>

                          {/* Explicit Proficiency Badge */}
                          {isProficient ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-red-600/10 text-red-400 border border-red-500/25">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                              <span>Proficient</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              <span>Developing</span>
                            </span>
                          )}
                        </div>

                        {/* Skill Description */}
                        <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-white/[0.05] group-hover:border-red-500/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Note on Proficiency Standards */}
        <div className="mt-10 p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06] flex items-start sm:items-center gap-3 shadow-md">
          <Sparkles className="w-4 h-4 text-red-500 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-[#A1A1AA] font-mono leading-relaxed">
            <strong className="text-white">Proficiency Guarantee:</strong> Skills marked as <em>Proficient</em> represent active, practical problem-solving capability in data pipelines and analytical tasks. Skills marked as <em>Developing</em> represent foundational coursework and ongoing algorithmic study.
          </p>
        </div>

      </div>
    </section>
  );
};
