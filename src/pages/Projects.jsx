import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <p>A showcase of my work and accomplishments.</p>
    <div className="projects-list">
      <div className="project-item">
        <div className="image-container">
          <img src="src/assets/deox.png" alt="Deox - E-commerce" />
        </div>
        <h3>Deox - E-commerce</h3>
        <p>An e-commerce platform with integrated Mpesa API for payments and Bulk SMS for notifications.</p>
      </div>

      <div className="project-item">
        <div className="image-container">
          <img src="src/assets/financ.png" alt="FinancAI" />
        </div>
        <h3>FinancAI</h3>
        <p>A financial AI application powered by Django REST API and SMTP for email notifications.</p>
      </div>

      <div className="project-item">
        <div className="image-container">
          <img src="src/assets/kk.png" alt="Minimax" />
        </div>
        <h3>Minimax</h3>
        <p>An application utilizing the GetUserMedia API for real-time media capture and processing.</p>
      </div>

      <div className="project-item">
        <div className="image-container">
          <img src="/src/assets/paystack.png" alt="Bowanana Application" />
        </div>
        <h3>Appointment Application</h3>
        <p>A mobile app integrated with Paystack for payments and Djoser for authentication.</p>
      </div>


    </div>
  </section>
);

export default Projects;

