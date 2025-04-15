import React from 'react';
import './Home.css';
import tomImage from '../assets/tom.jpg'; 
import { Link } from 'react-router-dom';


const Home = () => (
  <section className="hero-section">
    <div className="text-container">
      <h1>Hi, I'm a Software Developer</h1>
      <p>
        I am a highly efficient Software Developer with a comprehensive skill set spanning both
        frontend and backend development, including database management. I possess expertise in
        <strong> Django, Python, HTML5, CSS, JavaScript, and React</strong>, with a strong focus on creating scalable
        and secure applications. Recognized for my team-oriented approach, I bring excellent
        interpersonal and communication skills to collaborate effectively on projects.
      </p>

      <Link to="/contact" className="cta">Contact Me</Link>
    </div>
    <div className="image-container">
      <img className="profile-image" src={tomImage} alt="Tom" />
    </div>
  </section>
);

export default Home;



