# Dinesh R Balaji — Developer Portfolio

Personal developer portfolio website for **Dinesh R Balaji**, Full Stack Developer (Django & PostgreSQL specialist) and Martech Systems Engineer based in Bengaluru, India.

Targeted for **Python Developer** and **Junior AI Engineer** roles.

- **Live Production URL**: [https://dineshrbalaji-portfolio.vercel.app](https://dineshrbalaji-portfolio.vercel.app)
- **Repository**: [https://github.com/Dineshbalaji25/Portfolio](https://github.com/Dineshbalaji25/Portfolio)

---

## Tech Stack & Architecture
- **Framework**: React 18 + Vite
- **Analytics**: `@vercel/analytics` integrated for real-time web telemetry
- **Styling**: Vanilla CSS with custom design tokens, modern typography (`Inter` + `JetBrains Mono`), dark/light theme switching with system-preference sync, and glassmorphic styling
- **Icons**: `lucide-react`
- **Output**: 100% static client-side bundle in `dist/`, zero backend or server dependencies
- **Deployments**: Vercel (Production edge network) & GitHub Pages via GitHub Actions

---

## Repository Structure
```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions workflow for GitHub Pages
├── dist/                     # Production static build output (git-ignored)
├── public/
│   └── images/               # Project preview and case-study imagery
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive navigation, theme switcher, modal triggers
│   │   ├── Hero.jsx          # Positioning statement, impact metrics
│   │   ├── FlagshipStory.jsx # Dual-narrative case study (Thotfy + THOTFY-Analytic)
│   │   ├── Postmortems.jsx   # Technical deep-dives (MultiXactId, Meta CAPI, Attribution)
│   │   ├── ExperienceSection.jsx # Career timeline, education, and certifications
│   │   ├── ProjectsGrid.jsx  # Categorized GitHub projects with live links
│   │   ├── SkillsMatrix.jsx  # Categorized technical competencies
│   │   ├── ResumeModal.jsx   # Interactive verified resume viewer (print/PDF, copy, download)
│   │   ├── ContactModal.jsx  # Direct contact options with prefilled email templates
│   │   └── Footer.jsx        # Quick links, back-to-top, and copyright
│   ├── data/
│   │   └── portfolioData.js  # Authentic resume data, case studies, and skills
│   ├── App.jsx
│   ├── index.css             # Comprehensive design system tokens & component styles
│   └── main.jsx              # React DOM entry point with Vercel Analytics telemetry
├── index.html                # Semantic HTML5, SEO meta tags, anti-FOUC script
├── vercel.json               # Vercel SPA routing and build configuration
├── package.json
└── vite.config.js            # Relative base path configuration
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production bundle to dist/
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Deployment

### Vercel (Primary)
The repository is configured with `vercel.json` and connects automatically to Vercel. Pushing to `main` triggers an automatic zero-downtime production deployment to:
`https://dineshrbalaji-portfolio.vercel.app`

### GitHub Pages (Backup)
The workflow in `.github/workflows/deploy.yml` automatically builds and deploys the site to GitHub Pages whenever changes are pushed to `main`.
