import React, { useState } from "react";
import "./../styles/Contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-left" data-aos="fade-right">
          <h2>Let's Connect</h2>
          <p>Got a project or idea? Let's bring it to life!</p>
          <div className="contact-details">
  <h3>
    <i className="fas fa-phone"></i> Contact: +918237371058
  </h3>
  <h3>
    <i className="fas fa-map-marker-alt"></i> Location: Pune
  </h3>
</div>

          <div className="icons">
            <a href="https://www.linkedin.com/in/shivani-shewale-674384352" target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ShivaniShewale02" target="_blank" rel="noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://work.shivanishewale@gmail.com" title="Gmail">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* WAVE BACKGROUND */}
      <div className="wave-container">
        <svg className="wave-svg" viewBox="0 0 1440 320">
          <path
            fill="#e3caa5"
            fillOpacity="1"
            d="M0,288L30,272C60,256,120,224,180,213.3C240,203,300,213,360,197.3C420,181,480,139,540,117.3C600,96,660,96,720,128C780,160,840,224,900,240C960,256,1020,224,1080,192C1140,160,1200,128,1260,122.7C1320,117,1380,139,1410,149.3L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
