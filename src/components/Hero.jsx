import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal, 
  Database, 
  Server, 
  Cpu, 
  Layers, 
  Github, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  FileCode
} from 'lucide-react';

export default function Hero({ onOpenResume, onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Availability Pill */}
        <div className="hero-badge-wrapper">
          <div className="status-pill">
            <span className="pulse-dot"></span>
            <span className="status-text">
              Active Job Search: <strong>Python Developer</strong> &amp; <strong>Junior AI Engineer</strong>
            </span>
          </div>
          <span className="location-pill">📍 Bengaluru, India</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-name">{personalInfo.name}</h1>
        <h2 className="hero-title">{personalInfo.title}</h2>

        {/* Positioning Statement */}
        <p className="hero-summary">{personalInfo.positioning}</p>

        {/* CTAs */}
        <div className="hero-cta-group">
          <a href="#flagship" className="btn btn-primary">
            <span>Explore Flagship Work</span>
            <ArrowRight size={16} />
          </a>

          <a href="#postmortems" className="btn btn-secondary">
            <Terminal size={16} />
            <span>Read Technical Postmortems</span>
          </a>

          <button onClick={onOpenResume} className="btn btn-ghost">
            <FileCode size={16} />
            <span>Interactive Resume</span>
          </button>
        </div>

        {/* Quick Social & Contact Links */}
        <div className="hero-social-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub Profile"
          >
            <Github size={18} />
            <span>github.com/Dineshbalaji25</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
            <span>linkedin.com/in/dineshrbalaji</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="social-link"
            title="Send Email"
          >
            <Mail size={18} />
            <span>{personalInfo.email}</span>
          </a>
        </div>

        {/* Architecture & Engineering Metrics Grid */}
        <div className="hero-metrics-grid">
          <div className="metric-card">
            <div className="metric-icon-wrapper cyan">
              <Server size={20} />
            </div>
            <div className="metric-value">1.5+ Years</div>
            <div className="metric-label">Live Production E-Commerce</div>
            <div className="metric-sub">Django Oscar &amp; PostgreSQL at Thotfy</div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrapper emerald">
              <TrendingUp size={20} />
            </div>
            <div className="metric-value">~20% Faster</div>
            <div className="metric-label">Backend Query Optimization</div>
            <div className="metric-sub">ORM tuning, indexing &amp; connection pools</div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrapper indigo">
              <Layers size={20} />
            </div>
            <div className="metric-value">4-Stage</div>
            <div className="metric-label">Persisted Seller Attribution</div>
            <div className="metric-sub">Unifying Meta &amp; Google across sessions</div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrapper amber">
              <Database size={20} />
            </div>
            <div className="metric-value">5 Ecosystems</div>
            <div className="metric-label">Martech &amp; FinTech Integrations</div>
            <div className="metric-sub">Meta CAPI, GA4, GDM, Pinterest, Zoho Books</div>
          </div>
        </div>
      </div>
    </section>
  );
}
