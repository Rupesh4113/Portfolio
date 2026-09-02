import { Experience } from '../types';

export const initialExperiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Tech Lead – Data Science',
    company: 'Persistent Systems',
    client: 'Blue Yonder',
    location: 'Bengaluru, India',
    period: 'Aug 2023 – Present',
    is_current: true,
    highlights: [
      'Led transit-time and ETA prediction initiatives for Blue Yonder TMS, improving logistics planning accuracy and customer satisfaction.',
      'Built, evaluated, and deployed machine-learning models on large transportation datasets.',
      'Worked closely with product managers, engineers, and business stakeholders to align analytics with business goals.',
      'Integrated ML models into TM Configuration, TMIC, and Business Analytics modules.',
      'Contributed to AI-powered documentation initiatives using LLM-based tools.'
    ],
    technologies: ['Python', 'XGBoost', 'Time Series Analysis', 'SQL', 'TMS Enterprise APIs', 'Data Modeling', 'Feature Engineering'],
    display_order: 1
  },
  {
    id: 'exp-2',
    role: 'Lead – Data Science & Technical Documentation',
    company: 'Brillio',
    client: 'BluePlanet Enterprise (Cienna)',
    location: 'Bengaluru, India',
    period: 'Jul 2022 – Jul 2023',
    is_current: false,
    highlights: [
      'Analyzed structured and unstructured data to generate actionable business insights.',
      'Designed and delivered executive dashboards using Tableau and Power BI.',
      'Performed data cleaning and validation to ensure high-quality analytics outputs.'
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'Power BI', 'Exploratory Data Analysis', 'Statistical Inference'],
    display_order: 2
  },
  {
    id: 'exp-3',
    role: 'Lead – Technical Documentation',
    company: 'Citixsys',
    client: 'OneEnterprises',
    location: 'Noida, India',
    period: 'Feb 2022 – Jun 2022',
    is_current: false,
    highlights: [
      'Developed dashboards and reports using Power BI and Tableau.',
      'Performed data mining and trend analysis to support business decision-making.'
    ],
    technologies: ['Power BI', 'Tableau', 'SQL', 'Data Mining', 'Trend Analysis', 'Retail Analytics'],
    display_order: 3
  },
  {
    id: 'exp-4',
    role: 'Senior Engineer – Technical Documentation',
    company: 'Mindtree',
    client: 'Sabre',
    location: 'Bengaluru, India',
    period: 'Dec 2021 – Jan 2022',
    is_current: false,
    highlights: [
      'Documented automated seat-allocation systems for airline loyalty platforms.',
      'Assessed data sources and analytics approaches for operational improvements.'
    ],
    technologies: ['System Architecture', 'Technical Specifications', 'Data Flow Diagrams', 'Agile/Scrum'],
    display_order: 4
  },
  {
    id: 'exp-5',
    role: 'Senior Engineer – Avionics & Engineering Documentation',
    company: 'Sonovision / Ortec Group',
    client: 'Airbus',
    location: 'Bengaluru, India',
    period: 'Aug 2014 – Nov 2021',
    is_current: false,
    highlights: [
      'Developed mission-critical engineering diagrams, service bulletins, and aircraft modification documentation for commercial aircraft programs.',
      'Ensured strict compliance with international aviation regulatory authorities and quality control standards.',
      'Selected for an international technical and knowledge exchange assignment at Airbus Headquarters in Toulouse, France.',
      'Built a deep foundation in rigorous systems engineering, analytical precision, complex cross-domain workflows, and regulatory governance.'
    ],
    technologies: ['Avionics Systems', 'Engineering Blueprints', 'Airbus Specifications', 'Compliance Audits', 'Quality Engineering'],
    display_order: 5
  }
];
