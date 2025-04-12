import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';
import Eventpro from '../assets/eventpro.jpeg';
import ERP from '../assets/erp website.jpeg';
import Amazon from '../assets/amazon clone.jpeg';
import Expense from '../assets/expense tracker.jpeg';



const projects = [
  {
    title: "EventPro",
    image: Eventpro,
    description: "A modern platform for organizing and managing events with real-time updates and scheduling.",
    detailed: `
      • Users can register for events and view all available events •
      • Admin can create and manage events, including uploading details •
      • Admin dashboard shows all registered users per event •
      • Real-time scheduling and status updates for events •
    `,
    tech: "HTML5, CSS3, JavaScript, Spring Boot, Java, LocalStorage",
    github: "https://github.com/yourusername/eventpro",
    live: "https://eventpro-demo.netlify.app"
  },
  {
    title: "Railway Management System",
    image: "images/railway.png",
    description: "A full-featured system to manage railway bookings, schedules, and admin operations.",
    detailed: `
      • Allows users to book, cancel and view train schedules •
      • Admin can manage trains, view reports, and monitor bookings •
      • Real-time train tracking simulation •
      • Backend built with Java and Spring Boot for robust APIs •
    `,
    tech: "Java, Spring Boot, HTML5, CSS3, JavaScript, RESTful APIs",
    github: "https://github.com/ShivaniShewale02/Railway-Management-System",
    live: ""
  },
  {
    title: "ERP Website",
    image: ERP,
    description: "An ERP solution to manage College ERP and details with three different dashboards.",
    detailed: `
      • Role-based dashboards for Student, Faculty, and Admin •
      • Admin can manage user access and faculty/course information •
      • Students can view courses, attendance, and grades •
      • Built using Node.js, Express, and MongoDB •
    `,
    tech: "HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS",
    github: "https://github.com/yourusername/erp-website",
    live: ""
  },
  {
    title: "StyleMate+",
    image: "images/stylemate.png",
    description: "AI-powered fashion recommendation platform for personalized outfit suggestions.",
    detailed: `
      • AI suggests outfits based on user preferences and trends •
      • Personalized dashboard and history-based recommendations •
      • Users can save and share outfit choices •
      • Backend with Spring Boot and MongoDB for data storage •
    `,
    tech: "HTML5, CSS3, JavaScript, React, Spring Boot, Java, MongoDB, RESTful APIs",
    github: "https://github.com/yourusername/stylemate",
    live: "https://stylemate-demo.vercel.app"
  },
  {
    title: "Amazon Clone",
    image: Amazon,
    description: "A clone of Amazon with shopping cart, product listings, and user authentication.",
    detailed: `
      • Browse and search for products with categorized listings •
      • Add to cart and simulate checkout process •
      • Simple UI with static product list and cart functionality •
      • Built using pure HTML, CSS, and JavaScript •
    `,
    tech: "HTML5, CSS3, JavaScript",
    github: "https://github.com/ShivaniShewale02/Amazon-Clone",
    live: ""
  },
  {
    title: "Expense Tracker",
    image: Expense,
    description: "Track your expenses and income with categorized reports.",
    detailed: `
      • Track income and expenses by category •
      • Visual summaries for monthly and yearly reports •
      • Simple and intuitive UI for quick entries •
      • Uses LocalStorage to preserve data between sessions •
    `,
    tech: "HTML5, CSS3, JavaScript",
    github: "https://github.com/ShivaniShewale02/Expense-Tracker",
    live: ""
  }
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="project-wrapper"
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <div className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">{project.tech}</div>
                  <button className="know-more-btn" onClick={() => openModal(project)}>Know More</button>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalIsOpen && selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-modal glowy-card small-modal"
              initial={{ scale: 0.8, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
            >
              <h2>{selectedProject.title}</h2>

              {/* Animate Detailed Bullets */}
              <motion.ul
                className="detailed-description"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } }
                }}
              >
                {selectedProject.detailed.trim().split('\n').map((line, index) =>
                  line.trim() ? (
                    <motion.li
                      key={index}
                      className="feature-line"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      {line.trim()}
                    </motion.li>
                  ) : null
                )}
              </motion.ul>

              <strong>Tech Stack:</strong>
              <p>{selectedProject.tech}</p>

              <div className="project-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Site
                  </a>
                )}
              </div>

              <button onClick={closeModal} className="close-btn">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
