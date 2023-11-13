import React from 'react'
import Card from '../../CardComponents/Card'
import styles from "./Hr.module.css"

function Finance() {
  return (
    <div>
       <div className={styles.mainOfHr}>
        <Card
          Heading={"Accountant"}
          Company={"Ibm india pvt. limited"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"Finance  Manager Up"}
          Company={"Acura Solutions"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"Finance Manager Delhi"}
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

export default Finance