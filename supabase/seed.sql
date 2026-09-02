-- ==============================================================================
-- SUPABASE SEED DATA
-- Rupesh Kumar Pandey — Data Science Portfolio
-- ==============================================================================

-- 1. INSERT PROFILE
INSERT INTO public.profiles (
  id, full_name, headline, supporting_statement, short_bio, extended_bio,
  location, email, phone, linkedin_url, github_url, avatar_url, resume_url,
  years_total, years_data_science, education_highlight, enterprise_highlight
) VALUES (
  'rupesh-pandey-profile',
  'Rupesh Kumar Pandey',
  'Senior Data Scientist | Machine Learning | AI | Data Analytics',
  'Building data-driven solutions that transform complex business problems into measurable outcomes.',
  'Senior Data Scientist and IT professional with 11+ years of industry experience across Data Science, Machine Learning, analytics, engineering, and technical documentation. Experienced in building predictive analytics and ML solutions for enterprise clients and translating analytical insights into business outcomes.',
  '[
    "Senior Data Scientist & Senior Tech Lead with over 11 years of extensive technology experience, combining 4+ years of specialized data science, machine learning, and statistical modeling with an enterprise engineering foundation.",
    "Currently leading Data Science initiatives at Persistent Systems for Blue Yonder TMS, engineering machine-learning transit-time and ETA prediction models for large-scale transportation datasets integrated directly into core enterprise supply chain modules.",
    "Holds a Master of Data Science (Global) from Deakin University, Australia, along with executive post-graduate qualifications in Data Science & Business Analytics from UT Austin / Great Learning and an MBA in Product & Marketing.",
    "Proven track record spanning Transportation & Logistics, Retail, Telecom, and Aviation with cross-functional experience delivering production ML pipelines, executive analytics dashboards (Power BI & Tableau), and collaborative business solutions."
  ]'::jsonb,
  'Whitefield, Bengaluru, India',
  'amerupesh08@gmail.com',
  '+91 88673 82604',
  'https://www.linkedin.com/in/rupesh-kumar-pandey',
  'https://github.com/Rupesh4113',
  '',
  '/resume/Rupesh_Kumar_Pandey_Senior_Data_Scientist_Resume.pdf',
  11,
  4,
  'Master of Data Science — Deakin University',
  'Blue Yonder / Transportation & Logistics'
) ON CONFLICT (id) DO UPDATE SET updated_at = NOW();

-- 2. INSERT EXPERIENCES
INSERT INTO public.experiences (id, role, company, client, location, period, is_current, highlights, technologies, display_order)
VALUES
  ('exp-1', 'Senior Tech Lead – Data Science', 'Persistent Systems', 'Blue Yonder', 'Bengaluru, India', 'Aug 2023 – Present', true, 
   '["Transit-time and ETA prediction models across multi-modal lanes", "Machine-learning model development with large transportation datasets", "ML model evaluation and deployment into TM Configuration, TMIC and Business Analytics modules", "Collaboration with product managers, engineers and business stakeholders", "AI-powered documentation initiatives"]'::jsonb,
   '["Python", "XGBoost", "Time Series", "SQL", "TMS APIs", "Data Modeling"]'::jsonb, 1),
  ('exp-2', 'Lead – Data Science & Technical Documentation', 'Brillio', 'BluePlanet Enterprise (Cienna)', 'Bengaluru, India', 'Jul 2022 – Jul 2023', false,
   '["Structured and unstructured data analysis for actionable business insights", "Tableau and Power BI executive dashboards", "Automated data cleaning and validation protocols", "Synthesized technical predictive results into C-suite presentations"]'::jsonb,
   '["Python", "SQL", "Tableau", "Power BI", "EDA", "Statistical Analysis"]'::jsonb, 2),
  ('exp-3', 'Lead – Technical Documentation', 'Citixsys', 'OneEnterprises', 'Noida, India', 'Feb 2022 – Jun 2022', false,
   '["Power BI and Tableau dashboards for retail trend mining", "Data mining and store inventory velocity analysis", "Analytical decision support documentation for omnichannel POS"]'::jsonb,
   '["Power BI", "Tableau", "SQL", "Data Mining", "Trend Analysis"]'::jsonb, 3),
  ('exp-4', 'Senior Engineer – Technical Documentation', 'Mindtree', 'Sabre', 'Bengaluru, India', 'Dec 2021 – Jan 2022', false,
   '["Documented automated seat-allocation systems for airline loyalty platforms", "Assessed data sources and analytics approaches for operational improvements"]'::jsonb,
   '["System Architecture", "Technical Specs", "Data Flow Diagrams"]'::jsonb, 4),
  ('exp-5', 'Senior Engineer – Avionics & Engineering Documentation', 'Sonovision / Ortec Group', 'Airbus', 'Bengaluru, India', 'Aug 2014 – Nov 2021', false,
   '["Engineering diagrams, service bulletins, and aircraft modification specifications", "Compliance documentation for international aviation regulatory authorities", "Knowledge exchange assignment at Airbus Headquarters in Toulouse, France"]'::jsonb,
   '["Avionics Systems", "Airbus Blueprints", "Quality Audits", "Compliance"]'::jsonb, 5)
ON CONFLICT (id) DO NOTHING;

-- 3. INSERT EDUCATION
INSERT INTO public.education (id, degree, institution, location, year, details, display_order)
VALUES
  ('edu-1', 'Master of Data Science (Global)', 'Deakin University', 'Australia', '2025', 'Advanced curriculum in Statistical Learning, Deep Learning, Predictive Modeling, Machine Learning Systems, and Big Data Analytics.', 1),
  ('edu-2', 'PG Program in Data Science & Business Analytics', 'UT Austin / Great Learning', 'Austin, TX', '2023', 'Comprehensive post-graduate specialization in ML algorithms, Ensemble Methods, Time Series, Supervised/Unsupervised Learning, and Executive Analytics.', 2),
  ('edu-3', 'MBA — Product & Marketing Management', 'ISBM University', 'India', '2019', 'Product Lifecycle Management, Market Analytics, Strategic Planning, and Cross-Functional Leadership.', 3),
  ('edu-4', 'Bachelor of Electrical Engineering', 'IIAS', 'Jamshedpur, India', '2011', 'Signals and Systems, Advanced Mathematics, Circuit Analysis, and Quantitative Problem Solving.', 4)
ON CONFLICT (id) DO NOTHING;

-- 4. INSERT CERTIFICATIONS
INSERT INTO public.certifications (id, title, issuer, year, display_order)
VALUES
  ('cert-1', 'Generative AI with Large Language Models & ChatGPT', 'DeepLearning.AI / Coursera', '2023', 1),
  ('cert-2', 'Executive Data Visualization & Storytelling with Power BI & Tableau', 'Great Learning Executive Program', '2023', 2),
  ('cert-3', 'Git Version Control & Professional Collaborative Engineering', 'Atlassian / Coursera', '2022', 3),
  ('cert-4', 'Post Graduate Certification in Data Science & Business Analytics', 'UT Austin McCombs School of Business', '2023', 4)
ON CONFLICT (id) DO NOTHING;

-- 5. INSERT SITE SETTINGS
INSERT INTO public.site_settings (id, site_name, meta_title, meta_description, enable_analytics, theme_default, contact_recipient_email)
VALUES (
  'primary',
  'Rupesh Kumar Pandey — Senior Data Scientist',
  'Rupesh Kumar Pandey | Senior Data Scientist & AI/ML Leader',
  'Portfolio of Rupesh Kumar Pandey, Senior Data Scientist with 11+ years of experience in Machine Learning, Predictive Analytics, Transportation & Logistics, and Retail Analytics.',
  false,
  'dark',
  'amerupesh08@gmail.com'
) ON CONFLICT (id) DO NOTHING;
