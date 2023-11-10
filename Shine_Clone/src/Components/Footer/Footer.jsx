import React from "react";
import styles from "./Footer.module.css";
import { FaAssistiveListeningSystems } from "react-icons/fa";


function Footer() {
  const jobSeeker = [
    { label: "Register/Login" },
    { label: "Job Search" },
    { label: "Create Free Job Alert" },
    { label: "Job Assistance Services" },
    { label: "Courses" },
    { label: "Fraud Alert" },
  ];
  const employers = [{ label: "Recruiter" }, { label: "India Post Job" }];
  const trendinBlogs = [
    { label: "How to Write Leave Applicatio..." },
    { label: "Profile Summary For Freshers... " },
    { label: "Top 21 Banking Interview Q..." },
    { label: "How to Write Marriage Leave..." },
    { label: "Top 15 Accounting Interview Q..." },
    { label: "How to Write a Sick Leave App... " },
    { label: "What are Communication Barri..." },
    { label: "10 Commonly Asked BPO Inte..." },
  ];
  const partnerSites = [
    { label: "Hindustantimes.com" },
    { label: "Livemint.com" },
    { label: "Livehindustan.com" },
    { label: " OTTplay.com" },
  ];
  const contactUs = [
    { label: "080-1006 2222" },
    { label: "contactus@shine.com" },
  ];
  return (
    <>
     

      <div className={styles.FooterLinksFoot}>
        <div >
          <div>
            <img className={styles.shineImageFoot} src="https://www.shine.com/next/static/images/shine-logo.png" />
            <p className={styles.shineParaFoot}>Great career starts here!</p>
          </div>
          <div>
            <h1 className={styles.downlaodHeadingFoot}>Download Shine App</h1>
            <div className={styles.imagesOfDownFoot}> 

            <img className={ styles.imagesForDownLoadFoot} src="https://www.svgrepo.com/show/223032/playstore.svg" />
            <img className={ styles.imagesForDownLoadFoot}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEUAAAD////d3d3y8vL6+vpwcHCXl5epqakcHBxzc3NCQkLBwcFfX18JCQlaWlrh4eEtLS3Q0NDp6ekXFxdMTExqamo2NjZ5eXk9PT0jIyO5ubmIiIhkZGSzs7PIyMgSEhKgoKDo0oUDAAADjklEQVRoge2b25aqMAyGC+WgoKCIguDp/Z9yQEGBYSzNH8tea/vfzMVIv9U2pElohNXK9vcH8WGtD65vP4mi+Rvmn+Y+FYQ9tlwZI9dayRfbXhhFC7GwW7a9NoyuNt5+sKXpWddayDs74hsxyia/KlHNDpm4qRc7lrWf/PuwYvO8XGno3G33NPmJ3BI2C9pv/YXGBtrCZyBv4hYtg+lP+cLF0ZHzdJPxbvpjrsB9uGu9tNV47iBgv9KZtWV5Gg/iHm3RRVspPJ6Otl20We+87KK1lhzWOumxTaJFNt+0+7stjaKDnpEvjbLLLvpsFC0uRJfGoY6Vx1ez6Fy+Zm0YXcc9jThOYj21Ti3JPs+67nY9h/3wLNJrA93dcXPID5sjNzf3im2cJPE2vD3joortFO2cl+dtY3qOXUwP25QK/J4TsYrmrHyuQtlzcLVuPLNPL8OBK7vuxFrR2fn9g8r+GA7U29jAlYF5q8PuuolKe/z/1S/QDDP/tZovySRJ/v6vhR5sqXw7uEo3AB2M7qQR+AZFA8seq8dWiniq++qRlbJpuWbKgKZm2G/erk+jl+qhVSLHMrihxVS0qx5bIUnOcfHdJkcUuFu5UNH90JsiR6P8MdDIma2ngowW6sEVohdTYJ8GpCnwdgNhwxllb+hs2NToaNihIqVS1LMg1WkQDSWHKPv2n857zv1G7BxlI+83zAZSYCwNq1TS2X8mtlNFj1pEqB5dIY0vJwPh6dCNzIbPb0uSrS2A2UBtF8+8Nb6NDsSQCCbUVfdwNjkfi9RDfw7+vno1FU6L0uFI9S5JKresWNjVSU6ZOkeRqZZz1v+mwGHpD+nPO2dwL3dRHBx+lj1EqbCxvOLU0A0OIO6ilV0y9cBqJSQ0y2FGTsTxCAIIIeBwFUiO5qx0wY4VqHSJEzhtoOwiRAGxgeyk0hExN3IRuxFSwgcM7SH6qjPcd6GuOsfti5yGpnu0rkifLxym+2QU90bOiIbSj90Yr1+MHOXyUkZpmkZlOJJGsN78GH4IT8qXu7yeLv2TXrIt+EO77nseD+eVd29jXCAvPqqgSZOcYvQig9eEd1vGCyZd5cts/2ZSUZaZvcH/1Vdf/asy39fyIpvrYRoq5+g3IMpl6bOgyWfqL6HIFnj8TlTA2E+kq7qfyJrnxF3N3j82Z9/crP2C1bIz9s5NULdPslJo7lUb9IfeF953809vfL8v9gfM2Cn4lyryuAAAAABJRU5ErkJggg=="
              alt=""
              />
              </div>
          </div>
        </div>
        <div>
            <h1 className={styles.headingOfFooterFoot}>JOB SEEKERS</h1>
          {jobSeeker.map((item, index) => (
            <ul  ket={index}>
              <a href="#">
                <li className={styles.listOfJobSeekerFoot}>{item.label}</li>
              </a>
            </ul>
          ))}
          <br />
          <div>
             <h1 className={styles.headingOfFooterFoot}>EMPLOYERS</h1>
            {employers.map((item, index) => (
              <ul key={index}>
                <a href="#">
                  <li className={styles.listOfJobSeekerFoot}>{item.label}</li>
                </a>
              </ul>
            ))}
          </div>
        </div>
        <div>
            <h1 className={styles.headingOfFooterFoot}>TRENDING BLOGS</h1>
          {trendinBlogs.map((item, index) => (
            <ul key={index}>
              <a href="#">
                <li className={styles.listOfJobSeekerFoot}>{item.label}</li>
              </a>
            </ul>
          ))}
        </div>
        <div>
             <h1 className={styles.headingOfFooterFoot}>PARTNER SITES</h1>
          {partnerSites.map((item, index) => (
            <ul key={index}>
              <a href="#">
                <li className={styles.listOfJobSeekerFoot}>{item.label}</li>
              </a>
            </ul>
          ))}
        </div>
        <div>
             <h1 className={styles.headingOfFooterFoot}>CCONTACT US</h1>
          {contactUs.map((item, index) => (
            <ul key={index}>
              <a href="#">
                <li className={styles.listOfJobSeekerFoot}>{item.label}</li>
              </a>
            </ul>
          ))}
        </div>
      </div>
        <hr/>
       
    </>
  );
}

export default Footer;
