import React, { useState } from 'react';
import { 
  GitFork, 
  Network, 
  LineChart, 
  TrendingUp, 
  ShoppingCart, 
  Database,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const MethodsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const methods = [
    {
      title: 'Classification',
      icon: Network,
      tagline: 'Supervised predictive classification & decision support',
      algorithms: [
        { name: 'Logistic Regression', desc: 'Calibrated probabilistic scoring & linear odds ratio explainability' },
        { name: 'Random Forest', desc: 'Non-linear feature interactions with strong recall on minority classes' },
        { name: 'Support Vector Machines (SVM)', desc: 'High-dimensional hyperplane separation with RBF / linear kernels' },
        { name: 'Decision Trees', desc: 'Transparent white-box operational rules and threshold branching' },
        { name: 'K-Nearest Neighbors (KNN)', desc: 'Instance-based local pattern classification' },
        { name: 'Naive Bayes & LDA', desc: 'Probabilistic baseline and linear boundary discriminant analysis' }
      ]
    },
    {
      title: 'Clustering',
      icon: GitFork,
      tagline: 'Unsupervised segmentation & dimensionality reduction',
      algorithms: [
        { name: 'K-Means & K-Means++', desc: 'Centroid-based spatial clustering optimized via silhouette coefficients' },
        { name: 'DBSCAN', desc: 'Density-based spatial clustering discovering arbitrary shapes without pre-specifying K' },
        { name: 'PCA (Principal Component Analysis)', desc: 'Orthogonal variance decomposition and multi-collinearity reduction' },
        { name: 'Warehouse / Store Profiling', desc: 'Segmenting supply facilities by velocity and stockout vulnerability' }
      ]
    },
    {
      title: 'Time Series & Forecasting',
      icon: TrendingUp,
      tagline: 'Temporal trend, seasonality decomposition & forward horizons',
      algorithms: [
        { name: 'SARIMA (p,d,q)(P,D,Q)s', desc: 'Capturing both secular trend and recurring annual seasonal harmonics' },
        { name: 'ARIMA', desc: 'Autoregressive integrated moving average for non-seasonal stationary series' },
        { name: 'Exponential Smoothing (Holt-Winters)', desc: 'Triple exponential smoothing capturing level, trend, and seasonality' },
        { name: 'Uncertainty Modeling', desc: '95% point and interval confidence bounds for safety stock sizing' }
      ]
    },
    {
      title: 'Regression & Estimation',
      icon: LineChart,
      tagline: 'Continuous response estimation & regularized modeling',
      algorithms: [
        { name: 'Linear Regression', desc: 'Ordinary least squares estimation with diagnostic residual analysis' },
        { name: 'L1 Regularization (Lasso)', desc: 'Sparse feature selection driving non-informative coefficients to zero' },
        { name: 'L2 Regularization (Ridge)', desc: 'Handling multi-collinearity through coefficient shrinkage' },
        { name: 'Cross-Validation & LOOCV', desc: 'K-Fold and Leave-One-Out validation ensuring out-of-sample generalization' }
      ]
    },
    {
      title: 'Customer & Market Basket',
      icon: ShoppingCart,
      tagline: 'Behavioral affinity & association rule mining',
      algorithms: [
        { name: 'RFM Quintile Scoring', desc: 'Segmenting multi-year transaction bases by Recency, Frequency, and Monetary spend' },
        { name: 'Apriori Association Rules', desc: 'Mining frequent itemsets evaluated by Support, Confidence, and Lift metrics' },
        { name: 'Product Affinity Networks', desc: 'Graph-based co-purchasing matrices driving checkout cross-selling' },
        { name: 'Churn Propensity Scoring', desc: 'Early warning scoring identifying at-risk customers 30-60 days prior' }
      ]
    },
    {
      title: 'SQL & Relational Analytics',
      icon: Database,
      tagline: 'High-performance SQL queries & data engineering',
      algorithms: [
        { name: 'Window Functions', desc: 'ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG for moving calculations' },
        { name: 'Common Table Expressions (CTEs)', desc: 'Readable, modular multi-step relational data transformations' },
        { name: 'Complex Multi-Table JOINs', desc: 'INNER, LEFT, SELF joins linking orders, telemetry, and customer records' },
        { name: 'Conditional CASE Aggregations', desc: 'Dynamic KPI pivoting and cohort slicing directly inside the SQL engine' }
      ]
    }
  ];

  return (
    <section id="methods" className="py-20 relative scroll-mt-12 bg-white dark:bg-[#0b1222] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <span>Methodological Depth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Machine Learning & Analytics Methods
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A comprehensive spectrum of mathematical formulations, statistical tests, and machine learning architectures applied across portfolio projects.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {methods.map((m, idx) => {
            const Icon = m.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all ${
                  isActive
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20 scale-105'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{m.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <span>{methods[activeTab].title} Framework</span>
            </h3>
            <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-mono mt-1">
              {methods[activeTab].tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methods[activeTab].algorithms.map((algo, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {algo.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {algo.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
