import { createContext, useState } from "react";
import { FaLessThanEqual } from "react-icons/fa";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [infosys,setInfosys] =  useState(FaLessThanEqual)
  const [register,setRegister] =  useState(false)
  const [userDetails,setUserDetails] = useState({})
  return (
    <LoginContext.Provider value={{login, setLogin,register,setRegister,infosys,setInfosys,userDetails,setUserDetails}}>
      {children}
    </LoginContext.Provider>
  );
};
