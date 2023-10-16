import React from 'react'
import styles from './Mid.module.css'
const Mid = () => {
  return (
    <div className={styles.bg}>
      <img src="https://i.ibb.co/sFCSgHc/OSD-1-1.png" alt="bg" />
      <div className={styles.watch}>
        <h1>Watch Trailer</h1>
      </div>
      <div className={styles.vid}>
        {/* <h2>If you have paid the amount and didn't recieve confirma email,<br /> please contact Datta Gangji +91 75177 56075</h2> */}
        {/* <iframe src="https://www.youtube.com/embed/x3gKaA-6wFg?controls=0&modestbranding=1" title="LinuxDiary 4.0 | Official Trailer 🐧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        <video controls >

          <source src="../public/LD.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Mid