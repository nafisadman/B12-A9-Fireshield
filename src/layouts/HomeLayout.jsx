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

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        {/* Newspaper Icon, Motto */}
        {/* <Header></Header> */}

        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>

        {/* <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section> */}
      </header>

      <main>
        <div>
          <Slider></Slider>
        </div>
        <div className="w-11/12 mx-auto my-3 grid grid-cols-3 gap-5">
          {/* <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
          </aside> */}
          <section className="main col-span-2 border border-red-400">
            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-1 sticky top-0 h-fit border border-blue-400">
            <RightAside></RightAside>
          </aside>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
