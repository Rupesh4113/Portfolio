import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import {
  FolderGit2,
  History,
  CalendarClock,
  Target,
  PieChart,
  Play,
  FileDown,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Award,
  Globe2,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  X,
  Volume2,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/common/SocialIcons';
import { 
  fetchProfile, 
  fetchExperiences, 
  fetchEducation, 
  fetchCertifications 
} from '../lib/api';
import { Profile, Experience, Education, Certification } from '../types';
import { initialProfile } from '../data/initialProfile';
import { initialExperiences } from '../data/initialExperiences';
import { initialEducation } from '../data/initialEducation';
import { initialCertifications } from '../data/initialCertifications';
import { businessCaseStudies } from '../data/businessCaseStudies';
import rupeshPhoto from '../assets/images/Rupesh.jpeg';
import { fireConfetti, getAssetUrl } from '../lib/utils';
import { Link } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);
  const [education, setEducation] = useState<Education[]>(initialEducation);
  const [certifications, setCertifications] = useState<Certification[]>(initialCertifications);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoSlide, setActiveVideoSlide] = useState(0);

  useEffect(() => {
    Promise.all([
      fetchProfile(),
      fetchExperiences(),
      fetchEducation(),
      fetchCertifications()
    ]).then(([prof, exps, edu, certs]) => {
      setProfile(prof);
      setExperiences(exps);
      setEducation(edu);
      setCertifications(certs);
    }).catch(() => {});

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 12. Video Resume Chapters (Recruiter-friendly 75-second structured walkthrough)
  const videoChapters = [
    {
      time: '0:00 - 0:10',
      title: 'Introduction & Core Profile',
      speaker: 'Rupesh Kumar Pandey',
      content: 'Hello, I am Rupesh Kumar Pandey, Senior Data Scientist based in Bengaluru, India. I specialize in turning complex enterprise datasets into predictive analytics, statistical machine learning models, and measurable operational value.'
    },
    {
      time: '0:10 - 0:25',
      title: 'Technical Skills & Core Domains',
      speaker: 'Technical Competency',
      content: 'My core stack spans Python, SQL, Tableau, Scikit-learn, and time-series forecasting. I focus heavily on Retail/FMCG, Transportation/Logistics, Telecom, and Automotive analytics.'
    },
    {
      time: '0:25 - 0:40',
      title: 'Key Project 1: Supply Chain Optimization',
      speaker: '92% Classification Accuracy',
      content: 'In my FMCG Supply Chain Optimization project, I analyzed warehouse-level demand-supply imbalances, engineered safety-stock features, and deployed supervised classification achieving 92% classification accuracy to mitigate stockout risks.'
    },
    {
      time: '0:40 - 0:55',
      title: 'Key Project 2: Customer & Revenue Analytics',
      speaker: '3-Year POS & E-Commerce',
      content: 'Analyzed 3 years of transaction history using RFM segmentation and market basket rules to identify customer retention tiers. In E-commerce analytics, isolated that top 3 regions generate 67% of revenue and recommended high-velocity private-label expansions.'
    },
    {
      time: '0:55 - 1:15',
      title: 'Forecasting, Experience & Credentials',
      speaker: '12-Month Horizon & Leadership',
      content: 'Engineered 12-month forward forecasts with ARIMA/SARIMA. Currently Senior Tech Lead at Persistent Systems for Blue Yonder TMS. Deakin University Master of Data Science, Great Learning PMP certified, IELTS Band 6, and CELPIP 7.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#080d1a] transition-colors duration-200">
      <Navbar resumeUrl={profile.resume_url} />

      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Page Header */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Digital One-Page Summary</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Professional Data Science Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono mt-1">
                Recruiter-Ready Profile • Validated Metrics • Methodologies • Credentials
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Watch Video Resume Button */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs sm:text-sm font-mono font-bold shadow-md shadow-red-600/20 transition active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Video Resume (75s)</span>
              </button>

              {/* Download Resume Button */}
              <a
                href={getAssetUrl(profile.resume_url)}
                download="Rupesh_Kumar_Pandey_Data_Scientist_Resume.pdf"
                onClick={fireConfetti}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-mono font-semibold shadow-md shadow-cyan-600/20 transition active:scale-95"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* 1. Profile Summary Card */}
          <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex justify-center">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden ring-4 ring-cyan-500/20 shadow-xl bg-slate-900">
                  <img
                    src={rupeshPhoto}
                    alt="Rupesh Kumar Pandey"
                    className="w-full h-full object-cover object-[50%_22%]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'images/profile/Rupesh.jpeg';
                    }}
                  />
                </div>
              </div>

              <div className="lg:col-span-9 space-y-4 text-center lg:text-left">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {profile.full_name}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">
                    {profile.headline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  {profile.short_bio}
                </p>

                {/* Contact Pills */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/40 transition"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{profile.email}</span>
                  </a>

                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/40 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{profile.phone}</span>
                  </a>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{profile.location}</span>
                  </div>

                  <a
                    href={profile.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profile.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Portfolio Metrics (Strictly confirmed quantitative values) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-500" />
                <span>Confirmed Portfolio Metrics</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">Supported by Production Portfolio Data</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-1">
                <FolderGit2 className="w-5 h-5 text-cyan-500" />
                <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">12+</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Analytics Projects</div>
                <div className="text-[11px] text-slate-500 font-mono">Retail, Supply Chain, Telecom</div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-1">
                <History className="w-5 h-5 text-emerald-500" />
                <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">3+ Years</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Transaction Data</div>
                <div className="text-[11px] text-slate-500 font-mono">Customer RFM & purchasing patterns</div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-1">
                <CalendarClock className="w-5 h-5 text-indigo-500" />
                <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">12-Month</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Forecasting Horizon</div>
                <div className="text-[11px] text-slate-500 font-mono">ARIMA, SARIMA & Holt-Winters</div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-1 bg-gradient-to-br from-cyan-500/5 to-transparent">
                <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono">92%</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Supply Chain Accuracy</div>
                <div className="text-[11px] text-slate-500 font-mono">Stockout classification model</div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-1 bg-gradient-to-br from-emerald-500/5 to-transparent">
                <PieChart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">67%</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Top Region Revenue</div>
                <div className="text-[11px] text-slate-500 font-mono">E-commerce revenue share</div>
              </div>
            </div>
          </div>

          {/* 3. Skills Snapshot */}
          <div className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Technical & Business Skills Snapshot
              </h3>
              <Link to="/skills" className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center space-x-1">
                <span>View Full Skills Page</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                  Machine Learning & Data Science
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-mono leading-relaxed">
                  Logistic Regression, Decision Trees, Random Forest, SVM, KNN, Naive Bayes, LDA, K-Means Clustering, PCA, Exploratory Data Analysis, Statistical Hypothesis Testing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                  Customer & Supply Chain Analytics
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-mono leading-relaxed">
                  RFM Segmentation, Market Basket Association Rules, Churn Modeling, Customer Propensity, Inventory Optimization, Warehouse Stockout Mitigation, 12-Month Demand Forecasting (ARIMA/SARIMA).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                  Engineering, SQL & Visualization
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-mono leading-relaxed">
                  Python (Pandas, NumPy, Scikit-learn), MySQL / SQL (JOINs, Window Functions, Subqueries, Aggregations), Tableau Dashboard Design, KNIME, Jupyter Notebooks.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Featured Projects Summary Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <FolderGit2 className="w-5 h-5 text-cyan-500" />
                <span>Featured Project Case Studies</span>
              </h3>
              <Link to="/#projects" className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline">
                View All Case Studies →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessCaseStudies.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold">
                        {p.domain}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {p.primary_metric_label}: {p.primary_metric_value}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {p.title}
                    </h4>

                    <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                      <p>
                        <strong className="text-slate-800 dark:text-slate-200 font-semibold font-mono">Business Problem:</strong>{' '}
                        {p.business_problem}
                      </p>
                      <p>
                        <strong className="text-slate-800 dark:text-slate-200 font-semibold font-mono">Methodology:</strong>{' '}
                        {p.algorithms_used?.join(', ')}
                      </p>
                      {p.business_recommendations && p.business_recommendations.length > 0 && (
                        <p>
                          <strong className="text-slate-800 dark:text-slate-200 font-semibold font-mono">Key Recommendation:</strong>{' '}
                          {p.business_recommendations[0]}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">
                      {p.tech_stack?.slice(0, 3).join(' • ')}
                    </span>
                    <Link
                      to="/#projects"
                      className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center space-x-1"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Experience Timeline & Education / Credentials Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Experience (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-cyan-500" />
                <span>Professional Experience Timeline</span>
              </h3>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-slate-500 font-mono">
                      {exp.company} &bull; {exp.client} &bull; {exp.location}
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside pt-1">
                      {exp.highlights?.slice(0, 2).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Credentials (5 Cols) - NO COMPLETION YEARS */}
            <div className="lg:col-span-5 space-y-6">
              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-cyan-500" />
                  <span>Educational Background</span>
                </h3>

                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-1"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & English Credentials */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Award className="w-5 h-5 text-emerald-500" />
                  <span>Certifications & English Credentials</span>
                </h3>

                <div className="space-y-2">
                  {certifications.map((c) => (
                    <div
                      key={c.id}
                      className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm flex items-center space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{c.title}</div>
                        <div className="text-[11px] text-slate-500 font-mono">{c.issuer}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* English Language Proficiency */}
                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 dark:text-white">
                    <Globe2 className="w-4 h-4 text-cyan-500" />
                    <span>English Language Credentials</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>IELTS:</strong> Overall Band 6
                    </div>
                    <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>CELPIP:</strong> Overall Score 7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 12. Video Resume Modal (Recruiter-friendly 60-90s Concept Walkthrough) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono">
                  Video Resume • Rupesh Kumar Pandey
                </h3>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Emulation Area */}
            <div className="p-6 space-y-6">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner">
                {/* Visual Audio Waveform & Speaker */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-mono text-cyan-400">
                    <Clock className="w-3 h-3" />
                    <span>{videoChapters[activeVideoSlide].time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[16, 24, 12, 32, 20, 28, 14, 22].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}px` }}
                        className="w-1 bg-cyan-400/80 rounded-full animate-pulse"
                      />
                    ))}
                  </div>
                </div>

                {/* Chapter Caption */}
                <div className="space-y-2 py-4">
                  <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                    {videoChapters[activeVideoSlide].speaker}
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {videoChapters[activeVideoSlide].title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    "{videoChapters[activeVideoSlide].content}"
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-500 h-full transition-all duration-300"
                    style={{ width: `${((activeVideoSlide + 1) / videoChapters.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Slide Navigation Buttons */}
              <div className="flex items-center justify-between gap-3">
                <button
                  disabled={activeVideoSlide === 0}
                  onClick={() => setActiveVideoSlide(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-mono font-semibold disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Previous Chapter
                </button>

                <div className="flex items-center space-x-1.5">
                  {videoChapters.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVideoSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeVideoSlide === idx
                          ? 'bg-cyan-500 w-6'
                          : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeVideoSlide === videoChapters.length - 1}
                  onClick={() => setActiveVideoSlide(prev => Math.min(videoChapters.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-semibold disabled:opacity-40"
                >
                  Next Chapter
                </button>
              </div>

              {/* Recruiter Note */}
              <div className="p-3.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 text-[11px] font-mono text-slate-500 text-center">
                Interactive 75-second structured video presentation transcript • Recruiter-friendly summary
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer
        resumeUrl={profile.resume_url}
        email={profile.email}
        linkedinUrl={profile.linkedin_url}
        githubUrl={profile.github_url}
      />
    </div>
  );
};
export default DashboardPage;
