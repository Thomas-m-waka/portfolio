import React from 'react';
import './Services.css';
import webDevImage from '../assets/webd.png';
import businessIntelligenceImage from '../assets/web.png';
import apiIntegrationImage from '../assets/api.png';

const Services = () => (
  <section className="services" id="services">
    <h2>My Services</h2>
    <div className="services-list">
      <div className="service-item">
        <div className="image-container">
          <img src={webDevImage} alt="Web Development" />
        </div>
        <h3>Web Development</h3>
        <p>Building responsive and dynamic websites to suit your needs.</p>
      </div>

      <div className="service-item">
        <div className="image-container">
          <img src={businessIntelligenceImage} alt="Business Intelligence" />
        </div>
        <h3>Business Intelligence</h3>
        <p>Analyzing data to uncover insights and help businesses make informed decisions.</p>
      </div>

      <div className="service-item">
        <div className="image-container">
          <img src={apiIntegrationImage} alt="API Integration" />
        </div>
        <h3>API Integration</h3>
        <p>Integrating payment systems like Mpesa, Paystack, or others for seamless transactions.</p>
      </div>
    </div>
  </section>
);

export default Services;


