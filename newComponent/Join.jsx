import React from "react";
import Style from "../styles/join.module.css";

export const Join = ({ color }) => {
  return (
    <div
      className={Style.joinPaddingDiv}
      style={{ background: color ? "black" : "" }}
    >
      <div className={Style.textDiv}>
        <h1
          className={Style.heading}
          style={{ color: color ? "white" : "#80C4D3" }}
        >
          Join Us Today !
        </h1>
        <p
          className={Style.text}
          style={{ color: color ? "white" : "#000000" }}
        >
          Rapkhen is an outstanding Nursery & Primary school targeting
          educational System, helping Kids to read and write and to establish
          strong identity on the internet with real developing knowledge &
          understanding.
        </p>
        <div className="btnDiv">
          <button className="btn">
            <span className="btnText">Contact us &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
