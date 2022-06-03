import React, { useEffect, useState } from "react";
import Style from "../styles/header.module.css";
import { Navbar, Nav } from "react-bootstrap";
import jsCookies from "js-cookie";
import { useRouter } from "next/router";
export const Header = (props) => {
  const rought = useRouter();
  const { changeColor, color } = props;
  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    setIsActive(window.location.pathname);
  });

  return (
    <div
      className={Style.headerMainDiv}
      style={{ backgroundColor: color ? "black" : "white" }}
    >
      <Navbar expand="lg">
        <div>
          <img src="./images/Rapkhen.svg" />
          {/* <img
            src="./images/Button.png"
            className={Style.ImgMobile}
            onClick={() => changeColor()}
          /> */}
        </div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: color ? "white" : "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={Style.navItem}>
            <Nav.Link
              style={{ color: color ? "white" : "#000000" }}
              active={isActive === "/home"}
              className={Style.navLink}
              href="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: color ? "white" : "#000000" }}
              active={isActive === "/aboutUs"}
              className={Style.navLink}
              href="/aboutUs"
            >
              About us
            </Nav.Link>
            <Nav.Link
              style={{ color: color ? "white" : "#000000" }}
              active={isActive === ""}
              className={Style.navLink}
              href=""
            >
              Management
            </Nav.Link>
            <Nav.Link
              style={{ color: color ? "white" : "#000000" }}
              active={isActive === ""}
              className={Style.navLink}
              href=""
            >
              News & Event
            </Nav.Link>
            <Nav.Link
              style={{ color: color ? "white" : "#000000" }}
              active={isActive === ""}
              className={Style.navLink}
              href=""
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              style={{ color: color ? "white" : "#000000" }}
              active={isActive === ""}
              className={Style.navLink}
              href=""
            >
              Contact us
            </Nav.Link>
            <img
              src="./images/Button.png"
              className={Style.ImgDesktop}
              onClick={() => changeColor()}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
