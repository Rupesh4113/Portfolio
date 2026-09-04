import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowUpDown, 
  ExternalLink, 
  Filter, 
  Sparkles, 
  CheckCircle2,
  Table as TableIcon
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectComparisonMatrixProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectComparisonMatrix: React.FC<ProjectComparisonMatrixProps> = ({
  projects,
  onSelectProject
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  // Take the 7 business case studies or any projects with analytics_type
  const matrixData = useMemo(() => {
    const list = projects.filter(p => p.analytics_type || p.slug.startsWith('case-study') || p.domain);
    // Prioritize our 7 primary business projects
    return list.slice(0, 7);
  }, [projects]);

  const domains = useMemo(() => {
    const set = new Set<string>();
    matrixData.forEach(p => {
      if (p.domain) set.add(p.domain);
    });
    return ['All', ...Array.from(set)];
  }, [matrixData]);

  const analyticsTypes = useMemo(() => {
    const set = new Set<string>();
    matrixData.forEach(p => {
      if (p.analytics_type) set.add(p.analytics_type);
    });
    return ['All', ...Array.from(set)];
  }, [matrixData]);

  const filteredProjects = useMemo(() => {
    return matrixData.filter(p => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.analytics_type && p.analytics_type.toLowerCase().includes(searchTerm.toLowerCase())) ||
        p.tech_stack.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        p.algorithms_used.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDomain = selectedDomain === 'All' || p.domain.includes(selectedDomain);
      const matchesType = selectedType === 'All' || p.analytics_type === selectedType;

      return matchesSearch && matchesDomain && matchesType;
    });
  }, [matrixData, searchTerm, selectedDomain, selectedType]);

  return (
    <div className="mt-16 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-2">
            <TableIcon className="w-3.5 h-3.5" />
            <span>Interactive Comparison Matrix</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Project Analytical Capabilities Matrix
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Compare domain, analytical methodologies, modeling techniques, and tech stacks across projects.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search method, domain, or tool..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
          />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3 py-4">
        <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
          <Filter className="w-3.5 h-3.5 text-cyan-500" />
          <span className="font-mono">Filters:</span>
        </div>

        {/* Domain Filter */}
        <div className="flex items-center space-x-1.5">
          <span className="text-xs text-slate-400">Domain:</span>
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
          >
            {domains.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Analytics Type Filter */}
        <div className="flex items-center space-x-1.5">
          <span className="text-xs text-slate-400">Analytics Type:</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
          >
            {analyticsTypes.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {(searchTerm || selectedDomain !== 'All' || selectedType !== 'All') && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDomain('All');
              setSelectedType('All');
            }}
            className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline ml-auto font-mono"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase border-b border-slate-200/80 dark:border-slate-800">
            <tr>
              <th className="py-3.5 px-4 font-semibold">Project</th>
              <th className="py-3.5 px-4 font-semibold">Domain</th>
              <th className="py-3.5 px-4 font-semibold">Analytics Type</th>
              <th className="py-3.5 px-4 font-semibold">Key Methods</th>
              <th className="py-3.5 px-4 font-semibold">Tools</th>
              <th className="py-3.5 px-4 font-semibold text-right">Case Study</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-sans">
            {filteredProjects.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-500 dark:text-slate-400">
                  No projects match your current search filters.
                </td>
              </tr>
            ) : (
              filteredProjects.map((p, idx) => (
                <tr
                  key={idx}
                  onClick={() => onSelectProject(p)}
                  className="hover:bg-cyan-500/[0.04] transition-colors cursor-pointer group"
                >
                  <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                    <div className="flex items-center space-x-2">
                      <span>{p.title}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                      {p.domain}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-300 font-medium">
                    {p.analytics_type || p.category}
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-400">
                    {p.algorithms_used.slice(0, 3).join(', ')}
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-400 font-mono text-xs">
                    {p.tech_stack.slice(0, 2).join(', ')}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(p);
                      }}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium transition-colors"
                    >
                      <span>Explore</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
