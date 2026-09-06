import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlagshipStory from './components/FlagshipStory';
import Postmortems from './components/Postmortems';
import ExperienceSection from './components/ExperienceSection';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsMatrix from './components/SkillsMatrix';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="portfolio-app">
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
        />

        <FlagshipStory />

        <Postmortems />

        <ExperienceSection />

        <ProjectsGrid />

        <SkillsMatrix />
      </main>

      <Footer 
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Modals */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />
    </div>
  );
}
