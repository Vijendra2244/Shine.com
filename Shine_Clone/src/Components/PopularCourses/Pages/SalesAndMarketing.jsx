import React from 'react'
import CardOfPopular from '../Card/CardOfPopular'
import styles from "./All.module.css"

function SalesAndMarketing() {
  return (
    <div className={styles.marektingCard}>
       <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1508900890_4134.png&w=64&q=75"} rating={4.5} heading={"Marketing Essentials"} training={"SkillSoft"} duration={"Duration:186 days | Mode:Online"} price={9620} explore={"Explore"} buynow={"Buy Now"}/>
    </div>
  )
}

export default SalesAndMarketing