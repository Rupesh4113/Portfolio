# Rupesh Kumar Pandey — Senior Data Scientist Portfolio Website

An executive, production-ready personal Data Science & Machine Learning portfolio website designed for **Rupesh Kumar Pandey** (Senior Data Scientist | Machine Learning | AI | Data Analytics) based in Bengaluru, India.

Built with **React, TypeScript, Vite, Tailwind CSS, and Supabase**, this platform demonstrates technical depth, systems thinking, business impact, and an interactive CMS for effortless content updates without touching source code.

---

## 🌟 Executive Overview

- **Owner:** Rupesh Kumar Pandey
- **Role:** Senior Data Scientist & Senior Tech Lead
- **Location:** Bengaluru, India
- **Core Competencies:** Machine Learning (XGBoost, Random Forest, Time Series), Predictive Analytics, ETL/Data Engineering, Executive BI Dashboards (Power BI, Tableau), Transportation & Logistics, Retail / CPG Analytics.
- **Enterprise Track Record:** Persistent Systems (Client: Blue Yonder TMS), Brillio, Citixsys, Mindtree, Sonovision / Ortec Group (Client: Airbus Toulouse, France).
- **Education:** Master of Data Science (Global) — Deakin University, Australia (2025).

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 18 with TypeScript |
| **Bundler & Build Tool** | Vite 6 (Fast HMR, optimized chunking) |
| **Styling & Design System** | Tailwind CSS (Technical dark/light palettes, frosted glass, responsive) |
| **Icons & Visuals** | Lucide React + Custom Enterprise Architecture SVGs |
| **Database & Auth** | Supabase (PostgreSQL 15, Supabase Auth, Storage) |
| **Security** | PostgreSQL Row-Level Security (RLS) on all tables |
| **Deployment Options** | Cloudflare Pages, Vercel, Netlify, or GitHub Pages |
| **Data Layer** | Dual-mode repository with Supabase and graceful local fallback |

---

## 🚀 Key Features

### 1. Public Portfolio
- **Hero & Branding:** Executive introduction, status indicators, quick CTAs ("View Projects", "Download Resume", "Contact Me", "LinkedIn", "GitHub").
- **Animated Statistics:** 11+ Years IT & Tech experience, 4+ Years DS/ML, Deakin University Master's degree, and Blue Yonder enterprise highlights.
- **Strict Resume Alignment:** About Me section and career timeline matching Rupesh's authentic professional record (Persistent Systems / Blue Yonder, Brillio, Citixsys, Mindtree, Airbus).
- **15 Deep Data Science Case Studies:**
  - **5 Professional Resume Projects:**
    1. Transit-Time & ETA Prediction (*Blue Yonder TMS, XGBoost, 94.6% Window Accuracy*)
    2. Fleet Failure Prediction (*Zoom Car, Random Forest, 18% Breakdown Reduction*)
    3. Customer Churn & CLV Prediction (*XGBoost, Survival Analysis, +20% Retention ROI*)
    4. Real-Time Twitter Sentiment Analysis (*VADER + LSTM NLP, 87% Accuracy*)
    5. Supply Chain Network Optimization (*FMCG, Clustering & Linear Programming, 12.4% Cost Reduction*)
  - **10 Retail / CPG Demonstration Projects** (clearly marked as Portfolio / Demonstration Studies):
    6. SKU-Level Demand Forecasting
    7. Price Elasticity & Discount Optimization
    8. Promotion Uplift Modeling & Causal ML
    9. Inventory Optimization & Stockout Prediction
    10. Multi-Channel Omnichannel Demand Forecasting
    11. Customer Segmentation & Behavioral CLV (BG/NBD)
    12. Personalized Product Recommendation Engine (ALS + Re-Ranker)
    13. AWS SageMaker Production MLOps Architecture
    14. CPG Marketing Campaign Performance & ROI (MMM)
    15. Executive Demand & Pricing Analytics Platform
- **Interactive Architecture Diagrams:** Visualizes pipelines for Demand Forecasting, Pricing Elasticity, SageMaker MLOps, Supply Chain Logistics, Transportation Lanes, and NLP.
- **Dedicated Power BI / Analytics Section:** 6 interactive executive dashboard case studies with operational KPIs and business purpose callouts.
- **Skills Grid:** Practical skill cards without artificial percentage bars.
- **Spam-Protected Contact Form:** Honeypot field, client validation, celebratory confetti, and database persistence.
- **Dark / Light Mode:** Persistent executive theme toggle.

### 2. Admin CMS (`/admin`)
- **Protected Route & Authentication:** Supabase Auth with dev fallback for zero-friction local testing.
- **Project CRUD:** Create, edit, delete, and publish/unpublish case studies without touching source code.
- **Multi-Field Case Study Editor:** Title, slug, category, domain, metrics, algorithms, tech stack, and diagram selector.
- **Image & Resume PDF Upload:** Drag-and-drop file upload to Supabase Storage or local state.
- **Career Timeline & Profile Editor:** Edit roles, bio, contact links, and SEO tags.

---

## 📁 Repository Structure

```
Portfolio/
├── public/
│   ├── favicon.svg             # Modern data/AI themed favicon
│   ├── robots.txt              # Search engine directives
│   ├── sitemap.xml             # Search engine sitemap
│   └── resume/                 # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── admin/              # Admin CMS (ProjectManager, ProfileManager, etc.)
│   │   ├── common/             # Navbar, Footer, ThemeToggle, MetricCounter, Badge
│   │   ├── home/               # Hero, Stats, About, Timeline, Projects, Dashboards, Contact
│   │   └── projects/           # ProjectCard, CaseStudyView, ArchitectureDiagrams
│   ├── context/
│   │   ├── AuthContext.tsx     # Supabase Auth + local session context
│   │   └── ThemeContext.tsx    # Dark/Light mode theme state
│   ├── data/                   # Complete pre-seeded data records (15 projects, resume, etc.)
│   ├── lib/
│   │   ├── api.ts              # Abstracted data layer with Supabase & localStorage fallback
│   │   ├── supabase.ts         # Supabase client initializer
│   │   └── utils.ts            # Utility functions (cn, confetti)
│   ├── pages/
│   │   ├── HomePage.tsx        # Main public portfolio view
│   │   └── AdminPage.tsx       # Secure CMS dashboard
│   ├── types/                  # TypeScript data interfaces
│   ├── App.tsx                 # Client routing
│   ├── main.tsx                # React root mount
│   └── index.css               # Tailwind directives and grid styles
├── supabase/
│   ├── schema.sql              # Database DDL, RLS policies & storage configuration
│   └── seed.sql                # Initial SQL data seeds for PostgreSQL
├── .env.example                # Documented environment variables
├── index.html                  # SEO, OpenGraph & JSON-LD schema markup
├── package.json                # Dependencies and build scripts
├── tailwind.config.js          # Tailwind technical color palette configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- Node.js LTS (v20+ or v22+)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Rupesh4113/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The application works 100% out of the box with rich built-in seeds and local storage persistence. You can explore the site, open the case studies, and test the Admin CMS immediately at `/admin` even before configuring Supabase!

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be output to `dist/`.

---

## 🗄️ Supabase Cloud Setup Guide

To connect the application to your own live PostgreSQL database, authentication, and cloud storage:

### Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a free account.
2. Click **New Project** and choose a database region (e.g., *Singapore* or *Mumbai* for India).

### Step 2: Execute Database Schema
1. In your Supabase project dashboard, navigate to the **SQL Editor**.
2. Open the file `supabase/schema.sql` from this repository.
3. Paste the contents into the SQL Editor and click **Run**.
   - This creates all 10 relational tables (`profiles`, `projects`, `experiences`, `skills`, `education`, `certifications`, `dashboards`, `contact_messages`, `site_settings`).
   - Configures **Row Level Security (RLS)** so public users can only read published content while only authenticated admins can edit.
   - Configures storage buckets (`portfolio-assets`, `project-images`, `resumes`).

### Step 3: Execute Initial Data Seeds
1. In the Supabase **SQL Editor**, open `supabase/seed.sql`.
2. Paste the contents and click **Run** to populate your database with Rupesh's profile, career history, education, and all 15 project records.

### Step 4: Create Admin User
1. In the Supabase dashboard, go to **Authentication** -> **Users**.
2. Click **Add User** -> **Create User**.
3. Enter your admin email and a secure password.

### Step 5: Configure Environment Variables
Create a `.env` file in the root of your project:
```bash
cp .env.example .env
```
Fill in your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_ADMIN_EMAIL=rupesh.pandey@example.com
VITE_SITE_URL=https://rupeshpandey.dev
```

Restart your Vite dev server (`npm run dev`). The application is now fully synced with your live Supabase cloud instance!

---

## 🌐 Cloud Deployment Guide

This portfolio can be hosted for free or at very low cost on any modern static hosting platform:

### Deploy to Vercel
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the `Rupesh4113/Portfolio` repository.
3. In **Build and Output Settings**, Vite will be automatically detected:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add the environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`).
5. Click **Deploy**.

### Deploy to Cloudflare Pages
1. Go to the Cloudflare Dashboard -> **Workers & Pages** -> **Create Application** -> **Pages**.
2. Connect your GitHub account and select `Portfolio`.
3. Set:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add environment variables under Settings.
5. Click **Save and Deploy**.

### Deploy to Netlify
1. Connect your GitHub repo in [netlify.com](https://netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Add a `public/_redirects` file with: `/* /index.html 200` to support client-side routing.
4. Add environment variables and click **Deploy Site**.

---

## 🔒 Security & Performance Features

- **Zero Hardcoded Secrets:** Only public anonymous keys are utilized in client-side code.
- **PostgreSQL Row Level Security (RLS):** Public requests can only `SELECT` records with `status = 'published'`. All modifying mutations require authenticated Supabase session tokens.
- **Anti-Spam Contact Protection:** Honeypot field and client validation prevent bot submissions without relying on intrusive third-party captcha widgets.
- **Optimized Asset Chunking:** Vendor, Supabase, and icon libraries are cleanly split into discrete cacheable chunks.
- **SEO & Structured Data:** Semantic HTML5, Open Graph preview tags, Twitter Card tags, `robots.txt`, `sitemap.xml`, and JSON-LD schema for Google Rich Search Results (`Person` & `CreativeWork`).

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

**Built with pride for Rupesh Kumar Pandey — Senior Data Scientist | Machine Learning | AI | Data Analytics.**
