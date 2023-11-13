import React from "react";
import styles from "./JobSeeking.module.css"

function JobSeeking() {
  return (
    <div className={styles.jobSeekingMainJobers}>
      <div className={styles.seekingMainJobers}>
        <ul>
          <li className={styles.listStyleJobers}>Profile Booster</li>
          <li className={styles.listStyleJobers}>Application Highlighter</li>
          <li className={styles.listStyleJobers}>Resume Writing</li>
          <li className={styles.listStyleJobers}>Check your resume</li>
        </ul>
      </div>
    </div>
  );
}

export default JobSeeking;
