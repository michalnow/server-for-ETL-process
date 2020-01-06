import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PhoneList extends Component {
  state = {
    phones: [],
    phoneName: ""
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/server/api/phone/all`).then(res => {
      const phones1 = res.data;
      this.setState({ phones: phones1 });
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Search phone</h1>
        <input
          type="text"
          name="phoneName"
          id="phonName"
          onChange={this.onChange}
          style={{ marginTop: "5px", marginBottom: "5px" }}
        />
        <br></br>
        <Link
          to={`/phone/${this.state.phoneName}`}
          className="btn btn-outline-primary btn-lg"
          style={{
            borderRadius: "20px",
            fontWeight: "bold",
            height: "50px",
            width: "150px",
            fontSize: "25px",
            border: "none"
          }}
        >
          Search
        </Link>
        {this.state.phones.map(phone => {
          return (
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  textAlign: "center",
                  justifyContent: "Center",
                  border: "none",
                  borderBottom: "solid",
                  borderRadius: "0px",
                  borderColor: "#4b8dff"
                }}
              >
                <div style={{ textAlign: "Center" }}>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginTop: "5px"
                    }}
                  >
                    {phone.fullName}
                  </p>
                  <img
                    src={phone.imageUrl}
                    className="card-img-top"
                    style={{
                      marginTop: "-26px",
                      height: "500px",
                      width: "500px",
                      alignContent: "Center",
                      textAlign: "center"
                    }}
                    alt=""
                  />
                  <p
                    className="lead"
                    style={{ fontSize: "22px", fontStyle: "italic" }}
                  >
                    {phone.description}
                  </p>
                  <Link to={`/phone/${phone.phone_id}/opinions`}>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg"
                      style={{
                        borderRadius: "20px",
                        fontWeight: "bold",
                        height: "80px",
                        width: "220px",
                        fontSize: "25px",
                        border: "none",
                        marginBottom: "18px"
                      }}
                    >
                      Check opinions
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PhoneList;
