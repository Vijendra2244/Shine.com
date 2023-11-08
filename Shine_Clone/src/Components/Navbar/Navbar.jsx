import React from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbarMain}>
        <div className={styles.companyLogo}>
          <img
            className={styles.CompanyImage}
            src="https://www.shine.com/next/static/images/shine-logo.png"
            alt="Shine_Company_Logo"
          />
        </div>
        <div className={styles.inputOfNavbar}>
          <input
            className={styles.inputOfSearchBar}
            type="text"
            placeholder="Job title,Skills"
          />
          <button className={styles.SearchButton}>
            <BsSearch />
          </button>
        </div>
        <div className={styles.NavbarRigthSection}>
          <button className={styles.loginButton} >Login</button>
          <button className={styles.registerButton} >Register</button>
          <GrNotification />
          <BsCart3 />
        </div>
      </div>
    </>
  );
}

export default Navbar;
