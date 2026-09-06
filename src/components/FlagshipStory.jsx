import React from 'react';
import { flagshipData } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Layers, 
  Database, 
  Cpu, 
  TrendingUp, 
  ShieldAlert, 
  PieChart, 
  Check, 
  Sliders, 
  Server,
  Zap,
  DollarSign
} from 'lucide-react';

export default function FlagshipStory() {
  const { thotfy, analytics, narrative } = flagshipData;

  return (
    <section id="flagship" className="section flagship-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">Flagship Case Study</span>
          <h2 className="section-title">The Thotfy Commerce &amp; Analytics Ecosystem</h2>
          <p className="section-subtitle flagship-lead">
            &ldquo;{narrative}&rdquo;
          </p>
        </div>

        {/* Architecture Pipeline Flow Diagram */}
        <div className="architecture-pipeline-card">
          <div className="pipeline-header">
            <span className="pipeline-title">Unified Martech &amp; Analytics Data Pipeline</span>
            <span className="badge badge-emerald">Live Production Architecture</span>
          </div>

          <div className="pipeline-steps-grid">
            <div className="pipeline-step">
              <div className="step-num">01</div>
              <div className="step-content">
                <h4>Thotfy Marketplace</h4>
                <p>Django Oscar / PostgreSQL</p>
                <div className="step-tags">
                  <span>Checkout Events</span>
                  <span>Order Processing</span>
                  <span>Seller Operations</span>
                </div>
              </div>
            </div>

            <div className="pipeline-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="pipeline-step">
              <div className="step-num">02</div>
              <div className="step-content">
                <h4>Server Martech Bus</h4>
                <p>Async Celery &amp; Webhooks</p>
                <div className="step-tags">
                  <span>Meta CAPI</span>
                  <span>GA4 Protocol</span>
                  <span>Zoho Waterfall</span>
                </div>
              </div>
            </div>

            <div className="pipeline-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="pipeline-step">
              <div className="step-num">03</div>
              <div className="step-content">
                <h4>PostgreSQL Ground Truth</h4>
                <p>SSH Tunnel / Atomic DB</p>
                <div className="step-tags">
                  <span>Verified Sales</span>
                  <span>Real Settlement</span>
                  <span>Customer Ledger</span>
                </div>
              </div>
            </div>

            <div className="pipeline-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="pipeline-step highlight">
              <div className="step-num">04</div>
              <div className="step-content">
                <h4>THOTFY-Analytic Engine</h4>
                <p>Python / Flask / Pandas</p>
                <div className="step-tags">
                  <span>True ROAS / POAS</span>
                  <span>Entity Unification</span>
                  <span>5-Tier Classification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Cards: Part 1 (Thotfy) & Part 2 (THOTFY-Analytic) */}
        <div className="flagship-duo-grid">
          {/* Card 1: Thotfy Commerce */}
          <div className="card flagship-card">
            <div className="flagship-card-badge">
              <span className="badge badge-cyan">Platform 01 // Backend &amp; Integrations</span>
              <span className="badge badge-subtle">Proprietary Employer Platform</span>
            </div>

            {thotfy.image && (
              <div className="flagship-image-wrap">
                <img 
                  src={thotfy.image} 
                  alt={thotfy.name} 
                  className="flagship-card-image" 
                  loading="lazy" 
                />
                <div className="flagship-image-overlay"></div>
                <div className="flagship-image-badge">
                  <span>Live Production Marketplace</span>
                </div>
              </div>
            )}

            <div className="flagship-card-title-group">
              <h3 className="flagship-card-title">{thotfy.name}</h3>
              <p className="flagship-card-tagline">{thotfy.tagline}</p>
            </div>

            <div className="flagship-meta-row">
              <span className="role-tag">{thotfy.role}</span>
              <a 
                href={thotfy.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <span>Visit thotfy.com</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="flagship-stack-pills">
              {thotfy.stack.map((item) => (
                <span key={item} className="stack-pill">{item}</span>
              ))}
            </div>

            <div className="flagship-points-list">
              {thotfy.highlights.map((h, i) => (
                <div key={i} className="flagship-point-item">
                  <div className="point-icon-wrapper">
                    <Check size={16} />
                  </div>
                  <div>
                    <h5 className="point-title">{h.title}</h5>
                    <p className="point-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Waterfall Callout */}
            <div className="waterfall-callout">
              <div className="waterfall-header">
                <DollarSign size={16} />
                <span>Financial Waterfall Architecture (Zoho Books v3 + Cashfree)</span>
              </div>
              <p className="waterfall-text">
                Designed full accounting ledger automation mapping: Buyer Transaction → Cashfree Payment Gateway → MDR Deduction → Thotfy Commission (Revenue) → Seller Payable (Escrow Balance) → Automated GST/TDS tax deductions.
              </p>
            </div>
          </div>

          {/* Card 2: THOTFY-Analytic */}
          <div className="card flagship-card highlight-glow">
            <div className="flagship-card-badge">
              <span className="badge badge-indigo">Platform 02 // Analytics &amp; Decision Engine</span>
              <span className="badge badge-emerald">Open Source Repo</span>
            </div>

            {analytics.image && (
              <div className="flagship-image-wrap">
                <img 
                  src={analytics.image} 
                  alt={analytics.name} 
                  className="flagship-card-image" 
                  loading="lazy" 
                />
                <div className="flagship-image-overlay"></div>
                <div className="flagship-image-badge">
                  <span>ROAS / POAS Intelligence Dashboard</span>
                </div>
              </div>
            )}

            <div className="flagship-card-title-group">
              <h3 className="flagship-card-title">{analytics.name}</h3>
              <p className="flagship-card-tagline">{analytics.tagline}</p>
            </div>

            <div className="flagship-meta-row">
              <span className="role-tag">Flask Web Dashboard (Port 5050)</span>
              <a 
                href={analytics.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <Github size={14} />
                <span>View GitHub Repo</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="flagship-stack-pills">
              {analytics.stack.map((item) => (
                <span key={item} className="stack-pill">{item}</span>
              ))}
            </div>

            <p className="analytics-overview-text">
              {analytics.overview}
            </p>

            {/* 5-Tier Blueprint Description */}
            <div className="tier-breakdown-box">
              <h5 className="tier-box-title">
                <Sliders size={16} />
                <span>The 5-Tier Product Classification Engine</span>
              </h5>
              <div className="tiers-compact-list">
                {analytics.tiers.map((t) => (
                  <div key={t.name} className={`tier-compact-item tier-${t.color}`}>
                    <span className={`tier-badge-pill badge-${t.color}`}>{t.name}</span>
                    <span className="tier-criteria">{t.criteria}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="waterfall-callout" style={{ marginTop: 'auto', background: 'rgba(99, 102, 241, 0.05)', borderColor: 'rgba(129, 140, 248, 0.25)' }}>
              <div className="waterfall-header" style={{ color: 'var(--accent-indigo)' }}>
                <PieChart size={16} />
                <span>Live Flask Dashboard &amp; SSH PostgreSQL Pipeline</span>
              </div>
              <p className="waterfall-text">
                Runs on Flask (port 5050) querying live PostgreSQL order records via secure SSH tunnel, dynamically joining Meta Marketing API ad spend and GA4 funnel events with SQLite local fallback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
