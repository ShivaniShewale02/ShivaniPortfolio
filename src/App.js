import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation happens only once
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
