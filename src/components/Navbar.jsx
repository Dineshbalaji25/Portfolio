import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Moon, Sun, FileText, Mail, Github, Linkedin, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', nextTheme);
    localStorage.setItem('dinesh_portfolio_theme', nextTheme);
  };

  const navLinks = [
    { label: 'Flagship', href: '#flagship' },
    { label: 'Postmortems', href: '#postmortems' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="nav-brand">
          <div className="nav-brand-icon">
            <Terminal size={18} />
          </div>
          <div className="nav-brand-text">
            <span className="brand-name">dinesh.balaji</span>
            <span className="brand-role">// backend &amp; martech</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={onOpenResume} className="btn btn-secondary btn-sm nav-resume-btn">
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <button onClick={onOpenContact} className="btn btn-primary btn-sm nav-contact-btn">
            <Mail size={15} />
            <span>Get in Touch</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="container mobile-menu-content">
            <div className="mobile-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Python &amp; Jr AI Engineer roles</span>
            </div>
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                <FileText size={16} />
                <span>View Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Mail size={16} />
                <span>Contact Dinesh</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
