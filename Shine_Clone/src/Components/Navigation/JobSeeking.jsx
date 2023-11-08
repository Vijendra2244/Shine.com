import React from "react";
import styles from "./JobSeeking.module.css"

function JobSeeking() {
  return (
    <div className={styles.jobSeekingMain}>
      <div className={styles.seekingMain}>
        <ul>
          <li className={styles.listStyle}>Profile Booster</li>
          <li className={styles.listStyle}>Application Highlighter</li>
          <li className={styles.listStyle}>Resume Writing</li>
          <li className={styles.listStyle}>Check your resume</li>
        </ul>
      </div>
    </div>
  );
}

export default JobSeeking;
