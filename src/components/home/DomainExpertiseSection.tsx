import React from 'react';
import { 
  ShoppingBag, 
  Boxes, 
  Car, 
  Globe, 
  Radio, 
  ShieldCheck, 
  Coins, 
  Truck,
  ArrowRight
} from 'lucide-react';

export const DomainExpertiseSection: React.FC = () => {
  const domains = [
    {
      title: 'Retail & FMCG',
      icon: ShoppingBag,
      color: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
      description: 'Demand forecasting, shelf replenishment schedules, SKU velocity tracking, and point-of-sale customer basket optimization.',
      highlights: ['SKU Demand Volatility', 'Promotional Lift', 'POS Transaction Analytics']
    },
    {
      title: 'Supply Chain & Logistics',
      icon: Boxes,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      description: 'Warehouse network clustering, inventory imbalance mitigation, safety stock sizing, and supplier lead-time variance analysis.',
      highlights: ['Inventory Imbalance', 'Stockout Risk Scoring', 'Buffer Stock Sizing']
    },
    {
      title: 'Automotive & Mobility',
      icon: Car,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      description: 'Quarterly sales performance diagnosis, vehicle configuration sentiment, post-delivery CSAT feedback, and fulfillment lead times.',
      highlights: ['Sales Trend Diagnosis', 'CSAT Delay Correlation', 'Vehicle Class Mix']
    },
    {
      title: 'E-commerce & Digital',
      icon: Globe,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      description: 'Multi-territory revenue decomposition, brand portfolio concentration, average order value (AOV) dynamics, and regional expansion.',
      highlights: ['Regional Concentration', 'Brand Margin Matrix', 'Category Velocity']
    },
    {
      title: 'Telecom Transferable',
      icon: Radio,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      description: 'Applying proven customer analytics and supervised classification to subscriber churn prediction, CLV, recharge timing, and plan upgrades.',
      highlights: ['Churn Early Warning', 'Recharge Propensity', 'Subscriber Segmentation']
    },
    {
      title: 'Insurance & Risk',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      description: 'Portfolio loss ratio monitoring, claims frequency and severity distributions, automated triage rules, and risk cohort segmentation.',
      highlights: ['Loss Ratio Optimization', 'Claims Frequency vs Severity', 'Actuarial KPIs']
    },
    {
      title: 'Transportation & Fleet',
      icon: Truck,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
      description: 'Multi-modal transit-time prediction, lane congestion tracking, carrier SLA compliance, and detention penalty avoidance.',
      highlights: ['ETA Predictive Modeling', 'Carrier Reliability Index', 'Dwell-Time Optimization']
    },
    {
      title: 'Finance & Analytics',
      icon: Coins,
      color: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
      description: 'Executive KPI governance, dimensional margin analysis, financial forecasting, and automated management decision reporting.',
      highlights: ['Variance Decomposition', 'Executive Scorecards', 'Pareto Concentration']
    }
  ];

  return (
    <section id="domains" className="py-20 relative scroll-mt-12 bg-slate-50 dark:bg-[#070c18] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <span>Industry Applicability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Domain Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Proven quantitative capabilities tailored to enterprise commercial environments, bridging raw operational data with domain-specific decision frameworks.
          </p>
        </div>

        {/* 8 Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${dom.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {dom.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {dom.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 space-y-1.5">
                  {dom.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
