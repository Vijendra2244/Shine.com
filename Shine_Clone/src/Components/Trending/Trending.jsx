import React from 'react'
import styles from "./Trending.module.css"
function Trending() {
  return (
    <>
     <div className={styles.trendingMainTrending}>
        <div>
            <h2 className={styles.trendingHeadingTrending}>Trending:</h2>
        </div>
        <div className={styles.trendListTrending}>
            <p>Node js |</p>
            <p>Android |</p>
            <p>Finance |</p>
            <p>Sales |</p>
            <p>Business Development</p>
        </div>
     </div>
     <hr className={styles.trendHrLineTrending}/>
    </>
  )
}

export default Trending