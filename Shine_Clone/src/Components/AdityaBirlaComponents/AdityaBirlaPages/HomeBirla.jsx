import React from "react";
import styles from "./HomeBirla.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
function HomeBirla() {
  return (
    <div className={styles.mainContainerOfBirlaHome}>
      <div>
        <img
          className={styles.stylingBirlaLogo}
          src="https://staticrect.shine.com/r/m/microsite/images/aditya-birla-group/header_images/2.jpg"
          alt=""
        />
      </div>
      <div className={styles.conatinerOfHomePageOfBirla}>
        <div className={styles.leftContainerOfBirla}>
          <p className={styles.paraOfBirla}>
            A global conglomerate, the Aditya Birla Group is in the League of
            Fortune 500. Anchored by an extraordinary force of over 120,000
            employees belonging to 42 nationalities, the Group is built on a
            strong foundation of stakeholder value creation. With over seven
            decades of responsible business practices, our businesses have grown
            into global powerhouses in a wide range of sectors – metals, pulp
            and fibre, chemicals, textiles, carbon black, telecom and cement.
            Today, over 50% of Group revenues flow from overseas operations that
            span 36 countries in North and South America, Africa and Asia.
          </p>
          <img
            className={styles.imageOfBirlaGroup}
            src="https://staticrect.shine.com/r/m/microsite/images/aditya-birla-group/page_images/ABG_16_x15-1.jpg"
            alt=""
          />
        </div>
        <div className={styles.rightContainerOfBirla}>
          <h1 className={styles.connectWithUsBirla}>Connect With Us</h1>
          <div className={styles.socialIconBirla}>
            <BsFacebook className={styles.facebook}></BsFacebook>
            <AiFillTwitterCircle
              className={styles.twitter}
            ></AiFillTwitterCircle>
            <AiFillLinkedin className={styles.linkdin}></AiFillLinkedin>
            <BsInstagram className={styles.instagram}></BsInstagram>
            <AiFillYoutube className={styles.youtube}></AiFillYoutube>
          </div>
        </div>
      </div>
      <h1 className={styles.endTagOfBirla}>Content provided by Infosys, HT Media disclaims all warranties against infringement.</h1>
       <div className={styles.endOfBirlaContainer}>
         <p className={styles.poweredBy}>Powered By</p>
         <img className={styles.poweredImage} src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
       </div>
    </div>
  );
}

export default HomeBirla;
