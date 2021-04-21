import React, { Component } from "react";
import { Link, link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <span className="ti-name">G&k</span>
        <ul>
          <li>
            {" "}
            <Link to="/" className="active">
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="about"> About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="sales">Sales</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="purchase">Purchase</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="works">Works</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="Contact">contact us</Link>{" "}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
