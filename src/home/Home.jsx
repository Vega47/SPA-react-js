import React from "react";
import avatar from "../assets/avataaars (1).svg";
import style from "./Home.module.css";
export default function Home() {
  return (
    <div
      className={`landing d-flex flex-column  align-items-center ${style.backGroundStyle}`}
    >
      <img src={avatar} alt="" className={style.imageStyle} />
      <div className="image"></div>
      <h2>Start Framework</h2>
      <div className={`${style.icon} text-center`}>
        <i className="fa-solid fa-star"></i>
      </div>
      <p>Frontend Developr - UI/UX Designer - Backend Developer</p>
    </div>
  );
}
