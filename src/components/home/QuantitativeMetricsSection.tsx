import React from 'react';
import { 
  FolderGit2, 
  History, 
  CalendarClock, 
  Cpu, 
  Layers,
  Info
} from 'lucide-react';
import { MetricCounter } from '../common/MetricCounter';

export const QuantitativeMetricsSection: React.FC = () => {
  const metrics = [
    {
      icon: FolderGit2,
      value: 12,
      suffix: '+',
      title: 'Analytics Projects',
      subtitle: 'End-to-end academic & professional projects',
      detail: 'Retail, Supply Chain, Automotive, Insurance & Telecom use cases',
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: History,
      value: 3,
      suffix: '+ Years',
      title: 'Transaction History Analyzed',
      subtitle: 'Customer purchasing & RFM segmentation',
      detail: 'Multi-year POS records analyzed for customer retention & affinities',
      accent: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: CalendarClock,
      value: 12,
      suffix: ' Months',
      title: 'Forecast Horizon',
      subtitle: 'Forward sales & demand planning',
      detail: 'ARIMA, SARIMA & Exponential Smoothing with 95% confidence intervals',
      accent: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Cpu,
      value: 7,
      suffix: '+',
      title: 'ML Classification Approaches',
      subtitle: 'Evaluated & benchmarked',
      detail: 'Logistic Regression, Random Forest, SVM, Decision Trees, KNN, Naive Bayes, LDA',
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: Layers,
      value: 8,
      suffix: '+',
      title: 'Business Domains',
      subtitle: 'Cross-industry applications',
      detail: 'Retail, FMCG, Supply Chain, Automotive, Transportation, Telecom, E-commerce, Insurance',
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="metrics" className="py-20 relative scroll-mt-12 bg-white dark:bg-[#0b1222] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <span>Portfolio Scope & Depth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Quantitative Analytics Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Empirical scale, data horizon, and algorithmic depth demonstrated across completed data science and business analytics projects.
          </p>
        </div>

        {/* 5 Quantitative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/30 transition-all hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${m.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono mb-1">
                    <MetricCounter end={m.value} suffix={m.suffix} />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {m.title}
                  </h3>

                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-2">
                    {m.subtitle}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/60 dark:border-slate-800 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clarification Disclaimer Banner */}
        <div className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 text-center">
          <Info className="w-4 h-4 text-cyan-500 shrink-0" />
          <span>
            <strong>Portfolio Experience Metrics:</strong> These metrics reflect completed academic, professional, and research data science case studies and should not be construed as unilateral corporate employment figures.
          </span>
        </div>

      </div>
    </section>
  );
};
