import React from 'react'
import styles from './Info.module.css'
const Info = () => {
    return (
        <div className={styles.info}>
            <h1>WHAT IS OSD?</h1>
            <h1>AND WHAT WILL YOU LEARN?</h1>
            <div>
                <img src="./public/assets/OSD.png" alt="osd" className={styles.imageBig}/>
            </div>
            <div className={styles.text}>
                <p>
                Dummy text! Open Source Day is a celebration of open source where Walchand Linux Users' Group conducts a free-of-cost workshop.  Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop. Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free of cost workshop. 
                </p>
            </div>
            <div className={styles.imgSec}>
                <img src="./public/assets/3.png" alt="git"className={styles.imageSmall} />
                <img src="./public/assets/4.png" alt="github" className={styles.imageSmall}/>
            </div>
            <div className={styles.text}>
                <p>
                Dummy text! Open Source Day is a celebration of open source where Walchand Linux Users' Group conducts a free-of-cost workshop.  Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop. Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free of cost workshop. </p>
            </div>
        </div>
    )
}

export default Info