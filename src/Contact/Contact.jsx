import React from "react";
import Style from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <h1 className="text-center pt-5">Conatct Section</h1>
      <div className={` text-center ${Style.icon}`}>
        <i className="fa-solid fa-star "></i>
      </div>
      <div className="input-container d-flex flex-column w-50 gap-3 m-auto py-5">
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="User Age" />
        <input type="text" placeholder="User Email" />
        <input type="text" placeholder="User Password" />
        <button>Send Message</button>
      </div>
    </>
  );
}
