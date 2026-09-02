export type ProjectType = 'professional' | 'demonstration';
export type ProjectStatus = 'published' | 'draft';
export type DiagramType = 
  | 'demand_forecasting' 
  | 'pricing_elasticity' 
  | 'sagemaker_mlops' 
  | 'supply_chain' 
  | 'transportation_lane' 
  | 'nlp_pipeline' 
  | 'custom';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  domain: string;
  project_type: ProjectType;
  status: ProjectStatus;
  is_featured: boolean;
  display_order: number;
  short_summary: string;
  business_problem: string;
  business_objective: string;
  dataset_description: string;
  data_sources: string[];
  data_preparation: string;
  eda_insights: string[];
  feature_engineering: string[];
  model_development: string;
  algorithms_used: string[];
  evaluation_metrics: Record<string, string | number>;
  primary_metric_label: string;
  primary_metric_value: string;
  results_summary: string;
  business_impact: string[];
  architecture_diagram_type?: DiagramType;
  tech_stack: string[];
  deployment_details: string;
  monitoring_strategy: string;
  dashboard_preview?: string;
  key_learnings: string[];
  future_improvements: string[];
  github_url?: string;
  demo_url?: string;
  thumbnail_url: string;
  gallery_images: string[];
  created_at?: string;
  updated_at?: string;
}

export interface Profile {
  id: string;
  full_name: string;
  headline: string;
  supporting_statement: string;
  short_bio: string;
  extended_bio: string[];
  location: string;
  email: string;
  phone: string;
  linkedin_url: string;
  github_url: string;
  avatar_url: string;
  resume_url: string;
  years_total: number;
  years_data_science: number;
  education_highlight: string;
  enterprise_highlight: string;
  updated_at: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  is_current: boolean;
  highlights: string[];
  technologies: string[];
  display_order: number;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
  description: string;
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
  display_order: number;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  display_order: number;
}

export interface DashboardItem {
  id: string;
  title: string;
  domain: string;
  tools: string[];
  kpis: { label: string; value: string; change?: string }[];
  business_purpose: string;
  description: string;
  screenshot_url: string;
  color_theme: 'cyan' | 'emerald' | 'blue' | 'indigo' | 'purple' | 'amber';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface SiteSettings {
  site_name: string;
  meta_title: string;
  meta_description: string;
  enable_analytics: boolean;
  theme_default: 'dark' | 'light';
  contact_recipient_email: string;
}
