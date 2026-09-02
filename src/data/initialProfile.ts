import { Profile } from '../types';

export const initialProfile: Profile = {
  id: 'rupesh-pandey-profile',
  full_name: 'Rupesh Kumar Pandey',
  headline: 'Senior Data Scientist | Machine Learning | AI | Data Analytics',
  supporting_statement: 'Building data-driven solutions that transform complex business problems into measurable outcomes.',
  short_bio: 'Senior Data Scientist and IT professional with 11+ years of industry experience across Data Science, Machine Learning, analytics, engineering, and technical documentation. Experienced in building predictive analytics and ML solutions for enterprise clients and translating analytical insights into business outcomes.',
  extended_bio: [
    'Senior Data Scientist & Senior Tech Lead with over 11 years of extensive technology experience, combining 4+ years of specialized data science, machine learning, and statistical modeling with an enterprise engineering foundation.',
    'Currently leading Data Science initiatives at Persistent Systems for Blue Yonder TMS, engineering machine-learning transit-time and ETA prediction models for large-scale transportation datasets integrated directly into core enterprise supply chain modules.',
    'Holds a Master of Data Science (Global) from Deakin University, Australia, along with executive post-graduate qualifications in Data Science & Business Analytics from UT Austin / Great Learning and an MBA in Product & Marketing.',
    'Proven track record spanning Transportation & Logistics, Retail, Telecom, and Aviation with cross-functional experience delivering production ML pipelines, executive analytics dashboards (Power BI & Tableau), and collaborative business solutions.'
  ],
  location: 'Bengaluru, India',
  email: 'rupesh.pandey@example.com',
  phone: '+91 98765 43210',
  linkedin_url: 'https://www.linkedin.com/in/rupesh-kumar-pandey',
  github_url: 'https://github.com/Rupesh4113',
  avatar_url: '', // Profile image placeholder or uploadable
  resume_url: '/resume/Rupesh_Kumar_Pandey_Senior_Data_Scientist_Resume.pdf',
  years_total: 11,
  years_data_science: 4,
  education_highlight: 'Master of Data Science — Deakin University',
  enterprise_highlight: 'Blue Yonder / Transportation & Logistics',
  updated_at: new Date().toISOString(),
};
