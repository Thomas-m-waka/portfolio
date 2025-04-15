import React from 'react';
import './Home.css';
import tomImage from '../assets/tom.jpg'; 
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; 

const Home = () => (
  <>
    <section className="hero-section">
      <div className="text-container">
        <h1>Hi, I'm a Software Developer</h1>
        <p>
          I am a highly efficient Software Developer with a comprehensive skill set spanning both
          frontend and backend development, including database management. I possess expertise in
          <strong> Django, Python, HTML5, CSS, JavaScript, and React.</strong>
        </p>

        <Link to="/contact" className="cta">Contact Me</Link>
      </div>

      <div className="image-container">
        <img className="profile-image" src={tomImage} alt="Tom" />
      </div>
    </section>

    {/* ✅ Floating WhatsApp Icon */}
    <a
      href="https://wa.me/254791508494"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={38} color="#25D366" />
    </a>
  </>
);

export default Home;

