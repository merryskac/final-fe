import { useEffect } from "react"
import { logout } from "./logoutAPI"

const Logout = () => {
  
  useEffect(()=>{
    if(!localStorage.getItem('nama')||localStorage.getItem('nama')===undefined){
      window.location.href = '/login'
    }
    try{
      logout().then(data=>{
        if(data.message == "logout success"){
          window.localStorage.clear()
          window.location.href = '/'
        }
      })
    }catch(err){
      console.log(err.message)
    }
    window.localStorage.clear()
    window.location.href = '/'  
  },[])
  
  return ( <div>
  ...logout
  </div> );
}
 
export default Logout;