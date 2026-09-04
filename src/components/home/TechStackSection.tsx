import React, { useState } from 'react';
import { 
  Code2, 
  Binary, 
  Cpu, 
  LineChart, 
  Brain, 
  Layers, 
  CheckCircle2,
  Sparkles,
  Terminal
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Core Language & Analytics' | 'ML Algorithms' | 'Advanced Modeling' | 'Visualization & Tooling';
  description: string;
  badgeColor?: string;
}

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const technologies: TechItem[] = [
    // Core Language & Analytics
    { name: 'Python', category: 'Core Language & Analytics', description: 'Primary language for quantitative data modeling, scientific algorithms, and vectorized computation.' },
    { name: 'Pandas', category: 'Core Language & Analytics', description: 'High-performance DataFrame manipulation, time series indexing, and tabular data transformation.' },
    { name: 'NumPy', category: 'Core Language & Analytics', description: 'Vectorized linear algebra, multi-dimensional array operations, and mathematical broadcasting.' },
    { name: 'Statistical Analysis', category: 'Core Language & Analytics', description: 'Hypothesis testing, variance estimation, quantile assessment, LOOCV, and parametric inference.' },

    // ML Algorithms
    { name: 'Scikit-learn', category: 'ML Algorithms', description: 'Production-grade pipelines, cross-validation splitters, preprocessing scalers, and estimators.' },
    { name: 'Linear Regression', category: 'ML Algorithms', description: 'Ordinary Least Squares, Ridge (L2 penalty), and Lasso (L1 feature selection) regularization.' },
    { name: 'Logistic Regression', category: 'ML Algorithms', description: 'Sigmoid binary classification, inverse regularization strength tuning (C-param), and odds-ratio.' },
    { name: 'Classification', category: 'ML Algorithms', description: 'Supervised multiclass and binary decision boundary optimization with class-imbalance treatment.' },
    { name: 'K-Means & K-Means++', category: 'ML Algorithms', description: 'Centroid initialization optimization, Euclidean Voronoi partitioning, and inertia tracking.' },
    { name: 'DBSCAN', category: 'ML Algorithms', description: 'Density-based spatial clustering capable of discovering arbitrary shapes with noise isolation.' },
    { name: 'PCA', category: 'ML Algorithms', description: 'Eigenvector dimensionality reduction, orthogonal projection, and cumulative explained variance.' },

    // Advanced Modeling
    { name: 'Support Vector Machines (SVM)', category: 'Advanced Modeling', description: 'Max-margin hyperplane optimization with Linear, Polynomial, and Radial Basis Function (RBF) kernels.' },
    { name: 'K-Nearest Neighbors (KNN)', category: 'Advanced Modeling', description: 'Non-parametric lazy learning with distance-weighted hyperparameter (k) optimization.' },
    { name: 'Decision Trees', category: 'Advanced Modeling', description: 'Recursive Gini/Entropy impurity splitting with cost-complexity post-pruning and depth bounds.' },
    { name: 'Ensemble Learning', category: 'Advanced Modeling', description: 'Bagging, Random Forest parallel ensembles, Gradient Boosting, and Stacking meta-learners.' },
    { name: 'Neural Networks (MLP)', category: 'Advanced Modeling', description: 'Multi-layer perceptron architectures, backpropagation, activation experiments, and dropout.' },

    // Visualization & Tooling
    { name: 'Matplotlib', category: 'Visualization & Tooling', description: 'Fine-grained scientific plotting, residual curves, loss surfaces, and distribution histograms.' },
    { name: 'Seaborn', category: 'Visualization & Tooling', description: 'Statistical correlation heatmaps, violin plots, pair plots, and bivariate joint distributions.' },
    { name: 'Jupyter Notebook', category: 'Visualization & Tooling', description: 'Reproducible research environment, exploratory data analysis workflows, and validation records.' }
  ];

  const categories = ['All', 'Core Language & Analytics', 'ML Algorithms', 'Advanced Modeling', 'Visualization & Tooling'];

  const filtered = selectedCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === selectedCategory);

  return (
    <section id="technology-stack" className="py-20 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>Quantitative Toolchain</span>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technology Stack & Scientific Toolkit
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-mono">
            Proven computational stack utilized across statistical preprocessing, unsupervised clustering, supervised modeling, and neural network optimization.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    {item.name}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{item.category}</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
