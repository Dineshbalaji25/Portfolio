import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenResume, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand & bio */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <Terminal size={18} className="icon-cyan" />
              <span className="footer-name">Dinesh R Balaji</span>
            </div>
            <p className="footer-bio">
              Full Stack Developer specializing in Django, PostgreSQL, and server-side martech data integrations. Built to scale e-commerce systems and solve production telemetry challenges.
            </p>
            <div className="footer-status">
              <span className="pulse-dot"></span>
              <span>Based in Bengaluru, India • Open for Opportunities</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#flagship">Flagship Case Study</a></li>
              <li><a href="#deep-dives">Production Case Studies</a></li>
              <li><a href="#experience">Experience &amp; Education</a></li>
              <li><a href="#projects">GitHub Projects</a></li>
              <li><a href="#skills">Skills Matrix</a></li>
            </ul>
          </div>

          {/* Connect & Actions */}
          <div className="footer-actions-col">
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github size={14} />
                  <span>github.com/Dineshbalaji25</span>
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={14} />
                  <span>linkedin.com/in/dineshrbalaji</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail size={14} />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
            </ul>

            <div className="footer-buttons-row">
              <button onClick={onOpenResume} className="btn btn-secondary btn-sm">
                View Resume
              </button>
              <button onClick={onOpenContact} className="btn btn-primary btn-sm">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} Dinesh R Balaji. Built with React &amp; Vite (Vanilla CSS). Deployed via GitHub Pages.</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
