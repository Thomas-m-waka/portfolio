import React from 'react';
import './Home.css';
import tomImage from '../assets/tom.jpg'; 
import { FaWhatsapp } from 'react-icons/fa'; 

// Import other sections
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => (
  <>
    {}
    <section className="hero-section" id="home">
      <div className="text-container">
        <h1>Hi, I'm a Software Developer</h1>
        <p>
          I am a highly efficient Software Developer with a comprehensive skill set spanning both
          frontend and backend development, including database management. I possess expertise in
          <strong> Django, Python, HTML5, CSS, JavaScript, and React.</strong>
        </p>
        <a href="#contact" className="cta">Contact Me</a>
      </div>

      <div className="image-container">
        <img className="profile-image" src={tomImage} alt="Tom" />
      </div>
    </section>

    {}
    <About />
    <Services />
    <Projects />
    <Contact />

    {}
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


