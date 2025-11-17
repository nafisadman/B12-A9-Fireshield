import React from "react";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

const ToyDetailsCard = ({ key, toyDetails }) => {
  const {
    toyId,
    toyName,
    sellerName,
    sellerEmail,
    pictureURL,
    description,
    price,
    availableQuantity,
    rating,
    subCategory,
  } = toyDetails;
  const notify = () => toast("Check your email for further instrucitons");
  const notify1 = () => toast("Item bought Successfully!");
  const handleBuyNow = () => {
    notify1();
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="hero bg-transparent ">
        <div className="hero-content flex-col lg:flex-row items-start">
          <img src={pictureURL} className="max-w-1/2 shadow-2xl" />
          <div className="flex flex-col gap-y-4">
            <h1 className="">#{toyId}</h1>
            <h1 className="text-4xl">{toyName}</h1>
            <p className="font-bold text-secondary text-2xl">&#2547;{price}</p>
            <hr className="" />
            <p className="text-gray-500">{description}</p>
            <div className="badge badge-success">
              <svg
                className="size-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  fill="currentColor"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    stroke-miterlimit="10"
                    strokeWidth="2"
                  ></circle>
                  <polyline
                    points="7 13 10 16 17 8"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    stroke-miterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                </g>
              </svg>
              {availableQuantity} Remaining
            </div>
            <p className="flex items-center gap-2">
              <FcRating /> {rating}
            </p>
            <p className="">
              <span className="font-bold">Sub-Category: </span>
              {subCategory}
            </p>
            <p className="">
              <span className="font-bold">Seller: </span>
              {sellerName} <span className="text-blue-400">{sellerEmail}</span>{" "}
            </p>
            <div
              onClick={handleBuyNow}
              to={`/toy-details/${toyId}`}
              className="btn btn-block bg-secondary hover:bg-black hover:text-white"
            >
              Buy Now
            </div>
            <ToastContainer />
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
        <button onClick={notify} className="btn bg-transparent hover:bg-secondary join-item">
          Try Now
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ToyDetailsCard;
