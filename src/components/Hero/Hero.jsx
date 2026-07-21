import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiWhatsapp, SiLeetcode } from 'react-icons/si';
import styles from './Hero.module.css';
import { Link } from 'react-scroll';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

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
              color: { value: '#3b82f6' },
              links: { color: '#3b82f6', distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
              number: { density: { enable: true, area: 800 }, value: 50 },
              opacity: { value: 0.3 },
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
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, x: -30, skewX: 20 }, visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring', stiffness: 300 } } }} 
            className={styles.greeting}
          >
            Hello, I am
          </motion.h2>
          <motion.h1 
            variants={{ hidden: { opacity: 0, x: -30, skewX: 20 }, visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring', stiffness: 300 } } }} 
            className={styles.name}
          >
            Dharani M
          </motion.h1>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30, skewX: 20 }, visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring', stiffness: 300 } } }} 
            className={styles.typeAnimation}
          >
            <TypeAnimation
              sequence={[
                'Robotics and Automation Engineer', 2000,
                'Full Stack Java Developer', 2000,
                'Web Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            variants={{ hidden: { opacity: 0, x: -30, skewX: 20 }, visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring', stiffness: 300 } } }} 
            className={styles.summary}
          >
            B.E. Robotics and Automation graduate with Honours, passionate about developing scalable web applications, robotics solutions, and software systems.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30, skewX: 20 }, visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring', stiffness: 300 } } }} 
            className={styles.buttons}
          >
            <Link to="contact" smooth={true} duration={500} className={`${styles.btn} ${styles.primaryBtn}`}>
              Hire Me
            </Link>
            <Link to="contact" smooth={true} duration={500} className={`${styles.btn} ${styles.secondaryBtn}`}>
              Contact Me
            </Link>
            <a href="#resume" className={`${styles.btn} ${styles.outlineBtn}`}>
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30, skewX: 20 }, visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring', stiffness: 300 } } }} 
            className={styles.socials}
          >
            <a href="https://github.com/dharani-moorthy" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/dharani-m-505642302" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://leetcode.com/u/Dharani_Moorthy/" target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
            <a href="mailto:dharanimoorthy51@gmail.com" aria-label="Email"><FiMail /></a>
            <a href="https://wa.me/919361317228" target="_blank" rel="noreferrer" aria-label="WhatsApp"><SiWhatsapp /></a>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9, y: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [-10, 10, -10]
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img src="/profile-v2.png" alt="Dharani M" className={styles.profileImage} />
          <div className={styles.glowEffect}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
