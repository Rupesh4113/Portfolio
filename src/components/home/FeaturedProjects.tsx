import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  SlidersHorizontal, 
  CheckCircle2, 
  Cpu, 
  Layers,
  X,
  Binary,
  Brain,
  Gauge
} from 'lucide-react';
import { Project } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectCaseStudyView } from '../projects/ProjectCaseStudyView';

interface FeaturedProjectsProps {
  projects: Project[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<'all' | 'quantitative' | 'professional' | 'demonstration'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // 6 Primary Categories required by prompt
  const categories = [
    'All',
    'Data Preprocessing',
    'Clustering',
    'Regression',
    'Classification',
    'Deep Learning',
    'Research/Reproduction'
  ];

  // Filtering Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Category Filter
      if (selectedCategory !== 'All') {
        const matchesCategory = 
          project.category.toLowerCase() === selectedCategory.toLowerCase() ||
          project.domain.toLowerCase().includes(selectedCategory.toLowerCase());
        if (!matchesCategory) return false;
      }

      // 2. Type Filter
      if (selectedType === 'quantitative') {
        if (!project.id.startsWith('quant-')) return false;
      } else if (selectedType === 'professional') {
        if (project.project_type !== 'professional') return false;
      } else if (selectedType === 'demonstration') {
        if (project.project_type !== 'demonstration' && !project.id.startsWith('quant-')) return false;
      }

      // 3. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = project.title.toLowerCase().includes(q);
        const inSummary = project.short_summary.toLowerCase().includes(q);
        const inTech = project.tech_stack.some(t => t.toLowerCase().includes(q));
        const inAlgo = project.algorithms_used.some(a => a.toLowerCase().includes(q));
        const inDomain = project.domain.toLowerCase().includes(q);
        if (!inTitle && !inSummary && !inTech && !inAlgo && !inDomain) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedCategory, selectedType, searchQuery]);

  const quantProjectsCount = projects.filter(p => p.id.startsWith('quant-')).length;
  const resumeProjectsCount = projects.filter(p => p.project_type === 'professional').length;

  return (
    <section id="projects" className="py-24 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Binary className="w-3.5 h-3.5" />
            <span>Rupesh Kumar Pandey • Quantitative Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Quantitative Machine Learning & Data Science Projects
          </h2>
          
          <p className="text-lg sm:text-xl font-medium text-cyan-600 dark:text-cyan-400 font-mono">
            End-to-end statistical analysis, machine learning, model validation, optimization, and predictive analytics
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            "An end-to-end collection of data science projects demonstrating statistical analysis, data preprocessing, unsupervised learning, supervised learning, dimensionality reduction, model validation, hyperparameter optimization, ensemble learning, neural networks, and research-based machine learning experimentation."
          </p>

          {/* 3 Headline Metrics Callouts */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto font-mono">
            <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm text-center">
              <span className="text-2xl font-extrabold text-cyan-500">8 Major</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 block font-semibold mt-0.5">Projects</span>
            </div>
            <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm text-center">
              <span className="text-2xl font-extrabold text-blue-500">Multiple</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 block font-semibold mt-0.5">ML Algorithms</span>
            </div>
            <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm text-center">
              <span className="text-2xl font-extrabold text-emerald-500">End-to-End</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 block font-semibold mt-0.5">Quantitative Analysis</span>
            </div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="space-y-6 mb-12">
          
          {/* Top Row: Search Input & Project View Toggle */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by algorithm (SVM, KNN, PCA, K-Means), metric, or domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono shadow-sm transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Filter Segment */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 text-xs font-mono self-start md:self-auto">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Projects ({projects.length})
              </button>

              <button
                onClick={() => setSelectedType('quantitative')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'quantitative'
                    ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Quantitative ML ({quantProjectsCount})
              </button>

              <button
                onClick={() => setSelectedType('professional')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'professional'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Enterprise / Resume ({resumeProjectsCount})
              </button>
            </div>

          </div>

          {/* 6 Core Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center space-x-1 text-xs font-mono text-slate-400 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </div>

            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter / Active Filter Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 px-1">
          <span>
            Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && <span> in <span className="text-cyan-500 font-semibold">{selectedCategory}</span></span>}
            {selectedType !== 'all' && <span> ({selectedType})</span>}
          </span>

          {(selectedCategory !== 'All' || selectedType !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="text-cyan-500 hover:underline flex items-center gap-1"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <Cpu className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              No matching projects found
            </h3>
            <p className="text-xs font-mono text-slate-500 max-w-sm mx-auto mb-4">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-mono font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal with 15 Structured Sections */}
      {activeProject && (
        <ProjectCaseStudyView
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
