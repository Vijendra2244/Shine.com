import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { LoginContext } from "../../Context_Api/Context";
import AllRoutes from "../DomainJobs/AllRoutes/AllRoutes";
import { Link } from "react-router-dom";

function Login() {
  const { login, setLogin,userDetails} = useContext(LoginContext);
  const [userInfoLogin,setUserInfoLogin] = useState({email:"",password:""})
 
  const handleClose = () => {
    setLogin(false);
    if (login === false) {
      return null;
    }
  };
 
  const handleChangeLogin = (e)=>{
   setUserInfoLogin({...userInfoLogin,[e.target.name] : e.target.value})
}
const handleSubmitFormLogin = (e)=>{
  e.preventDefault()
  const storedDataInLocalStorage =JSON.parse( localStorage.getItem("userInfo"))
 if(storedDataInLocalStorage.email ===userInfoLogin.email && storedDataInLocalStorage.password ===userInfoLogin.password){
  alert("Login Successfully")
 }
 else{
  alert("Email and Password  is incorrect")
 }
}
 
  return (
    <div className={styles.mainContainerOne}>
      <div className={styles.containerOne}>
        <h1 className={styles.headingSignOne}>Sign-in</h1>
        <form onSubmit={handleSubmitFormLogin} >
        <div className={styles.entryAreaOne}>
          <input name="email"  onChange={handleChangeLogin} className={styles.inputOne} type="text" required />
          <div className={styles.labelLineOne}>Email</div>
        </div>
        <br />

        <div className={styles.entryAreaOne}>
          <input name="password" onChange={handleChangeLogin} className={styles.inputOne} type="password" required />
          <div className={styles.labelLineOne}>Password</div>
        </div>
        <div className={styles.keepsignedUpOne}>
          <div>
            <input type="checkbox" name="checkbox" id="check" />
            <label htmlFor="check">Keep me Signed in </label>
          </div>
          <p className={styles.forgotOne}>Forgot Password</p>
        </div>

        < input type="submit" value="Login" className={styles.loginBtnOne}/>
        </form>
        <button onClick={handleClose} className={styles.cutButtonOne}>
          X
        </button>
      </div>

      
    </div>
  );
}

export default Login;
