import React from 'react';
import {
  Brain,
  LineChart,
  BarChart3,
  Code2,
  Building2,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { Profile } from '../../types';

interface AboutSectionProps {
  profile: Profile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const whatIDo = [
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      description: 'Supervised and unsupervised modeling, ensemble algorithms, time series forecasting, and hyperparameter optimization.',
      skills: ['Regression', 'Classification', 'Random Forest', 'XGBoost', 'Time Series']
    },
    {
      title: 'Data Science',
      icon: LineChart,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      description: 'Translating massive, ambiguous real-world data into high-signal statistical features and predictive formulations.',
      skills: ['EDA', 'Statistical Analysis', 'Feature Engineering', 'Predictive Modeling']
    },
    {
      title: 'Analytics & BI',
      icon: BarChart3,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
      description: 'Transforming multi-variate modeling outputs into interactive executive decision dashboards and C-suite reporting.',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Programming & Data',
      icon: Code2,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      description: 'Production-ready Python development, advanced SQL queries, clean pipelines, and mathematical scripting.',
      skills: ['Python', 'SQL (MySQL)', 'Pandas', 'NumPy']
    },
    {
      title: 'Business Domains',
      icon: Building2,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      description: 'Cross-industry domain understanding from logistics fulfillment and retail margins to commercial avionics systems.',
      skills: ['Transportation & Logistics', 'Retail', 'Telecom', 'Aviation']
    }
  ];

  return (
    <section id="about" className="py-24 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <span>Professional Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Transforming Complex Business Problems into Predictive Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A proven career bridging hands-on machine learning, time-series forecasting, and relational SQL engineering with actionable executive decision support.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Detailed Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {profile.extended_bio.map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}

            {/* Core Pillars Bullet Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                  Production ML Deployment into Blue Yonder TMS Enterprise Suites
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                Master of Data Science (Global) from Deakin University (2025)
              </span>
            </div>
            <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                Executive BI & Data Storytelling (Power BI & Tableau)
              </span>
            </div>
          </div>
        </div>

        {/* Quick Domain & Credentials Card */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-lg space-y-6">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-3">
              Key Technical Competencies
            </h3>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-500">Core Machine Learning</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  XGBoost, Random Forest, Regression, Classification, Time Series Forecasting
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500">Analytics & BI Tools</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  Power BI (DAX, Modeling), Tableau, Matplotlib, Seaborn
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500">Languages & Data Engineering</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  Python (Scikit-Learn, Pandas, NumPy), SQL (PostgreSQL, MySQL)
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500">Industry Domains</span>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                  Transportation & Logistics, Retail & CPG, Telecom, Aviation
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* What I Do Section */}
      <div className="mt-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            What I Do
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            End-to-end data science capabilities from mathematical modeling to executive visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIDo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2.5 rounded-xl border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
    </div>
    </section>
  );
};
