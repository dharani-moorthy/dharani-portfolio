import React from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';
import styles from './Resume.module.css';

const Resume = () => {
  const resumeImageUrl = '/resume.jpg'; 
  const resumePdfUrl = '/resume.pdf';

  return (
    <section id="resume" className={`section ${styles.resumeSection}`}>
      <h2 className="section-title">My Resume</h2>
      
      <div className={styles.container}>
        <div className={styles.actionsList}>
          <a href={resumePdfUrl} target="_blank" rel="noreferrer" className={styles.actionBtn}>
            <FiEye /> View Resume
          </a>
          <a href={resumePdfUrl} download="Dharani_Resume.pdf" className={styles.actionBtn}>
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
