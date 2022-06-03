import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Row, Col } from "react-bootstrap";
import Style from "../styles/gallery.module.css";

export const Gallery = ({ color }) => {
  return (
    <div
      className={Style.paddingDiv}
      style={{ backgroundColor: color ? "black" : "white" }}
    >
      <h1
        className={Style.heading}
        style={{ color: color ? "white" : "rgba(34, 52, 61, 0.7)" }}
      >
        From our{" "}
        <span
          className={Style.headingSpan}
          style={{ color: color ? "white" : "#80C4D3" }}
        >
          {" "}
          gAllery{" "}
        </span>
      </h1>
      <Row>
        <Col xl={8} lg={8} md={8} sm={12} xs={12} className={Style.col}>
          <img src="./images/Gallery.svg" className="w-100" />
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Style.col}>
          <img src="./images/Gallery1.svg" className="w-100" />
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Style.col}>
          <img src="./images/Gallery2.svg" className="w-100" />
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Style.col}>
          <img src="./images/Gallery3.svg" className="w-100" />
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Style.col}>
          <img src="./images/Gallery4.svg" className="w-100" />
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Style.col}>
          <img src="./images/Gallery5.svg" className="w-100" />
        </Col>
        <Col xl={8} lg={8} md={8} sm={12} xs={12} className={Style.col}>
          <img src="./images/Gallery6.svg" className="w-100" />
        </Col>
      </Row>
      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}> */}
      {/* <Masonry> */}

      {/* </Masonry> */}
      {/* </ResponsiveMasonry> */}
    </div>
  );
};
