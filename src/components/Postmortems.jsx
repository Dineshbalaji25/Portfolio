import React, { useState } from 'react';
import { postmortems } from '../data/portfolioData';
import { 
  AlertOctagon, 
  Search, 
  Wrench, 
  BookOpen, 
  Database, 
  Server,
  Layers,
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';

export default function Postmortems() {
  const [activeTab, setActiveTab] = useState(postmortems[0].id);

  const currentPostmortem = postmortems.find((p) => p.id === activeTab) || postmortems[0];

  return (
    <section id="postmortems" className="section postmortems-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Engineering War Stories</span>
          <h2 className="section-title">Technical Deep-Dives &amp; Production Postmortems</h2>
          <p className="section-subtitle">
            Senior backend engineering isn't just about shipping features — it's about diagnosing low-level failures under production pressure, understanding telemetry, and remediating issues without data loss.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="postmortem-tab-bar">
          {postmortems.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`postmortem-tab-btn ${activeTab === p.id ? 'active' : ''}`}
            >
              <div className="tab-btn-icon">
                {p.id === 'multixactid-corruption' && <Database size={16} />}
                {p.id === 'meta-capi-debugging' && <Server size={16} />}
                {p.id === 'cross-channel-attribution' && <Layers size={16} />}
              </div>
              <div className="tab-btn-text">
                <span className="tab-btn-title">{p.title.split(' ')[0]} {p.title.split(' ')[1]}</span>
                <span className="tab-btn-sub">{p.system.split('(')[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Postmortem Display */}
        <div className="card postmortem-card">
          <div className="postmortem-header-row">
            <div>
              <div className="postmortem-meta-tags">
                <span className="badge badge-rose">
                  <ShieldAlert size={12} />
                  <span>{currentPostmortem.severity}</span>
                </span>
                <span className="badge badge-subtle">{currentPostmortem.system}</span>
              </div>
              <h3 className="postmortem-title">{currentPostmortem.title}</h3>
              <p className="postmortem-summary">{currentPostmortem.summary}</p>
            </div>
          </div>

          <div className="postmortem-grid">
            {/* Left Column: Problem & Investigation */}
            <div className="postmortem-col">
              {/* Problem */}
              <div className="postmortem-block">
                <div className="block-title problem-title">
                  <AlertOctagon size={16} />
                  <h4>01. Production Symptom &amp; Incident</h4>
                </div>
                <p className="block-desc">{currentPostmortem.problem}</p>
              </div>

              {/* Investigation */}
              <div className="postmortem-block">
                <div className="block-title invest-title">
                  <Search size={16} />
                  <h4>02. Investigation &amp; Root Cause Analysis</h4>
                </div>
                <ul className="investigation-list">
                  {currentPostmortem.investigation.map((step, idx) => (
                    <li key={idx} className="investigation-item">
                      <span className="investigation-dot"></span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Solution & Takeaways */}
            <div className="postmortem-col">
              {/* Remediation */}
              <div className="postmortem-block">
                <div className="block-title fix-title">
                  <Wrench size={16} />
                  <h4>03. Production Remediation &amp; Solution Strategy</h4>
                </div>
                <ul className="remediation-list">
                  {currentPostmortem.remediation.map((item, idx) => (
                    <li key={idx} className="remediation-item">
                      <CheckCircle2 size={15} className="remediation-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Takeaway */}
              <div className="postmortem-block learned-block">
                <div className="block-title learned-title">
                  <BookOpen size={16} />
                  <h4>04. Key Architectural Takeaway</h4>
                </div>
                <p className="learned-desc">{currentPostmortem.learned}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
