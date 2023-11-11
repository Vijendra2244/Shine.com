import React from "react";
import { Link } from "react-router-dom";
import styles from "./Popular.module.css";
import AllRoutes from "../DomainJobs/AllRoutes/AllRoutes";



function PopularCourses() {
  return (
    <div className={styles.mainOfPopularCourses}>
      <h1 className={styles.popularCoursesHeading}>Popular Courses</h1>
      <div className={styles.routeOfPopularCourses}>
        <Link className={styles.linkOfPopularCourses}  to="/all">All</Link>
        <Link className={styles.linkOfPopularCourses} to="/salesandmarketing">Sales and Marketing</Link>
        <Link className={styles.linkOfPopularCourses} to="/bankingfinance">Banking Finance</Link>
        <Link className={styles.linkOfPopularCourses} to="/personaldevelopment">Personal Development</Link>
        <Link className={styles.linkOfPopularCourses} to="/itinformation">IT-Information Technology</Link>
        <Link className={styles.linkOfPopularCourses} to="/hrhuman">HR-Human Resources</Link>
        <Link className={styles.linkOfPopularCourses} to="/manager">Manager</Link>
      </div>

      <AllRoutes />
    <div className={styles.ViewOfBtnPopular}>
       <button className={styles.btnOfPopular}>View All</button>
    </div>
      
    </div>
  );
}

export default PopularCourses;
