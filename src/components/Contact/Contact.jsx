import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import styles from './Contact.module.css';

const Contact = () => {

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`glass ${styles.infoCard}`}>
            <h3>Contact Information</h3>
            <p className={styles.subtitle}>Feel free to reach out to me for any opportunities or queries.</p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><FiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919159231445">+91 9159231445</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><SiWhatsapp /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919361317228" target="_blank" rel="noreferrer">+91 9361317228</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:dharanimoorthy51@gmail.com">dharanimoorthy51@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><FiMapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
