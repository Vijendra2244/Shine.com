import React from "react";
import styles from "./CopyRight.module.css";

function CopyRight() {
  return (
    <div className={styles.copyRightMainCopy}>
      <div className={styles.queriesCopy}>
       <a href="#"> <p> Feedback |  </p></a>
       <a href="#"> <p> FAQs |  </p></a>
       <a href="#"> <p> About Us |  </p></a>
       <a href="#"> <p> Contact Us |  </p></a>
       <a href="#"> <p> Privacy Policy |  </p></a>
       <a href="#"> <p> Cookie Policy |  </p></a>
       <a href="#"> <p> Business News |  </p></a>
       <a href="#"> <p> English News |  </p></a>
       <a href="#"> <p> Terms & Conditions |  </p></a>
       <a href="#"> <p> Disclaimer |  </p></a>
       <a href="#"> <p> Report a Job Posting</p></a>
      </div>
       <div>
         <p className={styles.copyCopy}>  &copy; 2023 HT Media Limited</p>
       </div>
    </div>
  );
}

export default CopyRight;
