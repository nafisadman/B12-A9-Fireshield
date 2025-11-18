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
    <div>
      {/* Old Navbar ------------------------------------------------------------------------------*/}

      {/* New Navbar ------------------------------------------------------------------------------*/}

      <div class="navbar bg-base-100 shadow-xl">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">
            🧸 Toy<span className="text-secondary">Topia</span>
          </a>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>

        <div class="navbar-end">
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
                <button onClick={handleLogout} class="btn btn-primary">
                  Logout
                </button>
                <ToastContainer></ToastContainer>
              </>
            ) : (
              <Link to="/auth/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
