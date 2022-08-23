import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../Image/VBCF_Logo2.png";
import "./header.css";
// import Button from 'react-bootstrap/Button';

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log("location", location);
  }, [location]);

  return (
    <div className="">
      <div className="header-bg-white">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="logo-container">
                <img
                  src={image}
                  className="img-fluid w-100"
                  alt="Logo Image"
                ></img>
              </div>
            </div>
            <div className="col-md-10">
              <h1 className="header-title">
                Victorian Bangladeshi Community Foundation VBCF{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="navContainer">
        <div className="container py-2">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                  <li
                    className={`nav-item ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link to={"/"} className="nav-link" href="#">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/Program" ? "active" : ""
                    }`}
                  >
                    <Link to={"/Program"} className="nav-link" href="#">
                      Program
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/what_we_do" ? "active" : ""
                    }`}
                  >
                    <Link to={"/what_we_do"} className="nav-link" href="#">
                      What We Do
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    <Link to={"/about"} className="nav-link" href="#">
                      About
                    </Link>
                  </li>
                  <li id="hasSub" className="nav-item">
                    <Link to={"/meettheteam"} className="nav-link" href="#">
                      Meet The Team
                    </Link>
                    <ul className="subNav">
                      <li>
                        <Link to={"/meettheteam"} className="nav-link" href="#">
                          VBCF EC 2022-23
                        </Link>
                        <Link to={"/"} className="nav-link" href="#">
                          VBCF EC 2020-21
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Download{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}
