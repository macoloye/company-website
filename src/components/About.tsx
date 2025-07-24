import React from 'react';

const About: React.FC = () => {
  const aboutStyles = `
    .about {
      padding: 120px 0;
      background: var(--secondary-bg);
      position: relative;
    }
    .about::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .about-text h2 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 2rem;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }
    .about-text p {
      font-size: 1.2rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.7;
    }
    .about-text .btn {
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
      background: var(--accent-color);
      color: var(--primary-bg);
      box-shadow: 0 4px 20px var(--shadow-color);
    }
    .about-text .btn:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 30px var(--shadow-color);
      text-decoration: none;
    }
    .about-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-placeholder {
      width: 100%;
      max-width: 400px;
      height: 350px;
      background: var(--tertiary-bg);
      border: 1px solid var(--border-color);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 1.1rem;
      position: relative;
      overflow: hidden;
    }
    .image-placeholder::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%);
    }
     @media (max-width: 768px) {
      .about {
        padding: 80px 0;
      }
      .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .about-text h2 {
        font-size: 2.25rem;
      }
      .about-text p {
        font-size: 1.1rem;
      }
    }
  `;
  return (
    <section id="about" className="about">
      <style>{aboutStyles}</style>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Straits</h2>
            <p>
              Founded on the belief that AI will redefine industries, Straits is dedicated to ensuring its responsible and impactful adoption. We are a team of AI experts, engineers, and data scientists committed to building a future where AI is safe, robust, and aligned with human values.
            </p>
            <p>
              Our mission is to provide full assurance and reassurance in AI, transforming blind trust into informed trust. We combine expert insights, data science talent, and proprietary testing protocols to deliver independent and tailored AI authentication with scientific rigor.
            </p>
             <a href="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Learn More</a>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              [ Placeholder for an image or graphic ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;