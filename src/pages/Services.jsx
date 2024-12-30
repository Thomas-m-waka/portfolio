import React from 'react';
import './Services.css';

const Services = () => (
  <section className="services">
    <h2>My Services</h2>
    <div className="services-list">
      <div className="service-item">
        <div className="image-container">
          <img src="src/assets/webd.png" alt="web development" />
        </div>
        <h3>Web Development</h3>
        <p>Building responsive and dynamic websites to suit your needs.</p>
      </div>

      <div className="service-item">
        <div className="image-container">
          <img src="src/assets/web.png" alt="business intelligence" />
        </div>
        <h3>Business Intelligence</h3>
        <p>Analyzing data to uncover insights and help businesses make informed decisions.</p>
      </div>

      <div className="service-item">
        <div className="image-container">
          <img src="src/assets/api.png" alt="API integration" />
        </div>
        <h3>API Integration</h3>
        <p>Integrating payment systems like Mpesa, Paystack or others for seamless transactions.</p>
      </div>
    </div>
  </section>
);

export default Services;

