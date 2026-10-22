import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiSend } from 'react-icons/fi';
import { SiWhatsapp, SiLeetcode } from 'react-icons/si';
import styles from './Hero.module.css';
import { Link } from 'react-scroll';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.particlesWrapper}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: '#2563eb' },
              links: { color: '#2563eb', distance: 140, enable: true, opacity: 0.12, width: 1 },
              move: { enable: true, speed: 0.8, outModes: { default: 'bounce' } },
              number: { density: { enable: true, area: 800 }, value: 40 },
              opacity: { value: 0.2 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className={styles.introPill}>
            <span className={styles.pillDot}></span>
            <span>Hello, I am</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.name}>
            Dharani M
          </motion.h1>
          
          <motion.div variants={itemVariants} className={styles.roleWrapper}>
            <span className={styles.rolePrefix}>Specialized in </span>
            <span className={styles.roleHighlight}>
              <TypeAnimation
                sequence={[
                  'Robotics & Automation', 2200,
                  'Full Stack Java Development', 2200,
                  'Modern Web Applications', 2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.summary}>
            B.E. Robotics and Automation graduate with Honours, passionate about engineering scalable web applications, robotics solutions, and high-performance software systems.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.buttons}>
            <Link to="contact" smooth={true} duration={500} className={`${styles.btn} ${styles.primaryBtn}`}>
              Get In Touch <FiSend className={styles.btnIcon} />
            </Link>
            <Link to="projects" smooth={true} duration={500} className={`${styles.btn} ${styles.secondaryBtn}`}>
              View Projects <FiArrowRight className={styles.btnIcon} />
            </Link>
            <a href="/resume.pdf" download="Dharani_Resume.pdf" className={`${styles.btn} ${styles.outlineBtn}`}>
              Resume <FiDownload className={styles.btnIcon} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.socialsGroup}>
            <span className={styles.socialsLabel}>Follow me:</span>
            <div className={styles.socials}>
              <a href="https://github.com/dharani-moorthy" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/dharani-m-505642302" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://leetcode.com/u/Dharani_Moorthy/" target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
              <a href="mailto:dharanimoorthy51@gmail.com" aria-label="Email"><FiMail /></a>
              <a href="https://wa.me/919361317228" target="_blank" rel="noreferrer" aria-label="WhatsApp"><SiWhatsapp /></a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className={styles.imageCard}>
            <img src="/profile-v2.png" alt="Dharani M" className={styles.profileImage} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
