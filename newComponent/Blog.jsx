import React from "react";
import BlogStyle from "../styles/blog.module.css";
import { Row, Col, Card } from "react-bootstrap";

export const Blog = (props) => {
  const { color, item, index } = props;

  return (
    <div className={BlogStyle.widthDiv}>
      <Card
        style={{
          border: "none",
          backgroundColor: color ? "black" : "  #FFFFFF",
        }}
        className={BlogStyle.card}
      >
        <Card.Img
          src={item.Image}
          style={{ objectFit: "contain", width: "100%" }}
        />
        <Card.Body className={BlogStyle.cardBody}>
          <Card.Text
            className={BlogStyle.cardText}
            style={{ color: color ? "white" : " #000000" }}
          >
            {item.Text}
          </Card.Text>
          <Card.Title
            className={BlogStyle.cardTitle}
            style={{ color: color ? "white" : " #000000" }}
          >
            {item.Title}
          </Card.Title>
          <div className={BlogStyle.imgDiv}>
            <img src={item.Icon} className={BlogStyle.img} />
            <h4
              className={BlogStyle.imgText}
              style={{ color: color ? "white" : " #000000" }}
            >
              {item.IconText}
            </h4>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
