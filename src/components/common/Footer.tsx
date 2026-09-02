import React from 'react';
import {
  Mail,
  FileDown,
  ArrowUp,
  MapPin,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { fireConfetti } from '../../lib/utils';

interface FooterProps {
  resumeUrl?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  resumeUrl = 'public\resume\Rupesh Kumar Pandey_Data Scientist.pdf',
  email = 'amerupesh08@gmail.com',
  linkedinUrl = 'https://www.linkedin.com/in/rupesh-kumar-pandey-9016543b/',
  githubUrl = 'https://github.com/Rupesh4113'
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#060a14] transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left space-y-1.5">
            <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              © {new Date().getFullYear()} Rupesh Kumar Pandey
            </h3>
            <p className="text-xs font-mono text-slate-600 dark:text-slate-400">
              Senior Data Scientist | Machine Learning | AI | Data Analytics
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-1 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              <span>Whitefield, Bengaluru, India</span>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/60 hover:text-cyan-500 text-slate-700 dark:text-slate-300 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/60 hover:text-cyan-500 text-slate-700 dark:text-slate-300 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/60 hover:text-cyan-500 text-slate-700 dark:text-slate-300 transition-colors"
              title="Email Rupesh Pandey"
              aria-label="Email Rupesh Pandey"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={resumeUrl}
              download="public\resume\Rupesh Kumar Pandey_Data Scientist.pdf"
              onClick={fireConfetti}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/60 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-200/70 dark:bg-slate-800/60 hover:text-cyan-500 text-slate-700 dark:text-slate-300 transition-colors"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
