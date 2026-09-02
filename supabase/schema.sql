-- ==============================================================================
-- SUPABASE SCHEMA & ROW LEVEL SECURITY (RLS) POLICIES
-- Rupesh Kumar Pandey — Data Science Portfolio
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  headline TEXT NOT NULL,
  supporting_statement TEXT NOT NULL,
  short_bio TEXT NOT NULL,
  extended_bio JSONB NOT NULL DEFAULT '[]'::jsonb,
  location TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  linkedin_url TEXT NOT NULL,
  github_url TEXT NOT NULL,
  avatar_url TEXT DEFAULT '',
  resume_url TEXT DEFAULT '',
  years_total INT NOT NULL DEFAULT 11,
  years_data_science INT NOT NULL DEFAULT 4,
  education_highlight TEXT NOT NULL,
  enterprise_highlight TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  domain TEXT NOT NULL,
  project_type TEXT NOT NULL CHECK (project_type IN ('professional', 'demonstration')),
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'draft')),
  is_featured BOOLEAN NOT NULL DEFAULT false,
  display_order INT NOT NULL DEFAULT 1,
  short_summary TEXT NOT NULL,
  business_problem TEXT NOT NULL,
  business_objective TEXT NOT NULL,
  dataset_description TEXT NOT NULL,
  data_sources JSONB NOT NULL DEFAULT '[]'::jsonb,
  data_preparation TEXT NOT NULL,
  eda_insights JSONB NOT NULL DEFAULT '[]'::jsonb,
  feature_engineering JSONB NOT NULL DEFAULT '[]'::jsonb,
  model_development TEXT NOT NULL,
  algorithms_used JSONB NOT NULL DEFAULT '[]'::jsonb,
  evaluation_metrics JSONB NOT NULL DEFAULT '{}'::jsonb,
  primary_metric_label TEXT NOT NULL,
  primary_metric_value TEXT NOT NULL,
  results_summary TEXT NOT NULL,
  business_impact JSONB NOT NULL DEFAULT '[]'::jsonb,
  architecture_diagram_type TEXT DEFAULT 'custom',
  tech_stack JSONB NOT NULL DEFAULT '[]'::jsonb,
  deployment_details TEXT NOT NULL,
  monitoring_strategy TEXT NOT NULL,
  dashboard_preview TEXT DEFAULT '',
  key_learnings JSONB NOT NULL DEFAULT '[]'::jsonb,
  future_improvements JSONB NOT NULL DEFAULT '[]'::jsonb,
  github_url TEXT DEFAULT '',
  demo_url TEXT DEFAULT '',
  thumbnail_url TEXT NOT NULL DEFAULT '',
  gallery_images JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. EXPERIENCES TABLE
CREATE TABLE IF NOT EXISTS public.experiences (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  client TEXT DEFAULT '',
  location TEXT NOT NULL,
  period TEXT NOT NULL,
  is_current BOOLEAN NOT NULL DEFAULT false,
  highlights JSONB NOT NULL DEFAULT '[]'::jsonb,
  technologies JSONB NOT NULL DEFAULT '[]'::jsonb,
  display_order INT NOT NULL DEFAULT 1
);

-- 4. SKILLS TABLE
CREATE TABLE IF NOT EXISTS public.skills (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  category TEXT NOT NULL,
  skills JSONB NOT NULL DEFAULT '[]'::jsonb,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Brain'
);

-- 5. EDUCATION TABLE
CREATE TABLE IF NOT EXISTS public.education (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  degree TEXT NOT NULL,
  institution TEXT NOT NULL,
  location TEXT NOT NULL,
  year TEXT NOT NULL,
  details TEXT DEFAULT '',
  display_order INT NOT NULL DEFAULT 1
);

-- 6. CERTIFICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.certifications (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  year TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 1
);

-- 7. DASHBOARDS TABLE
CREATE TABLE IF NOT EXISTS public.dashboards (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  title TEXT NOT NULL,
  domain TEXT NOT NULL,
  tools JSONB NOT NULL DEFAULT '[]'::jsonb,
  kpis JSONB NOT NULL DEFAULT '[]'::jsonb,
  business_purpose TEXT NOT NULL,
  description TEXT NOT NULL,
  screenshot_url TEXT NOT NULL,
  color_theme TEXT NOT NULL DEFAULT 'cyan'
);

-- 8. CONTACT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
  id TEXT PRIMARY KEY DEFAULT 'primary',
  site_name TEXT NOT NULL,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  enable_analytics BOOLEAN NOT NULL DEFAULT false,
  theme_default TEXT NOT NULL DEFAULT 'dark',
  contact_recipient_email TEXT NOT NULL
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dashboards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Profiles: Public can read, Authenticated can update
CREATE POLICY "Public profiles are viewable by everyone." 
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Authenticated users can modify profiles." 
  ON public.profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Projects: Public can only view published projects, Authenticated can manage all
CREATE POLICY "Public can view published projects." 
  ON public.projects FOR SELECT USING (status = 'published' OR auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert projects." 
  ON public.projects FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects." 
  ON public.projects FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects." 
  ON public.projects FOR DELETE TO authenticated USING (true);

-- Experiences, Skills, Education, Certifications, Dashboards, Settings: Public read, Authenticated write
CREATE POLICY "Public can view experiences." ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Admin can manage experiences." ON public.experiences FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Public can view skills." ON public.skills FOR SELECT USING (true);
CREATE POLICY "Admin can manage skills." ON public.skills FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Public can view education." ON public.education FOR SELECT USING (true);
CREATE POLICY "Admin can manage education." ON public.education FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Public can view certifications." ON public.certifications FOR SELECT USING (true);
CREATE POLICY "Admin can manage certifications." ON public.certifications FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Public can view dashboards." ON public.dashboards FOR SELECT USING (true);
CREATE POLICY "Admin can manage dashboards." ON public.dashboards FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Public can view settings." ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Admin can manage settings." ON public.site_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Contact Messages: Anyone can insert, only authenticated can read/delete
CREATE POLICY "Anyone can submit a contact message." 
  ON public.contact_messages FOR INSERT WITH CHECK (true);

CREATE POLICY "Only authenticated can view contact messages." 
  ON public.contact_messages FOR SELECT TO authenticated USING (true);

CREATE POLICY "Only authenticated can delete contact messages." 
  ON public.contact_messages FOR DELETE TO authenticated USING (true);

-- ==============================================================================
-- STORAGE BUCKETS CONFIGURATION
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('portfolio-assets', 'portfolio-assets', true),
  ('project-images', 'project-images', true),
  ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- Public Storage Read
CREATE POLICY "Public storage read" 
  ON storage.objects FOR SELECT USING (bucket_id IN ('portfolio-assets', 'project-images', 'resumes'));

-- Authenticated Storage Manage
CREATE POLICY "Authenticated storage insert" 
  ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id IN ('portfolio-assets', 'project-images', 'resumes'));

CREATE POLICY "Authenticated storage update" 
  ON storage.objects FOR UPDATE TO authenticated USING (bucket_id IN ('portfolio-assets', 'project-images', 'resumes'));

CREATE POLICY "Authenticated storage delete" 
  ON storage.objects FOR DELETE TO authenticated USING (bucket_id IN ('portfolio-assets', 'project-images', 'resumes'));
