import React from 'react';
import { experience, education, certifications } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career &amp; Credentials</span>
          <h2 className="section-title">Work Experience &amp; Education</h2>
          <p className="section-subtitle">
            A track record of engineering scalable e-commerce infrastructure, tuning relational databases, and shipping enterprise integrations.
          </p>
        </div>

        <div className="experience-layout-grid">
          {/* Left Column: Work Experience Timeline */}
          <div className="experience-timeline-col">
            <h3 className="sub-section-title">
              <Briefcase size={20} className="icon-cyan" />
              <span>Professional Experience</span>
            </h3>

            <div className="timeline-wrapper">
              {experience.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="card timeline-card">
                    <div className="timeline-card-header">
                      <div>
                        <span className="timeline-badge badge badge-cyan">{item.type}</span>
                        <h4 className="timeline-role">{item.role}</h4>
                        <div className="timeline-company-row">
                          <a 
                            href={item.website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="company-link"
                          >
                            <span>{item.company}</span>
                            <ExternalLink size={13} />
                          </a>
                          <span className="timeline-sep">•</span>
                          <span className="timeline-location">
                            <MapPin size={13} />
                            <span>{item.location}</span>
                          </span>
                        </div>
                      </div>
                      <div className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <ul className="timeline-bullets">
                      {item.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="timeline-bullet-item">
                          <CheckCircle size={15} className="bullet-icon" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="credentials-col">
            {/* Education */}
            <div className="credentials-block">
              <h3 className="sub-section-title">
                <GraduationCap size={20} className="icon-indigo" />
                <span>Education</span>
              </h3>

              <div className="credentials-list">
                {education.map((edu, idx) => (
                  <div key={idx} className="card credential-card">
                    <div className="credential-top">
                      <span className="credential-period">{edu.period}</span>
                      <span className="badge badge-emerald">{edu.grade}</span>
                    </div>
                    <h4 className="credential-title">{edu.degree}</h4>
                    <p className="credential-institution">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="credentials-block">
              <h3 className="sub-section-title">
                <Award size={20} className="icon-amber" />
                <span>Certifications</span>
              </h3>

              <div className="credentials-list">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="card credential-card">
                    <div className="credential-top">
                      <span className="credential-period">{cert.period}</span>
                      <span className="badge badge-amber">{cert.issuer}</span>
                    </div>
                    <h4 className="credential-title">{cert.name}</h4>
                    <p className="credential-meta">{cert.credential}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
