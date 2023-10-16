// Navbar.js

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

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

  function goHome() {
    const home = document.getElementById("root"); // Change 'targetElement' to the actual ID of your target element

    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // Close the menu on click
    }
  }

  function goRegister() {
    const register = document.getElementById("snapRegister"); // Change 'targetElement' to the actual ID of your target element

    if (register) {
      register.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // Close the menu on click
    }
  }

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>
          <img
            src="https://i.ibb.co/51r60WH/logo.png"
            alt="logo"
            border="0"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.hamburger} onClick={handleMenuClick}>
        {showMenu ? "" : "☰"}
        {/* ☰ */}
        </div>
        <ul
          className={`${styles.navItems} ${showMenu ? styles.active : ""}`}
        > 
        <div className={styles.hamburger} onClick={handleMenuClick}>
        ✕
        </div>
          <li className={styles.navItem} onClick={goHome}>
            Home
          </li>
          <li className={styles.navItem} onClick={goRegister}>
            Register
          </li>
          <li className={styles.navItem}>
            <a
              href="https://www.wcewlug.org/"
              target="_blank"
              rel="noreferrer"
            >

              About Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
