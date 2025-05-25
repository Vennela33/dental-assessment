import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {currentYear} Relax Dental Services. All rights reserved.</p>
        <p>
          <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;