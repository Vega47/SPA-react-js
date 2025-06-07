import React from "react";
import Modal from "../Modal/Modal";
import firstImg from "../assets/poert1.png";
import secondImg from "../assets/port2.png";
import thirdImg from "../assets/port3.png";
import Style from "./Portfolio.module.css";
export default function Portfolio() {
  return (
    <>
      <div className="Portfolio p-5">
        <h1 className="text-center">Portfolio Component</h1>
        <div className={`${Style.icon} text-center`}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="row w-75 m-auto mt-5">
          <div className="col-md-4">
            <Modal
              src={firstImg}
              className={`${Style.modalWidth} p-0 m-0 w-100`}
            />
          </div>
          <div className="col-md-4">
            <Modal
              src={secondImg}
              className={`${Style.modalWidth} p-0 m-0 w-100`}
            />
          </div>
          <div className="col-md-4">
            <Modal
              src={thirdImg}
              className={`${Style.modalWidth} p-0 m-0 w-100`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
