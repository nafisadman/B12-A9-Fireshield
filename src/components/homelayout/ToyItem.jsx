import React, { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const ToyItem = ({ toy }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const {
    toyId,
    toyName,
    pictureURL,
    description,
    price,
    availableQuantity,
    rating,
  } = toy;
  console.log(toy);
  return (
    <div>
      <div
        className="card bg-base-100 max-w-96 shadow-sm m-5 "
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <figure>
          <img src={pictureURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            {toyName}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{availableQuantity} Left</div>
            <div className="badge badge-outline">
              <CiStar /> {rating}
            </div>
          </div>
          <div>
            <Link
              to={`/toy-details/${toyId}`}
              className="btn btn-block bg-transparent hover:bg-secondary hover:text-white"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyItem;
