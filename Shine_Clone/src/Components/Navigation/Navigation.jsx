import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Jobs from "./Jobs";
import JobSeeking from "./JobSeeking"

function Navigation() {
  const [jobs, setJobs] = useState(false);
  const [seeking,setSeeking]  =useState(false)
  const handleMouseEnter = () => {
    setJobs(true);
  };
  const handleMouseLeave = () => {
    setJobs(false);
  };
  const handleMouseEnterSeeking = () => {
    setSeeking(true);
  };
  const handleMouseLeaveSeeking = () => {
    setSeeking(false);
  };
  return (
    <>
      <div className={styles.navigationMain}>
        <div>
          <p className={styles.NavigationPara}>HOME</p>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className={styles.NavigationPara}>JOBS</p>
        </div>
        <div  onMouseEnter={handleMouseEnterSeeking} onMouseLeave={handleMouseLeaveSeeking}>
          <p className={styles.NavigationPara}>JOB SEEKING ASSISTANCE</p>
        </div>
        <div>
          <p className={styles.NavigationPara}>COURSES</p>
        </div>
        <div>
          <p className={styles.NavigationPara}>CAREER GUIDANCE</p>
        </div>
        <div>
          <p className={styles.NavigationPara}>BLOG</p>
        </div>
      </div>
      {jobs && <Jobs />}
      {seeking && <JobSeeking/>}
    </>
  );
}

export default Navigation;
