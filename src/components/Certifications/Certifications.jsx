import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certifications = [
    { title: 'Java Programming Certification', issuer: 'Infosys Springboard', date: 'Completed' },
    { title: 'Python Programming Certification', issuer: 'Programming Certification', date: 'Completed' },
    { title: 'Fusion 360 Certification', issuer: 'Autodesk (Expected)', date: 'Completed' }
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      
      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.iconWrapper}>
              <FiAward />
            </div>
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            <p className={styles.date}>{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
