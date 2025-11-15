import React from "react";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ToyDetailsCard = ({ key, toyDetails }) => {
  const {
    toyId,
    toyName,
    pictureURL,
    description,
    price,
    availableQuantity,
    rating,
  } = toyDetails;
  const notify = () => toast("You've successfully joined!");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="hero bg-transparent">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pictureURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p className="py-6">{description}</p>
          </div>
        </div>
      </div>
      <div className="join">
        <div>
          <label className="input validator join-item">
            <CiUser />
            <input type="text" placeholder="Your Full Name" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button onClick={notify} className="btn btn-secondary join-item">
          Join
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ToyDetailsCard;
