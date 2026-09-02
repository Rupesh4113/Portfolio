import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Save, X } from 'lucide-react';
import { Experience } from '../../types';
import { saveExperience, deleteExperience } from '../../lib/api';

interface ExperienceManagerProps {
  experiences: Experience[];
  onRefresh: () => void;
}

export const ExperienceManager: React.FC<ExperienceManagerProps> = ({ experiences, onRefresh }) => {
  const [editingExp, setEditingExp] = useState<Experience | null>(null);

  const handleCreateNew = () => {
    setEditingExp({
      id: `exp-${Date.now()}`,
      role: '',
      company: '',
      client: '',
      location: 'Bengaluru, India',
      period: '2024 – Present',
      is_current: false,
      highlights: ['Key contribution highlight.'],
      technologies: ['Python', 'SQL'],
      display_order: experiences.length + 1
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExp) return;
    await saveExperience(editingExp);
    setEditingExp(null);
    onRefresh();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this career milestone?')) {
      await deleteExperience(id);
      onRefresh();
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Career Timeline Management
          </h2>
          <p className="text-xs font-mono text-slate-500">
            Edit your past roles, clients, achievements, and technology tags.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          type="button"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold"
        >
          <Plus className="w-4 h-4" />
          <span>Add Career Role</span>
        </button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start justify-between gap-4"
          >
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  @ {exp.company}
                </span>
                {exp.client && (
                  <span className="text-xs font-mono text-slate-400">
                    (Client: {exp.client})
                  </span>
                )}
              </div>
              <p className="text-xs font-mono text-slate-500 mt-0.5">
                {exp.period} • {exp.location}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                {exp.highlights.length} achievements documented
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                type="button"
                onClick={() => setEditingExp(exp)}
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(exp.id)}
                className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingExp && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#090e1a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Edit Career Role
              </h3>
              <button onClick={() => setEditingExp(null)} className="text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Role Title</label>
                  <input
                    type="text"
                    required
                    value={editingExp.role}
                    onChange={(e) => setEditingExp({ ...editingExp, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Company</label>
                  <input
                    type="text"
                    required
                    value={editingExp.company}
                    onChange={(e) => setEditingExp({ ...editingExp, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Client (Optional)</label>
                  <input
                    type="text"
                    value={editingExp.client || ''}
                    onChange={(e) => setEditingExp({ ...editingExp, client: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-1">Period</label>
                  <input
                    type="text"
                    value={editingExp.period}
                    onChange={(e) => setEditingExp({ ...editingExp, period: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1">
                  Highlights (one per line)
                </label>
                <textarea
                  rows={4}
                  value={editingExp.highlights.join('\n')}
                  onChange={(e) => setEditingExp({ ...editingExp, highlights: e.target.value.split('\n').filter(Boolean) })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  value={editingExp.technologies.join(', ')}
                  onChange={(e) => setEditingExp({ ...editingExp, technologies: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingExp(null)}
                  className="px-4 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-mono"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-cyan-600 text-white text-xs font-mono font-semibold"
                >
                  Save Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
