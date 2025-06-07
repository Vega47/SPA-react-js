import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/home";
import Layout from "./layout/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Recipes from "./Recipes/Recipes";
import "@fortawesome/fontawesome-free/css/all.min.css";
let route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
