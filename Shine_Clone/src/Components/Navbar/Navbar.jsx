import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import styles from "./Navbar.module.css";
import { LoginContext } from "../../Context_Api/Context";
import Login from "./Components/Login"

function Navbar() {
  const {login,setLogin} = useContext(LoginContext)

  const handleLogin = ()=>{
    setLogin(true)
  }
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
          <button onClick={handleLogin} className={styles.loginButton} >Login</button>
          <button className={styles.registerButton} >Register</button>
          <GrNotification />
          <BsCart3 />
        </div>
      </div>
      {login && <Login/>}
    </>
  );
}

export default Navbar;
