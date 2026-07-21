import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import styles from './Achievements.module.css';

const Achievements = () => {
  const achievementsList = [
    'Academic Honours in Robotics and Automation',
    'Published technical papers on robotics systems',
    'Completed successful internships in software development',
    'Attended and presented at multiple technical workshops',
    'Participated and won awards in regional hackathons',
    'Successfully deployed full-stack web projects for clients',
    'Active leadership in university technical events'
  ];

  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements</h2>
      
      <div className={styles.container}>
        <motion.div 
          className={`glass ${styles.card}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ul className={styles.list}>
            {achievementsList.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FiStar className={styles.icon} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
