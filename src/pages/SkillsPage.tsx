import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { 
  Brain, 
  LineChart, 
  Users, 
  Truck, 
  CalendarClock, 
  Database, 
  BarChart3, 
  Code2, 
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileDown
} from 'lucide-react';
import { fetchProfile } from '../lib/api';
import { Profile } from '../types';
import { initialProfile } from '../data/initialProfile';
import { getAssetUrl, fireConfetti } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';

interface SkillCategoryDef {
  title: string;
  icon: any;
  color: string;
  description: string;
  skills: string[];
}

export const SkillsPage: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile().then(setProfile).catch(() => {});
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories: SkillCategoryDef[] = [
    {
      title: 'Data Science',
      icon: LineChart,
      color: 'from-cyan-500/20 to-blue-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
      description: 'Foundational statistical modeling, exploratory analysis, and predictive framework design.',
      skills: ['Data Science', 'Statistical Analysis', 'Exploratory Data Analysis', 'Predictive Analytics']
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      description: 'Supervised & unsupervised learning algorithms, dimensional reduction, and model validation.',
      skills: [
        'Supervised Learning', 'Classification', 'Clustering', 'PCA', 
        'Logistic Regression', 'Decision Trees', 'Random Forest', 
        'SVM', 'KNN', 'Naive Bayes', 'LDA'
      ]
    },
    {
      title: 'Customer Analytics',
      icon: Users,
      color: 'from-purple-500/20 to-indigo-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      description: 'Customer lifecycle analysis, behavioral affinity, purchase segmentation, and churn modeling.',
      skills: [
        'Customer Segmentation', 'RFM Analysis', 'Customer Behavior Analysis', 
        'Customer Propensity', 'Churn-Oriented Modeling', 
        'Market Basket Analysis', 'Association Analysis'
      ]
    },
    {
      title: 'Supply Chain Analytics',
      icon: Truck,
      color: 'from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      description: 'Multi-node warehouse optimization, stockout risk mitigation, and demand-supply calibration.',
      skills: [
        'Demand Analytics', 'Supply Analytics', 'Inventory Optimization', 
        'Warehouse Analytics', 'Demand Forecasting'
      ]
    },
    {
      title: 'Time Series',
      icon: CalendarClock,
      color: 'from-blue-500/20 to-cyan-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      description: 'Parametric time-series forecasting, trend-seasonal decomposition, and confidence intervals.',
      skills: [
        'Moving Average', 'Exponential Smoothing', 'ARIMA', 'SARIMA', 
        'Forecast Evaluation', 'Confidence Intervals'
      ]
    },
    {
      title: 'SQL & Database',
      icon: Database,
      color: 'from-rose-500/20 to-pink-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
      description: 'Complex transactional data queries, window functions, relational schemas, and data manipulation.',
      skills: [
        'MySQL', 'SQL', 'JOINs', 'Subqueries', 'CASE', 'Aggregations', 'Window Functions'
      ]
    },
    {
      title: 'Business Intelligence',
      icon: BarChart3,
      color: 'from-teal-500/20 to-emerald-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
      description: 'Executive dashboard architectures, operational reporting, and metric KPI development.',
      skills: [
        'Tableau', 'Dashboard Design', 'KPI Development', 'Data Visualization'
      ]
    },
    {
      title: 'Python Ecosystem',
      icon: Code2,
      color: 'from-sky-500/20 to-indigo-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30',
      description: 'Data science engineering libraries, computational arrays, modeling pipelines, and notebooks.',
      skills: [
        'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'
      ]
    },
    {
      title: 'Tools / Platforms',
      icon: Wrench,
      color: 'from-slate-500/20 to-zinc-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30',
      description: 'Analytical execution environments, workflow automation platforms, and database clients.',
      skills: ['KNIME', 'Tableau', 'MySQL', 'Jupyter Notebook']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#080d1a] transition-colors duration-200">
      <Navbar resumeUrl={profile.resume_url} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Competency Taxonomy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Data Science & Analytical Skills
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Rigorous, categorized mastery across the entire quantitative data science lifecycle — from mathematical formulation and exploratory analytics to production-grade predictive modeling.
            </p>
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900/80 shadow-sm hover:shadow-md hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} border shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skill Badges / Categorized Tags */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/60"
                        >
                          <CheckCircle2 className="w-3 h-3 text-cyan-500 shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Cards */}
          <div className="mt-16 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-cyan-900/10 via-slate-900/20 to-blue-900/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Explore End-to-End Case Studies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                See these technical skills applied across 12+ real-world retail, supply chain, and predictive analytics projects.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => navigate('/#projects')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-mono font-semibold shadow transition cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={getAssetUrl(profile.resume_url)}
                download="Rupesh_Kumar_Pandey_Data_Scientist_Resume.pdf"
                onClick={fireConfetti}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-mono font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <FileDown className="w-4 h-4 text-cyan-500" />
                <span>Download ATS Resume</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer
        resumeUrl={profile.resume_url}
        email={profile.email}
        linkedinUrl={profile.linkedin_url}
        githubUrl={profile.github_url}
      />
    </div>
  );
};
export default SkillsPage;
