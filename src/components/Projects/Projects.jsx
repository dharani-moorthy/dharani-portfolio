import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
  // Placeholder data - to be replaced with actual resume projects
  const projects = [
    {
      title: 'Event Management System',
      description: 'Developed a web-based Event Management System for managing event registrations, bookings, and scheduling. Implemented user authentication and database operations using MySQL to streamline event management.',
      techStack: ['Java', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      image: '/project-event.png'
    },
    {
      title: 'Degree of Freedom (DOF) Calculator',
      description: 'Developed a GUI-based application to calculate Degree of Freedom using Gibbs Phase Rule. Designed an interactive interface with input validation to improve accuracy and user experience.',
      techStack: ['Python', 'Tkinter'],
      github: 'https://github.com/dharani-moorthy/Python-Project/blob/main/DOF_Calculation.py',
      live: '#',
      image: '/project-dof-v2.png'
    },
    {
      title: 'Student Management System',
      description: 'Built an automated Student Management System to efficiently track and manage student records. Features include secure daily logging, real-time database updates, and automated report generation for faculty.',
      techStack: ['Full Stack Java', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'JDBC'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      image: '/project-student.png'
    },
    {
      title: 'Simple Calculator',
      description: 'A responsive and intuitive graphical calculator application built using Python GUI (Tkinter), capable of performing standard arithmetic operations with a clean interface.',
      techStack: ['Python', 'Tkinter'],
      github: 'https://github.com/dharani-moorthy/Python-Project/commit/c9d60858705beb5d8fd65865c4d7c6c29738d9e9',
      live: '#',
      noImage: true
    },
    {
      title: 'SGPA Calculator',
      description: 'A console-based academic utility tool designed to accurately calculate a student\'s Semester Grade Point Average (SGPA) by taking course credits and grades as command-line inputs.',
      techStack: ['Java', 'Python'],
      github: [
        { label: 'Python', url: 'https://github.com/dharani-moorthy/Python-Project/blob/main/SGPAcalc.py' },
        { label: 'Java', url: 'https://github.com/dharani-moorthy/Java-Project/blob/main/SGPAcalc.java' }
      ],
      live: '#',
      noImage: true
    },
    {
      title: 'Fashion Store',
      description: 'A comprehensive fashion retail platform showcasing modern UI/UX principles for an engaging shopping experience.',
      techStack: ['HTML', 'CSS'],
      github: 'https://github.com/dharani-moorthy/HTML-CSS/blob/main/Fashion/fashion.html',
      live: '#',
      noImage: true
    },
    {
      title: 'MD Creation E-Commerce Web',
      description: 'An AI-powered e-commerce web application for online shopping. Leveraged Artificial Intelligence to enhance product catalogs, automate processes, and provide seamless user flows.',
      techStack: ['AI', 'Web Development'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      
      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`glass ${styles.card}`}
            variants={{
              hidden: { opacity: 0, x: -30, skewX: 10 },
              visible: { 
                opacity: 1, 
                x: 0,
                skewX: 0,
                transition: { type: 'spring', stiffness: 300, damping: 15 }
              }
            }}
            whileHover={{ scale: 1.03, x: 5, y: -5 }}
          >
            {project.image && (
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
            )}
            {!project.image && !project.noImage && (
              <div className={styles.imagePlaceholder}>
                <span>Project Image</span>
              </div>
            )}
            
            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.links}>
                {Array.isArray(project.github) ? (
                  project.github.map((repo, i) => (
                    <a key={i} href={repo.url} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <FiGithub /> GitHub ({repo.label})
                    </a>
                  ))
                ) : (
                  <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <FiGithub /> GitHub
                  </a>
                )}
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
