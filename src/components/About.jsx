import React from 'react';
import './About.css';

const About = () => {
  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'CSS / HTML', 'Vite', 'Git'];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p>
              Hello! My name is Dharani and I enjoy creating things that live on the internet. 
              My interest in web development started when I decided to try building custom themes 
              and interactive layouts, which taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on various projects. 
              My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="about-image-wrapper">
            <div className="about-image">
              <div className="placeholder-image">
                <span>D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
