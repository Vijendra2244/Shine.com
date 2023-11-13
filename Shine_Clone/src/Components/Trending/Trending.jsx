import React from 'react'
import styles from "./Trending.module.css"
function Trending() {
  return (
    <>
     <div className={styles.trendingMain}>
        <div>
            <h2 className={styles.trendingHeading}>Trending:</h2>
        </div>
        <div className={styles.trendList}>
            <p>Node js </p>
            <p>Android </p>
            <p>Finance </p>
            <p>Sales </p>
            <p>Business Development</p>
        </div>
     </div>
     <hr className={styles.trendHrLine}/>
    </>
  )
}

export default Trending