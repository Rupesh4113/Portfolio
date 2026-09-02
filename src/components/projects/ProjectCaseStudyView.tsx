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
  Calendar
} from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';
import { ArchitectureDiagram } from './ArchitectureDiagrams';

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

          <div className="flex items-center space-x-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 space-y-12 max-h-[85vh] overflow-y-auto">
          
          {/* 1. Title & Meta Overview */}
          <div className="space-y-4 border-b border-slate-200 dark:border-slate-800/80 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              {isProfessional ? (
                <Badge variant="cyan" size="md">
                  Professional Experience / Resume Project
                </Badge>
              ) : (
                <Badge variant="indigo" size="md">
                  Portfolio / Demonstration Project
                </Badge>
              )}
              <span className="text-xs font-mono text-slate-500">
                Primary KPI: <strong className="text-emerald-500 font-bold">{project.primary_metric_label} ({project.primary_metric_value})</strong>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
              {project.short_summary}
            </p>

            {/* Quick KPI Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Primary Metric</div>
                <div className="text-xl font-bold font-mono text-emerald-500 mt-0.5">
                  {project.primary_metric_value}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{project.primary_metric_label}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Domain</div>
                <div className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                  {project.domain}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Industry Segment</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Category</div>
                <div className="text-base font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">
                  {project.category}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Discipline</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Status</div>
                <div className="text-base font-bold text-emerald-500 mt-0.5 capitalize">
                  Production Validated
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Peer Reviewed</div>
              </div>
            </div>
          </div>

          {/* 2. Interactive Architecture Diagram */}
          {project.architecture_diagram_type && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase font-bold text-slate-500 tracking-wider">
                System Topology & Pipeline Architecture
              </h3>
              <ArchitectureDiagram 
                type={project.architecture_diagram_type} 
                title={project.title} 
              />
            </div>
          )}

          {/* 3. Business Problem & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 dark:bg-red-950/10 space-y-2">
              <h3 className="text-base font-bold text-red-600 dark:text-red-400 flex items-center space-x-2">
                <span>The Business Problem</span>
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.business_problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-950/10 space-y-2">
              <h3 className="text-base font-bold text-cyan-600 dark:text-cyan-400 flex items-center space-x-2">
                <span>Business Objective & Target</span>
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.business_objective}
              </p>
            </div>
          </div>

          {/* 4. Dataset & Data Engineering */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Database className="w-5 h-5 text-cyan-500" />
              <span>Dataset & Data Sourcing</span>
            </h3>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.dataset_description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-semibold text-slate-500 block mb-2">
                Integrated Data Sources:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.data_sources.map((src, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {src}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80">
              <strong className="text-slate-900 dark:text-slate-200 block mb-1">Data Preparation & Cleaning Protocol:</strong>
              {project.data_preparation}
            </div>
          </div>

          {/* 5. Exploratory Data Analysis & Feature Engineering */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase font-bold text-slate-500 tracking-wider flex items-center space-x-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Exploratory Data Analysis (EDA)</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {project.eda_insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase font-bold text-slate-500 tracking-wider flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Key Feature Engineering</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {project.feature_engineering.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Modeling, Algorithms & Evaluation Metrics */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-indigo-500" />
                <span>Model Development & Algorithms</span>
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.model_development}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.algorithms_used.map((algo, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono font-semibold">
                    {algo}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Matrix Table */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-900 px-6 py-3 border-b border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Model Evaluation Metrics & Validation Benchmarks
                </h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200 dark:divide-slate-800">
                {Object.entries(project.evaluation_metrics).map(([key, val], idx) => (
                  <div key={idx} className="p-4 bg-white dark:bg-slate-950/40">
                    <span className="text-[11px] font-mono text-slate-500 block truncate">{key}</span>
                    <span className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-1 block">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 7. Results & Business Impact */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border border-emerald-500/20 space-y-4">
            <h3 className="text-base font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Measurable Business Impact</span>
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
              {project.results_summary}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {project.business_impact.map((impact, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Deployment, Monitoring & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-mono uppercase font-bold text-slate-500 flex items-center space-x-2">
                <Server className="w-4 h-4 text-cyan-500" />
                <span>Production Deployment</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.deployment_details}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-mono uppercase font-bold text-slate-500 flex items-center space-x-2">
                <Activity className="w-4 h-4 text-orange-500" />
                <span>Monitoring & Governance</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.monitoring_strategy}
              </p>
            </div>
          </div>

          {/* 9. Technology Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-500">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 10. Key Learnings & Future Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-slate-500 mb-2">
                Key Senior Engineering Learnings
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                {project.key_learnings.map((l, i) => (
                  <li key={i}>• {l}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-slate-500 mb-2">
                Future Scaling & Architecture Extensions
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                {project.future_improvements.map((imp, i) => (
                  <li key={i}>• {imp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Back Button */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={onClose}
              type="button"
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-mono text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
            >
              Back to Portfolio
            </button>

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold transition-colors"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Code on GitHub</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
