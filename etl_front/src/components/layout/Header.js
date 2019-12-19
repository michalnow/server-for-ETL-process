import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "#4b8dff"
        }}
      >
        <Link to="/" style={{ textDecoration: "none", outline: "none" }}>
          <div
            className="collapse navbar-collapse"
            style={{
              fontSize: 55,
              fontStyle: "italic",
              fontWeight: "bold",
              color: "white",
              fontFamily: "Swiss"
            }}
          >
            ETL PROJECT
          </div>
        </Link>
      </nav>
    );
  }
}
export default Header;
