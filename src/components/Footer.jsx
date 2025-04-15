import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'; // 'FaXTwitter' is from react-icons/fa6
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/Thomas-m-waka" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/thomas-muteti-859542285/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/developer_tom/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" /> Instagram
          </a>
          <a href="https://x.com/DevTom_3" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="icon" /> X 
          </a>
        </div>
        <p className="ph">© 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


