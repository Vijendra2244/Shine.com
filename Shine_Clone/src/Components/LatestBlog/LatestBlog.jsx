import React from "react";
import styles from "./LatestBlog.module.css";

function LatestBlog() {
    const dataOfBlog = [{img:"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fcareer_aspirations.webp&w=1920&q=75",desc:"What are Your Career Apirants:Ways to Answer",para:"Career Guidance"},{img:"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fwhat_not_to_wear_to_a_job_interview.jpg&w=1920&q=75",desc:"What not to Wear to a Job InterView:5 Tips You Need to know",para:"Career Guidance"},{img:"https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fproject-manager-salary.jpg&w=1920&q=75",desc:"Project Manager Salary Check Average and Highest Salary in India",para:"Salary"}]
  return (
    <div>
      <h1 className={styles.blogMain}>Latest from Blog</h1>
      <div className={styles.blogContainer}>
        {dataOfBlog.map((item,index)=>(
            <div className={styles.oneBlog}  key ={index}>

            <img className={styles.imgOfBlog} src ={item.img} />
            <h1 className={styles.descOfBlog}>{item.desc}</h1>
            <p className={styles.paraOfBlog}>{item.para}</p>
            </div>

        ))}
      </div>
      <div className={styles.viewButtonBlog}>
         <button className={styles.viewButtonAll}>View All</button>
      </div>
    </div>
  );
}

export default LatestBlog;
