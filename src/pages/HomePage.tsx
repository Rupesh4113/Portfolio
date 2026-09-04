import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { QuantitativeMetricsSection } from '../components/home/QuantitativeMetricsSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { DomainExpertiseSection } from '../components/home/DomainExpertiseSection';
import { MethodsSection } from '../components/home/MethodsSection';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { EducationSection } from '../components/home/EducationSection';
import { TechStackSection } from '../components/home/TechStackSection';
import { ContactSection } from '../components/home/ContactSection';
import { 
  fetchProfile, 
  fetchProjects, 
  fetchExperiences, 
  fetchSkills, 
  fetchEducation, 
  fetchCertifications, 
  fetchDashboards 
} from '../lib/api';
import { 
  Profile, 
  Project, 
  Experience, 
  SkillCategory, 
  Education, 
  Certification, 
  DashboardItem 
} from '../types';
import { initialProfile } from '../data/initialProfile';
import { initialProjects } from '../data/initialProjects';
import { initialExperiences } from '../data/initialExperiences';
import { initialSkills } from '../data/initialSkills';
import { initialEducation } from '../data/initialEducation';
import { initialCertifications } from '../data/initialCertifications';
import { initialDashboards } from '../data/initialDashboards';

export const HomePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);
  const [skills, setSkills] = useState<SkillCategory[]>(initialSkills);
  const [education, setEducation] = useState<Education[]>(initialEducation);
  const [certifications, setCertifications] = useState<Certification[]>(initialCertifications);
  const [dashboards, setDashboards] = useState<DashboardItem[]>(initialDashboards);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [prof, projs, exps, sks, edu, certs, dash] = await Promise.all([
          fetchProfile(),
          fetchProjects(false), // only published
          fetchExperiences(),
          fetchSkills(),
          fetchEducation(),
          fetchCertifications(),
          fetchDashboards()
        ]);

        setProfile(prof);
        setProjects(projs);
        setExperiences(exps);
        setSkills(sks);
        setEducation(edu);
        setCertifications(certs);
        setDashboards(dash);
      } catch (err) {
        console.warn('Error loading initial data, using defaults:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const location = useLocation();

  // Handle direct hash navigation e.g. /#projects, /#about, /#experience, /#education, /#certifications, /#contact
  useEffect(() => {
    const rawHash = location.hash || window.location.hash;
    if (!isLoading && rawHash) {
      const id = rawHash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isLoading, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#080d1a] transition-colors duration-200">
      <Navbar resumeUrl={profile.resume_url} />

      <main className="flex-1">
        {/* 1. Hero */}
        <Hero profile={profile} />

        {/* 2. Professional Summary */}
        <AboutSection profile={profile} />

        {/* 3. Core Analytics Capabilities */}
        <CapabilitiesSection />

        {/* 4. Quantitative Portfolio Metrics */}
        <QuantitativeMetricsSection />

        {/* 5. Featured Projects (includes 7 Case Studies, Comparison Matrix, and Telecom Analytics Showcase) */}
        <FeaturedProjects projects={projects} />

        {/* 6. Domain Expertise */}
        <DomainExpertiseSection />

        {/* 7. Machine Learning & Analytics Methods */}
        <MethodsSection />

        {/* 8. Professional Experience */}
        <ExperienceTimeline experiences={experiences} />

        {/* 9. Education */}
        <EducationSection 
          education={education} 
          certifications={certifications} 
        />

        {/* 10. Technology Stack */}
        <TechStackSection />

        {/* 11. Contact / Resume CTA */}
        <ContactSection
          email={profile.email}
          phone={profile.phone}
          linkedinUrl={profile.linkedin_url}
          githubUrl={profile.github_url}
          location={profile.location}
        />
      </main>

      <Footer
        resumeUrl={profile.resume_url}
        email={profile.email}
        linkedinUrl={profile.linkedin_url}
        githubUrl={profile.github_url}
      />
    </div>
  );
};
