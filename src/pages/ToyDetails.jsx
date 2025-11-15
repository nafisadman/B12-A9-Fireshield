import React from "react";
import { Outlet, useLoaderData, useNavigation, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Loading from "./Loading";
import RightAside from "../components/homelayout/RightAside";
import Footer from "../components/Footer";
import ToyDetailsCard from "../components/ToyDetailsCard";

const ToyDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const toyDetails = data.find(singleToy=>singleToy.toyId == id);
  console.log('data: ', toyDetails);
  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 gap-5">
        <h2 className="font-bold mb-5">Toy Details</h2>
        <ToyDetailsCard key={id} toyDetails={toyDetails}></ToyDetailsCard>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ToyDetails;
