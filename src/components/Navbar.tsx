import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, ArrowUpRight, Linkedin, Github } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Analytics', href: '#analytics-code' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'analytics-code', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (sectionId === 'certifications') {
              setActiveSection('education');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Vinayaka Tilak PS - Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0A0A0A] border border-white/[0.12] group-hover:border-red-500/50 transition-all duration-300 shadow-md group-hover:shadow-glow-red">
              <span className="font-mono text-sm font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
                {personalInfo.initials}
              </span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-600 ring-2 ring-[#050505] shadow-sm shadow-red-500" />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-sm font-semibold tracking-wide text-white group-hover:text-red-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-xs font-mono text-[#A1A1AA] tracking-wider">
                {personalInfo.careerFocus}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0A0A0A]/90 border border-white/[0.08] backdrop-blur-xl shadow-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-red-600/15 rounded-full border border-red-500/40 shadow-glow-red-subtle"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: GitHub, LinkedIn, Resume & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* GitHub Profile Link */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#0A0A0A] hover:bg-red-950/30 text-neutral-300 hover:text-white border border-white/[0.12] hover:border-red-500/40 transition-all duration-200 shadow-sm hover:shadow-glow-red-subtle group"
              aria-label="Vinayaka Tilak PS on GitHub"
              title="Open GitHub Profile (New Tab)"
            >
              <Github className="w-3.5 h-3.5 text-neutral-300 group-hover:text-red-400 group-hover:scale-110 transition-all" />
            </a>

            {/* LinkedIn Profile Link */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#0A0A0A] hover:bg-red-950/30 text-neutral-300 hover:text-white border border-white/[0.12] hover:border-red-500/40 transition-all duration-200 shadow-sm hover:shadow-glow-red-subtle group"
              aria-label="Vinayaka Tilak PS on LinkedIn"
              title="Open LinkedIn Profile (New Tab)"
            >
              <Linkedin className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-neutral-200 hover:text-white rounded-lg bg-[#0A0A0A] hover:bg-red-950/30 border border-white/[0.12] hover:border-red-500/40 transition-all duration-200 shadow-sm hover:shadow-glow-red-subtle"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-red-500" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] opacity-70" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 p-4 md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-red-900/30 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5 py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-red-600/15 text-red-400 border border-red-500/30 font-semibold'
                        : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.08] space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium bg-[#0A0A0A] text-neutral-200 border border-white/[0.12] hover:border-red-500/40 hover:text-white transition-all shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5 text-neutral-300" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium bg-[#0A0A0A] text-neutral-200 border border-white/[0.12] hover:border-red-500/40 hover:text-white transition-all shadow-sm"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-red-500" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600/30 transition-all shadow-glow-red-subtle"
                >
                  <FileText className="w-4 h-4 text-red-400" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
