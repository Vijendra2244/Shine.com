import React, { useContext } from "react";
import styles from "./Register.module.css";
import { AiOutlineUpload } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import { LoginContext } from "../../Context_Api/Context";


function Register() {
  const {register,setRegister} = useContext(LoginContext)
   const handleClickOfCutThePage = ()=>{
    setRegister(false)
   }
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainerOfRegister}>
        <div className={styles.leftContainerOfRegister}>
          <h1 className={styles.headingOfRightContainer}>
            {" "}
            <span className={styles.rightContainerOfSpanTag}>
              FROM
            </span> START{" "}
            <span className={styles.rightContainerOfSpanTag}>TO FINISH,</span>{" "}
            WE HAVE YOU BACK.
          </h1>
          <div className={styles.superManContainer}>
            <div>
              <p className={styles.sumerManParaTag}>
                -In-person job assistance
              </p>
              <p className={styles.sumerManParaTag}>
                -Feature as an immediate joiner
              </p>
              <p className={styles.sumerManParaTag}>
                -Access to 5000+ recruiters
              </p>
            </div>
            <img
              className={styles.supermanImage}
              src="https://opoyi.com/wp-content/uploads/2023/01/Superman_cq_q8KEv_.png"
              alt=""
            />
          </div>
          <div className={styles.containerOfResume}>
            <h1 className={styles.registerWithResume}>Register With Resume</h1>
            <p className={styles.registerAutoFill}>
              We will autofill your details
            </p>
            <div className={styles.btnResume}>
              <button className={styles.butonOfUlpoadResume}>
                {" "}
                <AiOutlineUpload /> Upload Resume
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightContainerOfRegister}>
          <div className={styles.formOfContainer}>
            <h1 className={styles.registerPageHeading}>
              Let’s get started, tell us about yourself.
            </h1>
            <p className={styles.formTimingInstruct}>
              It only takes a couple of minutes to get started
            </p>
            <form className={styles.formValidation}>
              <div className={styles.entryAreaTwo}>
                <input className={styles.inputTwo} type="text" required />
                <div className={styles.labelLineTwo}>Name</div>
              </div>
              <div className={styles.entryAreaTwo}>
                <input className={styles.inputTwo} type="email" required />
                <div className={styles.labelLineTwo}>Email</div>
              </div>
              <div className={styles.entryAreaTwo}>
                <input className={styles.inputTwo} type="password" required />
                <div className={styles.labelLineTwo}>Password</div>
              </div>
            </form>

            <button  className={styles.btnContinue}>
              Continue <AiOutlineArrowRight />
            </button>
            <button onClick={handleClickOfCutThePage} className={styles.btnOfX}>X</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Register;
