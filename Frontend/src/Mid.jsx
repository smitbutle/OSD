import React from 'react'
import styles from './Mid.module.css'
const Mid = () => {
  return (
    <div className={styles.bg}>
      {/* <img src="https://i.ibb.co/sFCSgHc/OSD-1-1.png" alt="bg" /> */}
      {/* <img src="./assets/OSD.svg" alt="bg" /> */}

      <img src="https://i.ibb.co/JtPvvQZ/Copy-of-UI-OSD-2-min.png" alt="Copy-of-UI-OSD-2-min" border="0" className={styles.mob}></img>
      <img src="https://i.ibb.co/NmJNn4S/Copy-of-UI-OSD-6.png" alt="Copy-of-UI-OSD-6" border="0" className={styles.pc}></img>
      <div className={styles.watch}>
        <h1>Watch Trailer</h1>
      </div>
      <div className={styles.reaper}>
        <img src="https://i.ibb.co/VC3cpty/reaper.png" alt="reaper" border="0"></img>
        <div className={styles.text}>
          Dummy text! Open Source Day is a celebration of open source where Walchand Linux Users' Group conducts a free-of-cost workshop. Walchand Linux Users' Group conducts a free-of-cost workshop. Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free of cost workshop.
        </div>
      </div>
      <div className={styles.vid}>
        {/* <h2>If you have paid the amount and didn't recieve confirma email,<br /> please contact Datta Gangji +91 75177 56075</h2> */}
        {/* <iframe src="https://www.youtube.com/embed/x3gKaA-6wFg?controls=0&modestbranding=1" title="LinuxDiary 4.0 | Official Trailer 🐧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        <video controls >

          <source src="./LD.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Mid