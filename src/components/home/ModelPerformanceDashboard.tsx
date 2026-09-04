import React, { useState } from 'react';
import { 
  Gauge, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  Cpu, 
  Layers, 
  Activity,
  ArrowUpRight,
  Filter
} from 'lucide-react';

interface MetricItem {
  id: string;
  title: string;
  metric: string;
  value: string;
  unit?: string;
  projectSlug: string;
  algorithm: string;
  status: 'validated' | 'benchmark';
  benchmarkComparison: string;
  category: string;
}

interface ModelPerformanceDashboardProps {
  onSelectProject?: (slug: string) => void;
}

export const ModelPerformanceDashboard: React.FC<ModelPerformanceDashboardProps> = ({ 
  onSelectProject 
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const metrics: MetricItem[] = [
    {
      id: 'metric-1',
      title: 'Clustering Separation',
      metric: 'Silhouette Score',
      value: '0.690',
      projectSlug: 'clustering-pca-analysis',
      algorithm: 'K-Means++ & PCA',
      status: 'validated',
      benchmarkComparison: '+0.11 vs. standard K-Means',
      category: 'Clustering'
    },
    {
      id: 'metric-2',
      title: 'Real Estate Valuation',
      metric: 'Regression RMSE',
      value: '4.82',
      unit: '$10k',
      projectSlug: 'real-estate-regression-analysis',
      algorithm: 'Ridge / L2 Linear Reg.',
      status: 'validated',
      benchmarkComparison: '5-Fold CV stabilized',
      category: 'Regression'
    },
    {
      id: 'metric-3',
      title: 'Real Estate Explained Var.',
      metric: 'Coefficient of Det. (R²)',
      value: '0.842',
      projectSlug: 'real-estate-regression-analysis',
      algorithm: 'Regularized OLS',
      status: 'validated',
      benchmarkComparison: '84.2% total variance captured',
      category: 'Regression'
    },
    {
      id: 'metric-4',
      title: 'Electrical Grid Stability',
      metric: 'Classification Accuracy',
      value: '94.2%',
      projectSlug: 'electrical-grid-stability-classification',
      algorithm: 'SVM (RBF Kernel)',
      status: 'validated',
      benchmarkComparison: '+7.8% vs. Linear Kernel',
      category: 'Classification'
    },
    {
      id: 'metric-5',
      title: 'Grid Stability Metric',
      metric: 'Harmonic F1 Score',
      value: '0.942',
      projectSlug: 'electrical-grid-stability-classification',
      algorithm: 'SVM (C=10.0, γ=0.1)',
      status: 'validated',
      benchmarkComparison: 'Balanced across stable/unstable',
      category: 'Classification'
    },
    {
      id: 'metric-6',
      title: 'Computer Vision Benchmark',
      metric: 'MNIST Test Accuracy',
      value: '98.4%',
      projectSlug: 'mnist-neural-network-optimization',
      algorithm: 'Deep MLP (4L × 150N)',
      status: 'validated',
      benchmarkComparison: 'Peak across 20 architectures',
      category: 'Deep Learning'
    },
    {
      id: 'metric-7',
      title: 'Power Demand Forecasting',
      metric: 'Best Prediction RMSE',
      value: '12.06',
      unit: 'kWh',
      projectSlug: 'power-consumption-prediction',
      algorithm: 'Feature Eng. + Stacking',
      status: 'validated',
      benchmarkComparison: '-18.4% error vs. Published Baseline',
      category: 'Research/Reproduction'
    },
    {
      id: 'metric-8',
      title: 'Power Absolute Error',
      metric: 'Best Prediction MAE',
      value: '8.45',
      unit: 'kWh',
      projectSlug: 'power-consumption-prediction',
      algorithm: 'Ensemble Meta-Learner',
      status: 'validated',
      benchmarkComparison: '-18.6% error vs. Published Baseline',
      category: 'Research/Reproduction'
    }
  ];

  const filteredMetrics = selectedDomain === 'all' 
    ? metrics 
    : metrics.filter(m => m.category.toLowerCase() === selectedDomain.toLowerCase());

  return (
    <section id="model-performance-dashboard" className="py-16 relative scroll-mt-12 bg-white/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
              <Gauge className="w-3.5 h-3.5" />
              <span>Quantitative Benchmark Observatory</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Model Performance Dashboard
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
              Validated statistical outputs across clustering, regression, classification, and neural network experiments.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono">
            {['All', 'Clustering', 'Regression', 'Classification', 'Deep Learning', 'Research/Reproduction'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedDomain(tab.toLowerCase())}
                className={`px-3 py-1.5 rounded-lg transition ${
                  selectedDomain === tab.toLowerCase()
                    ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredMetrics.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject && onSelectProject(item.projectSlug)}
              className="group relative p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-semibold">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-500 text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    Validated
                  </span>
                </div>

                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {item.title}
                </h4>

                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-mono font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {item.unit}
                    </span>
                  )}
                </div>

                <div className="mt-1 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  {item.metric}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{item.algorithm}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  {item.benchmarkComparison}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Methodology Assurance */}
        <div className="mt-8 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-500 shrink-0" />
            <span>
              All quantitative metrics reflect standardized holdout test-set evaluations and cross-validated statistical protocols.
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Editable via Admin CMS • Dynamic Results Sync
          </div>
        </div>

      </div>
    </section>
  );
};
