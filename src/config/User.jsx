import { checkPropTypes } from "prop-types";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./Authentication";
import { cekToken } from "./authAPI";

export const UserContext = createContext()

const User = ({children}) => {
  const [isLogged, setIsLogged] = useContext(AuthContext)
  const [user, setUser] = useState()
  
  useEffect(()=>{
    
    isLogged && setIsLogged(true)
    
  },[])
  
  return ( 
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
   );
}

User.propTypes = {
  children: checkPropTypes.any
}
 
export default User;