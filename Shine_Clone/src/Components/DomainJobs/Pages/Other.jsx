import React from 'react'
import Card from '../../CardComponents/Card'
import styles from "./Hr.module.css"

function Other() {
  return (
    <div>
        <div className={styles.mainOfHr}>
        <Card
          Heading={"Telecaller"}
          Company={"Ibm india pvt. limited"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"Tech Mahindra Hiring"}
          Company={"Acura Solutions"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"Deputy Manager"}
          Company={"Tech Mahindra"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
        </div>
    </div>
  )
}

export default Other