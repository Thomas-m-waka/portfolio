import React from 'react';
import './Projects.css';
import deoxImage from '../assets/deox.png';
import financImage from '../assets/financ.png';
import minimaxImage from '../assets/kk.png';
import paystackImage from '../assets/paystack.png';

const Projects = () => (
  <section className="projects" id="projects">
    <h3>My Projects</h3>
    <div className="projects-list">
      <div className="project-item">
        <div className="image-container">
          <img src={deoxImage} alt="Deox - E-commerce" />
        </div>
        <h2>Deox - E-commerce</h2>
        <p>An e-commerce platform with integrated Mpesa API for payments and Bulk SMS for notifications.</p>
      </div>

      <div className="project-item">
        <div className="image-container">
          <img src={financImage} alt="FinancAI" />
        </div>
        <h2>FinancAI</h2>
        <p>A financial AI application powered by Django REST API and SMTP for email notifications.</p>
      </div>

      <div className="project-item">
        <div className="image-container">
          <img src={minimaxImage} alt="Minimax" />
        </div>
        <h2>Minimax</h2>
        <p>An application utilizing the GetUserMedia API for real-time media capture and processing.</p>
      </div>

      <div className="project-item">
        <div className="image-container">
          <img src={paystackImage} alt="Bowanana Application" />
        </div>
        <h2>Appointment Application</h2>
        <p>A mobile app integrated with Paystack for payments and Djoser for authentication.</p>
      </div>
    </div>
  </section>
);

export default Projects;


