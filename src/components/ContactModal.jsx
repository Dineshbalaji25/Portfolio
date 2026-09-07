import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Mail, Phone, MapPin, Copy, Check, Linkedin, Github, Send, ExternalLink, MessageSquare } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge badge-emerald">Available for Opportunities</span>
            <h3 className="modal-title">Get in Touch with Dinesh</h3>
            <span className="modal-subtitle">Open to Python Developer &amp; Junior AI Engineer positions</span>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Quick Direct Contacts */}
          <div className="contact-methods-grid">
            {/* Email Card */}
            <div className="contact-method-card">
              <div className="contact-method-icon cyan">
                <Mail size={18} />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">Direct Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-method-val">
                  {personalInfo.email}
                </a>
              </div>
              <button onClick={copyEmail} className="btn btn-secondary btn-sm copy-mini-btn" title="Copy Email">
                {copiedEmail ? <Check size={14} className="copy-success" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-method-card">
              <div className="contact-method-icon emerald">
                <Phone size={18} />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">Phone / WhatsApp</span>
                <span className="contact-method-val" style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  Available upon request
                </span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('Request for Phone / WhatsApp Contact')}&body=${encodeURIComponent('Hi Dinesh,\n\nCould you please share your contact number for a conversation regarding an opportunity?\n\nBest regards,')}`}
                className="btn btn-secondary btn-sm copy-mini-btn" 
                title="Request Phone via Email"
              >
                <Mail size={14} />
              </a>
            </div>

            {/* Location Card */}
            <div className="contact-method-card">
              <div className="contact-method-icon amber">
                <MapPin size={18} />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">Location</span>
                <span className="contact-method-val">{personalInfo.location}</span>
              </div>
              <span className="badge badge-subtle">IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Quick Action Email Buttons */}
          <div className="prefilled-emails-block">
            <h4 className="prefilled-heading">
              <MessageSquare size={16} />
              <span>Direct Email Templates</span>
            </h4>
            <div className="prefilled-buttons-list">
              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('Interview Opportunity — Python Developer')}&body=${encodeURIComponent('Hi Dinesh,\n\nWe came across your portfolio and were impressed by your Django/PostgreSQL and martech integration work. We would like to discuss a Python Developer opportunity with our team.\n\nBest regards,')}`}
                className="btn btn-secondary btn-sm prefilled-btn"
              >
                <Send size={13} />
                <span>Interview: Python Developer</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('Interview Opportunity — Junior AI Engineer')}&body=${encodeURIComponent('Hi Dinesh,\n\nWe reviewed your portfolio, including your LangChain, RAG, and FruiQ-AI computer vision projects. We are interested in discussing an AI Engineering role.\n\nBest regards,')}`}
                className="btn btn-secondary btn-sm prefilled-btn"
              >
                <Send size={13} />
                <span>Interview: Junior AI Engineer</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('Connecting from your Portfolio')}`}
                className="btn btn-secondary btn-sm prefilled-btn"
              >
                <Send size={13} />
                <span>General Inquiry</span>
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="contact-social-footer">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Linkedin size={15} />
              <span>LinkedIn Profile</span>
              <ExternalLink size={12} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Github size={15} />
              <span>GitHub Profile</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
