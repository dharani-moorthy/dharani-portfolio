import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Karthikesh Robotics Pvt. Ltd.',
      date: '3 Months',
      description: [
        'Built and delivered full-stack web solutions and the official corporate company website.',
        'Developed key web applications including Roboverz and the Rookies Community platform to facilitate collaboration and user engagement.',
        'Engineered the Bumpy Controller web application and mobile app for seamless robotics hardware communication and control.'
      ]
    },
    {
      role: 'Java Development Intern',
      company: 'Remote',
      date: '3 Months',
      description: [
        'Completed training in Core Java, Object-Oriented Programming (OOP), and Exception Handling.',
        'Developed Java-based applications and gained hands-on experience in debugging and problem-solving.'
      ]
    },
    {
      role: '3D Printing & Arduino Development',
      company: 'Offline',
      date: 'Jul 2024 - Oct 2024 (15 days)',
      description: [
        'Conducted mechanical testing on 3D-printed PLA samples with different infill patterns to evaluate and improve structural performance.',
        'Designed and fabricated prototypes using Arduino and 3D printing technologies, optimizing print parameters to enhance strength and reduce manufacturing defects.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={styles.timelineIcon}>
              <FiBriefcase />
            </div>
            
            <div className={`glass ${styles.timelineContent}`}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                </div>
                <span className={styles.date}>{exp.date}</span>
              </div>
              
              <ul className={styles.description}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
