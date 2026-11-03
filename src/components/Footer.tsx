import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Analytics', href: '#analytics-code' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Top crimson ambient accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent shadow-glow-red-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Purpose (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-red-500/30 flex items-center justify-center font-mono font-bold text-xs text-red-500 shadow-sm shadow-red-500/20">
                {personalInfo.initials}
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm font-semibold text-red-400 font-mono">
              "{personalInfo.headline}"
            </p>

            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
              B.Tech in Artificial Intelligence & Data Science (AI & DS) student dedicated to data analytics, structured query modeling, and business problem solving.
            </p>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between items-start md:items-end">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3 md:text-right">
                Connect
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0A0A0A] hover:bg-red-950/30 text-neutral-300 hover:text-white border border-white/[0.08] hover:border-red-500/40 transition-colors shadow-sm hover:shadow-glow-red-subtle group"
                  aria-label="Vinayaka Tilak PS on GitHub"
                  title="GitHub Profile (tilak2007)"
                >
                  <Github className="w-4 h-4 text-neutral-300 group-hover:text-red-400 group-hover:scale-110 transition-all" />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0A0A0A] hover:bg-red-950/30 text-neutral-300 hover:text-white border border-white/[0.08] hover:border-red-500/40 transition-colors shadow-sm hover:shadow-glow-red-subtle group"
                  aria-label="Vinayaka Tilak PS on LinkedIn"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2 rounded-lg bg-[#0A0A0A] hover:bg-[#141414] text-[#A1A1AA] hover:text-white border border-white/[0.08] hover:border-red-500/40 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] hover:bg-red-950/30 text-neutral-300 hover:text-white border border-white/[0.08] hover:border-red-500/40 text-xs font-mono transition-all shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-[#A1A1AA]">
            <span>Engineered with React • TypeScript • Three.js 3D • Tailwind CSS • Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
