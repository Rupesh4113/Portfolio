import { Certification } from '../types';

export const initialCertifications: Certification[] = [
  {
    id: 'cert-pmp',
    title: 'Project Management Professional Certification',
    issuer: 'Great Learning',
    year: '',
    display_order: 1
  },
  {
    id: 'cert-1',
    title: 'Generative AI with Large Language Models & ChatGPT',
    issuer: 'DeepLearning.AI / Coursera',
    year: '',
    display_order: 2
  },
  {
    id: 'cert-2',
    title: 'Executive Data Visualization & Storytelling with Power BI & Tableau',
    issuer: 'Great Learning Executive Program',
    year: '',
    display_order: 3
  },
  {
    id: 'cert-3',
    title: 'Git Version Control & Professional Collaborative Engineering',
    issuer: 'Atlassian / Coursera',
    year: '',
    display_order: 4
  },
  {
    id: 'cert-4',
    title: 'Post Graduate Certification in Data Science & Business Analytics',
    issuer: 'UT Austin McCombs School of Business',
    year: '',
    display_order: 5
  }
];

export interface EnglishCredential {
  test: string;
  score: string;
}

export const initialEnglishCredentials: EnglishCredential[] = [
  { test: 'IELTS', score: 'Overall Band: 6' },
  { test: 'CELPIP', score: 'Overall Score: 7' }
];
