import React from "react";
import { ReactTyped } from "react-typed";
import "../styles/Home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="text-section">
        <h1>
          Hi, I'm <span className="highlight">Shivani Shewale</span>
        </h1>

        <h2>
          <ReactTyped
            strings={[
              "A Passionate Full Stack Web Developer",
              "Software Developer",
              "Web Enthusiast",
              "Creative Coder"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <p>
          I specialize in building modern and responsive web applications with clean and scalable code. Let's build something amazing together!
        </p>

        <div className="resume-wrapper">
        <a
          href="/resume.html"
          className="resume-button"
          target="_blank"
          rel="noreferrer"
        >
          View Resume 
        </a>

        </div>
      </div>

      <div className="image-section">
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
