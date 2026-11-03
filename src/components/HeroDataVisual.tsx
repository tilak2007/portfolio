import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Sparkles, TrendingUp, Filter, CheckCircle2 } from 'lucide-react';

export const HeroDataVisual: React.FC = () => {
  const [activeDataIndex, setActiveDataIndex] = useState<number | null>(4);

  const dataPoints = [
    { x: 30, y: 72, val: '42.8k', label: 'Q1 Ingestion' },
    { x: 90, y: 58, val: '68.4k', label: 'Feature Extraction' },
    { x: 150, y: 64, val: '59.1k', label: 'SQL Aggregations' },
    { x: 210, y: 38, val: '94.2k', label: 'Model Normalization' },
    { x: 270, y: 22, val: '128.6k', label: 'Insight Delivery' },
    { x: 330, y: 35, val: '112.0k', label: 'KPI Distribution' },
    { x: 390, y: 18, val: '145.3k', label: 'Target Optimal' },
  ];

  const pathD = `M 30 72 Q 60 58, 90 58 T 150 64 T 210 38 T 270 22 T 330 35 T 390 18`;
  const areaD = `${pathD} L 390 110 L 30 110 Z`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Ambient background glow behind visual */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/10 via-indigo-500/5 to-cyan-500/10 rounded-2xl blur-xl -z-10" />

      {/* Main Glass Visual Container */}
      <div className="rounded-2xl bg-[#0D0F16]/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl overflow-hidden p-5 sm:p-6 transition-all duration-300 hover:border-white/[0.18]">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-200 tracking-wide flex items-center gap-1.5">
                <span>Analytical Engine</span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  LIVE
                </span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400">
                Data Stream: Relational & Structured
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[11px] font-mono text-neutral-400">Pipeline Latency</div>
            <div className="text-xs font-mono font-medium text-emerald-400">7.2ms / optimal</div>
          </div>
        </div>

        {/* Data Stream Chart Visual */}
        <div className="py-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span>Statistical Density Spectrum</span>
            </span>
            <span className="font-mono text-[11px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              {activeDataIndex !== null ? dataPoints[activeDataIndex].label : 'Hover nodes'}
            </span>
          </div>

          {/* SVG Chart */}
          <div className="relative h-28 sm:h-32 w-full">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 420 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="visualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines */}
              <line x1="20" y1="25" x2="400" y2="25" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <line x1="20" y1="65" x2="400" y2="65" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <line x1="20" y1="105" x2="400" y2="105" stroke="rgba(255,255,255,0.08)" />

              {/* Area fill */}
              <motion.path
                d={areaD}
                fill="url(#visualGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Main curve */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />

              {/* Interactive Nodes */}
              {dataPoints.map((pt, idx) => (
                <g
                  key={idx}
                  className="cursor-pointer transition-transform duration-200"
                  onMouseEnter={() => setActiveDataIndex(idx)}
                  onClick={() => setActiveDataIndex(idx)}
                >
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={activeDataIndex === idx ? 6 : 4}
                    fill={activeDataIndex === idx ? '#38BDF8' : '#1E293B'}
                    stroke={activeDataIndex === idx ? '#FFFFFF' : '#60A5FA'}
                    strokeWidth={activeDataIndex === idx ? '2.5' : '1.5'}
                    className="transition-all duration-200"
                  />
                  {activeDataIndex === idx && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="12"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1"
                      strokeOpacity="0.5"
                      className="animate-ping"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Active Node Metric readout */}
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] mt-1">
            <span className="text-[11px] font-mono text-neutral-400">
              Selected Checkpoint: <strong className="text-neutral-200">{activeDataIndex !== null ? dataPoints[activeDataIndex].label : 'Select node'}</strong>
            </span>
            <span className="font-mono text-xs font-semibold text-blue-400">
              {activeDataIndex !== null ? dataPoints[activeDataIndex].val : '—'} records
            </span>
          </div>
        </div>

        {/* 3 Analytics KPI Chips */}
        <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-white/[0.07]">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 mb-1">
              <Database className="w-3 h-3 text-cyan-400" />
              <span>SQL Queries</span>
            </div>
            <div className="text-sm font-semibold font-mono text-neutral-100">Cleaned</div>
            <div className="text-[10px] text-neutral-400 flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
              <span>ACID Valid</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 mb-1">
              <Filter className="w-3 h-3 text-blue-400" />
              <span>Transformation</span>
            </div>
            <div className="text-sm font-semibold font-mono text-neutral-100">Pandas/NumPy</div>
            <div className="text-[10px] text-neutral-400 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Vectorized</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 mb-1">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>Impact</span>
            </div>
            <div className="text-sm font-semibold font-mono text-neutral-100">Actionable</div>
            <div className="text-[10px] text-neutral-400 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>Evidence-based</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
