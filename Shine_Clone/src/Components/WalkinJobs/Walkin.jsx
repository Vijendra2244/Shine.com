import React from "react";
import styles from "./Walkin.module.css";
import Card from "../CardComponents/Card";
function Walkin() {
  return (
    <div className={styles.mainWalkin}>
      <div>
        <h1 className={styles.headingOfWalkin}>Walkin Jobs</h1>
        <div className={styles.cardContainerWalkin}>
          <Card
            Heading={"Sales  Executive"}
            Company={"Synnex business Media Private limited"}
            years={"0 to 4 yrs"}
            location={"Mumbai City"}
            early={"Be an early Applicant"}
            regular={"Regular"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
          <Card
            Heading={"Php Developer"}
            Company={"Talent Corner services pvt ltd"}
            years={"5 to 9 years"}
            location={"Ahmedabad"}
            early={"Be an early Applicant"}
            regular={"Regular"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
          <Card
            Heading={" Software Programmer"}
            Company={"Sunil Kumar Hiring For Sunil Kumar"}
            early={"Be an early Applicant"}
            regular={"Regular"}
            years={"3 to 8 yrs"}
            location={"Bangalore"}
            NotInterested={"Not Interested"}
            Apply={"Apply"}
          />
        </div>
        <div className={styles.buttonViewWalkin}>
          <button className={styles.viewBtnForWalkin}>View All</button>
        </div>
      </div>
    </div>
  );
}

export default Walkin;
