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
            <p className={styles.trendingParaTag}>Node js </p>
            <p className={styles.trendingParaTag}>Android </p>
            <p className={styles.trendingParaTag}>Finance </p>
            <p className={styles.trendingParaTag}>Sales </p>

            <p>Business Development</p>
        </div>
     </div>
     <hr className={styles.trendHrLineTrending}/>
    </>
  )
}

export default Trending