import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Karthikesh Robotics Corporate Website',
      description: 'Designed and deployed the official web portal & management system (KRPMS) for Karthikesh Robotics Pvt. Ltd., featuring autonomous agent telemetry, robotics kits, and cloud infrastructure.',
      techStack: ['Responsive Web', 'Modern UI', 'Full Stack Development'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      image: '/project-karthikesh.png'
    },
    {
      title: 'Roboverz Platform',
      description: 'An advanced robotics and educational web platform engineered during internship at Karthikesh Robotics, delivering interactive showcases and engaging digital learning tools.',
      techStack: ['Web Development', 'React', 'Robotics Systems', 'UI/UX'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    },
    {
      title: 'Rookies Community Portal',
      description: 'A community-driven digital portal designed for learners and tech enthusiasts to collaborate, share robotics prototypes, and access curated engineering resources.',
      techStack: ['Web Application', 'Frontend Architecture', 'Community Platform'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    },
    {
      title: 'Bumpy Controller (Web & Mobile App)',
      description: 'Developed a robust cross-platform control interface (web application and mobile app) for real-time telemetry, remote operations, and motor controls of the Bumpy robotics kit.',
      techStack: ['Robotics IoT', 'Web App', 'Mobile App', 'Real-Time Control'],
      github: 'https://github.com/dharani-moorthy',
      live: '#',
      noImage: true
    },
    {
      title: 'Degree of Freedom (DOF) Calculator',
      description: 'Developed a GUI-based application to calculate Degree of Freedom using Gibbs Phase Rule. Designed an interactive interface with input validation to improve accuracy and user experience.',
      techStack: ['Python', 'Tkinter', 'Mechanical Engg'],
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

  const designProjects = [
    {
      title: 'SolidWorks Mechanical Assembly',
      description: 'Engineered a precision 3D CAD mechanical assembly of a Universal Joint in SolidWorks. Modeled individual components, applied mechanical mates, and conducted assembly motion studies.',
      techStack: ['SolidWorks', '3D CAD Modeling', 'Mechanical Assembly', 'Motion Study'],
      image: '/project-solidworks.png'
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
    <section id="projects" className="section">
      {/* 1st: Projects Section */}
      <div className="section-header">
        <span className="section-tag">Development & Engineering</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          Featured web applications, robotics platforms, and full-stack software systems.
        </p>
      </div>

      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`glass ${styles.card}`}
            variants={cardVariants}
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
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              
              {project.github && (
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
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 2nd: Under that - Dedicated Designing Section */}
      <div className={styles.designingSection}>
        <div className="section-header">
          <span className="section-tag">CAD & 3D Modeling</span>
          <h2 className="section-title">Designing</h2>
          <p className="section-desc">
            Precision mechanical assemblies and 3D modeling projects designed using SolidWorks.
          </p>
        </div>

        <motion.div 
          className={styles.designGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {designProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`glass ${styles.card} ${styles.designCard}`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {project.image && (
                <div className={styles.imageContainer}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
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
                {/* No code button under designing */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
