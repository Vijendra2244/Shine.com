import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import styles from "./Navbar.module.css";
import Login from "../Login/Login";
import { LoginContext } from "../../Context_Api/Context";
import { Navigate } from "react-router-dom";
import Register from "../RegisterPage/Register";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const {login,setLogin,register,setRegister} = useContext(LoginContext)
  const [menuBtn,setMenuBtn]= useState(false)
  const handleLogin = ()=>{
    setLogin(true)
  }  
  const handleRegister = ()=>{
    setRegister(true)
  }
  const handleMenu = ()=>{
   setMenuBtn(!menuBtn)
  }
  
  return (
    <>
      <div className={styles.navbarMainNavbar}>
        <div className={styles.companyLogoNavbar}>
          <IoMdMenu onClick={handleMenu} className={styles.menuIcon} ></IoMdMenu>
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
        <div className={menuBtn ? styles.navbarVisible : styles.NavbarRigthSectionNavbar}>
          <div className={styles.visibleNavbar}>

          <button onClick={handleLogin} className={styles.loginButtonNavbar}>
            Login
          </button>
          <button onClick={handleRegister} className={styles.registerButtonNavbar}>Register</button>
          <GrNotification />
          <BsCart3 />
          </div>
        </div>
      </div>
      {login && <Login  /> }
       {register && <Register/> }
    </>
  );
}

export default Navbar;
