import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

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
      height: 100%;
      min-height: 60px;
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
      align-items: center;
      height: 100%;
    }
    .nav-list a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s ease;
      padding: 0.75rem 0;
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
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
    .dropdown {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
    }
    .dropdown-trigger {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s ease;
      padding: 0.75rem 0;
      position: relative;
      cursor: pointer;
      height: 100%;
    }
    .dropdown-trigger::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }
    .dropdown-trigger:hover {
      color: var(--accent-color);
    }
    .dropdown-trigger:hover::after {
      width: 100%;
    }
    .dropdown-arrow {
      font-size: 0.8rem;
      transition: transform 0.3s ease;
    }
    .dropdown-open .dropdown-arrow {
      transform: rotate(180deg);
    }
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: var(--secondary-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      min-width: 200px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      margin-top: 0.5rem;
    }
    .dropdown-open .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .dropdown-menu a {
      display: block;
      padding: 1rem 1.5rem;
      color: var(--text-secondary);
      text-decoration: none;
      transition: all 0.3s ease;
      border-radius: 8px;
      margin: 0;
    }
    .dropdown-menu a::after {
      display: none;
    }
    .dropdown-menu a:hover {
      background: var(--accent-color);
      color: white;
    }
    .hamburger {
      display: none;
      align-items: center;
      justify-content: center;
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
        max-height: 400px;
      }
      .nav-list {
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
      }
      .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        background: var(--primary-bg);
        margin-top: 0;
        margin-left: 1rem;
      }
      .dropdown-menu a {
        padding: 0.5rem 1rem;
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
              <li className={`dropdown ${isResourcesOpen ? 'dropdown-open' : ''}`}>
                <div 
                  className="dropdown-trigger"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  Resources
                  <span className="dropdown-arrow">▼</span>
                </div>
                <div 
                  className="dropdown-menu"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <Link to="/roi-calculator">ROI Calculator</Link>
                </div>
              </li>
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