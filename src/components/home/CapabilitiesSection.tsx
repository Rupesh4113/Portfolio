import React from 'react';
import {
  Brain,
  Users,
  TrendingUp,
  Boxes,
  ShoppingBag,
  Car,
  Radio,
  Database,
  BarChart2,
  ShoppingCart,
  LayoutDashboard,
  Lightbulb
} from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Machine Learning & Predictive Modeling',
      icon: Brain,
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-500',
      badge: 'Predictive',
      description: 'Supervised classification, regression, ensemble algorithms, cross-validation, and hyperparameter optimization for high-stakes decision support.',
      techniques: ['Logistic Regression', 'Random Forest', 'SVM', 'Ensembles']
    },
    {
      title: 'Customer Segmentation & RFM Analytics',
      icon: Users,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-500',
      badge: 'Customer',
      description: 'Multi-tiered customer clustering combining Recency, Frequency, and Monetary scoring to isolate high-value champions and churn risks.',
      techniques: ['RFM Quintiles', 'K-Means', 'Cohort Migration', 'Tenure Analysis']
    },
    {
      title: 'Demand & Sales Forecasting',
      icon: TrendingUp,
      color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-500',
      badge: 'Time Series',
      description: '12-month forward horizon forecasting capturing secular trends, annual seasonality harmonics, and stationarity with confidence bands.',
      techniques: ['ARIMA', 'SARIMA', 'Exponential Smoothing', 'Moving Average']
    },
    {
      title: 'Supply Chain & Inventory Analytics',
      icon: Boxes,
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-500',
      badge: 'Operations',
      description: 'Warehouse demand vs. replenishment balancing, stockout probability scoring, buffer allocation, and holding cost minimization.',
      techniques: ['Warehouse Clustering', 'Stockout Risk Scoring', 'Safety Stock Sizing']
    },
    {
      title: 'Retail & E-commerce Analytics',
      icon: ShoppingBag,
      color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-500',
      badge: 'Commercial',
      description: 'Granular transaction decomposition across geographic zones, product taxonomy, and brand portfolios to isolate revenue concentration.',
      techniques: ['AOV Analysis', 'Pareto 80/20', 'Discount Elasticity', 'Category Velocity']
    },
    {
      title: 'Transportation & Automotive Analytics',
      icon: Car,
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-500',
      badge: 'Mobility',
      description: 'Investigating logistics delays, vehicle product line ratings, fulfillment transit lead times, and dispatch bottleneck resolutions.',
      techniques: ['Delivery Lead-Time', 'Vehicle Performance', 'CSAT Correlation']
    },
    {
      title: 'Telecom Customer Analytics',
      icon: Radio,
      color: 'from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-purple-500',
      badge: 'Transferable',
      description: 'Transferable customer churn early warning, customer lifetime value (CLV), recharge propensity, and plan recommendation engines.',
      techniques: ['Churn AUC', 'Uplift Modeling', 'Recharge Timing', 'VAS Recommendations']
    },
    {
      title: 'SQL & Relational Data Analysis',
      icon: Database,
      color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-500',
      badge: 'Data Engineering',
      description: 'Advanced MySQL query authoring, recursive CTEs, window analytical functions, multi-table joins, and indexed reporting aggregations.',
      techniques: ['Window Functions', 'CTEs', 'Multi-Table JOINs', 'CASE Aggregations']
    },
    {
      title: 'Exploratory & Statistical Analysis',
      icon: BarChart2,
      color: 'from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-500',
      badge: 'Statistics',
      description: 'Rigorous hypothesis formulation, stationarity testing (ADF), variance decomposition, outlier treatment, and data distribution profiling.',
      techniques: ['ADF Testing', 'Correlation Matrices', 'Variance Analysis', 'Imputation']
    },
    {
      title: 'Market Basket Analysis',
      icon: ShoppingCart,
      color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-500',
      badge: 'Affinity',
      description: 'Uncovering item co-occurrence rules, cross-selling affinities, and product bundle opportunities evaluated by Support, Confidence, and Lift.',
      techniques: ['Apriori Algorithm', 'Association Rules', 'Lift Optimization', 'Bundle Design']
    },
    {
      title: 'Business Intelligence & Dashboarding',
      icon: LayoutDashboard,
      color: 'from-cyan-500/20 to-indigo-500/20 border-cyan-500/30 text-cyan-500',
      badge: 'Visualization',
      description: 'Translating multi-table datasets into interactive Tableau executive dashboards, KPI monitors, and dimensional drill-downs.',
      techniques: ['Tableau LODs', 'Interactive Filters', 'Executive KPI Cards', 'Data Modeling']
    },
    {
      title: 'Data-Driven Business Recommendations',
      icon: Lightbulb,
      color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-500',
      badge: 'Decision Support',
      description: 'Bridging mathematical outputs with commercial strategy to formulate executive-ready actions that boost revenue and margins.',
      techniques: ['Executive Storytelling', 'Resource Reallocation', 'SLA Structuring', 'ROI Justification']
    }
  ];

  return (
    <section id="capabilities" className="py-20 relative scroll-mt-12 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <span>Competency Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Core Analytics Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A comprehensive, battle-tested analytical toolkit spanning machine learning algorithms, quantitative customer science, time-series forecasting, and executive business decision support.
          </p>
        </div>

        {/* 12 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cap.color} border flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.techniques.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
