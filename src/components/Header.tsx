import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const headerStyles = `
    .header {
      background: rgba(11, 20, 38, 0.95);
      backdrop-filter: blur(20px);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      border-bottom: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo a {
      color: var(--accent-color);
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .logo a:hover {
      color: var(--accent-hover);
    }
    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2.5rem;
    }
    .nav-list a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s ease;
      padding: 0.5rem 0;
      position: relative;
    }
    .nav-list a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }
    .nav-list a:hover {
      color: var(--accent-color);
    }
    .nav-list a:hover::after {
      width: 100%;
    }
    .hamburger {
      display: none;
    }
    @media (max-width: 768px) {
      .hamburger {
        display: flex;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
      }
      .hamburger span {
        width: 25px;
        height: 3px;
        background: var(--text-primary);
        margin: 3px 0;
        transition: 0.3s;
        border-radius: 2px;
      }
      .nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--secondary-bg);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        border-top: 1px solid var(--border-color);
      }
      .nav-open {
        max-height: 300px;
      }
      .nav-list {
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
      }
    }
  `;

  return (
    <header className="header">
      <style>{headerStyles}</style>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">Straits</Link>
          </div>
          <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/solution">Solutions</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <button className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;