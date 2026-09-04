import React, { useState } from 'react';
import { 
  Save, 
  Upload, 
  CheckCircle2, 
  FileDown, 
  User, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Profile } from '../../types';
import { updateProfile, uploadFile } from '../../lib/api';

interface ProfileManagerProps {
  profile: Profile;
  onRefresh: () => void;
}

export const ProfileManager: React.FC<ProfileManagerProps> = ({ profile, onRefresh }) => {
  const [formData, setFormData] = useState<Profile>({ ...profile });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [resumeUploading, setResumeUploading] = useState(false);
  const [avatarUploading, setAvatarUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await updateProfile(formData);
      setSaveSuccess(true);
      onRefresh();
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.warn('Error saving profile:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setResumeUploading(true);
    try {
      const url = await uploadFile(file, 'resumes');
      setFormData(prev => ({ ...prev, resume_url: url }));
    } catch (err) {
      console.warn('Resume upload error:', err);
    } finally {
      setResumeUploading(false);
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setAvatarUploading(true);
    try {
      const url = await uploadFile(file, 'portfolio-assets');
      setFormData(prev => ({ ...prev, avatar_url: url }));
    } catch (err) {
      console.warn('Avatar upload error:', err);
    } finally {
      setAvatarUploading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Profile & Resume Management
        </h2>
        <p className="text-xs font-mono text-slate-500">
          Update your public profile, executive bio, contact links, profile photo, and downloadable resume PDF.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name & Title */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase text-slate-500 tracking-wider">
            Identity & Professional Headline
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-500 mb-1">Professional Headline</label>
            <input
              type="text"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-500 mb-1">Supporting Mission Statement</label>
            <input
              type="text"
              value={formData.supporting_statement}
              onChange={(e) => setFormData({ ...formData, supporting_statement: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-500 mb-1">Hero Short Bio</label>
            <textarea
              rows={3}
              value={formData.short_bio}
              onChange={(e) => setFormData({ ...formData, short_bio: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Contact & Social Links */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase text-slate-500 tracking-wider">
            Contact & Social URLs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1">Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1">LinkedIn URL</label>
              <input
                type="url"
                value={formData.linkedin_url}
                onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1">GitHub URL</label>
              <input
                type="url"
                value={formData.github_url}
                onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* File Uploads: Resume PDF & Profile Avatar */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase text-slate-500 tracking-wider">
            Resume PDF & Profile Image Upload
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Resume Upload */}
            <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block">
                Downloadable Resume (PDF)
              </span>
              <p className="text-[11px] text-slate-500">
                Replace your PDF resume without touching application source code.
              </p>
              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
                className="text-xs font-mono text-slate-500 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-cyan-600 file:text-white"
              />
              {resumeUploading && <span className="text-xs text-cyan-500 block">Uploading resume...</span>}
              {formData.resume_url && (
                <div className="text-[11px] font-mono text-emerald-500 flex items-center space-x-1 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="truncate">Current: {formData.resume_url}</span>
                </div>
              )}
            </div>

            {/* Avatar Upload */}
            <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block">
                Profile Photo / Avatar
              </span>
              <p className="text-[11px] text-slate-500">
                Upload a professional headshot or branding photo.
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="text-xs font-mono text-slate-500 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-cyan-600 file:text-white"
              />
              {avatarUploading && <span className="text-xs text-cyan-500 block">Uploading image...</span>}
              {formData.avatar_url && (
                <div className="flex items-center space-x-3 pt-2">
                  <img 
                    src={formData.avatar_url.startsWith('http') || formData.avatar_url.startsWith('data:') 
                      ? formData.avatar_url 
                      : `${import.meta.env.BASE_URL}${formData.avatar_url.replace(/^\.?\/?(public\/)?/, '')}`}
                    alt="Preview" 
                    className="w-12 h-12 rounded-lg object-cover object-[50%_22%] border border-slate-300 dark:border-slate-700 shadow-sm" 
                  />
                  <div className="text-[11px] font-mono text-emerald-500 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Photo active</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-between">
          {saveSuccess && (
            <span className="text-xs font-mono text-emerald-500 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Profile updated successfully!</span>
            </span>
          )}

          <div className="ml-auto">
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-mono text-xs font-semibold shadow-md transition"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save Profile Changes'}</span>
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};
