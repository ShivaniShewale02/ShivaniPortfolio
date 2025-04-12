import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

  // Toggle the menu open/close
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a navigation link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-container-header">
        <div className="navbar-container-logo">SHIVANI'S PORTFOLIO</div>
        
        {/* Hamburger Menu */}
        <div className="navbar-container-hamburger" onClick={handleMenuToggle}>
          <div className="navbar-container-line"></div>
          <div className="navbar-container-line"></div>
          <div className="navbar-container-line"></div>
        </div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-container-links ${isMenuOpen ? "navbar-container-links-active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu} style={{width:'75px'}}>About Me</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;







