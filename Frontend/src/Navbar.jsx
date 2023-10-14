// Navbar.js

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== isScrolled) {
        setIsScrolled(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img
          src="https://i.ibb.co/51r60WH/logo.png" alt="logo" border="0"
          className={styles.logoImage}
        />
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Register</li>
        <li className={styles.navItem}>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
