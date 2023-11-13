import React from "react";
import styles from "./Home.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

function Home() {
  return (
    <div className={styles.homeInfosys}>
      <div>
        <img
          className={styles.infosysImage}
          src="https://staticrect.shine.com/r/m/microsite/images/infosys/header_images/Global_India_Handshake_1280x400/Global_India_Handshake_1200x300.png"
          alt=""
        />
        <div className={styles.containrOfHomePage}>
          <div className={styles.leftSideInfosys}>
            <p className={styles.paraOfInfosys}>
              Infosys is a global leader in next-generation digital services and
              consulting. Over 300,000 of our people work to amplify human
              potential and create the next opportunity for people, businesses
              and communities. We enable clients in more than 56 countries to
              navigate their digital transformation. With over four decades of
              experience in managing the systems and workings of global
              enterprises, we expertly steer clients, as they navigate their
              digital transformation powered by cloud and AI. We enable them
              with an AI-first core, empower the business with agile digital at
              scale and drive continuous improvement with always-on learning
              through the transfer of digital skills, expertise, and ideas from
              our innovation ecosystem. We are deeply committed to being a
              well-governed, environmentally sustainable organization where
              diverse talent thrives in an inclusive workplace.{" "}
            </p>
            <p>
              Visit <a href="#">www.infosys.com</a> to see how Infosys (NSE,
              BSE, NYSE: INFY) can help your enterprise navigate your next.
            </p>
          </div>
          <div className={styles.rightSideInfosys}>
            <h1 className={styles.headingOfConnect}>Connect With Us</h1>
            <div className={styles.socialIcon}>
              <BsFacebook className={styles.facebook}></BsFacebook>
              <AiFillTwitterCircle className={styles.twitter}></AiFillTwitterCircle>
              <AiFillLinkedin className={styles.linkdin}></AiFillLinkedin>
              <BsInstagram className={styles.instagram}></BsInstagram>
              <AiFillYoutube className={styles.youtube}></AiFillYoutube>
            </div>
          </div>
        </div>
      </div>
       <h1 className={styles.endTagOfInfosys}>Content provided by Infosys, HT Media disclaims all warranties against infringement.</h1>
       <div className={styles.endOfInfosysContainer}>
         <p className={styles.poweredBy}>Powered By</p>
         <img className={styles.poweredImage} src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
       </div>
        </div>
  );
}

export default Home;
