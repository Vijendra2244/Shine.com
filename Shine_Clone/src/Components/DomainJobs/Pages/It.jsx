import React from 'react'
import Card from '../../CardComponents/Card'
import styles from "./It.module.css"

function It() {
  return (
    <div>
      <div className={styles.mainOfIt} >
         <Card
          Heading={"WordPress Developer"}
          Company={"Ibm india pvt. limited"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"We Needs Backend"}
          Company={"Acura Soluitons"}
          years={"2 to 6 yrs"}
          location={"Bangalore"}
          early={"Be an early Applicant"}
          regular={"Regular"}
          NotInterested={"Not Interested"}
          Apply={"Apply"}
         />
         <Card
          Heading={"ETRM Technical"}
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

export default It