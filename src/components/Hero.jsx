import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">Dharani.</h1>
          <h2 className="hero-subtitle">I build things for the web.</h2>
          <p className="hero-description delay-100">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="hero-cta delay-200">
            <a href="#projects" className="btn btn-primary">Check out my work</a>
            <a href="#about" className="btn btn-secondary">More about me</a>
          </div>
        </div>
        <div className="hero-visual delay-300 animate-fade-in">
          <div className="blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
