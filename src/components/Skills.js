import React, { useState } from 'react';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      { name: 'Next.js', icon: 'fab fa-react' },
      { name: 'Tailwind CSS', icon: 'fab fa-css3-alt' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'Spring Boot', icon: 'fas fa-leaf' },
      { name: 'Hibernate', icon: 'fas fa-database' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'PHP', icon: 'fab fa-php' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-leaf' },
    ],
  },
  {
    category: 'Computer Science Fundamentals',
    skills: [
      { name: 'DSA', icon: 'fas fa-project-diagram' },
      { name: 'Operating Systems', icon: 'fas fa-desktop' },
      { name: 'OOP', icon: 'fas fa-cube' },
      { name: 'Computer Networking', icon: 'fas fa-network-wired' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'AWS', icon: 'fab fa-aws' },
      { name: 'Cloud Computing', icon: 'fas fa-cloud' },
      { name: 'Redux', icon: 'fas fa-cogs' },
      { name: 'RESTful API', icon: 'fas fa-code' },
      { name: 'AI Tools', icon: 'fas fa-robot' },
    ],
  },
];

const softSkillsData = [
  { name: 'Communication', icon: 'fas fa-comment-alt' },
  { name: 'Teamwork', icon: 'fas fa-users' },
  { name: 'Problem-Solving', icon: 'fas fa-lightbulb' },
  { name: 'Adaptability', icon: 'fas fa-sync-alt' },
  { name: 'Leadership', icon: 'fas fa-crown' },
  { name: 'Time Management', icon: 'fas fa-clock' },
  { name: 'Critical Thinking', icon: 'fas fa-brain' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSoftActive, setIsSoftActive] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const toggleSoftAccordion = () => {
    setIsSoftActive(!isSoftActive);
  };

  const handleSparkle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;

    const newSparkle = { x, y };
    setSparkles((prev) => [...prev.slice(-10), newSparkle]);
  };

  return (
    <>
      <div className="skills-bubbles-section" id="skills" data-aos="fade-up">
        <div className="skills-bubbles-title-wrapper" onMouseMove={handleSparkle}>
          <h2 className="skills-bubbles-title">Skills</h2>
          {sparkles.map((sparkle, index) => (
            <span
              key={index}
              className="sparkle"
              style={{ top: sparkle.y, left: sparkle.x }}
            />
          ))}
        </div>

        <div className="accordion-container">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className={`accordion-group ${activeCategory === idx ? 'active' : ''}`}
            >
              <div className="accordion-header" onClick={() => toggleCategory(idx)}>
                <h3>{group.category}</h3>
                <span>{activeCategory === idx ? '-' : '+'}</span>
              </div>
              <div className={`accordion-content ${activeCategory === idx ? 'show' : ''}`}>
                <div className="skill-cards-container">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="skill-card">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className={`accordion-group ${isSoftActive ? 'active' : ''}`}>
            <div className="accordion-header" onClick={toggleSoftAccordion}>
              <h3>Soft Skills</h3>
              <span>{isSoftActive ? '-' : '+'}</span>
            </div>
            <div className={`accordion-content ${isSoftActive ? 'show' : ''}`}>
              <div className="skill-cards-container">
                {softSkillsData.map((skill, i) => (
                  <div key={i} className="skill-card">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
