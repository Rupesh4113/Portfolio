import { Profile } from '../types';

export const initialProfile: Profile = {
  id: 'rupesh-pandey-profile',
  full_name: 'Rupesh Kumar Pandey',
  headline: 'Senior Data Scientist | Machine Learning | AI | Data Analytics',
  supporting_statement: 'Building data-driven solutions that transform complex business problems into measurable outcomes.',
  short_bio: 'Senior Data Scientist and IT Professional with 11+ years of experience across Data Science, Machine Learning, Technical Writing, and Engineering. Over 4 years of hands-on experience delivering predictive analytics and ML solutions in the transportation and logistics domain for enterprise clients such as Blue Yonder. Strong expertise in Python, SQL, data visualization, and end-to-end model development, with proven experience working in fast-paced Bengaluru-based product and services organizations.',
  extended_bio: [
    'Senior Data Scientist & Senior Tech Lead with over 11 years of extensive technology experience, combining 4+ years of specialized data science, machine learning, and statistical modeling with an enterprise engineering foundation.',
    'Currently leading Data Science initiatives at Persistent Systems for Blue Yonder TMS, engineering machine-learning transit-time and ETA prediction models for large-scale transportation datasets integrated directly into core enterprise supply chain modules.',
    'Holds a Master of Data Science (Global) from Deakin University, Australia, along with executive post-graduate qualifications in Data Science & Business Analytics from UT Austin / Great Learning and an MBA in Product & Marketing.',
    'Proven track record spanning Transportation & Logistics, Retail, Telecom, and Aviation with cross-functional experience delivering production ML pipelines, executive analytics dashboards (Power BI & Tableau), and collaborative business solutions.'
  ],
  location: 'Whitefield, Bengaluru, India',
  email: 'amerupesh08@gmail.com',
  phone: '+91 88673 82604',
  linkedin_url: 'https://www.linkedin.com/in/rupesh-kumar-pandey',
  github_url: 'https://github.com/Rupesh4113',
  avatar_url: './images/profile/rupesh_pandey.jpg',
  resume_url: './resume/Rupesh_Kumar_Pandey_Senior_Data_Scientist_Resume.pdf',
  years_total: 11,
  years_data_science: 4,
  education_highlight: 'Master of Data Science — Deakin University',
  enterprise_highlight: 'Blue Yonder / Transportation & Logistics',
  updated_at: new Date().toISOString(),
};
