import React from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  TrendingUp, 
  CheckCircle, 
  FolderGit2, 
  ExternalLink,
  Cpu,
  BarChart2
} from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isProfessional = project.project_type === 'professional';

  return (
    <div className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Banner / Type Flag */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Project Type Badge */}
          {isProfessional ? (
            <Badge variant="cyan" size="sm">
              <CheckCircle className="w-3 h-3" />
              <span>Resume / Enterprise Project</span>
            </Badge>
          ) : (
            <Badge variant="indigo" size="sm">
              <Cpu className="w-3 h-3" />
              <span>Demonstration Case Study</span>
            </Badge>
          )}

          {/* Domain Tag */}
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
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
      <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group-hover:translate-x-0.5 transition-transform"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-1"
            title="GitHub Repository"
            aria-label="GitHub Repository"
            onClick={(e) => e.stopPropagation()}
          >
            <FolderGit2 className="w-4 h-4" />
          </a>
        )}
      </div>

    </div>
  );
};
