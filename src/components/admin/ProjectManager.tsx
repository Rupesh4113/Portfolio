import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  FolderGit2, 
  Upload, 
  X, 
  Save,
  Layers,
  Cpu,
  Sparkles
} from 'lucide-react';
import { Project, ProjectType, ProjectStatus, DiagramType } from '../../types';
import { saveProject, deleteProject, uploadFile } from '../../lib/api';
import { Badge } from '../common/Badge';

interface ProjectManagerProps {
  projects: Project[];
  onRefresh: () => void;
}

export const ProjectManager: React.FC<ProjectManagerProps> = ({ projects, onRefresh }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project> | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Filter projects
  const filtered = projects.filter((p) => {
    if (filterType !== 'all' && p.status !== filterType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCreateNew = () => {
    setCurrentProject({
      title: '',
      slug: '',
      category: 'Data Science',
      domain: 'Retail & CPG',
      project_type: 'demonstration',
      status: 'published',
      is_featured: false,
      display_order: projects.length + 1,
      short_summary: '',
      business_problem: '',
      business_objective: '',
      dataset_description: '',
      data_sources: ['Enterprise Transaction Archives'],
      data_preparation: '',
      eda_insights: ['Identified strong seasonal patterns.'],
      feature_engineering: ['Lag rolling statistics.'],
      model_development: '',
      algorithms_used: ['XGBoost'],
      evaluation_metrics: { 'Accuracy': '92%' },
      primary_metric_label: 'Accuracy',
      primary_metric_value: '92%',
      results_summary: '',
      business_impact: ['Reduced operational costs.'],
      architecture_diagram_type: 'demand_forecasting',
      tech_stack: ['Python', 'XGBoost', 'SQL'],
      deployment_details: 'Scheduled batch pipeline with automated notifications.',
      monitoring_strategy: 'Model drift and feature distribution monitoring.',
      key_learnings: ['High-signal feature engineering outperforms raw complex models.'],
      future_improvements: ['Real-time streaming integration.'],
      github_url: '',
      demo_url: '',
      thumbnail_url: '',
      gallery_images: []
    });
    setIsEditing(true);
  };

  const handleEdit = (proj: Project) => {
    setCurrentProject({ ...proj });
    setIsEditing(true);
  };

  const handleToggleStatus = async (proj: Project) => {
    const newStatus: ProjectStatus = proj.status === 'published' ? 'draft' : 'published';
    await saveProject({ ...proj, status: newStatus });
    onRefresh();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
      onRefresh();
    }
  };

  const handleSaveModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject || !currentProject.title) return;

    // Generate slug if not present
    const slug = currentProject.slug || currentProject.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    await saveProject({
      ...currentProject,
      slug
    });

    setIsEditing(false);
    setCurrentProject(null);
    onRefresh();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setIsUploading(true);
    try {
      const url = await uploadFile(file, 'project-images');
      setCurrentProject(prev => prev ? { ...prev, thumbnail_url: url } : null);
    } catch (err) {
      console.warn('Image upload failed:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Projects & Case Studies Management
          </h2>
          <p className="text-xs font-mono text-slate-500">
            Create, edit, toggle visibility, and update project content in real-time.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCreateNew}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-semibold shadow-sm transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-xs font-mono text-slate-400">Status:</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
          >
            <option value="all">All Projects ({projects.length})</option>
            <option value="published">Published ({projects.filter(p => p.status === 'published').length})</option>
            <option value="draft">Drafts ({projects.filter(p => p.status === 'draft').length})</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-slate-500">
              <tr>
                <th className="px-4 py-3">Project Title</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Domain</th>
                <th className="px-4 py-3">Primary KPI</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filtered.map((proj) => (
                <tr key={proj.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white max-w-xs truncate">
                    {proj.title}
                  </td>
                  <td className="px-4 py-3">
                    {proj.project_type === 'professional' ? (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        Resume
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        Case Study
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {proj.domain}
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-500">
                    {proj.primary_metric_value} <span className="text-[10px] text-slate-400 font-normal">({proj.primary_metric_label})</span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => handleToggleStatus(proj)}
                      className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold transition ${
                        proj.status === 'published'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {proj.status === 'published' ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                      <span className="capitalize">{proj.status}</span>
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(proj)}
                      className="p-1.5 rounded text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      title="Edit Project"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(proj.id)}
                      className="p-1.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full Project Editor Modal */}
      {isEditing && currentProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4">
          <div className="relative w-full max-w-4xl my-8 bg-white dark:bg-[#090e1a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {currentProject.id ? 'Edit Project' : 'Create New Project'}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Update metadata, technical specifications, architecture, and business metrics.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-6">
              
              {/* Core Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={currentProject.title || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Slug (URL)</label>
                  <input
                    type="text"
                    placeholder="auto-generated from title if blank"
                    value={currentProject.slug || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, slug: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Category</label>
                  <input
                    type="text"
                    value={currentProject.category || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Domain</label>
                  <input
                    type="text"
                    value={currentProject.domain || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, domain: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Project Classification</label>
                  <select
                    value={currentProject.project_type || 'demonstration'}
                    onChange={(e) => setCurrentProject({ ...currentProject, project_type: e.target.value as ProjectType })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  >
                    <option value="professional">Professional Experience / Resume Project</option>
                    <option value="demonstration">Portfolio / Demonstration Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Publication Status</label>
                  <select
                    value={currentProject.status || 'published'}
                    onChange={(e) => setCurrentProject({ ...currentProject, status: e.target.value as ProjectStatus })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  >
                    <option value="published">Published (Visible Publicly)</option>
                    <option value="draft">Draft (Admin Only)</option>
                  </select>
                </div>
              </div>

              {/* Summary & Narrative */}
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1">Short Executive Summary *</label>
                <textarea
                  rows={2}
                  required
                  value={currentProject.short_summary || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, short_summary: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Business Problem</label>
                  <textarea
                    rows={3}
                    value={currentProject.business_problem || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, business_problem: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Business Objective</label>
                  <textarea
                    rows={3}
                    value={currentProject.business_objective || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, business_objective: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Metrics & Architecture */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Primary KPI Label</label>
                  <input
                    type="text"
                    placeholder="e.g. ETA Accuracy"
                    value={currentProject.primary_metric_label || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, primary_metric_label: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Primary KPI Value</label>
                  <input
                    type="text"
                    placeholder="e.g. 94.6% or +20% ROI"
                    value={currentProject.primary_metric_value || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, primary_metric_value: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Architecture Diagram Type</label>
                  <select
                    value={currentProject.architecture_diagram_type || 'custom'}
                    onChange={(e) => setCurrentProject({ ...currentProject, architecture_diagram_type: e.target.value as DiagramType })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  >
                    <option value="demand_forecasting">Demand Forecasting Pipeline</option>
                    <option value="pricing_elasticity">Pricing Elasticity Architecture</option>
                    <option value="sagemaker_mlops">AWS SageMaker MLOps Topology</option>
                    <option value="supply_chain">Multi-Tier Supply Chain Flow</option>
                    <option value="transportation_lane">Transportation Lane Network (Blue Yonder)</option>
                    <option value="nlp_pipeline">NLP Sentiment Pipeline (Twitter)</option>
                    <option value="custom">Standard ML Systems Layout</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Quantitative Chart Visualizer</label>
                  <select
                    value={currentProject.quantitative_chart_type || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, quantitative_chart_type: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  >
                    <option value="">None / Custom</option>
                    <option value="sensor_imputation">Sensor Data Imputation & Normalization</option>
                    <option value="clustering_pca">Silhouette Analysis & 3D PCA Scatter</option>
                    <option value="real_estate_regression">Regression Residuals & CV Comparison</option>
                    <option value="cirrhosis_survival">Cirrhosis Survival Cohort & Features</option>
                    <option value="grid_stability">Grid Stability SVM/KNN/Tree Benchmark</option>
                    <option value="bank_marketing">Bank Marketing ROC & Optimization Curve</option>
                    <option value="mnist_optimization">MNIST Architecture Grid Search (20 Models)</option>
                    <option value="power_reproduction">Power Consumption Research Replication</option>
                  </select>
                </div>
              </div>

              {/* Dataset Dimensions & Validation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Dataset Size</label>
                  <input
                    type="text"
                    placeholder="e.g. 10,000 rows × 12 features"
                    value={currentProject.dataset_size || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, dataset_size: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Features Count</label>
                  <input
                    type="text"
                    placeholder="e.g. 12"
                    value={currentProject.features_count || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, features_count: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Project Date / Year</label>
                  <input
                    type="text"
                    placeholder="e.g. 2024"
                    value={currentProject.project_date || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, project_date: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Validation Strategy & Hyperparameter Optimization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Validation Strategy</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Stratified 5-Fold Cross-Validation on training set..."
                    value={currentProject.validation_strategy || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, validation_strategy: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Hyperparameter Optimization</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Factorial Grid Search over C and gamma parameters..."
                    value={currentProject.hyperparameter_optimization || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, hyperparameter_optimization: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Key Findings */}
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1">
                  Key Findings (one per line)
                </label>
                <textarea
                  rows={2}
                  placeholder="Key finding 1&#10;Key finding 2"
                  value={currentProject.key_findings?.join('\n') || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, key_findings: e.target.value.split('\n').map(s => s.trim()).filter(Boolean) })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                />
              </div>

              {/* Tech Stack & Algorithms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">
                    Technology Stack (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={currentProject.tech_stack?.join(', ') || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, tech_stack: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">
                    Algorithms Used (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={currentProject.algorithms_used?.join(', ') || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, algorithms_used: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Artifacts URLs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">GitHub URL</label>
                  <input
                    type="url"
                    placeholder="https://github.com/..."
                    value={currentProject.github_url || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, github_url: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Notebook URL</label>
                  <input
                    type="url"
                    placeholder="https://colab.research.google.com/..."
                    value={currentProject.notebook_url || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, notebook_url: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Report URL</label>
                  <input
                    type="url"
                    placeholder="https://.../report.pdf"
                    value={currentProject.report_url || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, report_url: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Demo / App URL</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={currentProject.demo_url || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, demo_url: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Image Upload Area */}
              <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
                <span className="block text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  Upload Project Image / Thumbnail
                </span>
                <div className="flex items-center space-x-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="text-xs font-mono text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-cyan-600 file:text-white"
                  />
                  {isUploading && (
                    <span className="text-xs font-mono text-cyan-500">Uploading...</span>
                  )}
                  {currentProject.thumbnail_url && (
                    <span className="text-xs font-mono text-emerald-500 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Image attached</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Modal Submit Actions */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold shadow transition"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Project Changes</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
