import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Database,
  Building2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Code2,
  BarChart3,
  Bot,
  Brain,
  MessageSquare,
  Compass,
  LineChart,
  FileText
} from 'lucide-react';
import { Experience } from '../../types';
import { Badge } from '../common/Badge';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  // State for expanding/collapsing details on each card (default open first 2)
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': true
  });

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Top marquee technology badges
  const coreTechBadges = [
    'Python',
    'SQL',
    'Machine Learning',
    'Generative AI',
    'Predictive Analytics',
    'XGBoost',
    'Random Forest',
    'Power BI',
    'Tableau',
    'NLP',
    'Time-Series Forecasting'
  ];

  // 7 Flagship Data Science Projects connecting to Experience
  const connectedProjects = [
    {
      title: 'Transit Time Prediction — Blue Yonder TMS',
      domain: 'Transportation & Logistics',
      model: 'XGBoost Regressor',
      description: 'Dynamic ETA prediction across high-density shipping lanes, reducing carrier transit lead-time variability.',
      tags: ['XGBoost', 'Transportation Analytics', 'ETA Prediction', 'Route Telematics'],
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20'
    },
    {
      title: 'Fleet Failure Prediction — Zoomcar',
      domain: 'Fleet Telematics & Mobility',
      model: 'Random Forest Classifier',
      description: 'Predictive maintenance anticipating vehicle mechanical failures using multi-sensor engine telemetry.',
      tags: ['Random Forest', 'Predictive Maintenance', 'Fleet Analytics', 'Sensor Telemetry'],
      accent: 'border-amber-500/30 text-amber-400 bg-amber-950/20'
    },
    {
      title: 'Customer Churn & CLV Prediction',
      domain: 'Telecom & Subscription Services',
      model: 'Logistic Regression & XGBoost',
      description: 'Customer retention modeling quantifying churn hazard and lifetime value across subscriber contract cohorts.',
      tags: ['Logistic Regression', 'XGBoost', 'Customer Analytics', 'Retention Modeling'],
      accent: 'border-purple-500/30 text-purple-400 bg-purple-950/20'
    },
    {
      title: 'Real-Time Twitter Sentiment Analysis',
      domain: 'Social Media & Brand Intelligence',
      model: 'VADER + Bi-LSTM Hybrid',
      description: 'High-throughput NLP pipeline streaming and classifying live public opinion and sentiment shifts.',
      tags: ['VADER', 'LSTM', 'NLP', 'Sentiment Classification'],
      accent: 'border-blue-500/30 text-blue-400 bg-blue-950/20'
    },
    {
      title: 'Supply Chain Optimization — FMCG/Retail',
      domain: 'Supply Chain & Warehousing',
      model: 'K-Means + Supervised Classifiers',
      description: 'Warehouse segmentation and 92% accurate stockout risk classification optimizing inventory rebalance.',
      tags: ['EDA', 'Clustering', 'Classification', 'Inventory Optimization'],
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20'
    },
    {
      title: 'Demand & Sales Forecasting',
      domain: 'Retail & FMCG Planning',
      model: 'ARIMA, SARIMA & Holt-Winters',
      description: '12-month forward horizon predictive forecasting with empirical confidence intervals and seasonal tuning.',
      tags: ['ARIMA', 'SARIMA', '12-Month Forecasting', 'Forecast Uncertainty'],
      accent: 'border-indigo-500/30 text-indigo-400 bg-indigo-950/20'
    },
    {
      title: 'Customer Segmentation & Buying Pattern Analysis',
      domain: 'Automotive Parts & E-Commerce',
      model: 'RFM + PCA + Apriori Rules',
      description: 'Behavioral clustering across 3 years of POS records identifying high-yield customer loyalty tiers.',
      tags: ['RFM', 'PCA', 'Clustering', 'Market Basket Analysis'],
      accent: 'border-rose-500/30 text-rose-400 bg-rose-950/20'
    }
  ];

  // ATS-Friendly Skills Matrix by functional discipline
  const atsSkillCategories = [
    {
      category: 'Programming & Data',
      icon: Code2,
      skills: ['Python', 'SQL (PostgreSQL, MySQL)', 'Pandas', 'NumPy'],
      color: 'text-cyan-500'
    },
    {
      category: 'Machine Learning',
      icon: Cpu,
      skills: ['Scikit-learn', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'XGBoost', 'SVM', 'KNN', 'Naive Bayes'],
      color: 'text-indigo-500'
    },
    {
      category: 'Analytics & Statistical Modeling',
      icon: BarChart3,
      skills: ['EDA', 'Statistical Analysis', 'Feature Engineering', 'K-Means Clustering', 'PCA', 'RFM Analysis', 'Market Basket Analysis'],
      color: 'text-emerald-500'
    },
    {
      category: 'Time-Series Forecasting',
      icon: LineChart,
      skills: ['ARIMA', 'SARIMA', 'Exponential Smoothing', 'Moving Average', 'Time-Series Decomposition', 'Hierarchical Reconciliation'],
      color: 'text-blue-500'
    },
    {
      category: 'Generative AI & LLMs',
      icon: Sparkles,
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI-assisted Knowledge Extraction', 'Text Summarization', 'RAG Retrieval Workflows'],
      color: 'text-purple-500'
    },
    {
      category: 'Natural Language Processing (NLP)',
      icon: MessageSquare,
      skills: ['VADER', 'LSTM', 'Sentiment Analysis', 'Text Analytics', 'Word2Vec', 'Regex Pattern Mining'],
      color: 'text-amber-500'
    },
    {
      category: 'Visualization & Business Intelligence',
      icon: TrendingUp,
      skills: ['Power BI', 'Tableau', 'Interactive Dashboards', 'Executive Reporting', 'LOD Calculations', 'Data Storytelling'],
      color: 'text-rose-500'
    },
    {
      category: 'Development & Agile Collaboration',
      icon: Layers,
      skills: ['GitHub', 'GitLab', 'Bitbucket', 'JIRA', 'Confluence', 'Azure DevOps', 'Agile / Scrum'],
      color: 'text-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#070b16] border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience Timeline
          </h2>

          <p className="text-base sm:text-xl font-medium text-cyan-600 dark:text-cyan-400 font-mono">
            Data Science &bull; Machine Learning &bull; Generative AI &bull; Predictive Analytics &bull; Enterprise Systems
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            12+ years of progressive technology leadership transitioning from rigorous systems engineering, data organization, and information architecture into advanced Data Science, Machine Learning, and Generative AI solutions across Transportation, Retail, Telecom, and Aviation domains.
          </p>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {coreTechBadges.map((badge, bIdx) => (
              <span
                key={bIdx}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 md:ml-36 space-y-12">
          {experiences.map((exp) => {
            const isExpanded = Boolean(expandedCards[exp.id]);
            const visibleHighlights = isExpanded ? exp.highlights : exp.highlights.slice(0, 3);
            const remainingCount = exp.highlights.length - 3;

            return (
              <div key={exp.id} className="relative pl-6 md:pl-10 group">
                
                {/* Timeline Indicator Dot */}
                <div 
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                    exp.is_current 
                      ? 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50' 
                      : 'bg-slate-100 dark:bg-slate-900 border-slate-400 dark:border-slate-700'
                  }`} 
                />

                {/* Date Badge on Desktop Left */}
                <div className="md:absolute md:-left-40 md:top-1 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold mb-2 md:mb-0 md:w-32 md:text-right">
                  {exp.period}
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4">
                  
                  {/* Header Info */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.is_current && (
                          <Badge variant="cyan" size="sm">Present Role</Badge>
                        )}
                      </div>

                      {/* Employment Transparency: Official Title */}
                      {exp.official_designation && (
                        <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">
                          Employment Designation: <span className="italic text-slate-500 dark:text-slate-400">{exp.official_designation}</span>
                        </div>
                      )}

                      {/* Company & Location Metadata */}
                      <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span>&bull;</span>
                        <div className="inline-flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                        {exp.client && (
                          <>
                            <span>&bull;</span>
                            <span className="text-slate-700 dark:text-slate-300">
                              Client: <strong className="text-slate-900 dark:text-white font-semibold">{exp.client}</strong>
                            </span>
                          </>
                        )}
                        {exp.project && (
                          <>
                            <span>&bull;</span>
                            <span className="text-slate-500 font-mono">
                              Project: {exp.project}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Category Tags */}
                    {exp.category_tags && (
                      <div className="flex flex-wrap gap-1.5 shrink-0">
                        {exp.category_tags.map((cat, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dedicated Project-Oriented Highlight (e.g. Transit Time Prediction Blue Yonder) */}
                  {exp.project_highlight && (
                    <div className="p-4 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-transparent space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                          <span>Key ML Initiative: {exp.project_highlight.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                          Production Analytics
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-medium">
                        {exp.project_highlight.description}
                      </p>
                      <ul className="space-y-1 pt-1">
                        {exp.project_highlight.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <span className="text-cyan-400 mt-0.5">&bull;</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlights List (80% Data Science/AI, 20% Technical Communication) */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                      Core Responsibilities & Analytical Achievements:
                    </div>
                    <ul className="space-y-2">
                      {visibleHighlights.map((highlight, hIdx) => {
                        const isDocHighlight = highlight.includes('(20%') || highlight.includes('documentation') || highlight.includes('manuals');
                        return (
                          <li key={hIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${isDocHighlight ? 'text-slate-400' : 'text-cyan-500'}`} />
                            <span>{highlight}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Expand / Collapse Button */}
                  {exp.highlights.length > 3 && (
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline pt-1"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" />
                          <span>Show Less Details</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" />
                          <span>View Full Experience Details ({remainingCount} more achievements)</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* Technologies Badges */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="text-[11px] font-mono text-slate-400 mb-1.5">Technologies & Methodologies:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* SECTION 8: DATA SCIENCE PROJECT CONNECTION (Bridging Experience & Projects) */}
        {/* ========================================================================= */}
        <div className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Applied Capability Bridge</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Data Science Experience & Flagship Project Connection
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
              <strong className="text-slate-900 dark:text-white">Employment Transparency Note:</strong> Clearly differentiating between full-time professional IT/enterprise employment roles above, and hands-on applied Data Science, Machine Learning, and predictive modeling projects developed across academic research, benchmarks, and portfolio initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {connectedProjects.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {proj.domain}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      {proj.model}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-500 border border-slate-200/50 dark:border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#projects"
                    className="inline-flex items-center text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 gap-1"
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 9: ATS-OPTIMIZED TECHNOLOGY COMPETENCY STACK                      */}
        {/* ========================================================================= */}
        <div className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-medium">
              <Code2 className="w-3.5 h-3.5" />
              <span>ATS Keyword Optimized Matrix</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technology Stack & Technical Competencies
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
              Comprehensive functional taxonomy organized for recruiters, hiring managers, and ATS parsing algorithms across Data Science, AI/ML, and Analytics roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {atsSkillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-3 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition"
                >
                  <div className="flex items-center space-x-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <Icon className={`w-4 h-4 ${cat.color}`} />
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/40"
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

      </div>
    </section>
  );
};
