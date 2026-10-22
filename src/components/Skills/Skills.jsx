import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML / CSS / JS', level: 95 },
        { name: 'React & Vite', level: 85 },
        { name: 'Responsive UI Design', level: 90 },
        { name: 'REST APIs', level: 80 },
        { name: 'Frontend Architecture', level: 90 },
        { name: 'Backend Integration', level: 75 }
      ]
    },
    {
      title: 'Tools & Software',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'PyCharm', level: 85 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'MySQL Workbench', level: 80 }
      ]
    },
    {
      title: 'Hardware & Engineering',
      skills: [
        { name: 'Arduino', level: 85 },
        { name: 'Raspberry Pi', level: 80 },
        { name: 'CATIA V5', level: 75 },
        { name: 'Fusion 360', level: 75 },
        { name: '3D Printing Prototyping', level: 85 }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      
      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 }
          }
        }}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex} 
            className={`glass ${styles.categoryCard}`}
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span>{skill.name}</span>
                    <span className={styles.percent}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <motion.div 
                      className={styles.progressBar}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
