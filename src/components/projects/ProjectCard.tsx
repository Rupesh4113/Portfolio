import React from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  TrendingUp, 
  CheckCircle, 
  FolderGit2, 
  ExternalLink,
  Cpu, 
  BarChart2, 
  Binary,
  Sparkles,
  Bot
} from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isProfessional = project.project_type === 'professional';
  const isQuantitative = project.id.startsWith('quant-');
  const isAi = project.is_ai_demo || project.category.toLowerCase().includes('genai');

  return (
    <div className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Banner / Type Flag */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Project Type Badge */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {isAi ? (
              <Badge variant="indigo" size="sm">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>GenAI & Agent</span>
              </Badge>
            ) : isQuantitative ? (
              <Badge variant="cyan" size="sm">
                <Binary className="w-3 h-3" />
                <span>Quantitative ML</span>
              </Badge>
            ) : isProfessional ? (
              <Badge variant="emerald" size="sm">
                <CheckCircle className="w-3 h-3" />
                <span>Resume / Client Project</span>
              </Badge>
            ) : (
              <Badge variant="indigo" size="sm">
                <Cpu className="w-3 h-3" />
                <span>Demonstration Study</span>
              </Badge>
            )}

            {project.demo_url && (
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider ${
                isAi 
                  ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20' 
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isAi ? 'bg-purple-500' : 'bg-emerald-500'}`} />
                <span>LIVE DEMO</span>
              </span>
            )}
          </div>

          {/* Domain Tag */}
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
            {project.domain}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
          {project.short_summary}
        </p>

        {/* Metric Highlight Box */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between mb-4">
          <div>
            <span className="text-[10px] uppercase font-mono font-semibold text-slate-500">
              {project.primary_metric_label}
            </span>
            <div className="text-xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
              {project.primary_metric_value}
            </div>
          </div>
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tech_stack.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 5 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
              +{project.tech_stack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group-hover:translate-x-0.5 transition-transform"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shadow-sm ${
                  isAi
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-violet-500/20 hover:shadow-violet-500/30'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-600/20 hover:shadow-cyan-600/30'
                }`}
                title="Launch Live Streamlit Application"
              >
                {isAi ? <Bot className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                <span>{isAi ? '🤖 Try AI Demo' : '🚀 Live Demo'}</span>
              </a>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                title="GitHub Repository"
                aria-label="GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <FolderGit2 className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Alternate Application Variant Link (if exists) */}
        {project.alternate_demo_url && (
          <div className="flex items-center justify-end pt-1 border-t border-dashed border-slate-200/60 dark:border-slate-800/60">
            <a
              href={project.alternate_demo_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 hover:underline"
              title={project.alternate_demo_label || 'Alternate Application'}
            >
              <span>{project.alternate_demo_label || '⚡ Alternate App'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>

    </div>
  );
};
