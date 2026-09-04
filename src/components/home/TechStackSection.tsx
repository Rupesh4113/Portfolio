import React, { useState } from 'react';
import { 
  Terminal, 
  Code2, 
  Brain, 
  TrendingUp, 
  BarChart2, 
  Database, 
  LayoutDashboard, 
  Layers 
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Programming & Data' | 'Machine Learning' | 'Forecasting' | 'Analytics' | 'Database' | 'Business Intelligence' | 'Analytics Platforms';
  description: string;
}

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const technologies: TechItem[] = [
    // Programming & Data
    { name: 'Python', category: 'Programming & Data', description: 'Primary language for quantitative modeling, scientific scripting, and machine learning pipelines.' },
    { name: 'Pandas', category: 'Programming & Data', description: 'High-performance DataFrame indexing, transactional data wrangling, and multi-dimensional aggregations.' },
    { name: 'NumPy', category: 'Programming & Data', description: 'Vectorized mathematical operations, matrix linear algebra, and numerical broadcasting.' },

    // Machine Learning
    { name: 'Scikit-learn', category: 'Machine Learning', description: 'Production-grade ML workflows, cross-validation splitters, preprocessing scalers, and estimators.' },
    { name: 'Logistic Regression', category: 'Machine Learning', description: 'Sigmoid classification, calibrated probabilities, and interpretable odds-ratio weights.' },
    { name: 'Decision Trees', category: 'Machine Learning', description: 'Rule-based hierarchical partitioning with cost-complexity pruning and depth constraints.' },
    { name: 'Random Forest', category: 'Machine Learning', description: 'Ensemble bagging of decision trees reducing variance and ranking feature importances.' },
    { name: 'SVM (Support Vector Machines)', category: 'Machine Learning', description: 'Max-margin hyperplane optimization with Linear and Radial Basis Function (RBF) kernels.' },
    { name: 'KNN (K-Nearest Neighbors)', category: 'Machine Learning', description: 'Instance-based non-parametric classifier optimizing distance metrics and neighbor count.' },
    { name: 'Naive Bayes', category: 'Machine Learning', description: 'Fast probabilistic Bayes-rule classifier providing solid baseline classification performance.' },
    { name: 'LDA (Linear Discriminant Analysis)', category: 'Machine Learning', description: 'Supervised dimensionality reduction maximizing between-class variance separation.' },
    { name: 'Clustering (K-Means & DBSCAN)', category: 'Machine Learning', description: 'Unsupervised spatial segmentation evaluated by inertia and silhouette coefficients.' },
    { name: 'PCA (Principal Component Analysis)', category: 'Machine Learning', description: 'Eigenvector dimensionality reduction and multicollinearity compression.' },

    // Forecasting
    { name: 'ARIMA', category: 'Forecasting', description: 'Autoregressive Integrated Moving Average modeling non-seasonal stationary time series.' },
    { name: 'SARIMA', category: 'Forecasting', description: 'Seasonal ARIMA capturing recurring quarterly/annual harmonics and secular trend.' },
    { name: 'Exponential Smoothing', category: 'Forecasting', description: 'Holt-Winters triple exponential smoothing with level, trend, and seasonal components.' },
    { name: 'Moving Average', category: 'Forecasting', description: 'Baseline rolling average indicators smoothing high-frequency demand noise.' },

    // Analytics
    { name: 'EDA (Exploratory Data Analysis)', category: 'Analytics', description: 'Deep investigative data profiling, outlier detection, and distribution inspection.' },
    { name: 'Statistical Analysis', category: 'Analytics', description: 'Stationarity testing (ADF), hypothesis testing, variance decomposition, and correlation analysis.' },
    { name: 'RFM Analytics', category: 'Analytics', description: 'Recency, Frequency, and Monetary scoring to segment customers into actionable loyalty tiers.' },
    { name: 'Market Basket Analysis', category: 'Analytics', description: 'Apriori association rule mining evaluating Support, Confidence, and Lift for bundling.' },
    { name: 'Customer Segmentation', category: 'Analytics', description: 'Behavioral and value-based customer clustering driving tailored retention strategies.' },
    { name: 'Predictive Analytics', category: 'Analytics', description: 'Forward-looking response propensity, churn likelihood, and quantitative estimation.' },

    // Database
    { name: 'MySQL', category: 'Database', description: 'Relational database querying, schema structuring, and indexed analytical data processing.' },
    { name: 'SQL', category: 'Database', description: 'Declarative querying across large relational datasets for business intelligence reporting.' },
    { name: 'JOINs (Multi-Table)', category: 'Database', description: 'Advanced INNER, LEFT, and SELF joins linking orders, customers, and fulfillment records.' },
    { name: 'Subqueries & CTEs', category: 'Database', description: 'Common Table Expressions and correlated nested queries for modular query design.' },
    { name: 'CASE Statements', category: 'Database', description: 'Conditional logic and dynamic category pivoting executed directly in SQL.' },
    { name: 'Window Functions', category: 'Database', description: 'ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG for moving calculations and trend slicing.' },
    { name: 'Aggregations', category: 'Database', description: 'GROUP BY, HAVING, and multi-dimensional rollup metrics for executive decision views.' },

    // Business Intelligence
    { name: 'Tableau', category: 'Business Intelligence', description: 'Interactive enterprise executive dashboards, LOD expressions, and visual risk analytics.' },
    { name: 'Dashboard Design', category: 'Business Intelligence', description: 'User-centric visual hierarchy, progressive disclosure, and executive KPI scorecards.' },
    { name: 'Data Visualization', category: 'Business Intelligence', description: 'Translating complex multi-dimensional datasets into intuitive, decision-ready visuals.' },

    // Analytics Platforms
    { name: 'KNIME', category: 'Analytics Platforms', description: 'Visual node-based data science workflows, ETL transformations, and analytical pipelining.' },
    { name: 'Jupyter Notebook', category: 'Analytics Platforms', description: 'Interactive literate computing for reproducible EDA, model benchmarking, and documentation.' }
  ];

  const categories = [
    'All',
    'Programming & Data',
    'Machine Learning',
    'Forecasting',
    'Analytics',
    'Database',
    'Business Intelligence',
    'Analytics Platforms'
  ];

  const filtered = selectedCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === selectedCategory);

  return (
    <section id="technology-stack" className="py-20 relative scroll-mt-12 bg-white dark:bg-[#070c18] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>Tools & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technology Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Categorized technical badges representing hands-on competencies in programming, statistical modeling, database engineering, and business intelligence.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 text-white font-bold shadow-md shadow-cyan-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400">
                    {item.category.split(' ')[0]}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
