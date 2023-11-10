import React from "react";
import styles from "./Remote.module.css";
import Card from "../CardComponents/Card";
function Remote() {
  return (
    <div className={styles.mainRemote}>
      <div>
        <h1 className={styles.headingOfRemote}>Remote Jobs</h1>
        <div className={styles.cardContainerRemote}>
          <Card
            Heading={"Backend Executive,Typist "}
            Company={"Ur InfoTech"}
            years={"0 to 4 yrs"}
            location={"Tiruchengode"}
            early={"Be an early Applicant"}
            regular={"Remote"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
          <Card
            Heading={"Node.js Developer"}
            Company={"Ahaan hr and management services II..."}
            years={"2 to 7 years"}
            location={"All India"}
            early={"Be an early Applicant"}
            regular={"Remote"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
          <Card
            Heading={"Computer Operator,Part Time"}
            early={"Be an early Applicant"}
            regular={"Remote"}
            years={"0 to 4 yrs"}
            location={"Ramanathpuram"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
        </div>
        <div className={styles.buttonViewRemote}>
          <button className={styles.viewBtnForRemote}>879+ more jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Remote;
