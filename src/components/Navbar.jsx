import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [hover, setHover] = useState(false);

  const handleLogout = () => {
    // console.log("User trying to logout");
    logOut()
      .then(() => {
        alert("You logged out sucessfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center">
      {/* Navbar Left Part */}
      <div className="text-4xl font-bold">ToyTopia</div>
      
      {/* Navbar Middle Part */}
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">About</NavLink>
        <NavLink to="/about">Career</NavLink>
      </div>
      {/* Navbar Right Part */}
      <div className="login-btn flex gap-5">
        {user && (
          <div className="flex items-center" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {
              hover && (<div className="flex">{user && user.email}</div>)
            }
            <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />
          </div>
        )}
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
