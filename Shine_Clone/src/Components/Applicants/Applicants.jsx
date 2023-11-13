import React from "react";
import styles from "./Applicants.module.css";
import Card from "../CardComponents/Card";
function Applicants() {
  return (
    <div className={styles.mainApplicant}>
      <div>
        <h1 className={styles.headingOfEarly}>Be An Early Applicant</h1>
        <div className={styles.cardContainerEarly}>
          <Card
            Heading={"We Needs  for Backend Developers"}
            Company={"Ibm india pvt. limited"}
            years={"2 to 6 yrs"}
            location={"Bangalore"}
            early={"Be an early Applicant"}
            regular={"Regular"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
          <Card
            Heading={"Tech Lead/Associate Architect"}
            Company={"Nous Info Systems"}
            years={"7 to 12 years"}
            location={"Bangalore"}
            early={"Be an early Applicant"}
            regular={"Regular"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
          <Card
            Heading={"Senior Software engineer/Module Lead/Technical Lead"}
            early={"Be an early Applicant"}
            regular={"Regular"}
            years={"3 to 8 yrs"}
            location={"Bangalore"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
        </div>
        <div className={styles.buttonView}>
          <button className={styles.viewBtnForEarly}>View All</button>
        </div>
      </div>
    </div>
  );
}

export default Applicants;
