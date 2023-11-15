import React from "react";
import styles from "./Card.module.css"
import {BsBag} from "react-icons/bs"
import {CiLocationOn} from "react-icons/ci"

function Card({Heading,Company,years ,location,early,regular,NotInterested,Apply}) {
  return (
    <>
      <div className={styles.mainCardContainer}>
        <h1 className={styles.haedingOfCompany}>{Heading}</h1>
        <p className={styles.companyName}>{Company}</p>
        <div className={styles.experianceyears}>
          <div className={styles.stylesOfIcon}>
            <p><BsBag/></p>
            <p>{years}</p>
          </div>
          <div  className={styles.stylesOfIcon}>
            <p><CiLocationOn/></p>
            <p>{location}</p>
          </div>
        </div>
    
            
        <ul className={styles.uiListOfCard}>
            <li className={styles.listEarly}>{early}</li>
            <li className={styles.listEarly}>{regular}</li>
        </ul>
        
         <div className={styles.buttonInterested}>
            <button className={styles.buttonStyling}>{NotInterested}</button>
            <button className={styles.buttonStyling}>{Apply}</button>
         </div>
      </div>
    </>
  );
}

export default Card;
