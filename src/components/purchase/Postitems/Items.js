import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Tilt from "react-tilt";
import { FaThLarge, FaCartPlus } from "react-icons/fa";
import Img from "../../Extra/img";

function Items(props) {
  const { id, name, imgs, Rs } = props.arr;
  const click = () => {
    console.log("hiii");
  };

  const handler = () => {
    let ids = props.arr._id;
    props.set(ids);
  };
  return (
    <>
      <Tilt className="Title">
        <div onClick={handler}>
          <div className="Tilt-inner">
            <div className={Sales.product}>
              <div className={Sales.circle}>
                <div className={Sales.icon1}>
                  <FaThLarge color="black" />
                </div>{" "}
              </div>{" "}
              <div className={Sales.circle1}>
                <div className={Sales.icon1}>
                  <FaCartPlus color="black" />
                </div>{" "}
              </div>{" "}
              <div className={Sales.innerbox}>
                <Img item={imgs} />{" "}
              </div>{" "}
              <div className={Sales.name}> {name} </div>{" "}
              <div className={Sales.rup}> ₨{Rs} </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Tilt>{" "}
    </>
  );
}

export default Items;
