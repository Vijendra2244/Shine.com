import React from 'react'
import CardOfPopular from '../Card/CardOfPopular'
import styles from "./All.module.css"

function Manager() {
  return (
    <div>
      <div className={styles.ManagerOfPopularCourses}>
      <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1508160736_4805.png&w=64&q=75"} rating={4.5} heading={"Certified Manager For Queality and"} training={"SkillSOft"} duration={"Duration:186 days | Mode:Online"} price={11360} explore={"Explore"} buynow={"Buy Now"}/>
        <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1617699867_4091.png&w=64&q=75"} rating={4.5} heading={"Master Of Project Manager"} training={"CTI-Kaushal"} duration={"Duration:21 Hours | Mode:Online"} price={19999} explore={"Explore"} buynow={"Buy Now"}/>
        <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1579153944_2178.png&w=64&q=75"} rating={4.5} heading={"Management Fundamental"} training={"ERB"} duration={"Duration: 365 days | Mode:Online"} price={16499} explore={"Explore"} buynow={"Buy Now"}/>
      </div>
    </div>
  )
}

export default Manager