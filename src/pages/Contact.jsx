import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact">
    <div className="contact-info">
      <h3>Contact Information</h3>
      <p>Email: <a href="mailto:thomasmmuteti4@gmail.com">thomasmmuteti4@gmail.com</a></p>
      <p>Phone: <a href="tel:+254791508494">+254791508494</a></p>
    </div>
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
