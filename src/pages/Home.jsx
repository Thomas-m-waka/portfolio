import React from 'react';
import './Home.css';

const Home = () => (
  <section className="hero-section">
    <div className="text-container">
      <h1>Hi, I'm a Software Developer</h1>
      <p>Crafting solutions with code and creativity. Passionate about building innovative and efficient web applications.</p>
      <a href="/contact" className="cta">Contact Me</a>
    </div>
    <div className="image-container">
      <img className="profile-image" src="src/assets/tom.jpg" alt="Tom" />
    </div>
  </section>
);

export default Home;

