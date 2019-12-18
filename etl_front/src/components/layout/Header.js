import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "#4b8dff"
        }}
      >
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
      </nav>
    );
  }
}
export default Header;
