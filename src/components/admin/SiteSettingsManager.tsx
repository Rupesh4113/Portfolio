import React, { useState } from 'react';
import { Save, CheckCircle2, Globe, Shield } from 'lucide-react';
import { SiteSettings } from '../../types';
import { updateSiteSettings } from '../../lib/api';

interface SiteSettingsManagerProps {
  settings: SiteSettings;
  onRefresh: () => void;
}

export const SiteSettingsManager: React.FC<SiteSettingsManagerProps> = ({ settings, onRefresh }) => {
  const [formData, setFormData] = useState<SiteSettings>({ ...settings });
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaved(false);
    try {
      await updateSiteSettings(formData);
      setSaved(true);
      onRefresh();
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.warn('Error saving settings:', err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Site Settings & SEO Optimization
        </h2>
        <p className="text-xs font-mono text-slate-500">
          Configure search engine optimization, metadata, default theme, and privacy settings.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase text-slate-500 tracking-wider flex items-center space-x-2">
            <Globe className="w-4 h-4 text-cyan-500" />
            <span>Search Engine Optimization (SEO)</span>
          </h3>

          <div>
            <label className="block text-xs font-mono text-slate-500 mb-1">
              Browser Title / Meta Title
            </label>
            <input
              type="text"
              required
              value={formData.meta_title}
              onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-500 mb-1">
              Search Engine Meta Description
            </label>
            <textarea
              rows={3}
              required
              value={formData.meta_description}
              onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-500 mb-1">
              Contact Inquiry Notification Email
            </label>
            <input
              type="email"
              required
              value={formData.contact_recipient_email}
              onChange={(e) => setFormData({ ...formData, contact_recipient_email: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex items-center space-x-3 pt-2">
            <input
              type="checkbox"
              id="analytics-toggle"
              checked={formData.enable_analytics}
              onChange={(e) => setFormData({ ...formData, enable_analytics: e.target.checked })}
              className="rounded border-slate-300 dark:border-slate-700 text-cyan-600 focus:ring-cyan-500"
            />
            <label htmlFor="analytics-toggle" className="text-xs font-mono text-slate-700 dark:text-slate-300">
              Enable privacy-conscious telemetry analytics
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {saved && (
            <span className="text-xs font-mono text-emerald-500 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Settings updated successfully!</span>
            </span>
          )}

          <div className="ml-auto">
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-mono text-xs font-semibold shadow transition"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save Settings'}</span>
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};
