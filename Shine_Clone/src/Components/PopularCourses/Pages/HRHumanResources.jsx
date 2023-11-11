import React from "react";
import CardOfPopular from '../Card/CardOfPopular'
import styles from "./All.module.css"

function HRHumanResources() {
  return (
    <>
     <div className={styles.hrPopularCourses}>

       <CardOfPopular
         courses="Courses"
         image={
           "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1564143982_3906.png&w=64&q=75"
         }
         rating={4.5}
         heading={"Human Resources Management"}
         training={"ERB"}
         duration={"Duration: 365 days | Mode:Online"}
         price={12999}
         explore={"Explore"}
         buynow={"Buy Now"}
         />
      <CardOfPopular
        courses="Courses"
        image={
          "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1634126540_4125.png&w=64&q=75"  }
        rating={4.5}
        heading={"Certified Hr Analyst"}
        training={"Vskills"}
        duration={"Duration:19 Hours | Mode:Online"}
        price={3499}
        explore={"Explore"}
        buynow={"Buy Now"}
      />
        </div>
    </>
  );
}

export default HRHumanResources;
