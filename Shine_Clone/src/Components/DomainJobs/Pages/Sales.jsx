import React from 'react'

import Card from '../../CardComponents/Card'
import styles from "./Hr.module.css"
function Sales() {
  return (
    <div>
        <div className={styles.mainOfHr}>
        <Card
          Heading={"Restaurent Servers"}
          Company={"Ibm india pvt. limited"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"Territory Sales Manager"}
          Company={"Acura Solutions"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"Inside Sales"}
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

export default Sales