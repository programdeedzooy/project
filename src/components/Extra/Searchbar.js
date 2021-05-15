import React from "react";
import { Form } from "react-bootstrap";
import { FaCartPlus, FaSearch, FaPlusCircle } from "react-icons/fa";
import Sales from "../sales/Salesintro/Salesintro.module.css";
import { Link } from "react-router-dom";

function Searchbar(props) {
  console.log(props.icon);
  let icons;
  let icon = props.icon == true ? false : true;
  // icon = true;
  var ic =
    icon === true ? (
      <Link to="/cart">
        {" "}
        <FaCartPlus color="white" />{" "}
      </Link>
    ) : (
      <FaPlusCircle />
    );

  // console.log(input);

  const onhandler = (event) => {
    let i = event.target.value;
    console.log("event", i);
    props.set(i);
  };
  const na = props.placehold === true ? "search place" : "search item";
  console.log(props.placehold);
  return (
    <div>
      <div className={Sales.search}>
        <div className={Sales.testsearch}>
          <FaSearch size={20} />{" "}
        </div>{" "}
        <Form className={Sales.cont}>
          <Form.Group controlId={Sales.formBasicEmail}>
            <Form.Control
              onChange={onhandler}
              type="type"
              placeholder={na}
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
