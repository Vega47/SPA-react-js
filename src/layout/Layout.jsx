import React from "react";
import Nv from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Nv />
      <Outlet />
      <Footer />
    </>
  );
}
