import React from 'react'
import styles from "./Conduct.module.css"

function Conduct() {
  return (
    <div className={styles.conductMain}>
        <h1 className={styles.headingOfConduct}>Are You an Employer?</h1>
        <div className={styles.buttonConduct}>
            <button className={styles.buttonOfConduct} >Search Your Hire</button>
            <button className={styles.buttonOfConduct} >Post a job</button>
            <button className={styles.buttonOfConduct} >Conduct Hackathon</button>
        </div>
    </div>
  )
}

export default Conduct