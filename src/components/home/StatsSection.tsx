import React from 'react';
import { MetricCounter } from '../common/MetricCounter';
import { 
  Calendar, 
  Brain, 
  GraduationCap, 
  Briefcase 
} from 'lucide-react';

interface StatsSectionProps {
  yearsTotal: number;
  yearsDS: number;
  educationHighlight: string;
  enterpriseHighlight: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  yearsTotal = 11,
  yearsDS = 4,
  educationHighlight = 'Data Science — Deakin University',
  enterpriseHighlight = 'Blue Yonder / Transportation & Logistics'
}) => {
  const stats = [
    {
      icon: Calendar,
      number: yearsTotal,
      suffix: '+ Years',
      label: 'IT & Technology Experience',
      subtext: 'Engineering & documentation leadership',
      accent: 'text-cyan-500 dark:text-cyan-400'
    },
    {
      icon: Brain,
      number: yearsDS,
      suffix: '+ Years',
      label: 'Data Science & ML Experience',
      subtext: 'Predictive modeling & applied AI',
      accent: 'text-emerald-500 dark:text-emerald-400'
    },
    {
      icon: GraduationCap,
      isText: true,
      textValue: "Master's Degree",
      label: educationHighlight,
      subtext: 'Advanced statistical & AI research',
      accent: 'text-indigo-500 dark:text-indigo-400'
    },
    {
      icon: Briefcase,
      isText: true,
      textValue: 'Enterprise Experience',
      label: enterpriseHighlight,
      subtext: 'Persistent Systems / Airbus',
      accent: 'text-amber-500 dark:text-amber-400'
    }
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                    <Icon className={`w-5 h-5 ${stat.accent}`} />
                  </div>
                </div>

                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.accent} mb-1 font-mono`}>
                  {stat.isText ? (
                    stat.textValue
                  ) : (
                    <MetricCounter end={stat.number!} suffix={stat.suffix} />
                  )}
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
