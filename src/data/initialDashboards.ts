import { DashboardItem } from '../types';

export const initialDashboards: DashboardItem[] = [
  {
    id: 'dash-1',
    title: 'Executive Demand Forecast & Replenishment Dashboard',
    domain: 'Retail & CPG',
    tools: ['Power BI', 'DAX', 'SQL Server', 'Python ETL'],
    kpis: [
      { label: 'Forecast Accuracy (MAPE)', value: '92.4%', change: '+6.1% vs baseline' },
      { label: 'Stockout Reduction', value: '23.8%', change: '-$420K lost sales' },
      { label: 'Active SKUs Monitored', value: '4,250', change: 'Across 12 regions' }
    ],
    business_purpose: 'Enables regional supply planners and commercial directors to track forecasted vs actual demand at SKU and channel granularity, pinpoint stockout risks 14 days in advance, and automate PO trigger recommendations.',
    description: 'Interactive multi-page Power BI dashboard featuring dynamic drill-through from nationwide territory down to SKU-store tier, scenario what-if sliders for promotional uplift, and automated variance analysis alerts.',
    screenshot_url: '/images/dashboards/demand_forecast_dashboard.svg',
    color_theme: 'cyan'
  },
  {
    id: 'dash-2',
    title: 'Dynamic Pricing & Promotional Elasticity Control Tower',
    domain: 'CPG & E-Commerce',
    tools: ['Tableau', 'Python', 'PostgreSQL', 'Tableau Prep'],
    kpis: [
      { label: 'Margin Expansion', value: '+3.2%', change: 'Across premium SKUs' },
      { label: 'Price Elasticity Tested', value: '-1.42', change: 'Median across categories' },
      { label: 'Cannibalization Rate', value: '4.1%', change: 'Controlled within bounds' }
    ],
    business_purpose: 'Empowers pricing managers and category heads to simulate discount variations, evaluate cross-product brand cannibalization, and identify margin-maximizing price corridors.',
    description: 'Visualizes price-demand response curves, competitor price parity indices, and simulated revenue impact curves across seasonal calendar events with real-time elasticity heatmaps.',
    screenshot_url: '/images/dashboards/pricing_optimization_dashboard.svg',
    color_theme: 'emerald'
  },
  {
    id: 'dash-3',
    title: 'Multi-Echelon Inventory & Working Capital Dashboard',
    domain: 'Supply Chain & Logistics',
    tools: ['Power BI', 'Power Query', 'Azure SQL', 'Python'],
    kpis: [
      { label: 'Holding Cost Reduction', value: '14.5%', change: '-$1.1M working capital' },
      { label: 'Safety Stock Service Level', value: '98.6%', change: 'Met SLA target' },
      { label: 'Inventory Turnover', value: '8.4x', change: '+1.2x YoY' }
    ],
    business_purpose: 'Monitors inventory velocity, dead stock accumulation, and dynamic safety stock thresholds across central warehouses, regional distribution centers, and fulfillment hubs.',
    description: 'Comprehensive inventory health overview highlighting aging stock cohorts, ABC-XYZ item classification matrix, and reorder point lead-time variability metrics.',
    screenshot_url: '/images/dashboards/inventory_dashboard.svg',
    color_theme: 'indigo'
  },
  {
    id: 'dash-4',
    title: 'Customer Cohort, Churn & Lifetime Value (CLV) Analytics',
    domain: 'Digital Retail & Subscription',
    tools: ['Power BI', 'SQL', 'Scikit-Learn', 'DAX'],
    kpis: [
      { label: 'Retention Campaign ROI', value: '+20.5%', change: 'Targeted interventions' },
      { label: 'High-Risk Churn Segment', value: '640 users', change: 'Flagged with >75% risk' },
      { label: 'Avg Customer LTV', value: '$840', change: '+14% YoY cohort' }
    ],
    business_purpose: 'Allows growth marketing and CRM executives to monitor customer lifecycle health, track cohort decay curves, and deploy targeted win-back campaigns to high-value churn-risk accounts.',
    description: 'Features cohort retention heatmaps, RFM (Recency, Frequency, Monetary) segmentation bubbles, churn probability score distributions, and LTV trajectory forecasts.',
    screenshot_url: '/images/dashboards/customer_analytics_dashboard.svg',
    color_theme: 'purple'
  },
  {
    id: 'dash-5',
    title: 'Global Supply Chain & Transportation Network Performance',
    domain: 'Transportation & Logistics',
    tools: ['Tableau', 'Python', 'TMS Data Feeds', 'GeoJSON'],
    kpis: [
      { label: 'On-Time In-Full (OTIF)', value: '94.8%', change: '+5.2% vs prior Qtr' },
      { label: 'Average Transit Delay', value: '1.4 hrs', change: '-42% lane variance' },
      { label: 'Total Freight Tracked', value: '$48M', change: 'Across 340 lane corridors' }
    ],
    business_purpose: 'Provides live visibility into multi-modal carrier performance, freight lane dwell times, bottleneck transit nodes, and ETA prediction deviation across global logistics networks.',
    description: 'Geospatial lane visualization mapping origin-destination corridors with choropleth delay intensity, carrier compliance scoring, and weather/port disruption overlays.',
    screenshot_url: '/images/dashboards/supply_chain_dashboard.svg',
    color_theme: 'blue'
  },
  {
    id: 'dash-6',
    title: 'Production ML Model Monitoring & Data Drift Observatory',
    domain: 'MLOps & AI Governance',
    tools: ['Power BI', 'Python', 'Prometheus', 'FastAPI'],
    kpis: [
      { label: 'Model Inference Latency', value: '42ms', change: 'p95 latency threshold' },
      { label: 'Feature Drift Alerts', value: '0 Critical', change: 'PSI < 0.1 on all features' },
      { label: 'Daily Prediction Volume', value: '1.8M', change: '99.98% uptime' }
    ],
    business_purpose: 'Enables data science leads and MLOps engineers to track real-time model accuracy drift, feature distribution shifts (PSI/KS tests), inference response latencies, and automated retraining triggers.',
    description: 'Monitors production model performance over rolling 30-day windows, highlighting concept drift, data corruption anomalies, and model registry version telemetry.',
    screenshot_url: '/images/dashboards/model_monitoring_dashboard.svg',
    color_theme: 'amber'
  }
];
