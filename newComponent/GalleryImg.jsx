import React from "react";
import { Row, Col } from "react-bootstrap";
import Style from "../styles/gallery.module.css";
import PhotoJson from "../json/Photo.json";

export const GalleryImg = ({ color }) => {
  return (
    <div
      className={Style.paddingDiv}
      style={{ backgroundColor: color ? "black" : "white" }}
    >
      <h1
        className={Style.heading}
        style={{ color: color ? "white" : "rgba(34, 52, 61, 0.7)" }}
      >
        From our
        <span
          className={Style.headingSpan}
          style={{ color: color ? "white" : "#80C4D3" }}
        >
          gAllery
        </span>
      </h1>

      <Row>
        {PhotoJson.map((i, k) => (
          <Col
            xl={i.xl}
            lg={i.lg}
            md={i.md}
            sm={i.sm}
            xs={i.xs}
            style={{
              marginBottom: "15px",
              // height: k <= 1 || k >= 5 ? "322px" : "399px ",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <img
              src={`./images/${i.Image}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
