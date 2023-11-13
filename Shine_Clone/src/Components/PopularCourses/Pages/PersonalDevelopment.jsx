import React from 'react'
import CardOfPopular from '../Card/CardOfPopular'
import  styles from "./All.module.css"

function PersonalDevelopment() {
  return (
    <div className={styles.personalDevelopement}>
       <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1508153062_3057.png&w=64&q=75"} rating={4.5} heading={"Business Communication"} training={"Vskills"} duration={"Duration:14 Hours | Mode:Online"} price={3499} explore={"Explore"} buynow={"Buy Now"}/>
        <CardOfPopular courses="Courses" image={"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1556171591_1047.png&w=64&q=75"} rating={3} heading={"Business Fundamental"} training={"VRB"} duration={"Duration:365 days| Mode:Online"} price={15999} explore={"Explore"} buynow={"Buy Now"}/>
    </div>
  )
}

export default PersonalDevelopment