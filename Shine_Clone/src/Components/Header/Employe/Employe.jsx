import React from "react";
import styles from "./Employe.module.css"

function Employe() {
  return (
    <div className={styles.mainEmploye}>
      <div className={styles.employeMain} >
        <ul className={styles.ulList}>
          <li className={styles.ListOfPages}>Employee Login</li>
          <li className={styles.ListOfPages}>Conduct Hackathons</li>
        </ul>
      </div>
    </div>
  );
}

export default Employe;
