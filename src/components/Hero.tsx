import React from 'react';

const Hero: React.FC = () => {
  const heroStyles = `
    .hero {
      padding: 160px 0 120px;
      text-align: left;
      background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
    .hero-content {
      max-width: 800px;
      position: relative;
      z-index: 1;
    }
    .hero-title {
      font-size: 3.75rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }
    .highlight {
      color: var(--accent-color);
      background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-description {
      font-size: 1.3rem;
      margin-bottom: 3rem;
      color: var(--text-secondary);
      max-width: 600px;
      line-height: 1.6;
    }
    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    .btn {
      padding: 1rem 2rem;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      cursor: pointer;
      border: 2px solid var(--accent-color);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 160px;
    }
    .btn-primary {
      background: var(--accent-color);
      color: var(--primary-bg);
      box-shadow: 0 4px 20px var(--shadow-color);
    }
    .btn-primary:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 30px var(--shadow-color);
    }
    @media (max-width: 768px) {
      .hero {
        padding: 140px 0 100px;
        text-align: center;
      }
      .hero-title {
        font-size: 2.75rem;
      }
      .hero-description {
        font-size: 1.1rem;
      }
      .hero-buttons {
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
      }
    }
  `;

  return (
    <section id="hero" className="hero">
      <style>{heroStyles}</style>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Real Business Outcomes with <span className="highlight">Practical AI</span>
          </h1>
          <p className="hero-description">
            We deliver a holistic AI ecosystem designed to enhance every facet of your business, from customer interactions to internal operations and strategic decision-making.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Our Solutions</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;