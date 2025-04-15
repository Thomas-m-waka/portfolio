import React, { useState } from 'react';
import './Navbar.css';
import './Footer.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Tom's Logo" />
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <a href="#home" className="home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;

