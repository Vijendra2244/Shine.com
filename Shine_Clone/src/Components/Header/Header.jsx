import React, { useState } from "react";
import { CiMobile4 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import styles from "./Header.module.css";
import Download from "./Download";
import Employe from "./Employe/Employe";
import Help from "./Help/Help";

function Header() {
  const [isContentIsVisible, setIsContentIsVisible] = useState(false);
  const [isEmployeIsVisible, setIsEmployeIsVisible] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const handleMouseEnter = () => {
    setIsContentIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsContentIsVisible(false);
  };
  const handleMouseEnterEmploye = () => {
    setIsEmployeIsVisible(true);
  };
  const handleMouseLeaveEmploye = () => {
    setIsEmployeIsVisible(false);
  };
  const handleMouseEnterHelp = () => {
    setIsHelp(true);
  };
  const handleMouseLeaveHelp = () => {
    setIsHelp(false);
  };
  return (
    <>
      <div className={styles.headerMain}>
        <div className={styles.headerRight}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.headerItem}
          >
            <CiMobile4 />
            <p className={styles.paraTagOfHeaders}>Download App</p>
          </div>
          <div
            onMouseEnter={handleMouseEnterEmploye}
            onMouseLeave={handleMouseLeaveEmploye}
            className={styles.headerItem}
          >
            <FaRegUser />
            <p className={styles.paraTagOfHeaders}>For Employers</p>
          </div>
          <div
            onMouseEnter={handleMouseEnterHelp}
            onMouseLeave={handleMouseLeaveHelp}
            className={styles.headerItem}
          >
            <BiPhoneCall />
            <p className={styles.paraTagOfHeaders}>Help</p>
          </div>
        </div>
      </div>
      {isContentIsVisible && <Download />}
      {isEmployeIsVisible && <Employe />}
      {isHelp && <Help />}
    </>
  );
}

export default Header;
