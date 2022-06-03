import React from "react";
import { Row, Col } from "react-bootstrap";
import TeamStyle from "../styles/meetOurTeam.module.css";

export const MeetOurTeam = (props) => {
  const { color, item } = props;
  return (
    <div className={TeamStyle.colDiv}>
      <img src={item.Image} className={TeamStyle.img} />
      <h2
        className={TeamStyle.title}
        style={{ color: color ? "white" : "#22343D" }}
      >
        {item.Title}
      </h2>
      <h6
        className={TeamStyle.text}
        style={{ color: color ? "white" : "#80C4D3" }}
      >
        {item.Text}
      </h6>
      <div className={TeamStyle.imgDiv}>
        <img src={item.Facebook} />
        <img src={item.WhatsApp} />
        <img src={item.Instagram} />
      </div>
    </div>
  );
};
