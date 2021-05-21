import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
class Body extends Component {
  render() {
    return (
      <div className="con">
        <div className="hello"> hello </div>{" "}
        <div className="wel"> brothers / sisters </div>{" "}
        <div className="para">
          <p> this web site is used for all . </p>{" "}
          <p>
            thank you for visit this page <span> @G & k </span>{" "}
          </p>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Body;
