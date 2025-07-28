import React from 'react';

const CallToAction: React.FC = () => {
  const ctaStyles = `
    .cta {
      padding: 120px 0;
      background: linear-gradient(135deg, var(--secondary-bg) 0%, var(--tertiary-bg) 100%);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
      pointer-events: none;
    }
    .cta-content {
      position: relative;
      z-index: 1;
    }
    .cta-content h2 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 2rem;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }
    .cta-content p {
      font-size: 1.3rem;
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }
    .btn {
      padding: 1.25rem 2.5rem;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      cursor: pointer;
      border: 2px solid var(--accent-color);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 180px;
      background: var(--accent-color);
      color: var(--primary-bg);
      box-shadow: 0 6px 25px var(--shadow-color);
    }
    .btn:hover {
      background: var(--accent-hover);
      transform: translateY(-3px);
      box-shadow: 0 12px 40px var(--shadow-color);
      text-decoration: none;
    }
    @media (max-width: 768px) {
      .cta {
        padding: 80px 0;
      }
      .cta-content h2 {
        font-size: 2.25rem;
      }
      .cta-content p {
        font-size: 1.1rem;
      }
    }
  `;

  return (
    <section id="contact" className="cta">
      <style>{ctaStyles}</style>
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how Straits can help you leverage AI to its fullest potential.
          </p>
          <a href="mailto:contact@straits.com" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 