# Dinesh R Balaji — Developer Portfolio

Personal developer portfolio website for **Dinesh R Balaji**, Full Stack Developer (Django & PostgreSQL specialist) and Martech Systems Engineer based in Bengaluru, India.

Targeted for **Python Developer** and **Junior AI Engineer** roles.

## Tech Stack & Architecture
- **Framework**: React 18 + Vite
- **Styling**: Vanilla CSS with custom design tokens, modern typography (`Inter` + `JetBrains Mono`), dark/light theme switching with system-preference sync, and glassmorphic styling
- **Icons**: `lucide-react`
- **Output**: 100% static client-side bundle in `dist/`, zero backend or server dependencies
- **Deployment Target**: GitHub Pages (`https://dineshbalaji25.github.io`) via GitHub Actions

---

## Repository Structure
```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions workflow for GitHub Pages
├── dist/                     # Production static build output
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive navigation, theme switcher, modal triggers
│   │   ├── Hero.jsx          # Positioning statement, impact metrics, code terminal
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
│   └── main.jsx
├── index.html                # Semantic HTML5, SEO meta tags, anti-FOUC script
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

## Deploying to GitHub Pages (`Dineshbalaji25.github.io`)

Your repository is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site whenever you push to `main`.

### Step 1: Initialize Git and Commit
```bash
cd /home/dinesh/Portfolio
git init
git add .
git commit -m "feat: Initial commit of personal portfolio site"
```

### Step 2: Add Remote and Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/Dineshbalaji25/Dineshbalaji25.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages via Actions
1. Go to your repository on GitHub: `https://github.com/Dineshbalaji25/Dineshbalaji25.github.io`
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically trigger and deploy your site to `https://dineshbalaji25.github.io`.
