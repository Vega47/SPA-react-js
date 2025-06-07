import React from "react";
import Style from "./About.module.css";
export default function About() {
  return (
    <>
      <div className={` w-100 py-5 px-5 text-white ${Style.mainBackGround}`}>
        <div>
          <h1 className="text-center py-5">About Component</h1>
        </div>
        <div className={`${Style.icon} text-center`}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="row py-4">
          <div className="col-md-6 p-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="col-md-6 p-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </>
  );
}
