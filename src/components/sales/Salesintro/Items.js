import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Tilt from "react-tilt";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import { FaThLarge, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img from "../../Extra/img";
function Items(props) {
  const { name, imgs, Rs, id } = props.arr;
  console.log(name, imgs, Rs, id);
  return (
    <>
      <Tilt className="Title">
        <Link to={`/Salesintro/:${id}`}>
          <div className="Tilt-inner">
            <div className={Sales.product}>
              <div className={Sales.circle}>
                <div className={Sales.icon1}>
                  <FaThLarge color="black" />
                </div>
              </div>
              <div className={Sales.circle1}>
                <div className={Sales.icon1}>
                  <FaCartPlus color="black" />
                </div>
              </div>
              <div className={Sales.innerbox}>
                <Img item={imgs} />
              </div>
              <div className={Sales.name}>{name}</div>
              <div className={Sales.rup}>₨ {Rs}</div>
            </div>
          </div>
        </Link>
      </Tilt>
    </>
  );
}

export default Items;
