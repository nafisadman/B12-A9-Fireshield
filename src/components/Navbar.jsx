import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [hover, setHover] = useState(false);

  const handleLogout = () => {
    // console.log("User trying to logout");
    logOut()
      .then(() => {
        toast("Wow so easy!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center">
      {/* Navbar Left Part */}
      <div className="text-4xl font-bold">
        🧸 Toy<span className="text-secondary">Topia</span>
      </div>

      {/* Navbar Middle Part */}
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
      {/* Navbar Right Part */}
      <div className="login-btn flex gap-5">
        {user && (
          <div
            className="flex items-center"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover && <div className="flex">{user && user.email}</div>}
            <img
              className="w-12 rounded-full border"
              src={`${user ? user.photoURL : userIcon}`}
              alt=""
            />
          </div>
        )}
        {user ? (
          <>
            <button onClick={handleLogout} className="btn btn-primary px-10">
              Logout
            </button>
            <ToastContainer />
          </>
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
