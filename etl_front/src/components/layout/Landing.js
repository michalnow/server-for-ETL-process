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
              help from Jsoup and the server in Spring Boot.
            </p>
          </div>
          <div className="col-sm">
            <p className="lead" style={{ fontSize: 30, fontWeight: "bold" }}>
              Technologies used
              <img
                src={require("../../images/spring.png")}
                style={{ height: "120px", marginTop: "15px" }}
              />
              <img
                src={require("../../images/Jsoup.png")}
                style={{ height: "160px" }}
              />
              <img
                src={require("../../images/java8.png")}
                style={{ height: "160px", marginTop: "-15px" }}
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
          style={{ fontSize: 40, fontWeight: "bold", fontStyle: "italic" }}
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
      </div>
    );
  }
}
export default Landing;
