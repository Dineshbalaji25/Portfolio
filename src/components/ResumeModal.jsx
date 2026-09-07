import React, { useState } from 'react';
import { personalInfo, experience, education, certifications, skillsMatrix } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawResumeText = `DINESH R BALAJI
Bengaluru, India | ${personalInfo.email} | ${personalInfo.phone} | linkedin.com/in/dineshrbalaji | github.com/Dineshbalaji25

PROFESSIONAL SUMMARY
Full Stack Developer with 1.5+ years of experience building and scaling a live Django/PostgreSQL e-commerce platform, with a specialization in server-side marketing-technology integrations (Meta Conversions API, Google Ads Data Manager API, GA4) and growing hands-on experience with LLM-powered features (LangChain, RAG, OpenAI API). Comfortable owning a feature end-to-end — architecture, backend implementation, AWS/Docker deployment, and production debugging.

TECHNICAL SKILLS
Languages & Frameworks: Python, Django, JavaScript, React, Node.js, REST APIs, HTML/CSS
Databases & Cloud: PostgreSQL, AWS (EC2, S3, CloudFormation, CloudFront), Docker, CapRover, Git
AI / GenAI: LangChain, OpenAI API, RAG, FAISS, TensorFlow/Keras, Deep Learning, Prompt Engineering
Marketing & Ads Tech: Meta Conversions API & Pixel, Google Ads Data Manager API, GA4, Customer Match, Pinterest API, Google Tag Manager
Other: Power BI, Cybersecurity fundamentals, IoT, OOP, SDLC

WORK EXPERIENCE
Full Stack Developer | Jan 2025 – Present
Thotfy Technologies Pvt Ltd, Bengaluru — thotfy.com (Django/Oscar e-commerce marketplace)
• Own backend development for thotfy.com, a live Django/Oscar marketplace — building and maintaining product catalog, cart, checkout, and order-processing modules used by active sellers and buyers.
• Built REST APIs and templated email workflows (order confirmations, cart-abandonment with dynamic coupon/discount logic) on top of the core Django/Oscar stack.
• Improved backend response times by ~20% through Django ORM and PostgreSQL query optimization; diagnosed and remediated a production PostgreSQL data-corruption issue (MultiXactId wraparound) on core catalog tables.
• Implemented secure authentication and structured order/seller workflows; deployed and maintain the platform on AWS/CapRover (Docker) with Git-based version control.
• Extended the platform with server-side marketing-technology integrations: Meta Conversions API (Purchase, Lead, ViewContent with event-id deduplication), GA4 via Google's Data Manager API, a Customer Match audience sync, and Pinterest/Meta catalog sync — improving attribution accuracy against iOS14+ and ad-blocker signal loss.
• Designed a 4-stage seller-onboarding attribution system (registration → preview → first product → first sale) unifying Meta and Google tracking through a persisted attribution record, deduplicated across identified and anonymous sessions.

Python Developer Intern | Aug 2023 – Dec 2024
Emvega Technologies Pvt Ltd, Bengaluru
• Built backend e-commerce modules and REST APIs in Django, optimizing PostgreSQL queries for performance under load.
• Developed ETL pipelines and data validation logic; deployed services on AWS EC2/S3.
• Collaborated with frontend and QA teams on bug fixes and performance improvements.

SELECTED PROJECTS
• CodeMastery (Django LMS) — Side-project learning platform with LeetCode-style problems and DSA visualizations; shipped core scaffold and free-enrollment access control, with a React + Vite interactive-visualization module (Web Speech API narration, synced code panel) in progress.
• Technical Audit — Multi-tenant SaaS CRM — Ran a feature-completeness and security audit of a Django-based CRM against a market leader, then produced a remediation plan covering credential encryption, field-level security, and workflow-state enforcement, plus an AI roadmap.
• AI Chatbot Production Audit — Audited and fixed critical bugs in an LLM-driven Google Ads chatbot codebase, then authored a 25-task production-readiness specification for an autonomous coding agent.

EDUCATION
Master of Computer Applications (MCA): St. Joseph College of Arts and Science — 2023–2025 — CGPA: 7.00/10
Bachelor of Computer Applications (BCA): Kristu Jayanti College — 2020–2023 — 70.00%

CERTIFICATIONS
AWS Solutions Architect — Amazon Web Services (Mar–Sep 2025)
Computer Networks and Network Security — IBM (Oct–Nov 2025)
Data Science & Analytics Using Python — NPTEL (Jan–May 2022)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([rawResumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dinesh_R_Balaji_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-modal-controls">
          <div className="resume-control-title">
            <span>Dinesh_R_Balaji_Resume.pdf</span>
            <span className="badge badge-emerald">Verified &amp; Up to Date</span>
          </div>

          <div className="resume-control-actions">
            <button onClick={handleCopy} className="btn btn-secondary btn-sm" title="Copy Full Resume Text">
              {copied ? <Check size={14} className="copy-success" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button onClick={handleDownloadTxt} className="btn btn-secondary btn-sm" title="Download Text File">
              <Download size={14} />
              <span>Download .txt</span>
            </button>

            <button onClick={handlePrint} className="btn btn-primary btn-sm" title="Print or Save as PDF">
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Paper Document Preview */}
        <div className="resume-paper-view print-section">
          {/* Header */}
          <div className="resume-paper-header">
            <h1 className="resume-paper-name">DINESH R BALAJI</h1>
            <div className="resume-paper-contact">
              <span>Bengaluru, India</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span>•</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/dineshrbalaji</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">github.com/Dineshbalaji25</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-paper-section">
            <h2 className="resume-paper-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="resume-paper-text">
              Full Stack Developer with 1.5+ years of experience building and scaling a live Django/PostgreSQL e-commerce platform, with a specialization in server-side marketing-technology integrations (Meta Conversions API, Google Ads Data Manager API, GA4) and growing hands-on experience with LLM-powered features (LangChain, RAG, OpenAI API). Comfortable owning a feature end-to-end — architecture, backend implementation, AWS/Docker deployment, and production debugging.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-paper-section">
            <h2 className="resume-paper-section-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-list">
              <p><strong>Languages &amp; Frameworks:</strong> Python, Django, JavaScript, React, Node.js, REST APIs, HTML/CSS</p>
              <p><strong>Databases &amp; Cloud:</strong> PostgreSQL, AWS (EC2, S3, CloudFormation, CloudFront), Docker, CapRover, Git</p>
              <p><strong>AI / GenAI:</strong> LangChain, OpenAI API, RAG, FAISS, TensorFlow/Keras, Deep Learning, Prompt Engineering</p>
              <p><strong>Marketing &amp; Ads Tech:</strong> Meta Conversions API &amp; Pixel, Google Ads Data Manager API, GA4, Customer Match, Pinterest API, Google Tag Manager</p>
              <p><strong>Other:</strong> Power BI, Cybersecurity fundamentals, IoT, OOP, SDLC</p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="resume-paper-section">
            <h2 className="resume-paper-section-title">WORK EXPERIENCE</h2>
            
            <div className="resume-job-item">
              <div className="resume-job-header">
                <div>
                  <strong className="resume-job-role">Full Stack Developer</strong> — <span>Thotfy Technologies Pvt Ltd, Bengaluru</span>
                </div>
                <span className="resume-job-period">Jan 2025 – Present</span>
              </div>
              <div className="resume-job-sub">thotfy.com (Django/Oscar e-commerce marketplace)</div>
              <ul className="resume-job-bullets">
                <li>Own backend development for thotfy.com, a live Django/Oscar marketplace — building and maintaining product catalog, cart, checkout, and order-processing modules used by active sellers and buyers.</li>
                <li>Built REST APIs and templated email workflows (order confirmations, cart-abandonment with dynamic coupon/discount logic) on top of the core Django/Oscar stack.</li>
                <li>Improved backend response times by ~20% through Django ORM and PostgreSQL query optimization; diagnosed and remediated a production PostgreSQL data-corruption issue (MultiXactId wraparound) on core catalog tables.</li>
                <li>Implemented secure authentication and structured order/seller workflows; deployed and maintain the platform on AWS/CapRover (Docker) with Git-based version control.</li>
                <li>Extended the platform with server-side marketing-technology integrations: Meta Conversions API (Purchase, Lead, ViewContent with event-id deduplication), GA4 via Google's Data Manager API, a Customer Match audience sync, and Pinterest/Meta catalog sync — improving attribution accuracy against iOS14+ and ad-blocker signal loss.</li>
                <li>Designed a 4-stage seller-onboarding attribution system (registration → preview → first product → first sale) unifying Meta and Google tracking through a persisted attribution record, deduplicated across identified and anonymous sessions.</li>
              </ul>
            </div>

            <div className="resume-job-item">
              <div className="resume-job-header">
                <div>
                  <strong className="resume-job-role">Python Developer Intern</strong> — <span>Emvega Technologies Pvt Ltd, Bengaluru</span>
                </div>
                <span className="resume-job-period">Aug 2023 – Dec 2024</span>
              </div>
              <ul className="resume-job-bullets">
                <li>Built backend e-commerce modules and REST APIs in Django, optimizing PostgreSQL queries for performance under load.</li>
                <li>Developed ETL pipelines and data validation logic; deployed services on AWS EC2/S3.</li>
                <li>Collaborated with frontend and QA teams on bug fixes and performance improvements.</li>
              </ul>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="resume-paper-section">
            <h2 className="resume-paper-section-title">SELECTED PROJECTS</h2>
            <ul className="resume-projects-bullets">
              <li><strong>CodeMastery (Django LMS):</strong> Side-project learning platform with LeetCode-style problems and DSA visualizations; shipped core scaffold and free-enrollment access control, with a React + Vite interactive-visualization module (Web Speech API narration, synced code panel) in progress.</li>
              <li><strong>Technical Audit — Multi-tenant SaaS CRM (Nova-CRM):</strong> Ran a feature-completeness and security audit of a Django-based CRM against a market leader, then produced a remediation plan covering credential encryption, field-level security, and workflow-state enforcement, plus an AI roadmap (next-action suggestions, call-sentiment analysis, revenue forecasting).</li>
              <li><strong>AI Chatbot Production Audit (Google Ads Chatbot):</strong> Audited and fixed critical bugs in an LLM-driven Google Ads chatbot codebase, then authored a 25-task production-readiness specification for an autonomous coding agent.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="resume-paper-section">
            <h2 className="resume-paper-section-title">EDUCATION</h2>
            <div className="resume-edu-item">
              <div><strong>Master of Computer Applications (MCA):</strong> St. Joseph College of Arts and Science</div>
              <div>2023–2025 | CGPA: 7.00/10</div>
            </div>
            <div className="resume-edu-item">
              <div><strong>Bachelor of Computer Applications (BCA):</strong> Kristu Jayanti College</div>
              <div>2020–2023 | 70.00%</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-paper-section">
            <h2 className="resume-paper-section-title">CERTIFICATIONS</h2>
            <p className="resume-cert-line">
              <strong>AWS Solutions Architect</strong> — Amazon Web Services (Mar–Sep 2025) | <strong>Computer Networks and Network Security</strong> — IBM (Oct–Nov 2025) | <strong>Data Science &amp; Analytics Using Python</strong> — NPTEL (Jan–May 2022)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
