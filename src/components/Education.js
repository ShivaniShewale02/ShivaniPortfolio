import React from 'react';
import '../styles/Education.css';

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Ajeenkya DY Patil University Pune",
    duration: "2022 - 2026",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Global International School and JR.College",
    duration: "2020 - 2022",
  },
  {
    degree: "Secondary Education",
    institution: "St.Francis High School",
    duration: "Up to 2020",
  }
];

const Education = () => {
  return (
    <div className="education-section" id="education" data-aos="fade-up">
      <h2 className="education-title">Education</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline">
          {educationData.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="duration">{edu.duration}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

