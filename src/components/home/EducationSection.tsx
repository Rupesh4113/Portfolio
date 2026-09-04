import React from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { Education, Certification } from '../../types';

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ 
  education, 
  certifications 
}) => {
  return (
    <section id="education" className="py-24 bg-slate-100/40 dark:bg-[#070b16]/70 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Executive Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Rigorous mathematical, computational, and strategic business foundations.
          </p>
        </div>

        {/* Education & Certifications Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Education Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Formal Academic Degrees
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition"
                >
                  <div className="mb-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                  </div>

                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-3 flex items-center space-x-1.5">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/60">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications Column (5 Cols) */}
          <div id="certifications" className="lg:col-span-5 space-y-6 scroll-mt-24">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Award className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm flex items-start space-x-3.5"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* English Language Credentials Subsection */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <Globe2 className="w-4 h-4 text-cyan-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  English Language Credentials / English Language Proficiency
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm">
                  <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">IELTS</div>
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">Overall Band: 6</div>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm">
                  <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">CELPIP</div>
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">Overall Score: 7</div>
                </div>
              </div>
            </div>

            {/* Credential Authenticity Note */}
            <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 text-xs text-slate-500 space-y-1">
              <div className="font-semibold text-slate-700 dark:text-slate-300">
                Verified Credentials
              </div>
              <p>
                All academic records and certifications are verified through official academic transcripts and issuing credential bodies.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
