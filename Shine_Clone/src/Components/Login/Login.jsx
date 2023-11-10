import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { LoginContext } from "../../Context_Api/Context";

function Login() {
  const { login, setLogin } = useContext(LoginContext);
  const handleClose = () => {
    setLogin(false);
    if (login === false) {
      return null;
    }
  };
  return (
    <div className={styles.mainContainerOne}>
      <div className={styles.containerOne}>
        <h1 className={styles.headingSignOne}>Sign-in</h1>

        <div className={styles.entryAreaOne}>
          <input className={styles.inputOne} type="text" required />
          <div className={styles.labelLineOne}>Email</div>
        </div>
        <br />

        <div className={styles.entryAreaOne}>
          <input className={styles.inputOne} type="password" required />
          <div className={styles.labelLineOne}>Password</div>
        </div>
        <div className={styles.keepsignedUpOne}>
          <div>
            <input type="checkbox" name="checkbox" id="check" />
            <label htmlFor="check">Keep me Signed in </label>
          </div>
          <p className={styles.forgotOne}>Forgot Password</p>
        </div>
        <button className={styles.loginBtnOne}>Login</button>
        <button onClick={handleClose} className={styles.cutButtonOne}>
          X
        </button>
      </div>
    </div>
  );
}

export default Login;
