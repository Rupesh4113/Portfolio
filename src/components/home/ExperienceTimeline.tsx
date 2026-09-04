import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  Plane,
  Truck
} from 'lucide-react';
import { Experience } from '../../types';
import { Badge } from '../common/Badge';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 bg-slate-100/40 dark:bg-[#070b16]/70 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            12+ years of progressive technology leadership across predictive analytics, machine learning engineering, and enterprise systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div 
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  exp.is_current 
                    ? 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50' 
                    : 'bg-slate-100 dark:bg-slate-900 border-slate-400 dark:border-slate-700'
                }`} 
              />

              {/* Date Badge on Desktop Left */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold mb-2 md:mb-0">
                {exp.period}
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.is_current && (
                        <Badge variant="cyan" size="sm">Present</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                        {exp.company}
                      </span>
                      {exp.client && (
                        <>
                          <span>•</span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            Client: {exp.client}
                          </span>
                        </>
                      )}
                      <span>•</span>
                      <div className="inline-flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
