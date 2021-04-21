import React from "react";
import { Form } from "react-bootstrap";
import { FaCartPlus, FaSearch, FaPlusCircle } from "react-icons/fa";
import Sales from "../sales/Salesintro/Salesintro.module.css";

function Searchbar() {
  let icon;
  icon = true;
  var ic = icon == true ? <FaCartPlus color="white" /> : <FaPlusCircle />;

  return (
    <div>
      <div className={Sales.search}>
        <div className={Sales.testsearch}>
          <FaSearch size={20} />{" "}
        </div>{" "}
        <Form className={Sales.cont}>
          <Form.Group controlId={Sales.formBasicEmail}>
            <Form.Control
              type="type"
              placeholder="Search"
              style={{
                width: "150px",
                height: "20px",
                backgroundColor: "transparent",
                border: "0px solid #B809D5",
                color: "white",
              }}
            />{" "}
          </Form.Group>{" "}
        </Form>{" "}
      </div>{" "}
      <div className={Sales.circle2}>
        <div className={Sales.icon1}> {ic} </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Searchbar;
