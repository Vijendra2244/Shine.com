import React from "react";
import styles from "./Premium.module.css";
import {BiSolidPhoneCall} from "react-icons/bi"

function Premium() {
  const PremiumData = [
    {
      img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640935815_1767.png&w=384&q=75",
      heading: "Application HighL...",
      description:
        "Highlight your job Application and  improve visibility to recruiter.Increases your chances to getting a",
      price: "₹ 1699",
      explore: "Explore",
      expert: "Talk To Expert",
    },
    {
      img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640925161_7427.png&w=384&q=75",
      heading: "Featured Profile",
      description:
        "Get more visibility in the recruiter searches by getting a priority applicant tag with this  service of our",
      price: " ₹ 1999",
      explore: "Explore",
      expert: "Talk To Expert",
    },
    {
      img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticlearn.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640940094_8952.png&w=384&q=75",
      heading: "Application Booster",
      description:
        "Priority applicant service to highlight and circulate your profile to the recruiter of your choice",
      price: " ₹ 3099",
      explore: "Explore",
      expert: "Talk To Expert",
    },
  ];
  return (
    <div>
      <h1 className={styles.headingOfPremium}>Explore Our Premium Services</h1>
      <div className={styles.mainPremiumdata}>
        {PremiumData.map((item, index) => (
          <div className={styles.premiumMainCont} key={index}>
            <img className={styles.imgOfPremium} src={item.img} />
            <div className={styles.containerOfPremiumCourses}>
              <h1>{item.heading}</h1>
              <p className={styles.descriptionOfPremium}>{item.description}</p>
              <p>{item.price}</p>
              <div className={styles.buttonOfExperts}>
                <button className={styles.buttonOfPremiumExplore}>{item.explore}</button>
                <button className={styles.buttonOfPremiumExpert}> <BiSolidPhoneCall/>{item.expert}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
         <div className={styles.viewBtnOfPremium}>
            <button className={styles.viewBtnOfPremiumCourses}>View All</button>
         </div>
    </div>
  );
}

export default Premium;
