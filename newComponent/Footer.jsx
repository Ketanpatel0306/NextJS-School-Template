import React from "react";
import Style from "../styles/footer.module.css";
import { Nav } from "react-bootstrap";

export const Footer = ({ color }) => {
  return (
    <div
      className={Style.footerMainDiv}
      style={{ backgroundColor: color ? "black" : "#80C4D3" }}
    >
      <h4 className={Style.heading}>Logo</h4>
      <h1 className={Style.line}></h1>
      <div>
        <Nav className={Style.navItem}>
          <Nav.Link className={Style.navLink} href="/home">
            Home
          </Nav.Link>
          <Nav.Link className={Style.navLink} href="/aboutUs">
            About us
          </Nav.Link>
          <Nav.Link className={Style.navLink} href="">
            Management
          </Nav.Link>
          <Nav.Link className={Style.navLink} href="">
            News & Event
          </Nav.Link>
          <Nav.Link className={Style.navLink} href="">
            Gallery
          </Nav.Link>
          <Nav.Link className={Style.navLink} href="">
            Contact us
          </Nav.Link>
        </Nav>
      </div>
      <div className={Style.iconDiv}>
        <img src="./images/facebook.png" className={Style.img} />
        <img src="./images/twitter.png" className={Style.img} />
        <img src="./images/instagram.png" className={Style.img} />
        <img src="./images/whatsapp.png" className={Style.img} />
        <img src="./images/telegram.png" className={Style.img} />
      </div>
      <h5 className={Style.copyRight}>Copyright © 2021. All Right Reserved.</h5>
    </div>
  );
};
