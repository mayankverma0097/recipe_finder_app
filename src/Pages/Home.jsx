import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">AI-Powered Recipe Discovery</span>
            <h1 className="hero-title">
              Find Perfect <span className="highlight">Recipes with AI</span>
            </h1>
            <p className="hero-description">
              Discover delicious recipes step-by-step with our intelligent AI assistant. 
              Simply enter your ingredients or cravings, and let AI create personalized recipes just for you.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Start Cooking</button>
              <button className="btn btn-secondary">Browse Recipes</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="floating-card card-1"></div>
              <div className="floating-card card-2"></div>
              <div className="floating-card card-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🥘</div>
            <h3>Enter Ingredients</h3>
            <p>Tell us what ingredients you have in your kitchen</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Processing</h3>
            <p>Our AI analyzes and creates personalized recipe suggestions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Step-by-Step Guide</h3>
            <p>Get detailed cooking instructions with easy-to-follow steps</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Save Favorites</h3>
            <p>Bookmark your favorite recipes for quick access anytime</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Cook Something Amazing?</h2>
        <p>Join thousands of home cooks discovering new recipes daily</p>
        <button className="btn btn-large">Find Your Recipe Now</button>
      </section>
    </div>
  );
}
