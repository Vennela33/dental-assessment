import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <NavLink to="/" className={styles.logo}>
          Relax Dental Services
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>About Us</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Services</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;