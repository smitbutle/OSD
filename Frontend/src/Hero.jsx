import React from 'react'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.hero}>
       <div className={styles.logo}>
            <img src="./Source.svg" alt="logo" />
       </div>
       <div className={styles.text}>
        <p>Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop.</p>
       </div>
       <div>
        <button className={styles.button}>Register Now</button>
       </div>
    </div>
  )
}

export default Hero