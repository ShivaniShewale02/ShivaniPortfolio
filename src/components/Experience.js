import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-card" data-aos="fade-up">
        <div className="experience-glow" />
        <div className="experience-content">
          <h3 className="role">FRONTEND WEB DEVELOPER INTERN</h3>
          <p className="company">Carikture Pvt. Ltd.</p>
          <p className="duration">Oct 2024 - Jan 2025</p>
          <p className="description">
            Worked on responsive UI designs and implemented interactive web components using modern frontend technologies. Collaborated with design teams to translate mockups into functional web pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

