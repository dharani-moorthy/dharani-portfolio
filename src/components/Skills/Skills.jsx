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
        { name: 'HTML/CSS/JS', level: 95 },
        { name: 'React & Vite', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'REST API', level: 80 },
        { name: 'Frontend Dev', level: 90 },
        { name: 'Backend Dev', level: 75 }
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
        { name: '3D Printing', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">My Skills</h2>
      
      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex} 
            className={`glass ${styles.categoryCard}`}
            variants={{
              hidden: { opacity: 0, x: -30, skewX: 10 },
              visible: { 
                opacity: 1, 
                x: 0,
                skewX: 0,
                transition: { type: 'spring', stiffness: 300, damping: 15 }
              }
            }}
            whileHover={{ scale: 1.02, x: 5, y: -5 }}
          >
            <h3>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <motion.div 
                      className={styles.progressBar}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
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
