import React from 'react'
import CardOfPopular from '../Card/CardOfPopular'
import styles from "./All.module.css"

function All() {
  return (
   <> 
    <div className={styles.AllOfCard}>
        <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640851375_8085.png&w=64&q=75"} rating={4.5} heading={"Backend Developer In Java"} training={"TestPrep Training"} duration={"Duration:51 Hours | Mode:Online"} price={12999} explore={"Explore"} buynow={"Buy Now"}/>
        <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640851637_4621.png&w=64&q=75"} rating={4.5} heading={"Backend Developer In Python"} training={"TestPrep Training"} duration={"Duration:21 Hours | Mode:Online"} price={12999} explore={"Explore"} buynow={"Buy Now"}/>
        <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652953799_9984.png&w=64&q=75"} rating={4.5} heading={"Backend Developer In Node.js"} training={"TestPrep Training"} duration={"Duration:41 Hours | Mode:Online"} price={12999} explore={"Explore"} buynow={"Buy Now"}/>

    </div>
     
   </>
  )
}

export default All