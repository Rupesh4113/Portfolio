import React from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Sparkles, 
  Briefcase,
  Terminal
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/SocialIcons';
import { Profile } from '../../types';
import { fireConfetti } from '../../lib/utils';
import { Badge } from '../common/Badge';

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const handleResumeDownload = () => {
    fireConfetti();
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <span>Senior Tech Lead @ Persistent Systems (Blue Yonder)</span>
              </div>
              <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono">
                <MapPin className="w-3 h-3 text-cyan-500" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {profile.full_name}
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-400 font-mono">
                {profile.headline}
              </h2>
            </div>

            {/* Executive Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {profile.short_bio}
            </p>

            {/* Supporting Pillar Quote */}
            <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm">
              <p className="text-xs sm:text-sm font-medium italic text-slate-700 dark:text-slate-300">
                "{profile.supporting_statement}"
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold font-mono shadow-lg shadow-cyan-600/20 transition-all hover:translate-y-[-1px] active:translate-y-[0]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.resume_url}
                download="Rupesh_Kumar_Pandey_Senior_Data_Scientist_Resume.pdf"
                onClick={handleResumeDownload}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 text-sm font-semibold font-mono shadow-sm transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl border border-slate-300/80 dark:border-slate-800 bg-transparent hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm font-medium font-mono transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>

              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-300/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-300/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Card / Visual */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl border border-slate-300/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 p-6 shadow-2xl backdrop-blur-sm">
                
                {/* Profile Image or Technical Avatar */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6 group">
                  {profile.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt={profile.full_name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 w-full h-full text-center space-y-4">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-blue-600 flex items-center justify-center text-white text-3xl font-extrabold font-mono shadow-xl shadow-cyan-500/30">
                        RP
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          Rupesh Kumar Pandey
                        </p>
                        <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">
                          Senior Data Scientist
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Corner Tech Watermark */}
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/30 shadow-sm">
                    ML • AI • BI
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">Domain</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Supply Chain & Retail
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">Core Stack</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Python • XGBoost • SQL
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Education</span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      M.DS (Deakin Univ)
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
