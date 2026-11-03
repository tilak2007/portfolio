import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, Code, Sparkles, Database, FileCode } from 'lucide-react';
import { codeSnippetsData } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';

export const AnalyticsShowcase: React.FC = () => {
  const { showToast } = useToast();
  const [activeSnippetId, setActiveSnippetId] = useState(codeSnippetsData[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeSnippet = codeSnippetsData.find((s) => s.id === activeSnippetId) || codeSnippetsData[0];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    showToast('Code snippet copied to clipboard!', 'success');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="analytics-code" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background crimson glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[350px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-red-500/25 text-xs font-mono text-red-400 mb-3 shadow-glow-red-subtle">
              <Terminal className="w-3.5 h-3.5 text-red-500" />
              <span>04 // ANALYTICAL CODE WORKBENCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Applied SQL & Python Logic
            </h2>
            <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              Concrete code architecture demonstrating window aggregations, vectorized data wrangling, and relational database modeling.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A1A1AA] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Interactive Code Inspector</span>
          </div>
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-2xl bg-[#080808] border border-white/[0.09] hover:border-red-500/30 transition-all duration-300 shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0C0C0C] border-b border-white/[0.08] gap-4">
            
            {/* Window Controls & Selector Tabs */}
            <div className="flex items-center gap-4 overflow-x-auto">
              {/* Terminal Dots */}
              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-600 inline-block shadow-sm shadow-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-[#333333] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#222222] inline-block" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1.5">
                {codeSnippetsData.map((snippet) => {
                  const isActive = snippet.id === activeSnippetId;
                  return (
                    <button
                      key={snippet.id}
                      onClick={() => setActiveSnippetId(snippet.id)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        isActive
                          ? 'bg-red-600/15 text-red-300 border border-red-500/40 shadow-glow-red-subtle font-medium'
                          : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.04] border border-transparent'
                      }`}
                    >
                      {snippet.language === 'sql' ? (
                        <Database className="w-3.5 h-3.5 text-red-500" />
                      ) : (
                        <FileCode className="w-3.5 h-3.5 text-red-400" />
                      )}
                      <span>{snippet.title.split(':')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(activeSnippet.code, activeSnippet.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#141414] hover:bg-red-950/40 text-neutral-300 hover:text-white border border-white/[0.08] hover:border-red-500/40 transition-colors shadow-sm"
              title="Copy snippet code"
            >
              {copiedId === activeSnippet.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-red-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Snippet Header Description */}
          <div className="px-6 py-4 bg-[#0A0A0A] border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-semibold text-white tracking-wide">{activeSnippet.title}</span>
              <p className="text-[#A1A1AA] font-mono mt-0.5">{activeSnippet.useCase}</p>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-red-400 bg-red-600/10 border border-red-500/25 self-start sm:self-auto font-medium">
              Language: {activeSnippet.language.toUpperCase()}
            </span>
          </div>

          {/* Code Body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSnippet.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-[#050505]"
            >
              <pre className="text-neutral-200">
                <code>{activeSnippet.code}</code>
              </pre>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Analytical Context Callout */}
          <div className="px-6 py-3 bg-[#0A0A0A] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
            <span className="flex items-center gap-1.5">
              <Code className="w-3 h-3 text-red-500" />
              <span>{activeSnippet.description}</span>
            </span>
            <span className="text-neutral-500 hidden md:inline">Reproducible & ACID Compliant</span>
          </div>

        </div>

      </div>
    </section>
  );
};
