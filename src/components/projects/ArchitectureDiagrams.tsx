import React from 'react';
import { 
  Database, 
  Cpu, 
  TrendingUp, 
  LineChart, 
  Server, 
  Layers, 
  ShieldCheck, 
  Cloud, 
  Activity, 
  Truck, 
  Store, 
  Users, 
  ArrowRight,
  MessageSquare,
  Sparkles,
  Bot
} from 'lucide-react';
import { DiagramType } from '../../types';

interface DiagramProps {
  type: DiagramType;
  title?: string;
}

export const ArchitectureDiagram: React.FC<DiagramProps> = ({ type, title }) => {
  switch (type) {
    case 'demand_forecasting':
      return <DemandForecastingDiagram title={title} />;
    case 'pricing_elasticity':
      return <PricingElasticityDiagram title={title} />;
    case 'sagemaker_mlops':
      return <SageMakerMLOpsDiagram title={title} />;
    case 'supply_chain':
      return <SupplyChainDiagram title={title} />;
    case 'transportation_lane':
      return <TransportationLaneDiagram title={title} />;
    case 'nlp_pipeline':
      return <NLPPipelineDiagram title={title} />;
    default:
      return <GenericMLPipelineDiagram title={title} />;
  }
};

// 1. Demand Forecasting Architecture
const DemandForecastingDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    {
      icon: Database,
      step: '01',
      title: 'Historical Sales',
      desc: '3+ Years POS data, transactions, regional calendars & stockout logs',
      accent: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20'
    },
    {
      icon: Layers,
      step: '02',
      title: 'Feature Engineering',
      desc: 'Lag attributes (t-1 to t-28), rolling window statistics & promo depth',
      accent: 'border-blue-500/40 text-blue-400 bg-blue-950/20'
    },
    {
      icon: Cpu,
      step: '03',
      title: 'Forecasting Model',
      desc: 'XGBoost + Prophet hybrid with hierarchical MinT reconciliation',
      accent: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/20'
    },
    {
      icon: TrendingUp,
      step: '04',
      title: 'Future Demand',
      desc: '1-28 day unit forecasts, safety stock buffers & replenishment queues',
      accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
    }
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            Enterprise Architecture: Demand Forecasting Pipeline
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Production Ready
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="relative group">
              <div className={`p-4 rounded-lg border ${s.accent} transition-all duration-200 group-hover:scale-[1.02]`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-md bg-slate-800/80">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold opacity-60">
                    {s.step}
                  </span>
                </div>
                <h5 className="text-sm font-semibold text-slate-100 mb-1">{s.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 2. Pricing Optimization Architecture
const PricingElasticityDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const nodes = [
    { name: 'Historical Price', desc: 'Promotional depths, competitor scrapers, catalog base prices', icon: Database, color: 'text-amber-400' },
    { name: 'Elasticity Model', desc: 'Log-log econometrics & non-linear cross-price substitution', icon: LineChart, color: 'text-cyan-400' },
    { name: 'Scenario Simulation', desc: 'Monte Carlo what-if curves across promotional events', icon: Cpu, color: 'text-indigo-400' },
    { name: 'Margin Optimization', desc: 'Optimal price corridor maximizing gross margin & revenue', icon: TrendingUp, color: 'text-emerald-400' }
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-400 font-semibold">
            Price Elasticity & Margin Optimization Architecture
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Econometric ML
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <div key={i} className="p-4 rounded-lg border border-slate-800 bg-slate-800/40 hover:border-slate-700 transition">
              <div className="flex items-center space-x-2 mb-2">
                <Icon className={`w-4 h-4 ${n.color}`} />
                <span className="text-xs font-mono text-slate-400">Phase 0{i + 1}</span>
              </div>
              <h5 className="text-sm font-semibold text-slate-100 mb-1">{n.name}</h5>
              <p className="text-xs text-slate-400">{n.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 3. AWS SageMaker MLOps Architecture
const SageMakerMLOpsDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const stages = [
    { title: 'Data Ingestion', tag: 'Amazon S3 & Glue', icon: Database, color: 'border-orange-500/30 text-orange-400' },
    { title: 'Feature Store', tag: 'SageMaker Offline/Online', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Training & HPO', tag: 'SageMaker Pipelines', icon: Cpu, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Model Registry', tag: 'Versioned & Approved', icon: ShieldCheck, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Inference Endpoint', tag: 'Sub-50ms REST API', icon: Server, color: 'border-emerald-500/30 text-emerald-400' },
    { title: 'Drift Monitoring', tag: 'SageMaker Model Monitor', icon: Activity, color: 'border-cyan-500/30 text-cyan-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Cloud className="w-4 h-4 text-orange-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-orange-400 font-semibold">
            AWS SageMaker Production MLOps Topology
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          CI/CD Automation
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {stages.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className={`p-3 rounded-lg border ${st.color} bg-slate-950/40 text-center flex flex-col items-center justify-between min-h-[120px]`}>
              <Icon className="w-5 h-5 mb-2" />
              <div>
                <h5 className="text-xs font-semibold text-slate-200">{st.title}</h5>
                <p className="text-[10px] text-slate-400 mt-1">{st.tag}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 4. Supply Chain Distribution Architecture
const SupplyChainDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { name: 'Suppliers', sub: 'Inbound Raw Goods', icon: BuildingIcon, color: 'text-amber-400' },
    { name: 'Central Warehouses', sub: 'Multi-Echelon Buffer', icon: Database, color: 'text-cyan-400' },
    { name: 'Regional DCs', sub: 'Cross-Docking & Clustering', icon: Layers, color: 'text-blue-400' },
    { name: 'Retail Stores', sub: 'Point-of-Sale Outlets', icon: Store, color: 'text-indigo-400' },
    { name: 'End Customers', sub: 'On-Time Fulfillment (OTIF)', icon: Users, color: 'text-emerald-400' },
  ];

  function BuildingIcon(props: any) {
    return <Server {...props} />;
  }

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Truck className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            Multi-Tier Supply Chain & Logistics Network Flow
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Network Optimization
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className="p-3 rounded-lg border border-slate-800 bg-slate-800/50 text-center flex flex-col items-center">
              <Icon className={`w-6 h-6 mb-2 ${st.color}`} />
              <h5 className="text-xs font-semibold text-slate-200">{st.name}</h5>
              <p className="text-[10px] text-slate-400 mt-1">{st.sub}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 5. Transportation Lane Network Diagram
const TransportationLaneDiagram: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <Truck className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            Blue Yonder TMS: Dynamic Transit-Time Prediction Architecture
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          94.6% Accuracy
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
          <div className="text-cyan-400 font-mono font-semibold mb-2">1. Ingestion & Lane Graph</div>
          <ul className="space-y-1 text-slate-300">
            <li>• Telematics GPS status pings</li>
            <li>• Carrier EDI 214 transit events</li>
            <li>• Historical dwell times by terminal hub</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
          <div className="text-indigo-400 font-mono font-semibold mb-2">2. ML Inference Engine</div>
          <ul className="space-y-1 text-slate-300">
            <li>• XGBoost + LightGBM Regressors</li>
            <li>• Real-time lane weather severity flags</li>
            <li>• Carrier dynamic reliability weighting</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
          <div className="text-emerald-400 font-mono font-semibold mb-2">3. Enterprise Integration</div>
          <ul className="space-y-1 text-slate-300">
            <li>• Blue Yonder TM Configuration</li>
            <li>• TMIC & Business Analytics feeds</li>
            <li>• Proactive delay rescheduling triggers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 6. NLP Pipeline Diagram
const NLPPipelineDiagram: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-4 h-4 text-purple-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-purple-400 font-semibold">
            Social Media Sentiment NLP Pipeline (VADER + LSTM)
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          87% Accuracy
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-center text-xs">
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800">
          <p className="font-semibold text-slate-200">Twitter Feed</p>
          <p className="text-[10px] text-slate-400 mt-1">Streaming API</p>
        </div>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800">
          <p className="font-semibold text-slate-200">Cleaning</p>
          <p className="text-[10px] text-slate-400 mt-1">Regex & Lemmatize</p>
        </div>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800">
          <p className="font-semibold text-slate-200">Embedding</p>
          <p className="text-[10px] text-slate-400 mt-1">GloVe / Word2Vec</p>
        </div>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800">
          <p className="font-semibold text-slate-200">VADER & LSTM</p>
          <p className="text-[10px] text-slate-400 mt-1">Hybrid Model</p>
        </div>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800">
          <p className="font-semibold text-slate-200">Classification</p>
          <p className="text-[10px] text-slate-400 mt-1">Pos / Neu / Neg</p>
        </div>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800">
          <p className="font-semibold text-slate-200">Dashboard</p>
          <p className="text-[10px] text-slate-400 mt-1">Real-time alerts</p>
        </div>
      </div>
    </div>
  );
};

// Fallback Generic ML Pipeline
const GenericMLPipelineDiagram: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-5 backdrop-blur">
      <div className="text-xs font-mono text-cyan-400 mb-3 font-semibold uppercase">
        {title || 'Machine Learning Systems Architecture'}
      </div>
      <div className="grid grid-cols-4 gap-2 text-center text-xs">
        <div className="p-3 bg-slate-950/40 rounded border border-slate-800">Data Sourcing</div>
        <div className="p-3 bg-slate-950/40 rounded border border-slate-800">Feature Store</div>
        <div className="p-3 bg-slate-950/40 rounded border border-slate-800">Model Pipeline</div>
        <div className="p-3 bg-slate-950/40 rounded border border-slate-800">Business KPI Impact</div>
      </div>
    </div>
  );
};
