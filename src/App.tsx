import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AnalyticsShowcase } from './components/AnalyticsShowcase';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Background3DCanvas } from './components/3d/Background3DCanvas';
import { CursorGlow } from './components/CursorGlow';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#050505] text-white relative selection:bg-red-600/30 selection:text-white">
        {/* Continuous 3D Ambient Canvas in Background */}
        <Background3DCanvas />

        {/* Desktop Interactive Crimson Cursor Glow */}
        <CursorGlow />

        {/* Ambient top red radial glow */}
        <div
          aria-hidden="true"
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-red-600/[0.04] rounded-full blur-[170px] pointer-events-none -z-10"
        />

        {/* Sticky Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          {/* 1. Hero Section with 3D Interactive WebGL Scene */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* 2. About Me Section */}
          <About />

          {/* 3. Technical Skills Section */}
          <Skills />

          {/* 4. Featured Projects Section with 3D Tilt Cards */}
          <Projects />

          {/* 5. Analytical Code Showcase (SQL & Python Workbench) */}
          <AnalyticsShowcase />

          {/* 6. Education Section */}
          <Education />

          {/* 7. Certifications & Credentials Section */}
          <Certifications />

          {/* 8. Contact & Socials Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Viewer & Export Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ToastProvider>
  );
};

export default App;
