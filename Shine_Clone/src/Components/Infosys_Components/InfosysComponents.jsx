import React from "react";
import { Link } from "react-router-dom";
import styles from "./InfosysComponents.module.css";
import AllRouterInfosys from "./AllRouterInfosys/AllRouterInfosys";

function InfosysComponents() {
  return (
    <div >
      <div className={styles.navbarSection}>
        <img src="https://staticrect.shine.com/r/m/microsite/images/infosys/header_images/infosys_logo-_1.png" alt="" />
        <div className={styles.rightContainerOfInfosysNavbar}>

        <Link className={styles.listOfInfosysNavbar}  to="/homeInfosys">Home</Link>
        <Link className={styles.listOfInfosysNavbar} to="/aboutus">About Us</Link>
        <Link className={styles.listOfInfosysNavbar} to="/whyinfosys">Why Infosys</Link>
        <Link className={styles.listOfInfosysNavbar} to="/restartwithinfosys">Restart With Infosys</Link>
        <Link className={styles.listOfInfosysNavbar} to="/jobsinfosys">Jobs</Link>
        <Link className={styles.listOfInfosysNavbar} to="/visitus">Visit us</Link>
        </div>
      </div>
      <AllRouterInfosys />
    </div>
  );
}

export default InfosysComponents;
