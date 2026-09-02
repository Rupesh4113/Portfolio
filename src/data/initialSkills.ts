import { SkillCategory } from '../types';

export const initialSkills: SkillCategory[] = [
  {
    id: 'skill-ml',
    category: 'Machine Learning',
    skills: ['Regression', 'Classification', 'Random Forest', 'XGBoost', 'Time Series Forecasting', 'Prophet', 'Clustering', 'Ensemble Methods', 'Model Evaluation'],
    description: 'Production-grade supervised & unsupervised modeling, hyperparameter optimization, and predictive performance validation.',
    icon: 'Brain'
  },
  {
    id: 'skill-ds',
    category: 'Data Science',
    skills: ['Exploratory Data Analysis (EDA)', 'Statistical Hypothesis Testing', 'Feature Engineering', 'Predictive Modeling', 'Outlier Detection', 'A/B Testing', 'Variance Analysis'],
    description: 'Translating noisy real-world enterprise datasets into clean, reliable statistical features and rigorous hypotheses.',
    icon: 'LineChart'
  },
  {
    id: 'skill-viz',
    category: 'Analytics & Visualization',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Interactive Dashboards', 'Executive Reporting', 'DAX', 'Data Storytelling'],
    description: 'Designing intuitive, high-impact business intelligence dashboards and statistical charts for C-suite decision making.',
    icon: 'BarChart3'
  },
  {
    id: 'skill-prog',
    category: 'Programming & Data Engineering',
    skills: ['Python', 'SQL (PostgreSQL, MySQL)', 'Pandas', 'NumPy', 'Scikit-Learn', 'REST APIs', 'Data Pipelines'],
    description: 'Writing clean, maintainable, production-ready code and robust SQL queries across large data warehouses.',
    icon: 'Code2'
  },
  {
    id: 'skill-tools',
    category: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Jupyter Notebook', 'Google Colab', 'KNIME', 'AWS SageMaker (Basics/MLOps)', 'Supabase', 'VS Code'],
    description: 'Modern development, version control, reproducible experimentation notebooks, and cloud deployment pipelines.',
    icon: 'Wrench'
  },
  {
    id: 'skill-domain',
    category: 'Business Domains',
    skills: ['Transportation & Logistics', 'Retail & FMCG / CPG', 'Supply Chain Management', 'Telecom', 'Aviation / Aerospace'],
    description: 'Deep domain immersion enabling immediate understanding of business context, unit economics, and operational constraints.',
    icon: 'Building2'
  }
];
