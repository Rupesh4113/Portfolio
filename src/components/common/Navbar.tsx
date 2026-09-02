import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileDown, 
  Menu, 
  X, 
  Lock, 
  ChevronRight,
  Sparkles,
  Terminal
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { fireConfetti } from '../../lib/utils';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  resumeUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ resumeUrl = '/resume/Rupesh_Kumar_Pandey_Senior_Data_Scientist_Resume.pdf' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Dashboards', href: '#dashboards' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleResumeClick = () => {
    fireConfetti();
  };

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/90 dark:bg-[#080d1a]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold font-mono shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              RP
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Rupesh Pandey
              </span>
              <div className="flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                  Senior Data Scientist
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Toggles */}
          <div className="hidden sm:flex items-center space-x-3">
            <ThemeToggle />

            {/* Resume Download CTA */}
            <a
              href={resumeUrl}
              download="Rupesh_Kumar_Pandey_Senior_Data_Scientist_Resume.pdf"
              onClick={handleResumeClick}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono shadow-sm transition-all hover:shadow-cyan-500/20 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Admin Access Link */}
            <Link
              to="/admin"
              className={`p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors ${
                isAuthenticated ? 'text-emerald-400' : ''
              }`}
              title={isAuthenticated ? 'Admin Dashboard' : 'Admin Login'}
            >
              <Lock className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-[#080d1a]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono font-medium text-slate-700 dark:text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3 h-3 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <a
              href={resumeUrl}
              download="Rupesh_Kumar_Pandey_Senior_Data_Scientist_Resume.pdf"
              onClick={() => {
                handleResumeClick();
                setMobileMenuOpen(false);
              }}
              className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-mono font-semibold rounded-lg bg-cyan-600 text-white shadow"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-cyan-400"
              title="Admin CMS"
            >
              <Lock className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
