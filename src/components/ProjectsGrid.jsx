import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Filter, 
  Layers, 
  Cpu, 
  Database, 
  TrendingUp, 
  Sparkles, 
  PlusCircle 
} from 'lucide-react';

export default function ProjectsGrid() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'martech', label: 'Analytics & Martech' },
    { key: 'backend', label: 'Backend & SaaS' },
    { key: 'ai', label: 'AI & Vision' },
    { key: 'data', label: 'Data Engineering' },
    { key: 'fintech', label: 'Fintech & Bots' }
  ];

  const displayedProjects = selectedFilter === 'all'
    ? projects
    : projects.filter((p) => p.categoryKey === selectedFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Engineering Catalog</span>
          <h2 className="section-title">Projects &amp; Open Source Repositories</h2>
          <p className="section-subtitle">
            A curated portfolio spanning multi-tenant SaaS backends, LLM ad copilots, automated ETL pipelines, and algorithmic trading systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-bar">
          <div className="filter-pills-list">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedFilter(cat.key)}
                className={`filter-pill-btn ${selectedFilter === cat.key ? 'active' : ''}`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div key={project.id} className="card project-card">
              <div className="project-card-header">
                <span className="project-category-tag">{project.category}</span>
                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      title="View GitHub Repository"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link live-link"
                      title="View Live Demo"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {project.image && (
                <div className="project-card-image-wrap">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-card-image"
                    loading="lazy"
                  />
                  <div className="project-image-overlay"></div>
                </div>
              )}

              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <div className="project-stack-tags">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-cta-link"
                  >
                    <span>View Repository</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="project-cta-disabled">Proprietary</span>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-emerald live-badge"
                  >
                    <span>Live App</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Reserved Slot for Future Project */}
          <div className="card project-card upcoming-card">
            <div className="upcoming-icon-wrap">
              <PlusCircle size={28} className="upcoming-icon" />
            </div>
            <h3 className="upcoming-title">Autonomous AI Agentic Optimizer</h3>
            <p className="upcoming-desc">
              Currently architecting an autonomous multi-agent pipeline using LangChain, RAG, and tool-calling to automatically rebalance ad platform budgets based on live PostgreSQL profit metrics.
            </p>
            <div className="project-stack-tags">
              <span className="tech-badge">LangChain</span>
              <span className="tech-badge">Gemini / OpenAI</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">AsyncIO</span>
            </div>
            <div className="upcoming-status">
              <span className="pulse-dot"></span>
              <span>In Active Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
