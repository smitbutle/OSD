import React from 'react'
import styles from './Info.module.css'
const Info = () => {
    return (
        <div className={styles.info}>
            <h1>WHAT IS OSD?</h1>
            <h1>AND WHAT WILL YOU LEARN?</h1>
            <div className={styles.imageBig}>
                <img src="https://i.ibb.co/MNjkLBr/OSD-1.png" alt="OSD-1" border="0" />
            </div>
            <div className={styles.text}>
                <p>
                    Dummy text! Open Source Day is a celebration of open source where Walchand Linux Users' Group conducts a free-of-cost workshop.  Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop. Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free of cost workshop.
                </p>
            </div>
            <div className={styles.imageSmall}>
                <div>
                <img src="https://i.ibb.co/CWRsb6Q/4.png" alt="4" border="0" />
                </div>
                <div>
                <img src="https://i.ibb.co/3s0QJ9G/3.png" alt="3" border="0" />
                </div>
            </div>
            <div className={styles.text}>
                <p>
                    Dummy text! Open Source Day is a celebration of open source where Walchand Linux Users' Group conducts a free-of-cost workshop.  Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop. Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free of cost workshop.
                </p>
            </div>
        </div>
    )
}

export default Info