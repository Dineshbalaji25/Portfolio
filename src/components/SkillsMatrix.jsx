import React from 'react';
import { skillsMatrix } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Share2, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function SkillsMatrix() {
  const getCategoryIcon = (category) => {
    if (category.includes('Backend')) return <Code2 size={20} className="icon-cyan" />;
    if (category.includes('Databases')) return <Database size={20} className="icon-emerald" />;
    if (category.includes('Martech')) return <Share2 size={20} className="icon-indigo" />;
    if (category.includes('AI')) return <Cpu size={20} className="icon-amber" />;
    return <Cloud size={20} className="icon-purple" />;
  };

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Expert': return 'badge-emerald';
      case 'Advanced': return 'badge-cyan';
      case 'Intermediate': return 'badge-indigo';
      default: return 'badge-subtle';
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">Skills &amp; Technical Capabilities</h2>
          <p className="section-subtitle">
            A comprehensive matrix of technologies, frameworks, and architectural paradigms applied across production environments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-categories-grid">
          {skillsMatrix.map((cat, idx) => (
            <div key={idx} className="card skill-category-card">
              <div className="skill-cat-header">
                {getCategoryIcon(cat.category)}
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>

              <div className="skills-items-list">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <div className="skill-top-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`badge ${getLevelBadge(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>

                    <div className="skill-subtags">
                      {skill.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="skill-subtag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
