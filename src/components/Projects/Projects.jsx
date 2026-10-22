import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'SolidWorks Mechanical Assembly',
      category: 'hardware',
      description: 'Engineered a precision 3D CAD mechanical assembly of a Universal Joint in SolidWorks. Modeled individual components, applied mechanical mates, and conducted assembly motion studies.',
      techStack: ['SolidWorks', '3D CAD Modeling', 'Mechanical Assembly', 'Motion Study'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      image: '/project-solidworks.png'
    },
    {
      title: 'Degree of Freedom (DOF) Calculator',
      category: 'hardware',
      description: 'Developed a GUI-based application to calculate Degree of Freedom using Gibbs Phase Rule. Designed an interactive interface with input validation to improve accuracy and user experience.',
      techStack: ['Python', 'Tkinter', 'Mechanical Engg'],
      github: 'https://github.com/dharani-moorthy/Python-Project/blob/main/DOF_Calculation.py',
      live: '#',
      image: '/project-dof-v2.png'
    },
    {
      title: 'Bumpy Controller (Web & Mobile App)',
      category: 'hardware',
      description: 'Developed a robust cross-platform control interface (web application and mobile app) for real-time telemetry, remote operations, and motor controls of the Bumpy robotics kit.',
      techStack: ['Robotics IoT', 'Web App', 'Mobile App', 'Real-Time Control'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    },
    {
      title: 'Karthikesh Robotics Corporate Website',
      category: 'software',
      description: 'Designed and deployed the official web portal & management system (KRPMS) for Karthikesh Robotics Pvt. Ltd., featuring autonomous agent telemetry, robotics kits, and cloud infrastructure.',
      techStack: ['Responsive Web', 'Modern UI', 'Full Stack Development'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      image: '/project-karthikesh.png'
    },
    {
      title: 'Roboverz Platform',
      category: 'software',
      description: 'An advanced robotics and educational web platform engineered during internship at Karthikesh Robotics, delivering interactive showcases and engaging digital learning tools.',
      techStack: ['Web Development', 'React', 'Robotics Systems', 'UI/UX'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    },
    {
      title: 'Rookies Community Portal',
      category: 'software',
      description: 'A community-driven digital portal designed for learners and tech enthusiasts to collaborate, share robotics prototypes, and access curated engineering resources.',
      techStack: ['Web Application', 'Frontend Architecture', 'Community Platform'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    },
    {
      title: 'Event Management System',
      category: 'software',
      description: 'Developed a web-based Event Management System for managing event registrations, bookings, and scheduling. Implemented user authentication and database operations using MySQL to streamline event management.',
      techStack: ['Java', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      image: '/project-event.png'
    },
    {
      title: 'Student Management System',
      category: 'software',
      description: 'Built an automated Student Management System to efficiently track and manage student records. Features include secure daily logging, real-time database updates, and automated report generation for faculty.',
      techStack: ['Full Stack Java', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'JDBC'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      image: '/project-student.png'
    },
    {
      title: 'Modern Calculator',
      category: 'software',
      description: 'A responsive and intuitive modern calculator application built with a sleek visual interface, capable of performing standard arithmetic operations with real-time display.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/dharani-moorthy/HTML-CSS',
      live: '#',
      image: '/project-calculator.png'
    },
    {
      title: 'SGPA Calculator',
      category: 'software',
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
      category: 'software',
      description: 'A comprehensive fashion retail platform showcasing modern UI/UX principles for an engaging shopping experience.',
      techStack: ['HTML', 'CSS'],
      github: 'https://github.com/dharani-moorthy/HTML-CSS/blob/main/Fashion/fashion.html',
      live: '#',
      noImage: true
    },
    {
      title: 'MD Creation E-Commerce Web',
      category: 'software',
      description: 'An AI-powered e-commerce web application for online shopping. Leveraged Artificial Intelligence to enhance product catalogs, automate processes, and provide seamless user flows.',
      techStack: ['AI', 'Web Development'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-tag">Portfolio Showcase</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">
          Explore a curated selection of my work spanning robotics & hardware engineering, full-stack Java, and modern web applications.
        </p>
      </div>

      {/* Category Filter Controls */}
      <div className={styles.filterContainer}>
        <button 
          className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects ({projects.length})
        </button>
        <button 
          className={`${styles.filterBtn} ${activeFilter === 'hardware' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('hardware')}
        >
          ⚙️ Hardware Projects ({projects.filter(p => p.category === 'hardware').length})
        </button>
        <button 
          className={`${styles.filterBtn} ${activeFilter === 'software' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('software')}
        >
          💻 Software & Web ({projects.filter(p => p.category === 'software').length})
        </button>
      </div>
      
      <motion.div 
        layout
        className={styles.grid}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout
              key={project.title} 
              className={`glass ${styles.card}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
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
                <span className={`${styles.categoryBadge} ${project.category === 'hardware' ? styles.hardwareBadge : styles.softwareBadge}`}>
                  {project.category === 'hardware' ? '⚙️ Hardware Project' : '💻 Software Project'}
                </span>

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
                      <FiGithub /> Code
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
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
