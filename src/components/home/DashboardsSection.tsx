import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Layers, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { DashboardItem } from '../../types';
import { Badge } from '../common/Badge';

interface DashboardsSectionProps {
  dashboards: DashboardItem[];
}

export const DashboardsSection: React.FC<DashboardsSectionProps> = ({ dashboards }) => {
  const [selectedDashboard, setSelectedDashboard] = useState<DashboardItem | null>(null);

  const getThemeBorder = (theme: DashboardItem['color_theme']) => {
    switch (theme) {
      case 'cyan': return 'border-cyan-500/30 hover:border-cyan-500/60';
      case 'emerald': return 'border-emerald-500/30 hover:border-emerald-500/60';
      case 'indigo': return 'border-indigo-500/30 hover:border-indigo-500/60';
      case 'purple': return 'border-purple-500/30 hover:border-purple-500/60';
      case 'blue': return 'border-blue-500/30 hover:border-blue-500/60';
      case 'amber': return 'border-amber-500/30 hover:border-amber-500/60';
      default: return 'border-slate-700/60';
    }
  };

  return (
    <section id="dashboards" className="py-24 bg-slate-100/50 dark:bg-[#070b16]/80 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Executive Business Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Analytics & Power BI Dashboards
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Translating complex machine learning algorithms and supply chain data into high-impact executive decision cockpits.
          </p>
        </div>

        {/* Dashboards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dash) => (
            <div
              key={dash.id}
              className={`rounded-2xl border ${getThemeBorder(dash.color_theme)} bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
            >
              {/* Card Header & Domain */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                    {dash.domain}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    Enterprise BI
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {dash.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {dash.description}
                </p>

                {/* KPI Chips */}
                <div className="space-y-2 mb-4">
                  {dash.kpis.slice(0, 2).map((kpi, kIdx) => (
                    <div key={kIdx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80 text-xs font-mono">
                      <span className="text-slate-500 truncate mr-2">{kpi.label}</span>
                      <div className="flex items-center space-x-1.5 shrink-0">
                        <span className="font-bold text-slate-900 dark:text-white">{kpi.value}</span>
                        {kpi.change && (
                          <span className="text-[10px] text-emerald-500">{kpi.change}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Purpose Callout */}
                <div className="p-3 rounded-lg bg-cyan-500/5 dark:bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300">
                  <strong className="text-cyan-600 dark:text-cyan-400 block font-mono text-[10px] uppercase mb-1">
                    Business Purpose:
                  </strong>
                  <p className="line-clamp-2">{dash.business_purpose}</p>
                </div>
              </div>

              {/* Tools & Expand Action */}
              <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {dash.tools.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDashboard(dash)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-500 transition-colors"
                  title="View Details"
                  aria-label="View Details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedDashboard && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#090e1a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-500 font-semibold">
                  {selectedDashboard.domain}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {selectedDashboard.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDashboard(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">
                  Overview & Capability
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedDashboard.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">
                  Executive Business Purpose
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  {selectedDashboard.business_purpose}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-2">
                  Tracked Operational KPIs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedDashboard.kpis.map((kpi, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] font-mono text-slate-500 block truncate">{kpi.label}</span>
                      <span className="text-lg font-bold font-mono text-emerald-500 block mt-0.5">{kpi.value}</span>
                      {kpi.change && <span className="text-[10px] text-slate-400 block">{kpi.change}</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">
                  Tools & Technology
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDashboard.tools.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedDashboard(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-mono font-semibold"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
