import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import Tilt from "react-tilt";
import Work from "./Workintro.module.css";
import { Link } from "react-router-dom";
import {
  FaThLarge,
  FaPlusCircle,
  FaLongArrowAltRight,
  FaFilter,
} from "react-icons/fa";

function Items(props) {
  const { id, from, to, kg } = props.arr;
  return (
    <>
      <Tilt className="Title">
        <Link to={`/Workintro/${id}`}>
          <div className="Tilt-inner">
            <div className={Sales.product}>
              <div className={Sales.circle}>
                <div className={Sales.icon1}>
                  <FaThLarge color="black" />
                </div>
              </div>
              <div className={Sales.circle1}>
                <div className={Sales.icon1}>
                  <FaPlusCircle color="black" />
                </div>
              </div>
              <div className={Sales.innerbox}>
                <img className={Sales.img} src={carrot} alt="" />
              </div>
              <div className={Work.name}>
                {from}{" "}
                <span className={Work.arrow}>
                  <FaLongArrowAltRight />
                </span>{" "}
                {to}
              </div>
              <div className={Work.rup}>{kg} kG</div>
            </div>
          </div>
        </Link>
      </Tilt>
    </>
  );
}
export default Items;
