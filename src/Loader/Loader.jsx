import React from "react";
import { Hourglass } from "react-loader-spinner";
import Style from "./Loader.module.css";
export default function Loader() {
  return (
    <>
      <div
        className={`vh-100 w-100 d-flex justify-content-center align-items-center ${Style.bgBlackLoader}`}
      >
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
        <h2 className="text-white px-2">Loading...</h2>
      </div>
    </>
  );
}
