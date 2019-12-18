import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Rating } from "primereact/rating";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class OpinionList extends Component {
  state = {
    opinions: [],
    phone: 0
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/opinion/${this.props.match.params.phoneId}/all`
      )
      .then(res => {
        const opinions1 = res.data;
        this.setState({ opinions: opinions1 });
      });

    axios
      .get(`http://localhost:8080/api/phone/${this.props.match.params.phoneId}`)
      .then(res => {
        const phone1 = res.data;
        this.setState({ phone: phone1 });
      });
  }

  render() {
    return (
      <div className="container">
        <p
          className="lead"
          style={{ fontSize: "30px", fontWeight: "bold", fontStyle: "italic" }}
        >
          {this.state.phone.fullName} - opinions
        </p>
        {this.state.opinions.map(opinion => {
          return (
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  marginBottom: "8px",
                  borderColor: "#4b8dff",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  borderWidth: "3px"
                }}
              >
                <div
                  className="header"
                  style={{
                    backgroundColor: "#4b8dff",
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "left"
                  }}
                >
                  {opinion.nickname}
                  <br></br> {opinion.publishDate.substring(0, 12)}
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <p className="lead">user phone rating: </p>
                    <Rating
                      value={opinion.grade}
                      stars={5}
                      cancel={false}
                      style={{
                        color: "gold",
                        fontSize: "27px",
                        fontWeight: "bold",
                        marginTop: "-18px"
                      }}
                    />
                  </div>
                  <div className="col-sm-8">
                    {opinion.review}
                    {opinion.recommendation === "Tak" ? (
                      <p
                        className="lead"
                        style={{
                          fontSize: "20px",
                          fontStyle: "italic",
                          fontWeight: "bold"
                        }}
                      >
                        Recommended - Yes !
                      </p>
                    ) : (
                      <p
                        className="lead"
                        style={{
                          fontSize: "20px",
                          fontStyle: "italic",
                          fontWeight: "bold"
                        }}
                      >
                        Recommended - No :(
                      </p>
                    )}
                  </div>
                  <div className="col-sm-2">
                    <p
                      className="lead"
                      style={{ color: "green", fontWeight: "bold" }}
                    >
                      {opinion.thumbsUp} thumbs up
                    </p>
                    <p
                      className="lead"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {opinion.thumbsDown} thumbs down
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default OpinionList;
