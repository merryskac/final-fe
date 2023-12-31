import { Route, Routes, BrowserRouter } from "react-router-dom";
import Authorization from "../config/Authorization";
import Content from "../content/content";
import Detail from "../content/contentDetail";
import NotFound from "../dashboard/404";
import Dashboard from "../dashboard/dashboard";
import Login from "../login/Login";
import Logout from "../logout/logout";
import Register from "../register/Register"

const Routers = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/content" element={<Content/>} />
        <Route path="/content/:id" element={<Detail/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
   );
}
 
export default Routers;