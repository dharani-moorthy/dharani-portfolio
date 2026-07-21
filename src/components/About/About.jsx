import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const strengths = [
    'Java Development', 'Web Development', 'Robotics & Automation',
    'Full Stack Development', 'Problem Solving', 'Software Development',
    'UI Development', 'Fast Learner', 'Team Collaboration',
    'Leadership', 'Communication Skills'
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.summaryCard}
          initial={{ opacity: 0, x: -50, skewX: 15 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px', height: '100%' }}>
            <h3>Professional Summary</h3>
            <p>
              I am a <strong>B.E. Robotics and Automation graduate with Honours</strong>, deeply passionate about developing scalable web applications, robotics solutions, and software systems. I thrive at the intersection of hardware and software, bringing analytical problem-solving skills to every project.
            </p>
            <p className={styles.highlight}>
              Currently working as a <strong>Web Development Intern at Karthikesh Robotics Pvt. Ltd.</strong>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.strengthsCard}
          initial={{ opacity: 0, x: 50, skewX: -15 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px', height: '100%' }}>
            <h3>Core Strengths</h3>
            <div className={styles.badges}>
              {strengths.map((strength, index) => (
                <motion.span 
                  key={index} 
                  className={styles.badge}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)', color: '#fff' }}
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
