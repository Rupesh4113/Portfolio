import React, { useState } from 'react';
import { 
  Radio, 
  UserMinus, 
  TrendingUp, 
  Zap, 
  Users, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Cpu,
  Info
} from 'lucide-react';
import { Project } from '../../types';

interface TelecomAnalyticsSectionProps {
  onOpenCaseStudy?: () => void;
}

export const TelecomAnalyticsSection: React.FC<TelecomAnalyticsSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeUseCase, setActiveUseCase] = useState<number>(0);

  const telecomUseCases = [
    {
      title: 'Customer Churn Prediction',
      icon: UserMinus,
      tag: 'Retention Early Warning',
      metricPlaceholder: '[Add Churn AUC]',
      description: 'Supervised classification to detect subscribers displaying early indicators of defection 30 to 60 days prior to contract expiration.',
      features: ['Usage Velocity Drop (Voice/Data)', 'Customer Care Friction Index', 'Billing Delinquency Gaps', 'Contract Expiry Proximity'],
      businessAction: 'Triggers proactive outbound VIP concierge outreach, customized tariff adjustments, and targeted retention incentives.'
    },
    {
      title: 'Customer Lifetime Value (CLV)',
      icon: TrendingUp,
      tag: 'Capital Allocation',
      metricPlaceholder: '[Add CLV Lift]',
      description: 'Multi-period predictive revenue modeling forecasting subscriber tenure profitability to optimize acquisition expenditure and customer care tiering.',
      features: ['Historical Recharge Frequency', 'Monthly ARPU Trajectory', 'Add-on Pack Adoption', 'Family / Enterprise Plan Multipliers'],
      businessAction: 'Aligns customer acquisition cost (CAC) ceilings and reserves premium support queues for top-quintile value accounts.'
    },
    {
      title: 'Recharge Propensity Modeling',
      icon: Zap,
      tag: 'Timing Optimization',
      metricPlaceholder: '[Add Propensity Score]',
      description: 'Time-to-event survival modeling and binary propensity classification predicting exactly when prepaid users are likely to exhaust balance.',
      features: ['Daily Burn Rate Variance', 'Days Since Last Top-Up', 'Promotional Pack Expiry Cadence', 'Mobile Wallet Balance History'],
      businessAction: 'Automates hyper-personalized push notifications and bonus recharge bundles 48 hours prior to predicted runout.'
    },
    {
      title: 'Behavioral Customer Segmentation',
      icon: Users,
      tag: 'Clustering & Personas',
      metricPlaceholder: '[Add Cluster Stability]',
      description: 'Unsupervised clustering grouping millions of subscribers into granular micro-segments based on behavioral consumption and mobility.',
      features: ['Data-Heavy vs Voice-Centric', 'Night Owl / Commuter Activity', 'International Roaming Cadence', 'Device Capability Tier'],
      businessAction: 'Replaces generic blast campaigns with tailored value-added services (VAS), streaming bundles, and device upgrade promotions.'
    },
    {
      title: 'Plan Recommendation Engine',
      icon: Sparkles,
      tag: 'Next-Best-Offer',
      metricPlaceholder: '[Add Conversion Rate]',
      description: 'Recommendation algorithms matching subscriber empirical data consumption limits with optimal 5G broadband and postpaid upgrade tiers.',
      features: ['Data Quota Exhaustion Velocity', 'Peak-Hour Bandwidth Demand', 'Over-the-Top (OTT) Media Usage', 'Price Elasticity Score'],
      businessAction: 'Presents intelligent checkout recommendations inside the self-service subscriber app to elevate ARPU.'
    },
    {
      title: 'Campaign & Uplift Optimization',
      icon: Target,
      tag: 'Marketing ROI',
      metricPlaceholder: '[Add Campaign ROI]',
      description: 'Uplift and two-model propensity scoring distinguishing persuadable subscribers from sure things or lost causes to maximize campaign ROI.',
      features: ['Historical Campaign Click-Through', 'Channel Engagement Affinity', 'Offer Discount Sensitivity', 'Churn Risk Level'],
      businessAction: 'Concentrates marketing promotional spend exclusively on persuadable customers, cutting wasted ad expenses.'
    }
  ];

  const algorithms = [
    'Logistic Regression',
    'Decision Trees',
    'Random Forest',
    'Support Vector Machines (SVM)',
    'K-Nearest Neighbors (KNN)',
    'Naive Bayes',
    'Linear Discriminant Analysis (LDA)'
  ];

  return (
    <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1226] to-slate-900 border border-cyan-500/30 text-white shadow-xl relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 max-w-3xl space-y-3 mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
          <Radio className="w-3.5 h-3.5" />
          <span>Dedicated Industry Focus</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Customer Analytics & Churn-Oriented Modeling
        </h3>
        
        <p className="text-sm sm:text-base text-cyan-200/80 font-mono">
          Telecom Transferable Skills: Machine Learning Classification & Behavioral Customer Science
        </p>

        {/* Explicit Positioning Statement Required by Prompt */}
        <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
          <p>
            <strong>Transferable Positioning Statement:</strong> Hands-on expertise in multi-year transaction analytics, RFM customer segmentation, time-series forecasting, and supervised classification directly transfers to telecommunications industry use cases — including subscriber churn mitigation, customer lifetime value (CLV) optimization, recharge timing propensity, and plan recommendation engines.
          </p>
        </div>
      </div>

      {/* Classification Algorithms Chips */}
      <div className="relative z-10 mb-8 pb-6 border-b border-slate-800">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
          Evaluated Classification Algorithms:
        </span>
        <div className="flex flex-wrap gap-2">
          {algorithms.map((algo, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700 text-cyan-300 font-medium"
            >
              {algo}
            </span>
          ))}
        </div>
      </div>

      {/* 6 Telecom Use Cases Interactive Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left: Interactive Use Case Tabs (5 Cols) */}
        <div className="md:col-span-5 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
            Select Telecom Use Case:
          </span>
          {telecomUseCases.map((uc, idx) => {
            const Icon = uc.icon;
            const isSelected = activeUseCase === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveUseCase(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-500/60 text-white shadow-md'
                    : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500 text-slate-900' : 'bg-slate-800 text-cyan-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold block">{uc.title}</span>
                    <span className="text-[10px] font-mono text-slate-400">{uc.tag}</span>
                  </div>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-cyan-400' : 'opacity-0'}`} />
              </button>
            );
          })}
        </div>

        {/* Right: Active Use Case Deep Dive Card (7 Cols) */}
        <div className="md:col-span-7 p-6 sm:p-7 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {telecomUseCases[activeUseCase].tag}
              </span>
              <h4 className="text-xl font-bold text-white mt-2">
                {telecomUseCases[activeUseCase].title}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-mono block uppercase">Target Metric</span>
              <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-1 rounded bg-slate-900 border border-slate-700 inline-block mt-0.5">
                {telecomUseCases[activeUseCase].metricPlaceholder}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {telecomUseCases[activeUseCase].description}
          </p>

          <div>
            <span className="text-xs font-mono text-cyan-300 block mb-2 font-semibold">
              Key Predictive Signals & Features:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {telecomUseCases[activeUseCase].features.map((feat, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <span className="text-[11px] font-mono text-cyan-300 font-semibold block mb-1">
              Automated Business Action:
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {telecomUseCases[activeUseCase].businessAction}
            </p>
          </div>

          {onOpenCaseStudy && (
            <button
              onClick={onOpenCaseStudy}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-mono font-bold text-xs flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Explore Telecom Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
