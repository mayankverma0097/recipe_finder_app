import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo_1 from '../assets/logo_1.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/">
              <img src={logo_1} alt="Bhandara.in Logo" className="footer-logo" />
            </Link>
            <h3 className="site-name">bhandara.in</h3>
            <p className="footer-tagline">
              Discover delicious recipes with AI-powered recommendations
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Recipes</h3>
              <ul>
                <li><Link to="/recipes">Browse All</Link></li>
                <li><Link to="/favorites">My Favorites</Link></li>
                <li><Link to="/trending">Trending</Link></li>
                <li><Link to="/categories">Categories</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="social-icon">📘</i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="social-icon">🐦</i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="social-icon">📷</i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="social-icon">▶️</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} bhandara.in. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
