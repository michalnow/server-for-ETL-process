import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p className="lead" style={{ fontSize: 30, fontWeight: "bold" }}>
              Project info
            </p>
            <p className="lead" style={{ fontSize: 26 }}>
              We're scrapping data from ceneo.pl about Smartphones and opinions
              associated to them. Scrapper tool was written in Java8 with the
              help from Jsoup and the server to managed scappred data in Spring
              Boot.
            </p>
          </div>
          <div className="col-sm">
            <p className="lead" style={{ fontSize: 30, fontWeight: "bold" }}>
              Technologies used
              <img
                src={require("../../images/spring.png")}
                style={{ height: "120px", marginTop: "15px" }}
                alt=""
              />
              <img
                src={require("../../images/Jsoup.png")}
                style={{ height: "160px" }}
                alt=""
              />
              <img
                src={require("../../images/java8.png")}
                style={{ height: "160px", marginTop: "-15px" }}
                alt=""
              />
            </p>
          </div>
          <div className="col-sm">
            <p className="lead" style={{ fontSize: 30, fontWeight: "bold" }}>
              Authors
            </p>
            <ul style={{ fontSize: 26, fontStyle: "italic" }}>
              <li>Michał Nowakowski</li>
              <li>Mariola Sosnowska</li>
              <li>
                Daria Marek &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
            </ul>
          </div>
        </div>
        <p
          className="lead"
          style={{
            fontSize: 40,
            fontWeight: "bold",
            fontStyle: "italic",
            marginTop: "-20px"
          }}
        >
          Check what we've scrapped
        </p>
        <Link to="/phones">
          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            style={{
              borderRadius: "20px",
              fontWeight: "bold",
              height: "80px",
              width: "220px",
              fontSize: "25px",
              border: "none"
            }}
          >
            Check this out !
          </button>
        </Link>
        <div className="row" style={{ marginTop: "-10px" }}>
          <div className="col-sm-6">
            <a
              style={{ textDecoration: "none", outline: "none" }}
              href="https://github.com/michalnow/ETL_Project"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <img
                src={require("../../images/github.png")}
                style={{ width: "300px" }}
                alt=""
              ></img>
              <p
                className="lead"
                style={{
                  color: "Black",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: "bold"
                }}
              >
                Scrapper tool
              </p>
            </a>
          </div>
          <div className="col-sm-6">
            <a
              style={{ textDecoration: "none", outline: "none" }}
              href="https://github.com/michalnow/server-for-ETL-process"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <img
                src={require("../../images/github.png")}
                style={{ width: "300px" }}
                alt=""
              ></img>
              <p
                className="lead"
                style={{
                  color: "Black",
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: "bold"
                }}
              >
                Server and client
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
