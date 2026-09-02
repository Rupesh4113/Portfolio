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
      'Spearheaded ML-driven Transit-Time and Estimated Time of Arrival (ETA) prediction models across multi-modal global transportation lanes.',
      'Developed and optimized high-performance machine learning models utilizing large-scale transportation and telematics datasets.',
      'Evaluated, validated, and deployed production predictive models integrated directly into Blue Yonder TM Configuration, TMIC, and Business Analytics enterprise modules.',
      'Collaborated closely with enterprise product managers, data engineering teams, and logistics business stakeholders to translate ML metrics into supply chain efficiency.',
      'Championed AI-powered technical documentation and knowledge extraction initiatives to accelerate enterprise adoption and workflow automation.'
    ],
    technologies: ['Python', 'XGBoost', 'Time Series Analysis', 'SQL', 'TMS Enterprise APIs', 'Data Modeling', 'Feature Engineering'],
    display_order: 1
  },
  {
    id: 'exp-2',
    role: 'Lead – Data Science & Technical Documentation',
    company: 'Brillio',
    client: 'Enterprise Clients',
    location: 'Bengaluru, India',
    period: 'Jul 2022 – Jul 2023',
    is_current: false,
    highlights: [
      'Executed end-to-end analysis on massive structured and unstructured datasets to uncover actionable business insights for retail and digital transformation clients.',
      'Engineered executive dashboards using Tableau and Power BI, translating complex multi-variate statistical findings into decision-ready visualizations.',
      'Established rigorous automated data cleaning, anomaly detection, and validation protocols ensuring high data fidelity across analytical pipelines.',
      'Bridged engineering and executive leadership by synthesizing technical predictive modeling results into C-suite strategic presentations.'
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'Power BI', 'Exploratory Data Analysis', 'Statistical Inference'],
    display_order: 2
  },
  {
    id: 'exp-3',
    role: 'Lead – Technical Documentation & Analytics Support',
    company: 'Citixsys',
    client: 'Omnichannel Retail Systems',
    location: 'Noida, India',
    period: 'Feb 2022 – Jun 2022',
    is_current: false,
    highlights: [
      'Leveraged Power BI, Tableau, and SQL for extensive retail data mining, sales trend identification, and store inventory analysis.',
      'Created analytical decision-support documentation and data flow specifications for enterprise POS and omnichannel retail software suites.',
      'Conducted statistical evaluation of retail KPIs, customer basket patterns, and omnichannel replenishment dynamics.'
    ],
    technologies: ['Power BI', 'Tableau', 'SQL', 'Data Mining', 'Trend Analysis', 'Retail Analytics'],
    display_order: 3
  },
  {
    id: 'exp-4',
    role: 'Senior Engineer – Technical Documentation',
    company: 'Mindtree',
    client: 'Global Technology Enterprise',
    location: 'Bengaluru, India',
    period: 'Dec 2021 – Jan 2022',
    is_current: false,
    highlights: [
      'Authored comprehensive technical architecture documentation, system integration flows, and enterprise data specifications.',
      'Collaborated with software development leads and infrastructure architects to standardize technical deliverables.'
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
