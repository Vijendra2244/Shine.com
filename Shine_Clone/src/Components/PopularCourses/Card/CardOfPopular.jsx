import React from 'react'
import styles from "./CardOfPopular.module.css"

function CardOfPopular({courses,image,rating,heading,training,duration,price,explore,buynow}) {
  return (
    <div className={styles.cardOfPopularCourses}>
      <p className={styles.courses}>{courses}</p>
     <div className={styles.popularCoursesMainConatiner}>
        <div className={styles.leftOfPopularCourses}>
           <img className={styles.imageOfJava} src={image} />
           <p className={styles.ratingOfCourses}>{rating}</p>
        </div>
        <div className={styles.rightOfPopularCourses}>
          <h1 className={styles.headingOfCourses}>{heading}</h1>
          <p className={styles.prepTrainOfCourses}>{training}</p>
          <p className={styles.duration}>{duration}</p>
          <h1 className={styles.priceOfCourses}> ₹ {price}</h1>
        </div>
      
     </div>
     <hr/>
     <div className={styles.ButtonOfPopularCourses}>
       <button className={styles.btnOfExplore}>{explore}</button>
       <button className={styles.btnOfBuyNow}>{buynow}</button>
     </div>
       
    </div>
  )
}

export default CardOfPopular