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
  Bot,
  ShoppingCart,
  FileText,
  PhoneCall,
  Wrench,
  Target,
  Zap,
  HeartPulse,
  Brain,
  ShieldAlert,
  BarChart2,
  CheckCircle2,
  Sliders,
  Radio,
  Share2
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
    case 'ecommerce_funnel':
      return <ECommerceFunnelDiagram title={title} />;
    case 'insurance_analytics':
      return <InsuranceAnalyticsDiagram title={title} />;
    case 'telecom_churn':
      return <TelecomChurnDiagram title={title} />;
    case 'predictive_maintenance':
      return <PredictiveMaintenanceDiagram title={title} />;
    case 'recommendation_engine':
      return <RecommendationEngineDiagram title={title} />;
    case 'uplift_causal_ml':
      return <UpliftCausalMLDiagram title={title} />;
    case 'customer_segmentation':
      return <CustomerSegmentationDiagram title={title} />;
    case 'marketing_campaign':
      return <MarketingCampaignDiagram title={title} />;
    case 'iot_sensor_pipeline':
      return <IoTSensorPipelineDiagram title={title} />;
    case 'clinical_risk_pipeline':
      return <ClinicalRiskPipelineDiagram title={title} />;
    case 'deep_learning_pipeline':
      return <DeepLearningPipelineDiagram title={title} />;
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
    { name: 'Suppliers', sub: 'Inbound Raw Goods', icon: Server, color: 'text-amber-400' },
    { name: 'Central Warehouses', sub: 'Multi-Echelon Buffer', icon: Database, color: 'text-cyan-400' },
    { name: 'Regional DCs', sub: 'Cross-Docking & Clustering', icon: Layers, color: 'text-blue-400' },
    { name: 'Retail Stores', sub: 'Point-of-Sale Outlets', icon: Store, color: 'text-indigo-400' },
    { name: 'End Customers', sub: 'On-Time Fulfillment (OTIF)', icon: Users, color: 'text-emerald-400' },
  ];

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

// 7. E-Commerce Funnel & Multi-Touch Attribution Architecture
const ECommerceFunnelDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Storefront Clickstream', tag: 'Web & Mobile App Events', icon: ShoppingCart, color: 'border-cyan-500/30 text-cyan-400' },
    { title: 'Cart & Session Stitching', tag: 'Session State & Cookie Hash', icon: Database, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Conversion ML Model', tag: 'Drop-off & Churn Propensity', icon: Cpu, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Dynamic Attribution', tag: 'Markov Chains & Shapley', icon: LineChart, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Automated Recovery', tag: 'Cart Recovery Email Triggers', icon: Zap, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            E-Commerce Revenue Analytics & Attribution Pipeline
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Event-Driven ML
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 8. Insurance Analytics & Risk Underwriting Architecture
const InsuranceAnalyticsDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Claims & Policy Ingestion', tag: 'FNOL & Policyholder Records', icon: FileText, color: 'border-amber-500/30 text-amber-400' },
    { title: 'Actuarial Feature Store', tag: 'Loss Ratios & Exposure Base', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Severity & Frequency ML', tag: 'Tweedie GLM & XGBoost', icon: ShieldAlert, color: 'border-rose-500/30 text-rose-400' },
    { title: 'Underwriting Risk Scoring', tag: 'Automated Cohort Tiers', icon: ShieldCheck, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Tableau Executive BI', tag: 'LOD KPIs & Real-Time Monitoring', icon: BarChart2, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-rose-400 font-semibold">
            Insurance Claims Risk Modeling & Tableau BI Architecture
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Actuarial Analytics
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 9. Telecom Churn & Customer Analytics Architecture
const TelecomChurnDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'CDR & Network Telemetry', tag: 'Call Records, Usage & Bill History', icon: Radio, color: 'border-cyan-500/30 text-cyan-400' },
    { title: 'Customer Health Scoring', tag: 'Tenure, Complaints & Bandwidth', icon: Activity, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Churn Prediction Engine', tag: 'Random Forest & Gradient Boosting', icon: Cpu, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Uplift & Elasticity Matrix', tag: 'Proactive Retention Targeting', icon: TrendingUp, color: 'border-emerald-500/30 text-emerald-400' },
    { title: 'Automated Save Campaigns', tag: 'CRM Personalized Offer Dispatch', icon: PhoneCall, color: 'border-amber-500/30 text-amber-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <PhoneCall className="w-4 h-4 text-purple-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-purple-400 font-semibold">
            Telecom Real-Time Customer Churn & Retention Architecture
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Transferable Telco ML
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 10. Fleet Failure Prediction & Predictive Maintenance Architecture
const PredictiveMaintenanceDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'IoT Telemetry Ingestion', tag: 'Engine RPM, Temp, Vibration sensors', icon: Activity, color: 'border-amber-500/30 text-amber-400' },
    { title: 'Time-Domain Signal Prep', tag: 'FFT & Rolling Kurtosis/Skewness', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Remaining Useful Life (RUL)', tag: 'LSTM & Survival Analysis Models', icon: Cpu, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Early Warning Thresholds', tag: 'Anomaly Scoring & Degradation Curves', icon: ShieldAlert, color: 'border-rose-500/30 text-rose-400' },
    { title: 'Maintenance Dispatch API', tag: 'Automated Depot Work Orders', icon: Wrench, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Wrench className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-amber-400 font-semibold">
            Predictive Maintenance & Fleet RUL Inference Topology
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          IoT Telematics ML
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 11. Personalized Product Recommendation Engine Architecture
const RecommendationEngineDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'User Interaction Logs', tag: 'Impressions, Clicks, Add-to-Cart', icon: Users, color: 'border-cyan-500/30 text-cyan-400' },
    { title: 'Two-Tower Embeddings', tag: 'User & Item Latent Vectors (FAISS)', icon: Brain, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Candidate Retrieval', tag: 'Top-K Approximate Nearest Neighbor', icon: Database, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Contextual Reranking', tag: 'LightGBM Pointwise/Pairwise Ranker', icon: Cpu, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Real-Time Delivery', tag: 'Sub-20ms Personalized Feed API', icon: Zap, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            Two-Tower Personalized Recommendation & Ranking Engine
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Real-Time RecSys
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 12. Promotion Uplift Modeling & Causal ML Architecture
const UpliftCausalMLDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Randomized Treatment Data', tag: 'Promoted vs Holdout Control Logs', icon: Sliders, color: 'border-amber-500/30 text-amber-400' },
    { title: 'Confounder Balancing', tag: 'Propensity Score Matching (IPW)', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Two-Model / X-Learner', tag: 'Heterogeneous Treatment Effects (HTE)', icon: Cpu, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Persuadables Segmentation', tag: 'Qini Curve & Incremental Lift', icon: Target, color: 'border-emerald-500/30 text-emerald-400' },
    { title: 'Optimal Budget Allocator', tag: 'Max ROI Campaign Dispatch', icon: TrendingUp, color: 'border-cyan-500/30 text-cyan-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-400 font-semibold">
            Causal ML & Uplift Optimization Topology (X-Learner)
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Causal Inference
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 13. Customer Segmentation & Behavioral Lifetime Value Architecture
const CustomerSegmentationDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Transaction Records', tag: '3+ Years Omnichannel Purchases', icon: Database, color: 'border-cyan-500/30 text-cyan-400' },
    { title: 'RFM Feature Aggregation', tag: 'Recency, Frequency, Monetary Scores', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Unsupervised Clustering', tag: 'K-Means & DBSCAN with PCA Reduction', icon: Brain, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'BG/NBD & Gamma-Gamma', tag: 'Customer Lifetime Value Prediction', icon: TrendingUp, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Cohort CRM Activation', tag: 'Automated Tier Segmentation Sync', icon: Users, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            Unsupervised RFM Clustering & CLV Prediction Pipeline
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Customer Intelligence
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 14. Marketing Campaign Performance & ROI Prediction Architecture
const MarketingCampaignDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Ad Spend & Channel Data', tag: 'Meta, Google, TV & Display Impressions', icon: BarChart2, color: 'border-amber-500/30 text-amber-400' },
    { title: 'Adstock & Diminishing Return', tag: 'Half-life decay & Hill curve saturation', icon: Layers, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Marketing Mix Model (MMM)', tag: 'Bayesian Ridge & Regression Estimation', icon: Cpu, color: 'border-purple-500/30 text-purple-400' },
    { title: 'ROAS Optimization', tag: 'Channel-level marginal ROAS curves', icon: LineChart, color: 'border-emerald-500/30 text-emerald-400' },
    { title: 'Executive Budget Allocator', tag: 'Quarterly budget rebalancing portal', icon: Target, color: 'border-cyan-500/30 text-cyan-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-amber-400 font-semibold">
            Marketing Mix Modeling (MMM) & ROI Attribution Architecture
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Econometric Attribution
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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

// 15. IoT Sensor Imputation & Preprocessing Pipeline
const IoTSensorPipelineDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Edge Telemetry Streaming', tag: '10,000+ Multi-Axis Sensor Records', icon: Activity, color: 'border-cyan-500/30 text-cyan-400' },
    { title: 'Missing-Value Handling', tag: 'KNN & Iterative MICE Imputation', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Robust Outlier Rejection', tag: 'Isolation Forest & IQR Clipping', icon: ShieldCheck, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Z-Score Normalization', tag: 'Parametric scaling & zero-leakage fit', icon: Cpu, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            Industrial Sensor Imputation & Feature Engineering Topology
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          ETL Preprocessing
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className={`p-4 rounded-lg border ${st.color} bg-slate-950/40 text-center flex flex-col items-center justify-between min-h-[130px]`}>
              <Icon className="w-6 h-6 mb-2" />
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

// 16. Clinical Risk & Survival Analysis Pipeline
const ClinicalRiskPipelineDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Clinical Cohort Records', tag: 'Biomarkers, Bilirubin & Patient History', icon: HeartPulse, color: 'border-rose-500/30 text-rose-400' },
    { title: 'Survival Time Censoring', tag: 'Kaplan-Meier Estimator & Hazard Rates', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Cox Proportional Hazards', tag: 'Multivariate Survival ML & Random Forests', icon: Cpu, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Clinical Risk Stratification', tag: 'Prognostic Concordance Index (C-Index)', icon: ShieldCheck, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <HeartPulse className="w-4 h-4 text-rose-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-rose-400 font-semibold">
            Clinical Survival Analysis & Cox Proportional Hazards Topology
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Biostatistical ML
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className={`p-4 rounded-lg border ${st.color} bg-slate-950/40 text-center flex flex-col items-center justify-between min-h-[130px]`}>
              <Icon className="w-6 h-6 mb-2" />
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

// 17. Deep Learning & Hyperparameter Grid Search Architecture
const DeepLearningPipelineDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Input Matrix Standardization', tag: '28x28 Grayscale & Data Augmentation', icon: Database, color: 'border-cyan-500/30 text-cyan-400' },
    { title: 'Architecture Grid Search', tag: '20 Neural Net Topologies Evaluated', icon: Brain, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Batch Norm & Dropout (0.2)', tag: 'Overfitting Regularization & Adam Optimizer', icon: ShieldCheck, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Evaluation & Loss Curves', tag: 'Cross-Entropy Loss & Accuracy Convergence', icon: LineChart, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-indigo-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-indigo-400 font-semibold">
            Deep Neural Network Architecture & Hyperparameter Search
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Deep Learning
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className={`p-4 rounded-lg border ${st.color} bg-slate-950/40 text-center flex flex-col items-center justify-between min-h-[130px]`}>
              <Icon className="w-6 h-6 mb-2" />
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

// Fallback Generic ML Pipeline (Enriched)
const GenericMLPipelineDiagram: React.FC<{ title?: string }> = ({ title }) => {
  const steps = [
    { title: 'Data Ingestion & Cleaning', tag: 'SQL, CSV, Telemetry & ETL Pipelines', icon: Database, color: 'border-cyan-500/30 text-cyan-400' },
    { title: 'Feature Store & Scaling', tag: 'Domain Metrics, Encodings & Normalization', icon: Layers, color: 'border-blue-500/30 text-blue-400' },
    { title: 'Supervised ML Engine', tag: 'XGBoost, Random Forest & Ensembles', icon: Cpu, color: 'border-indigo-500/30 text-indigo-400' },
    { title: 'Model Evaluation', tag: 'K-Fold CV, Precision, Recall & F1-Score', icon: ShieldCheck, color: 'border-purple-500/30 text-purple-400' },
    { title: 'Decision & KPI Impact', tag: 'Operational Dashboards & Business Automation', icon: TrendingUp, color: 'border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-900/90 p-6 backdrop-blur shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
            {title || 'Production Machine Learning Pipeline Architecture'}
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          End-to-End System
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((st, i) => {
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
