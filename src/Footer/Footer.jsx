import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={` ${style.footerStyle} `}>
        <div className="row ">
          <div className="col-md-4">
            <h2>Location</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h2 className="text-center">Around The Web</h2>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="fs-5 me-3">
                <i className="fa-brands fa-facebook "></i>
              </li>
              <li className="fs-5 me-3">
                <i className="fa-solid fa-globe"></i>
              </li>
              <li className="fs-5  me-3">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="fs-5 me-3 ">
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>ABOUT FREELANCER</h2>
            <p className="fs-6 p-3">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
