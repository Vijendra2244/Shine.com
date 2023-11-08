import React from "react";
import styles from "./Jobs.module.css"

function Jobs() {
  return (
    <div className={styles.main}>
      <div className={styles.jobsMain}>
        <ul>
          <li className={styles.listStyle}>Search</li>
          <li className={styles.listStyle}>Search by Categories</li>
          <li className={styles.listStyle}>Job Search</li>
          <li className={styles.listStyle}>Job Alert</li>
        </ul>
      </div>
    </div>
  );
}

export default Jobs;
