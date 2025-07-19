import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Business with <span className="highlight">Innovation</span>
          </h1>
          <p className="hero-description">
            We deliver cutting-edge technology solutions that drive growth, 
            enhance efficiency, and create competitive advantages for businesses worldwide.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Get Started
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;