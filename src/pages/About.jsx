import React from 'react';
import './About.css';

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>
      I'm a passionate software developer with expertise in building robust web applications. I have experience
      working on both the frontend and backend, and I specialize in creating scalable and efficient APIs. My focus
      is on delivering seamless user experiences, writing clean code, and solving complex problems. Here’s a breakdown
      of my expertise:
    </p>
    
    <div className="about-details">
      <div className="section">
        <h3>Frontend Development</h3>
        <p>
          As a frontend developer, I am experienced with building dynamic and responsive web applications. I use modern
          web technologies such as <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, and
          popular frontend libraries and frameworks like <strong>React</strong> . I focus on
          creating intuitive user interfaces that are both aesthetically pleasing and easy to navigate. I also emphasize
          making applications responsive and mobile-friendly, ensuring that users have a great experience across all
          devices.
        </p>
      </div>

      <div className="section">
        <h3>Backend Development</h3>
        <p>
          On the backend, I have experience building scalable and secure server-side applications using technologies like
            <strong>Django</strong> I focus
          on creating robust RESTful APIs, managing databases, and optimizing server performance. I have worked with both
          SQL databases . Security is a top priority in my
          backend development, ensuring that user data is handled securely with authentication and authorization protocols
          like JWT, OAuth, and hashing algorithms.
        </p>
      </div>

      <div className="section">
        <h3>API Development</h3>
        <p>
          I specialize in creating well-documented and scalable APIs. Whether it's integrating third-party services like
          payment gateways ( Eg <strong>Mpesa</strong>) or building
          custom APIs for client-server communication, I ensure that APIs are fast, secure, and easy to maintain. I have
          experience working with both REST and GraphQL APIs and focus on providing smooth data exchange and error handling.
          Additionally, I work with tools like <strong>Postman</strong> and <strong>Curl</strong> to test, document, and ensure
          the quality of my APIs.
        </p>
      </div>
    </div>
  </section>
);

export default About;
