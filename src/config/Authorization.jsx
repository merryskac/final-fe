import { Fragment } from "react";
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import { UserContext } from "./User";

const Authorization= ({children}) => {
  const [isLogged, setIsLogged] = useContext(AuthContext)
  const [user, setUser] = useContext(UserContext)
  
  // if(isLogged === false ){    
  //   window.localStorage.clear()
  //   window.location.href='/login'
  //   return
  // }
  if(!localStorage.getItem('nama') || localStorage.getItem('nama') === undefined){
    window.location.href = '/login'
  }

  // setUser(localStorage.getItem('name'))
  return (<Fragment>
    {children}
  </Fragment>);
}
 
export default Authorization
;