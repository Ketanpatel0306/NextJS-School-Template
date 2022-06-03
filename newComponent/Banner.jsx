import React, { useState, useEffect } from "react";
import Style from "../styles/banner.module.css";
import { Row, Col, Card } from "react-bootstrap";
import CardJson from "../json/HeaderCard.json";
export const Banner = ({ color }) => {
  const color1 = "#EDEDED";
  const color2 = "#FFFFFF";
  return (
    <div>
      <div
        className={Style.bannerMainDiv}
        style={{
          background: color
            ? "black"
            : `linear-gradient(180deg,  ${color1} 0%,${color2} 100%)`,
        }}
      >
        <Row className={Style.row}>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className={Style.colFirst}>
            <div>
              <h2
                className={Style.heading}
                style={{ color: color ? "white" : "#000000" }}
              >
                Lorem Ipsum dolor <br />
                <span
                  className={Style.headingSpan}
                  style={{ color: color ? "white" : "#80C4D3" }}
                >
                  sit amet.{" "}
                </span>
              </h2>
              <div className={Style.textDiv}>
                <p
                  className={Style.text}
                  style={{ color: color ? "white" : "#000000" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temp incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <button className={Style.btn}>
                <span className={Style.btnSpan} onClick={() => changeColor()}>
                  More info &rarr;
                </span>
              </button>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className={Style.colSecond}>
            <img src="./images/Image.svg" className="w-100" />
          </Col>
        </Row>
      </div>

      <div
        className={Style.cardDiv}
        style={{
          background: color
            ? "black"
            : `linear-gradient(180deg,  ${color2} 0%,${color1} 100%)`,
        }}
      >
        <h1
          className={Style.CardTitle}
          style={{ color: color ? "white" : "rgba(34, 52, 61, 0.8)" }}
        >
          Some Of Our
          <span
            className={Style.CardTitleSpan}
            style={{ color: color ? "white" : "#80C4D3" }}
          >
            Activies
          </span>
        </h1>

        <Row style={{ marginTop: "30px" }}>
          {CardJson.map((item, index) => {
            return (
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={6}
                xs={12}
                key={index + "HeaderCard"}
                className={Style.cardCol}
              >
                <Card
                  style={{
                    background: color ? "black" : "transparent",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.Image}
                    className={Style.cardImg}
                  />
                  <Card.Body className={Style.cardBody}>
                    <Card.Title
                      className={Style.cardTitle}
                      style={{ color: color ? "white" : "#22343D" }}
                    >
                      {item.Title}
                    </Card.Title>
                    <Card.Text
                      style={{ color: color ? "white" : "#22343D" }}
                      className={Style.cardText}
                    >
                      {item.Text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
