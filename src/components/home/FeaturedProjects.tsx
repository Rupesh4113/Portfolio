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
  Gauge,
  Briefcase
} from 'lucide-react';
import { Project } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectCaseStudyView } from '../projects/ProjectCaseStudyView';
import { ProjectComparisonMatrix } from '../projects/ProjectComparisonMatrix';
import { TelecomAnalyticsSection } from './TelecomAnalyticsSection';

interface FeaturedProjectsProps {
  projects: Project[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<'all' | 'business' | 'benchmark'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Categories covering all business case studies and quantitative ML
  const categories = [
    'All',
    'Supply Chain & Retail',
    'Customer Analytics',
    'SQL Analytics',
    'BI & Risk Analytics',
    'Time Series & Forecasting',
    'Predictive & ML',
    'Quantitative Benchmarks'
  ];

  // Filtering Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Category Filter
      if (selectedCategory !== 'All') {
        const cat = selectedCategory.toLowerCase();
        const pCat = project.category.toLowerCase();
        const pDom = project.domain.toLowerCase();

        if (selectedCategory === 'Supply Chain & Retail') {
          const match = pCat.includes('supply') || pDom.includes('supply') || 
                        pCat.includes('retail') || pDom.includes('retail') || 
                        pCat.includes('fmcg') || pDom.includes('fmcg') || 
                        pCat.includes('e-commerce') || pDom.includes('e-commerce');
          if (!match) return false;
        } else if (selectedCategory === 'Customer Analytics') {
          const match = pCat.includes('customer') || pDom.includes('customer') || 
                        pCat.includes('revenue') || pDom.includes('revenue');
          if (!match) return false;
        } else if (selectedCategory === 'SQL Analytics') {
          const match = pCat.includes('sql') || project.tech_stack.some(t => t.toLowerCase().includes('sql'));
          if (!match) return false;
        } else if (selectedCategory === 'BI & Risk Analytics') {
          const match = pCat.includes('risk') || pDom.includes('risk') || 
                        pCat.includes('bi') || project.tech_stack.some(t => t.toLowerCase().includes('tableau'));
          if (!match) return false;
        } else if (selectedCategory === 'Time Series & Forecasting') {
          const match = pCat.includes('forecast') || pCat.includes('time series') || 
                        project.algorithms_used.some(a => a.toLowerCase().includes('arima'));
          if (!match) return false;
        } else if (selectedCategory === 'Predictive & ML') {
          const match = pCat.includes('predictive') || pCat.includes('classification') || 
                        pDom.includes('telecom') || pDom.includes('transportation');
          if (!match) return false;
        } else if (selectedCategory === 'Quantitative Benchmarks') {
          const match = project.id.startsWith('quant-') || pCat.includes('deep') || 
                        pCat.includes('research') || pCat.includes('regression') || 
                        pCat.includes('clustering') || pCat.includes('data preprocessing');
          if (!match) return false;
        } else {
          if (!pCat.includes(cat) && !pDom.includes(cat)) return false;
        }
      }

      // 2. Type Filter
      if (selectedType === 'business') {
        if (!project.id.startsWith('case-study') && project.project_type !== 'professional') return false;
      } else if (selectedType === 'benchmark') {
        if (!project.id.startsWith('quant-')) return false;
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

  const businessCount = projects.filter(p => p.id.startsWith('case-study') || p.project_type === 'professional').length;
  const benchmarkCount = projects.filter(p => p.id.startsWith('quant-')).length;

  return (
    <section id="projects" className="py-24 relative scroll-mt-12 bg-slate-50/50 dark:bg-[#080e1c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Binary className="w-3.5 h-3.5" />
            <span>Featured Case Studies & Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Quantitative Machine Learning & Data Science Projects
          </h2>
          
          <p className="text-base sm:text-xl font-medium text-cyan-600 dark:text-cyan-400 font-mono">
            End-to-end statistical analysis, machine learning, model validation, optimization, and predictive analytics
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Rigorous quantitative case studies translating raw transaction records, telemetry data, and business challenges into validated predictive models and actionable executive recommendations.
          </p>
        </div>

        {/* Search, Scope & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by algorithm, business problem, domain, or tool..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Scope Toggle Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-slate-200/60 dark:bg-slate-800/80 text-xs font-mono shrink-0">
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
                onClick={() => setSelectedType('business')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'business'
                    ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Featured Business ({businessCount})
              </button>

              <button
                onClick={() => setSelectedType('benchmark')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedType === 'benchmark'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                ML Benchmarks ({benchmarkCount})
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
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
                      ? 'bg-cyan-600 text-white font-bold shadow-md shadow-cyan-600/20'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
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
          <div className="p-12 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/30">
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
              className="px-4 py-2 rounded-xl bg-cyan-600 text-white text-xs font-mono font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Interactive Project Comparison Matrix */}
        <ProjectComparisonMatrix 
          projects={projects}
          onSelectProject={(proj) => setActiveProject(proj)}
        />

        {/* Dedicated Telecom Customer Analytics Showcase */}
        <TelecomAnalyticsSection 
          onOpenCaseStudy={() => {
            const telecomProj = projects.find(p => p.slug === 'customer-analytics-telecom-transferable' || p.domain.includes('Telecom'));
            if (telecomProj) {
              setActiveProject(telecomProj);
            }
          }}
        />

      </div>

      {/* Case Study Detail Modal with 9 Structured Sections */}
      {activeProject && (
        <ProjectCaseStudyView
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
