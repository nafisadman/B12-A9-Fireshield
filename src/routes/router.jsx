import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ToyStore from "../components/homelayout/ToyStore";
import ToyDetails from "../pages/ToyDetails";
import SalesLayout from "../layouts/SalesLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/toys/",
        element: <ToyStore></ToyStore>,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      }
    ],
  },
  {
    path: "/about",
    element: (
      <PrivateRoute>
        <SalesLayout></SalesLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    )
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/toy-details/:id",
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/toys.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: <ErrorLayout></ErrorLayout>,
  },
]);

export default router;
