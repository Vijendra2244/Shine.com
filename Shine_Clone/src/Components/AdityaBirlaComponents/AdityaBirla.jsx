import React from 'react'
import {Link} from "react-router-dom"
import AllRouterBirla from './AllRouterOfAdityaBirla/AllRouterBirla'
import styles from "./AdityaBirla.module.css"


function AdityaBirla() {
  return (
    <div >
        <div className={styles.mainContainerOfBirlaPage}>
            <img src="https://staticrect.shine.com/r/m/microsite/images/aditya-birla-group/header_images/logo_ABG.jpg" alt="" />
        <div className={styles.linkOfBirla}>
            <Link className={styles.listBirla} to = "/homebirla">Home</Link>
            <Link className={styles.listBirla} to = "/aboutusbirla">About Us</Link>
            <Link className={styles.listBirla} to = "/jobsbirla">Jobs</Link>
            <Link className={styles.listBirla} to = "/contactusbirla">Contact Us</Link>
        </div>
        </div>
        <AllRouterBirla/>
    </div>
  )
}

export default AdityaBirla