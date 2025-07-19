import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About TechCorp</h2>
            <p>
              Founded in 2015, TechCorp has been at the forefront of digital transformation, 
              helping businesses leverage technology to achieve their goals. Our team of experts 
              brings together decades of experience in software development, cloud computing, 
              and strategic consulting.
            </p>
            <p>
              We believe in building long-term partnerships with our clients, understanding their 
              unique challenges, and delivering tailored solutions that drive real business value.
            </p>
            
            <div className="stats">
              <div className="stat">
                <h3>200+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Countries Served</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <span>Company Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;