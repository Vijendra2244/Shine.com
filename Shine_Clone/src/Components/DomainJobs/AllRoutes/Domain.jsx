import React from "react";
import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import styles from "./Domain.module.css"

function Domain() {
  return (
    <div>
        <h1 className={styles.domainJobsContainer}>Domain Jobs</h1>
      <div className={styles.linkDomainJobs}>
        <Link className={styles.linkPathOfDomain}  to="/">IT</Link>
        <Link className={styles.linkPathOfDomain} to="/sales">Sales</Link>
        <Link className={styles.linkPathOfDomain} to="/finance">Finance</Link>
        <Link className={styles.linkPathOfDomain} to="/marketing">Marketing</Link>
        <Link className={styles.linkPathOfDomain} to="/telesales">Telesales</Link>
        <Link className={styles.linkPathOfDomain} to="/hr">Hr</Link>
        <Link className={styles.linkPathOfDomain} to="/others">Other</Link>
      </div>
      <AllRoutes />
       <div className={styles.mainOfItJobs}>
        <button className={styles.itOfJobs}>View More IT Jobs</button>
       </div>
    </div>
  );
}

export default Domain;
