import React, { useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  FolderGit2, 
  ExternalLink, 
  Database, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Activity, 
  ShieldCheck, 
  Server, 
  Lightbulb, 
  Compass, 
  CheckCircle2,
  Calendar,
  BookOpen,
  FileText,
  BarChart3,
  Terminal,
  Binary,
  Target,
  Sparkles,
  Download
} from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';
import { ArchitectureDiagram } from './ArchitectureDiagrams';
import { QuantitativeVisuals } from './QuantitativeVisuals';

interface ProjectCaseStudyViewProps {
  project: Project;
  onClose: () => void;
}

export const ProjectCaseStudyView: React.FC<ProjectCaseStudyViewProps> = ({ project, onClose }) => {
  // Prevent body scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isProfessional = project.project_type === 'professional';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-start justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Container Dialog */}
      <div className="relative w-full max-w-5xl my-6 bg-white dark:bg-[#090e1a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#090e1a]/95 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Back to portfolio"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-semibold">
                  {project.domain}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs font-mono text-slate-500">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.notebook_url && (
              <a
                href={project.notebook_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Notebook</span>
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-12">
          
          {/* Top Hero Overview */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={isProfessional ? 'emerald' : 'cyan'}>
                {isProfessional ? 'Professional Client Project' : 'Quantitative ML Project'}
              </Badge>
              {project.project_date && (
                <span className="inline-flex items-center space-x-1 text-xs font-mono text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.project_date}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {project.short_summary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
              <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Primary Metric</span>
                <span className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400 mt-0.5 block">
                  {project.primary_metric_value}
                </span>
                <span className="text-[10px] text-slate-400 block truncate">{project.primary_metric_label}</span>
              </div>
              
              {project.dataset_size && (
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">Dataset Size</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block truncate">
                    {project.dataset_size}
                  </span>
                  <span className="text-[10px] text-slate-400 block">{project.features_count || 'Multi'} features</span>
                </div>
              )}

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Primary Algorithm</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block truncate">
                  {project.algorithms_used[0] || 'Machine Learning'}
                </span>
                <span className="text-[10px] text-slate-400 block">{project.algorithms_used.length} algorithms tested</span>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Validation Protocol</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block truncate">
                  {project.validation_strategy ? project.validation_strategy.split(' ')[0] : 'Cross-Validation'}
                </span>
                <span className="text-[10px] text-slate-400 block">Strict zero-leakage</span>
              </div>
            </div>
          </div>

          {/* Interactive Visual Analytics / Custom Architecture Chart */}
          {(project.quantitative_chart_type || project.architecture_diagram_type) && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-500" />
                Visual Analytics & Interactive Architecture
              </h3>
              
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                {project.quantitative_chart_type && (
                  <QuantitativeVisuals 
                    chartType={project.quantitative_chart_type}
                    projectTitle={project.title}
                  />
                )}

                {project.architecture_diagram_type && !project.quantitative_chart_type && (
                  <ArchitectureDiagram type={project.architecture_diagram_type} />
                )}
              </div>
            </div>
          )}

          {/* 15 DETAILED SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Core Technical Narrative (8 Cols) */}
            <div className="md:col-span-8 space-y-10">
              
              {/* 1. Business / Research Problem */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Target className="w-4 h-4 text-rose-500" />
                  <span>1. Business & Research Problem</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-rose-500/30">
                  {project.business_problem}
                </p>
              </div>

              {/* 2. Objective */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>2. Analytical Objective</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-emerald-500/30">
                  {project.business_objective}
                </p>
              </div>

              {/* 3. Dataset */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Database className="w-4 h-4 text-cyan-500" />
                  <span>3. Dataset & Dimensions</span>
                </h3>
                <div className="pl-6 border-l-2 border-cyan-500/30 space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.dataset_description}
                  </p>
                  {project.data_sources && project.data_sources.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.data_sources.map((src, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {src}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Data Preparation */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Binary className="w-4 h-4 text-blue-500" />
                  <span>4. Data Preparation & Imputation</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-blue-500/30">
                  {project.data_preparation}
                </p>
              </div>

              {/* 5. Exploratory Data Analysis */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-indigo-500" />
                  <span>5. Exploratory Data Analysis Insights</span>
                </h3>
                <ul className="space-y-2 pl-6 border-l-2 border-indigo-500/30 text-sm text-slate-600 dark:text-slate-300">
                  {project.eda_insights.map((insight, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Feature Engineering */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span>6. Feature Engineering</span>
                </h3>
                <ul className="space-y-2 pl-6 border-l-2 border-amber-500/30 text-sm text-slate-600 dark:text-slate-300">
                  {project.feature_engineering.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7. Modeling Approach */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-purple-500" />
                  <span>7. Modeling Approach & Algorithms</span>
                </h3>
                <div className="pl-6 border-l-2 border-purple-500/30 space-y-3">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.model_development}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.algorithms_used.map((algo, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold border border-purple-500/20">
                        {algo}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 8. Hyperparameter Optimization */}
              {project.hyperparameter_optimization && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <span>8. Hyperparameter Optimization</span>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-cyan-500/30">
                    {project.hyperparameter_optimization}
                  </p>
                </div>
              )}

              {/* 9. Validation Strategy */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>9. Validation Strategy</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-emerald-500/30">
                  {project.validation_strategy || 'Cross-validation protocol with stratified splits and zero data leakage across train/validation/test partitions.'}
                </p>
              </div>

              {/* 10. Quantitative Results */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-cyan-500" />
                  <span>10. Quantitative Results</span>
                </h3>
                <div className="pl-6 border-l-2 border-cyan-500/30 space-y-3">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.results_summary}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                    {Object.entries(project.evaluation_metrics).map(([k, v], idx) => (
                      <div key={idx} className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
                        <span className="text-[10px] text-slate-400 block truncate">{k}</span>
                        <span className="font-bold text-slate-900 dark:text-white text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 11. Model Comparison Table */}
              {project.model_comparison_data && project.model_comparison_data.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-blue-500" />
                    <span>11. Model Comparison</span>
                  </h3>
                  <div className="pl-6 border-l-2 border-blue-500/30">
                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          <tr>
                            {Object.keys(project.model_comparison_data[0]).map((key, i) => (
                              <th key={i} className="p-2.5 capitalize">{key.replace('_', ' ')}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                          {project.model_comparison_data.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                              {Object.values(row).map((val: any, vIdx) => (
                                <td key={vIdx} className="p-2.5 font-semibold text-slate-800 dark:text-slate-200">
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* 12. Key Findings */}
              {project.key_findings && project.key_findings.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>6. Key Findings</span>
                  </h3>
                  <ul className="space-y-2 pl-6 border-l-2 border-amber-500/30 text-sm text-slate-600 dark:text-slate-300">
                    {project.key_findings.map((finding, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 7. Business Recommendations */}
              {project.business_recommendations && project.business_recommendations.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <span>7. Business Recommendations & Action Plan</span>
                  </h3>
                  <div className="pl-6 border-l-2 border-cyan-500/30 space-y-2.5">
                    {project.business_recommendations.map((rec, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {rec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RFM Segments (if present) */}
              {project.rfm_segments && project.rfm_segments.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Target className="w-4 h-4 text-purple-500" />
                    <span>RFM Customer Segmentation Tiers</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6 border-l-2 border-purple-500/30">
                    {project.rfm_segments.map((seg, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 block mb-1">{seg.name}</span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">{seg.description}</p>
                        {seg.action && (
                          <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20">
                            <strong>Action:</strong> {seg.action}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Telecom Use Cases (if present) */}
              {project.telecom_use_cases && project.telecom_use_cases.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-cyan-500" />
                    <span>Transferable Telecom Use Cases</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6 border-l-2 border-cyan-500/30">
                    {project.telecom_use_cases.map((uc, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1">{uc.title}</span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">{uc.description}</p>
                        {uc.impact && (
                          <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 p-1.5 rounded border border-cyan-500/20">
                            {uc.impact}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SQL Techniques (if present) */}
              {project.sql_techniques && project.sql_techniques.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-blue-500" />
                    <span>Advanced SQL Techniques Employed</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-6 border-l-2 border-blue-500/30">
                    {project.sql_techniques.map((sql, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium">
                        {sql}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 13. Business / Analytical Impact */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-emerald-500" />
                  <span>Business & Analytical Impact</span>
                </h3>
                <ul className="space-y-2 pl-6 border-l-2 border-emerald-500/30 text-sm text-slate-600 dark:text-slate-300">
                  {project.business_impact.map((impact, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Meta & Actions Sidebar (4 Cols) */}
            <div className="md:col-span-4 space-y-6">
              
              {/* 14. Technology Stack */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                  14. Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech_stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 15. Project Artifacts & Action Buttons */}
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-500/10 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-cyan-500" />
                  15. Project Artifacts
                </h4>
                <p className="text-[11px] text-slate-500 font-mono">
                  Direct links to code repositories, notebooks, and research documentation:
                </p>

                <div className="space-y-2 pt-1 font-mono text-xs">
                  {project.analysis_url && (
                    <a
                      href={project.analysis_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-cyan-500" />
                        View Analysis
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.notebook_url && (
                    <a
                      href={project.notebook_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                        View Notebook
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.report_url && (
                    <a
                      href={project.report_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-blue-500" />
                        View Report
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <FolderGit2 className="w-3.5 h-3.5 text-emerald-500" />
                        View GitHub
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.tableau_url && (
                    <a
                      href={project.tableau_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
                        View Tableau Dashboard
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.dataset_url && (
                    <a
                      href={project.dataset_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-teal-500" />
                        View Dataset
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Demo
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Engineering & Deployment */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-3 font-mono text-xs">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-500" />
                  Deployment & Monitoring
                </h4>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p><strong>Deployment:</strong> {project.deployment_details}</p>
                  <p><strong>Monitoring:</strong> {project.monitoring_strategy}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            Project ID: <span className="text-slate-700 dark:text-slate-300 font-semibold">{project.slug}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
