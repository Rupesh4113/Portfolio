import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { AdminLogin } from '../components/admin/AdminLogin';
import { AdminSidebar, AdminTab } from '../components/admin/AdminSidebar';
import { ProjectManager } from '../components/admin/ProjectManager';
import { ProfileManager } from '../components/admin/ProfileManager';
import { ExperienceManager } from '../components/admin/ExperienceManager';
import { SiteSettingsManager } from '../components/admin/SiteSettingsManager';
import { 
  fetchProfile, 
  fetchProjects, 
  fetchExperiences, 
  fetchSiteSettings,
  fetchDashboards,
  fetchSkills,
  fetchEducation,
  fetchContactMessages
} from '../lib/api';
import { 
  Profile, 
  Project, 
  Experience, 
  SiteSettings, 
  DashboardItem, 
  SkillCategory, 
  Education, 
  ContactMessage 
} from '../types';
import { 
  FolderKanban, 
  CheckCircle2, 
  EyeOff, 
  Layers, 
  Mail, 
  Activity, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [dashboards, setDashboards] = useState<DashboardItem[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  const loadData = async () => {
    try {
      const [prof, projs, exps, sets, dash, msgs] = await Promise.all([
        fetchProfile(),
        fetchProjects(true), // Include drafts
        fetchExperiences(),
        fetchSiteSettings(),
        fetchDashboards(),
        fetchContactMessages()
      ]);
      setProfile(prof);
      setProjects(projs);
      setExperiences(exps);
      setSettings(sets);
      setDashboards(dash);
      setMessages(msgs);
    } catch (err) {
      console.warn('Admin load data error:', err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-cyan-400 font-mono text-sm">
        Authenticating session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const publishedCount = projects.filter(p => p.status === 'published').length;
  const draftCount = projects.filter(p => p.status === 'draft').length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b16] flex flex-col md:flex-row text-slate-900 dark:text-slate-100">
      
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main Admin Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-h-screen">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 max-w-6xl">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                CMS Command Dashboard
              </h1>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Portfolio performance, project statuses, asset storage, and incoming inquiries.
              </p>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-mono">Total Projects</span>
                  <FolderKanban className="w-4 h-4 text-cyan-500" />
                </div>
                <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                  {projects.length}
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                  {publishedCount} Published • {draftCount} Drafts
                </span>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-mono">Published Status</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-extrabold font-mono text-emerald-500">
                  {publishedCount}
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                  Active on public portfolio
                </span>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-mono">BI Dashboards</span>
                  <Activity className="w-4 h-4 text-indigo-500" />
                </div>
                <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                  {dashboards.length}
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                  Power BI / Tableau case studies
                </span>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-mono">System Status</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-extrabold font-mono text-emerald-500">
                  Healthy
                </div>
                <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                  Production ready & secured
                </span>
              </div>

            </div>

            {/* Quick Inquiries Preview */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-500" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Contact Inquiries ({messages.length})
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Latest messages</span>
              </div>

              {messages.length > 0 ? (
                <div className="space-y-3">
                  {messages.slice(0, 5).map((m) => (
                    <div key={m.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                      <div className="flex items-center justify-between mb-1 font-mono">
                        <span className="font-bold text-slate-900 dark:text-white">{m.name} ({m.email})</span>
                        <span className="text-slate-400 text-[10px]">{new Date(m.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{m.subject}</div>
                      <p className="text-slate-600 dark:text-slate-300">{m.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-mono text-slate-400 py-4 text-center">
                  No incoming messages yet. Submissions through the public contact form will appear here.
                </p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => setActiveTab('projects')}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-cyan-500/40 text-left transition group"
              >
                <FolderKanban className="w-5 h-5 text-cyan-500 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Manage Projects</h4>
                <p className="text-xs text-slate-400 mt-1">Create or update your 15 case studies.</p>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-cyan-500/40 text-left transition group"
              >
                <TrendingUp className="w-5 h-5 text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Upload New Resume</h4>
                <p className="text-xs text-slate-400 mt-1">Replace your PDF without touching code.</p>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-cyan-500/40 text-left transition group"
              >
                <Activity className="w-5 h-5 text-indigo-500 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Update SEO Tags</h4>
                <p className="text-xs text-slate-400 mt-1">Fine-tune Google search presence.</p>
              </button>
            </div>

          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <ProjectManager projects={projects} onRefresh={loadData} />
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && profile && (
          <ProfileManager profile={profile} onRefresh={loadData} />
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <ExperienceManager experiences={experiences} onRefresh={loadData} />
        )}

        {/* Dashboards Tab */}
        {activeTab === 'dashboards' && (
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Power BI & Analytics Dashboards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dashboards.map(d => (
                <div key={d.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{d.title}</h3>
                  <p className="text-xs font-mono text-cyan-500 mt-1">{d.domain}</p>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills & Education Tab */}
        {(activeTab === 'skills' || activeTab === 'education') && (
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Credentials & Tooling Records
            </h2>
            <p className="text-xs text-slate-500">
              Skills, academic credentials, and certifications are synced with the database. To edit them directly, use the dedicated database migration or edit the initial data seeds.
            </p>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && settings && (
          <SiteSettingsManager settings={settings} onRefresh={loadData} />
        )}

      </main>
    </div>
  );
};
