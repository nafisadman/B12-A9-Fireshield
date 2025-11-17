import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <div>
          <Slider></Slider>
        </div>
        <div className="w-11/12 mx-auto my-3 grid grid-cols-4 gap-5">
          <section className="main col-span-3">
            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-1 sticky top-0 h-fit">
            <RightAside></RightAside>
          </aside>
        </div>
        <div>
          <Subscribe></Subscribe>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
