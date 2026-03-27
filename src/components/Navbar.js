import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import img from "../images/logo.png";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  const logout = () => {
    setIsLoggedIn(false);
    setOpen(false)
    
  };

  return (
    <header className="allheader ">
        <img src={img} alt="logo" className="logo" onClick={()=>navigate('/')}  />
      <div className={`menu-toggle ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${open ? "open" : ""}`}>
        <li><NavLink to="/" end onClick={() => setOpen(false)} >Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
        <li><NavLink to="/product" onClick={() => setOpen(false)}>Products</NavLink></li>
        <li><NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setOpen(false)} >Contact</NavLink></li>
        {!isLoggedIn ? (
          <>
            <li><NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink></li>
          </>
        ) : (
          <li><NavLink to="/login" onClick={logout}>Logout</NavLink></li>
        )}
      </ul>
    </header>
  );
};
export default Navbar;
