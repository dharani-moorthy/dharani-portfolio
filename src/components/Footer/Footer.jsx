import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiWhatsapp, SiLeetcode } from 'react-icons/si';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <img src="/logo.svg" alt="Dharani Logo" className={styles.logoIcon} />
              <h2>Dharani<span>.</span></h2>
            </div>
            <p>Building scalable web applications, robotics solutions, and software systems.</p>
          </div>
          
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h3>Contact Info</h3>
            <ul>
              <li><a href="tel:+919159231445"><FiPhone /> +91 9159231445</a></li>
              <li><a href="mailto:dharanimoorthy51@gmail.com"><FiMail /> dharanimoorthy51@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Designed & Developed by Dharani M. All Rights Reserved.</p>
          <div className={styles.socials}>
            <a href="https://github.com/dharani-moorthy" target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/dharani-m-505642302" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href="https://leetcode.com/u/Dharani_Moorthy/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            <a href="mailto:dharanimoorthy51@gmail.com"><FiMail /></a>
            <a href="https://wa.me/919361317228" target="_blank" rel="noreferrer"><SiWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
