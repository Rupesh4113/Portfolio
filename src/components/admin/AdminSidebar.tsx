import React from 'react';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Briefcase, 
  GraduationCap, 
  Award, 
  UserCircle2, 
  BarChart3, 
  Settings, 
  LogOut, 
  ExternalLink,
  Code2,
  FileText
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export type AdminTab = 
  | 'overview' 
  | 'projects' 
  | 'experience' 
  | 'skills' 
  | 'education' 
  | 'dashboards' 
  | 'profile' 
  | 'settings';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onSelectTab: (tab: AdminTab) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, onSelectTab }) => {
  const { logout, user } = useAuth();

  const menuItems: { id: AdminTab; label: string; icon: any }[] = [
    { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects & Case Studies', icon: FolderKanban },
    { id: 'experience', label: 'Career Timeline', icon: Briefcase },
    { id: 'skills', label: 'Skills & Capabilities', icon: Code2 },
    { id: 'education', label: 'Education & Certs', icon: GraduationCap },
    { id: 'dashboards', label: 'BI Dashboards', icon: BarChart3 },
    { id: 'profile', label: 'Profile & Resume', icon: UserCircle2 },
    { id: 'settings', label: 'Site Settings & SEO', icon: Settings },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/95 flex flex-col justify-between p-4 h-full min-h-screen">
      <div className="space-y-6">
        {/* Brand Bar */}
        <div className="flex items-center space-x-3 px-2 py-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold font-mono text-sm shadow-md shadow-cyan-500/20">
            RP
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white leading-none">
              Admin CMS
            </h2>
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
              Senior DS Portfolio
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom User Actions */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-slate-500 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
        >
          <span className="flex items-center space-x-2">
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Live Site</span>
          </span>
        </Link>

        <div className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-[11px] font-mono text-slate-400 truncate">
          Logged in: <strong className="text-slate-700 dark:text-slate-200 block truncate">{user?.email || 'Admin'}</strong>
        </div>

        <button
          type="button"
          onClick={logout}
          className="w-full flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-mono text-red-500 hover:bg-red-500/10 transition"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
