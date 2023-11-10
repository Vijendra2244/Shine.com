import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import styles from "./Navbar.module.css";
import Login from "../Login/Login";
import { LoginContext } from "../../Context_Api/Context";

function Navbar() {
  const {login,setLogin} = useContext(LoginContext)
  const handleLogin = ()=>{
    setLogin(true)
  }  
  return (
    <>
      <div className={styles.navbarMainNavbar}>
        <div className={styles.companyLogoNavbar}>
          <img
            className={styles.CompanyImageNavbar}
            src="https://www.shine.com/next/static/images/shine-logo.png"
            alt="Shine_Company_Logo"
          />
        </div>
        <div className={styles.inputOfNavbarNavbar}>
          <input
            className={styles.inputOfSearchBarNavbar}
            type="text"
            placeholder="Job title,Skills"
          />
          <button className={styles.SearchButtonNavbar}>
            <BsSearch />
          </button>
        </div>
        <div className={styles.NavbarRigthSectionNavbar}>
          <button onClick={handleLogin} className={styles.loginButtonNavbar}>
            Login
          </button>
          <button className={styles.registerButtonNavbar}>Register</button>
          <GrNotification />
          <BsCart3 />
        </div>
      </div>
      {login && <Login  /> }
    </>
  );
}

export default Navbar;
