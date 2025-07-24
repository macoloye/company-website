import React from 'react';

const Footer: React.FC = () => {
  const footerStyles = `
    .footer {
      background: #000510;
      color: var(--text-secondary);
      padding: 4rem 0 2rem;
      border-top: 1px solid var(--border-color);
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 80% 10%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
      pointer-events: none;
    }
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-bottom: 3rem;
      position: relative;
      z-index: 1;
    }
    .footer-section h3,
    .footer-section h4 {
      color: var(--text-primary);
      margin-bottom: 1.5rem;
      font-weight: 700;
      font-size: 1.2rem;
    }
    .footer-section p {
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    .footer-section ul {
      list-style: none;
      padding: 0;
    }
    .footer-section ul li {
      margin-bottom: 0.75rem;
    }
    .footer-section a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: all 0.3s ease;
      font-weight: 500;
    }
    .footer-section a:hover {
      color: var(--accent-color);
      transform: translateX(4px);
    }
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
      color: var(--text-muted);
      font-size: 0.95rem;
      position: relative;
      z-index: 1;
    }
  `;
  return (
    <footer className="footer">
      <style>{footerStyles}</style>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Straits</h3>
            <p>
              Full AI Solutions & Assurance.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="/#services">Solutions</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Straits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;