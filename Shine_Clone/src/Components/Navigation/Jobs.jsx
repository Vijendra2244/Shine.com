import React from "react";
import styles from "./Jobs.module.css"

function Jobs() {
  return (
    <div className={styles.mainNavigation}>
      <div className={styles.jobsMainNavigation}>
        <ul>
          <li className={styles.listStyleNavigation}>Search</li>
          <li className={styles.listStyleNavigation}>Search by Categories</li>
          <li className={styles.listStyleNavigation}>Job Search</li>
          <li className={styles.listStyleNavigation}>Job Alert</li>
        </ul>
      </div>
    </div>
  );
}

export default Jobs;
