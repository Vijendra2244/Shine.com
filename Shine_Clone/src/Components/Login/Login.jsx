import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(null);
    console.log("here")
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.headingSign}>Sign-in</h1>

        <div className={styles.entryArea}>
          <input className={styles.input} type="text" required />
          <div className={styles.labelLine}>Email</div>
        </div>
        <br />

        <div className={styles.entryArea}>
          <input className={styles.input} type="password" required />
          <div className={styles.labelLine}>Password</div>
        </div>
        <div className={styles.keepsignedUp}>
          <div>
            <input type="checkbox" name="checkbox" id="check" />
            <label htmlFor="check">Keep me Signed in </label>
          </div>
          <p className={styles.forgot}>Forgot Password</p>
        </div>
        <button className={styles.loginBtn}>Login</button>
        <button onClose={handleClose} className={styles.cutButton}>
          X
        </button>
      </div>
    
    </div>
  );
}

export default Login;
