import React from 'react'
import styles from './Hero.module.css'
import Source from './assets/Source.svg'
const Hero = () => {
  function goRegister() {
    const register = document.getElementById("snapRegister"); // Change 'targetElement' to the actual ID of your target element

    if (register) {
      register.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // Close the menu on click
    }
  }
  return (
    <div className={styles.hero}>
       <div className={styles.logo}>
            <img src={Source} alt="logo" />
       </div>
       <div className={styles.text}>
        <p>Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop.</p>
       </div>
       <div>
        <button className={styles.button} onClick={goRegister}>Register Now</button>
       </div>
    </div>
  )
}

export default Hero