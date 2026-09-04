import { Experience } from '../types';

export const initialExperiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Technical Lead – Data Science & Generative AI',
    official_designation: 'Lead Technical Specialist / Technical Lead',
    company: 'Persistent Systems',
    client: 'Blue Yonder',
    project: 'Blue Yonder Transportation Management (TMS)',
    location: 'Bengaluru, India',
    period: 'Aug 2023 – Present',
    is_current: true,
    category_tags: ['Data Science', 'Generative AI', 'Predictive Modeling', 'Transportation & Logistics'],
    highlights: [
      'Built and evaluated XGBoost-based predictive modeling approaches for transit-time and dynamic ETA prediction across high-density transportation lanes, directly reducing shipment lead-time variability.',
      'Spearheaded end-to-end data preparation, exploratory data analysis (EDA), multi-collinearity assessments, and feature engineering across carrier historical shipment telemetry, dwell logs, and route characteristics.',
      'Engineered operational machine learning workflows integrated into Blue Yonder Transportation Modeler (TM), Transportation Modeling & Inbound Collaboration (TMIC), and Business Analytics modules.',
      'Designed and evaluated Generative AI & LLM-assisted knowledge workflows, implementing automated summarization, schema extraction, and RAG-style semantic retrieval across complex enterprise transport specifications.',
      'Applied rigorous statistical validation protocols (time-based cross-validation, MAE/RMSE benchmarking) to ensure zero data leakage across multi-tenant supply chain client datasets.',
      'Bridged analytical modeling with logistics operations, translating model outputs into actionable shipment prioritization rules for global logistics planners.',
      'Authored and maintained mission-critical technical architecture guides, data flow diagrams, API specifications, and Agile documentation across JIRA and Confluence, supporting cross-functional engineering governance (20% supporting capability).'
    ],
    project_highlight: {
      title: 'Transit Time Prediction — Blue Yonder TMS',
      description: 'XGBoost-powered lane-level transit time & ETA prediction engine for enterprise logistics networks.',
      bullets: [
        'Built and evaluated XGBoost-based predictive modeling approach for transit-time prediction across transportation lanes.',
        'Applied data preparation, exploratory analysis, feature analysis, and predictive modeling concepts.',
        'Connected model outputs with transportation planning and ETA accuracy use cases.'
      ]
    },
    technologies: [
      'Python', 
      'XGBoost', 
      'Machine Learning', 
      'Generative AI', 
      'LLMs', 
      'SQL', 
      'Predictive Modeling', 
      'Feature Engineering', 
      'Time-Series Analysis', 
      'Blue Yonder TMS', 
      'GitHub', 
      'JIRA', 
      'Confluence', 
      'Agile'
    ],
    display_order: 1
  },
  {
    id: 'exp-2',
    role: 'Technical Lead – Data Analytics & AI Solutions',
    official_designation: 'Technical Lead – Technical Documentation',
    company: 'Brillio Technologies',
    client: 'Ciena',
    project: 'Ciena Blue Planet Enterprise, FUEL',
    location: 'Bengaluru, India',
    period: 'Jul 2022 – Jul 2023',
    is_current: false,
    category_tags: ['Telecom Analytics', 'Customer Analytics', 'Generative AI', 'Data Analytics'],
    highlights: [
      'Analyzed structured network telemetry and unstructured service ticket datasets, extracting behavioral patterns, failure signatures, and operational bottleneck indicators across Ciena Blue Planet enterprise software.',
      'Developed deep analytical foundations in telecom customer analytics, evaluating customer churn indicators, customer lifetime value (CLV) dimensions, and service degradation propensity factors across complex network accounts.',
      'Supported exploratory data analysis (EDA) and analytical problem-solving, formulating business-rule models to identify service outage trends and customer health degradation signals.',
      'Explored Generative AI and LLM-assisted information extraction, experimenting with automated summarization of complex telecom network alarm logs and enterprise service requests.',
      'Collaborated with cross-functional engineering and data teams across GitLab, Bitbucket, JIRA, and Confluence to translate technical system telemetry into structured analytical documentation and decision workflows.',
      'Positioned telecom data experience as a strong domain foundation for customer churn, customer segmentation, CLV, propensity modeling, and customer experience analytics.',
      'Led development of comprehensive technical documentation, enterprise system blueprints, and API references for telecom orchestration and automation platforms, ensuring strict software release compliance (20% supporting capability).'
    ],
    technologies: [
      'Python', 
      'Data Analytics', 
      'Telecom Analytics', 
      'Generative AI', 
      'LLM Summarization', 
      'SQL', 
      'Customer Analytics', 
      'GitLab', 
      'Bitbucket', 
      'JIRA', 
      'Confluence'
    ],
    display_order: 2
  },
  {
    id: 'exp-3',
    role: 'Data Analyst – Business Intelligence & AI',
    official_designation: 'Senior Technical Writer / Documentation Lead',
    company: 'Citixsys Technologies',
    client: 'OneEnterprise',
    project: 'OneEnterprise (Retail & E-Commerce Platform)',
    location: 'Noida, India',
    period: 'Feb 2022 – Jun 2022',
    is_current: false,
    category_tags: ['Business Intelligence', 'Retail Analytics', 'Power BI & Tableau', 'Data Mining'],
    highlights: [
      'Executed exploratory data analysis (EDA) and data mining across retail POS transaction records, inventory registers, and customer purchasing histories within the OneEnterprise platform.',
      'Designed and delivered interactive executive Business Intelligence dashboards in Power BI and Tableau, visualizing retail revenue trajectories, store-level sales velocity, and inventory turnover KPIs.',
      'Formulated customer segmentation and basket analysis frameworks evaluating transaction frequency, average order value (AOV), and product cross-selling affinities to guide retail merchandising.',
      'Analyzed demand volatility, seasonal sales trends, and promotional uplift, converting complex transactional queries into executive performance insights and inventory replenishment recommendations.',
      'Partnered with engineering squads within Azure DevOps, establishing data validation routines and schema consistency checks across multi-store transactional databases.',
      'Authored comprehensive user-facing analytical documentation, BI dashboard user manuals, and system functional specifications, translating multi-dimensional metrics into accessible business terminology (20% supporting capability).'
    ],
    technologies: [
      'Power BI', 
      'Tableau', 
      'SQL', 
      'Data Mining', 
      'Exploratory Data Analysis', 
      'Retail Analytics', 
      'Customer Segmentation', 
      'Revenue Analytics', 
      'Azure DevOps'
    ],
    display_order: 3
  },
  {
    id: 'exp-4',
    role: 'Data Analyst – AI & Analytics',
    official_designation: 'Senior Engineer – Technical Documentation',
    company: 'Mindtree Ltd',
    client: 'Sabre',
    project: 'Sabre Seats UI & Services (Airline Passenger Analytics)',
    location: 'Bengaluru, India',
    period: 'Dec 2021 – Jan 2022',
    is_current: false,
    category_tags: ['Aviation Analytics', 'Operational Analytics', 'Workflow Modeling'],
    highlights: [
      'Conducted operational data analysis on passenger seat selection workflows and reservation telemetry for airline loyalty and ancillary ticketing platforms.',
      'Assessed enterprise data sources and analytical workflows, mapping data entities across passenger reservation systems to identify booking drop-off points.',
      'Analyzed customer booking behavior and seat upgrade patterns, formulating quantitative rules to optimize automated ancillary seat-allocation services.',
      'Structured and validated complex application data flows, examining business logic constraints and multi-channel API response payloads for operational performance improvements.',
      'Demonstrated key analytical transition milestones toward data analytics, process modeling, and data-driven problem solving within enterprise aviation platforms.',
      'Developed detailed system data-flow diagrams, architectural specifications, and API integration documentation supporting airline commercial teams and Agile Scrum release milestones (20% supporting capability).'
    ],
    technologies: [
      'Data Analysis', 
      'Operational Analytics', 
      'Workflow Modeling', 
      'SQL', 
      'Data Flow Diagrams', 
      'Airline Ancillary Systems', 
      'Agile/Scrum'
    ],
    display_order: 4
  },
  {
    id: 'exp-5',
    role: 'Senior Data & Analytics Analyst – Engineering Solutions',
    official_designation: 'Senior Technical Author / Systems Engineer',
    company: 'Sonovision Ortec Group',
    client: 'Airbus France',
    project: 'Commercial Aircraft Programs (A320, A330, A350, A380)',
    location: 'Bengaluru, India',
    period: 'Aug 2014 – Nov 2021',
    is_current: false,
    category_tags: ['Engineering Analytics', 'Data Quality & Validation', 'Information Architecture'],
    highlights: [
      'Spearheaded engineering data organization and validation across large-scale technical databases, blueprints, and sensor modification telemetry for global commercial aviation programs.',
      'Established stringent data quality assurance frameworks, validating multi-attribute aircraft systems specifications with zero-defect tolerance under international aviation governance (EASA/FAA).',
      'Engineered structured XML information architectures and relational data schemas, optimizing retrieval latency across hundreds of thousands of complex technical records.',
      'Selected for international on-site technical knowledge exchange assignment at Airbus Headquarters in Toulouse, France, collaborating directly with European systems engineers and aerodynamicists.',
      'Modeled cross-functional engineering workflows, analyzing component failure patterns and modification lifecycles to optimize maintenance planning schedules.',
      'Developed the foundational analytical rigor that directly transfers into Data Science: Data Organization → Data Quality → Information Analysis → Process Modeling → Analytical Problem Solving → AI/Data Science.',
      'Produced safety-critical engineering manuals, service bulletins, and modification packages according to strict ATA 100/iSpec 2200 aerospace standards (20% supporting capability).'
    ],
    technologies: [
      'Engineering Analytics', 
      'Data Quality & Validation', 
      'Information Architecture', 
      'XML / Structured Data', 
      'Systems Engineering', 
      'Airbus Specifications', 
      'Process Optimization'
    ],
    display_order: 5
  }
];
