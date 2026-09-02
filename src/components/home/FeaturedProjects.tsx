import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  SlidersHorizontal, 
  CheckCircle2, 
  Cpu, 
  Layers,
  X
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
  const [selectedType, setSelectedType] = useState<'all' | 'professional' | 'demonstration'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Data Science',
    'Machine Learning',
    'Forecasting',
    'Retail',
    'Supply Chain',
    'Transportation',
    'NLP',
    'Predictive Analytics',
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

      // 2. Type Filter (Professional vs Demonstration)
      if (selectedType !== 'all' && project.project_type !== selectedType) {
        return false;
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

  const resumeProjectsCount = projects.filter(p => p.project_type === 'professional').length;
  const demoProjectsCount = projects.filter(p => p.project_type === 'demonstration').length;

  return (
    <section id="projects" className="py-24 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <span>Enterprise Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Data Science & ML Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world enterprise solutions and deep architectural case studies across Supply Chain, Retail CPG, and Predictive Analytics.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="space-y-6 mb-12">
          
          {/* Top Row: Search Input & Project Type Toggle */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by technology (XGBoost, Prophet), domain, or algorithm..."
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

            {/* Type Segment Control */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 text-xs font-mono self-start md:self-auto">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All ({projects.length})
              </button>

              <button
                onClick={() => setSelectedType('professional')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'professional'
                    ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Resume ({resumeProjectsCount})
              </button>

              <button
                onClick={() => setSelectedType('demonstration')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'demonstration'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Portfolio Case Studies ({demoProjectsCount})
              </button>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block mr-1">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span>
            Showing <strong className="text-slate-900 dark:text-white">{filteredProjects.length}</strong> of {projects.length} case studies
          </span>
          {(searchQuery || selectedCategory !== 'All' || selectedType !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedType('all');
              }}
              className="text-cyan-500 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects Cards Grid */}
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
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30">
            <SlidersHorizontal className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No matching case studies found
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or reset the category filter to explore all available projects.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedType('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-cyan-600 text-white font-mono text-xs font-medium hover:bg-cyan-500 transition"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Full Modal */}
      {activeProject && (
        <ProjectCaseStudyView
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
