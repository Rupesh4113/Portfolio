import { supabase, isSupabaseConfigured } from './supabase';
import { 
  Profile, 
  Project, 
  Experience, 
  SkillCategory, 
  Education, 
  Certification, 
  DashboardItem, 
  ContactMessage, 
  SiteSettings 
} from '../types';
import { initialProfile } from '../data/initialProfile';
import { initialProjects } from '../data/initialProjects';
import { initialExperiences } from '../data/initialExperiences';
import { initialSkills } from '../data/initialSkills';
import { initialEducation } from '../data/initialEducation';
import { initialCertifications } from '../data/initialCertifications';
import { initialDashboards } from '../data/initialDashboards';
import { initialSettings } from '../data/initialSettings';

// Helper for Local Storage Fallback
const LOCAL_KEYS = {
  PROFILE: 'rkp_portfolio_profile',
  PROJECTS: 'rkp_portfolio_projects',
  EXPERIENCES: 'rkp_portfolio_experiences',
  SKILLS: 'rkp_portfolio_skills',
  EDUCATION: 'rkp_portfolio_education',
  CERTIFICATIONS: 'rkp_portfolio_certifications',
  DASHBOARDS: 'rkp_portfolio_dashboards',
  SETTINGS: 'rkp_portfolio_settings',
  MESSAGES: 'rkp_portfolio_messages',
};

function getLocal<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(item);
  } catch (err) {
    console.warn(`Error reading localStorage for key ${key}:`, err);
    return fallback;
  }
}

function setLocal<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`Error writing to localStorage for key ${key}:`, err);
  }
}

// ==========================================
// PROFILE API
// ==========================================
export async function fetchProfile(): Promise<Profile> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('profiles').select('*').single();
      if (!error && data) {
        return data as Profile;
      }
    } catch (e) {
      console.warn('Supabase fetchProfile error, falling back:', e);
    }
  }

  const local = getLocal<Profile>(LOCAL_KEYS.PROFILE, initialProfile);
  return {
    ...initialProfile,
    ...local,
    headline: initialProfile.headline,
    short_bio: initialProfile.short_bio,
    extended_bio: initialProfile.extended_bio,
    resume_url: initialProfile.resume_url, // Always keep fresh valid resume path
    avatar_url: (local.avatar_url && !local.avatar_url.includes('favicon.svg') && !local.avatar_url.startsWith('public'))
      ? local.avatar_url
      : initialProfile.avatar_url
  };
}

export async function updateProfile(updated: Partial<Profile>): Promise<Profile> {
  const current = await fetchProfile();
  const merged: Profile = {
    ...current,
    ...updated,
    updated_at: new Date().toISOString()
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('profiles').upsert(merged).select().single();
      if (!error && data) {
        setLocal(LOCAL_KEYS.PROFILE, data);
        return data as Profile;
      }
    } catch (e) {
      console.warn('Supabase updateProfile error, persisting locally:', e);
    }
  }

  setLocal(LOCAL_KEYS.PROFILE, merged);
  return merged;
}

// ==========================================
// PROJECTS API
// ==========================================
export async function fetchProjects(includeDrafts = false): Promise<Project[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      let query = supabase.from('projects').select('*').order('display_order', { ascending: true });
      if (!includeDrafts) {
        query = query.eq('status', 'published');
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data as Project[];
      }
    } catch (e) {
      console.warn('Supabase fetchProjects error, falling back:', e);
    }
  }

  const local = getLocal<Project[]>(LOCAL_KEYS.PROJECTS, initialProjects);
  // Guarantee canonical projects have updated architecture_diagram_type and quantitative_chart_type
  const merged = initialProjects.map(initProj => {
    const found = local.find(l => l.id === initProj.id);
    return {
      ...initProj,
      ...(found || {}),
      architecture_diagram_type: initProj.architecture_diagram_type,
      quantitative_chart_type: initProj.quantitative_chart_type,
    };
  });
  // Include any extra user-created projects from admin
  const extras = local.filter(l => !initialProjects.some(ip => ip.id === l.id));
  const all = [...merged, ...extras];
  setLocal(LOCAL_KEYS.PROJECTS, all);
  return includeDrafts ? all : all.filter(p => p.status === 'published');
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('projects').select('*').eq('slug', slug).single();
      if (!error && data) {
        return data as Project;
      }
    } catch (e) {
      console.warn('Supabase fetchProjectBySlug error, falling back:', e);
    }
  }

  const all = await fetchProjects(true);
  return all.find(p => p.slug === slug) || null;
}

export async function saveProject(project: Partial<Project>): Promise<Project> {
  const all = getLocal<Project[]>(LOCAL_KEYS.PROJECTS, initialProjects);
  const now = new Date().toISOString();

  let target: Project;
  if (project.id) {
    // Update existing
    const existing = all.find(p => p.id === project.id);
    target = {
      ...(existing || initialProjects[0]),
      ...project,
      updated_at: now
    } as Project;
    const index = all.findIndex(p => p.id === project.id);
    if (index >= 0) all[index] = target;
    else all.push(target);
  } else {
    // Create new
    target = {
      ...project,
      id: `proj-${Date.now()}`,
      created_at: now,
      updated_at: now,
      display_order: all.length + 1,
      status: project.status || 'draft',
      is_featured: project.is_featured ?? false,
      gallery_images: project.gallery_images || [],
      business_impact: project.business_impact || [],
      tech_stack: project.tech_stack || [],
      algorithms_used: project.algorithms_used || [],
      key_learnings: project.key_learnings || [],
      future_improvements: project.future_improvements || [],
      data_sources: project.data_sources || [],
      eda_insights: project.eda_insights || [],
      feature_engineering: project.feature_engineering || [],
      evaluation_metrics: project.evaluation_metrics || {}
    } as Project;
    all.push(target);
  }

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('projects').upsert(target).select().single();
      if (!error && data) {
        setLocal(LOCAL_KEYS.PROJECTS, all);
        return data as Project;
      }
    } catch (e) {
      console.warn('Supabase saveProject error, persisting locally:', e);
    }
  }

  setLocal(LOCAL_KEYS.PROJECTS, all);
  return target;
}

export async function deleteProject(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('projects').delete().eq('id', id);
    } catch (e) {
      console.warn('Supabase deleteProject error:', e);
    }
  }

  const all = getLocal<Project[]>(LOCAL_KEYS.PROJECTS, initialProjects);
  const filtered = all.filter(p => p.id !== id);
  setLocal(LOCAL_KEYS.PROJECTS, filtered);
  return true;
}

// ==========================================
// EXPERIENCES API
// ==========================================
export async function fetchExperiences(): Promise<Experience[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('experiences').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) return data as Experience[];
    } catch (e) {
      console.warn('Supabase fetchExperiences error:', e);
    }
  }
  return getLocal<Experience[]>(LOCAL_KEYS.EXPERIENCES, initialExperiences);
}

export async function saveExperience(exp: Experience): Promise<Experience> {
  const all = getLocal<Experience[]>(LOCAL_KEYS.EXPERIENCES, initialExperiences);
  const index = all.findIndex(e => e.id === exp.id);
  if (index >= 0) all[index] = exp;
  else all.push(exp);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('experiences').upsert(exp);
    } catch (e) {
      console.warn('Supabase saveExperience error:', e);
    }
  }
  setLocal(LOCAL_KEYS.EXPERIENCES, all);
  return exp;
}

export async function deleteExperience(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('experiences').delete().eq('id', id);
    } catch (e) {
      console.warn('Supabase deleteExperience error:', e);
    }
  }
  const all = getLocal<Experience[]>(LOCAL_KEYS.EXPERIENCES, initialExperiences);
  setLocal(LOCAL_KEYS.EXPERIENCES, all.filter(e => e.id !== id));
  return true;
}

// ==========================================
// SKILLS API
// ==========================================
export async function fetchSkills(): Promise<SkillCategory[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('skills').select('*');
      if (!error && data && data.length > 0) return data as SkillCategory[];
    } catch (e) {
      console.warn('Supabase fetchSkills error:', e);
    }
  }
  return getLocal<SkillCategory[]>(LOCAL_KEYS.SKILLS, initialSkills);
}

export async function saveSkills(categories: SkillCategory[]): Promise<SkillCategory[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('skills').upsert(categories);
    } catch (e) {
      console.warn('Supabase saveSkills error:', e);
    }
  }
  setLocal(LOCAL_KEYS.SKILLS, categories);
  return categories;
}

// ==========================================
// EDUCATION & CERTIFICATIONS API
// ==========================================
export async function fetchEducation(): Promise<Education[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('education').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) return data as Education[];
    } catch (e) {
      console.warn('Supabase fetchEducation error:', e);
    }
  }
  return getLocal<Education[]>(LOCAL_KEYS.EDUCATION, initialEducation);
}

export async function saveEducation(edu: Education): Promise<Education> {
  const all = getLocal<Education[]>(LOCAL_KEYS.EDUCATION, initialEducation);
  const idx = all.findIndex(e => e.id === edu.id);
  if (idx >= 0) all[idx] = edu;
  else all.push(edu);

  if (isSupabaseConfigured && supabase) {
    try { await supabase.from('education').upsert(edu); } catch (e) { console.warn(e); }
  }
  setLocal(LOCAL_KEYS.EDUCATION, all);
  return edu;
}

export async function deleteEducation(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try { await supabase.from('education').delete().eq('id', id); } catch (e) { console.warn(e); }
  }
  const all = getLocal<Education[]>(LOCAL_KEYS.EDUCATION, initialEducation);
  setLocal(LOCAL_KEYS.EDUCATION, all.filter(e => e.id !== id));
  return true;
}

export async function fetchCertifications(): Promise<Certification[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('certifications').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) return data as Certification[];
    } catch (e) {
      console.warn('Supabase fetchCertifications error:', e);
    }
  }
  return getLocal<Certification[]>(LOCAL_KEYS.CERTIFICATIONS, initialCertifications);
}

export async function saveCertification(cert: Certification): Promise<Certification> {
  const all = getLocal<Certification[]>(LOCAL_KEYS.CERTIFICATIONS, initialCertifications);
  const idx = all.findIndex(c => c.id === cert.id);
  if (idx >= 0) all[idx] = cert;
  else all.push(cert);

  if (isSupabaseConfigured && supabase) {
    try { await supabase.from('certifications').upsert(cert); } catch (e) { console.warn(e); }
  }
  setLocal(LOCAL_KEYS.CERTIFICATIONS, all);
  return cert;
}

export async function deleteCertification(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try { await supabase.from('certifications').delete().eq('id', id); } catch (e) { console.warn(e); }
  }
  const all = getLocal<Certification[]>(LOCAL_KEYS.CERTIFICATIONS, initialCertifications);
  setLocal(LOCAL_KEYS.CERTIFICATIONS, all.filter(c => c.id !== id));
  return true;
}

// ==========================================
// DASHBOARDS API
// ==========================================
export async function fetchDashboards(): Promise<DashboardItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('dashboards').select('*');
      if (!error && data && data.length > 0) return data as DashboardItem[];
    } catch (e) {
      console.warn('Supabase fetchDashboards error:', e);
    }
  }
  return getLocal<DashboardItem[]>(LOCAL_KEYS.DASHBOARDS, initialDashboards);
}

export async function saveDashboard(dash: DashboardItem): Promise<DashboardItem> {
  const all = getLocal<DashboardItem[]>(LOCAL_KEYS.DASHBOARDS, initialDashboards);
  const idx = all.findIndex(d => d.id === dash.id);
  if (idx >= 0) all[idx] = dash;
  else all.push(dash);

  if (isSupabaseConfigured && supabase) {
    try { await supabase.from('dashboards').upsert(dash); } catch (e) { console.warn(e); }
  }
  setLocal(LOCAL_KEYS.DASHBOARDS, all);
  return dash;
}

export async function deleteDashboard(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try { await supabase.from('dashboards').delete().eq('id', id); } catch (e) { console.warn(e); }
  }
  const all = getLocal<DashboardItem[]>(LOCAL_KEYS.DASHBOARDS, initialDashboards);
  setLocal(LOCAL_KEYS.DASHBOARDS, all.filter(d => d.id !== id));
  return true;
}

// ==========================================
// CONTACT & SITE SETTINGS API
export async function submitContactMessage(msg: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const newMsg: ContactMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: msg.name,
    email: msg.email,
    phone: msg.phone || '',
    subject: msg.subject,
    message: msg.message,
    created_at: new Date().toISOString()
  };

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('contact_messages').insert([newMsg]);
    } catch (e) {
      console.warn('Supabase submitContactMessage error:', e);
    }
  }

  // Always persist locally
  const all = getLocal<ContactMessage[]>(LOCAL_KEYS.MESSAGES, []);
  setLocal(LOCAL_KEYS.MESSAGES, [newMsg, ...all]);

  // Real Email Notification Delivery to amerupesh08@gmail.com
  try {
    const targetEmail = 'amerupesh08@gmail.com';
    await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: newMsg.name,
        email: newMsg.email,
        phone: newMsg.phone || 'Not provided',
        subject: newMsg.subject,
        message: newMsg.message,
        _subject: `Portfolio Message from ${newMsg.name}: ${newMsg.subject || 'General Inquiry'}`,
        _replyto: newMsg.email,
        _template: 'table',
        _captcha: 'false'
      })
    }).catch((err) => {
      console.warn('FormSubmit notification error:', err);
    });
  } catch (err) {
    console.warn('Background email notification error:', err);
  }

  return true;
}

export async function fetchContactMessages(): Promise<ContactMessage[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
      if (!error && data) return data as ContactMessage[];
    } catch (e) {
      console.warn('Supabase fetchContactMessages error:', e);
    }
  }
  return getLocal<ContactMessage[]>(LOCAL_KEYS.MESSAGES, []);
}

export async function fetchSiteSettings(): Promise<SiteSettings> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('site_settings').select('*').single();
      if (!error && data) return data as SiteSettings;
    } catch (e) {
      console.warn('Supabase fetchSiteSettings error:', e);
    }
  }
  return getLocal<SiteSettings>(LOCAL_KEYS.SETTINGS, initialSettings);
}

export async function updateSiteSettings(settings: SiteSettings): Promise<SiteSettings> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('site_settings').upsert({ id: 'primary', ...settings });
    } catch (e) {
      console.warn('Supabase updateSiteSettings error:', e);
    }
  }
  setLocal(LOCAL_KEYS.SETTINGS, settings);
  return settings;
}

// ==========================================
// ASSET & IMAGE UPLOAD
// ==========================================
export async function uploadFile(
  file: File, 
  bucket: 'project-images' | 'portfolio-assets' | 'resumes' = 'project-images'
): Promise<string> {
  if (isSupabaseConfigured && supabase) {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `${bucket}/${fileName}`;

      const { error: uploadError } = await supabase.storage.from(bucket).upload(filePath, file);
      if (!uploadError) {
        const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
        return data.publicUrl;
      }
    } catch (e) {
      console.warn('Supabase upload error, using local base64 fallback:', e);
    }
  }

  // Fallback: Read as Data URL
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

