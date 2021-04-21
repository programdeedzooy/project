import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Post from "../../purchase/Postitems/Postitems.module.css";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import { FaStar } from "react-icons/fa";
import Tilt from "react-tilt";
import { FaThLarge, FaCartPlus, FaLongArrowAltRight } from "react-icons/fa";
import Work from "./Workitem.module.css";
import bus from "../../../assets/bus.svg";
import bike from "../../../assets/motorcycle.svg";
import car from "../../../assets/car.svg";
function Workitem(props) {
  const aaa = [
    {
      id: "q234ewq",
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 1,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 2,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 3,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 4,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 5,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 6,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 7,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 8,
      froms: "covi",
      to: "palani",
      kg: 2,
    },
  ];

  const ids = props.match.params.id;

  const items = aaa.filter((aa) => ids == aa.id);
  // console.log(items);
  const { id, froms, to, kg } = items[0];
  return (
    <div>
      {/* <Searchbar/> */}
      <div className={Sales.apps}>
        <div className={Post.back}></div>
        <div className={Post.itemDetials}>
          <div className={Post.headbox}>
            <div className={Work.head}>ID:{id}</div>
            <div className={Post.itemabout}>
              <div className={Work.name}>
                {froms}{" "}
                <span className={Work.arrow}>
                  <FaLongArrowAltRight />
                </span>{" "}
                {to}
              </div>
            </div>
            <div className={Work.KG}>{kg}kG</div>
          </div>
          <div className={Post.bubble}>
            <div className={Post.items}>
              <img src={carrot} alt="" />
              <div className={Post.rup}>₨ 30</div>
            </div>
          </div>
          <div className={Post.headbox1}>
            <div className={Work.timing}>Timing:3pm-3.30pm</div>
            <div className={Work.trans}>
              trans:
              <div className={Post.itemimgbox1}>
                <div
                  className={Post.itemboximg2}
                  style={{ backgroundColor: "aqua" }}
                >
                  <span className={Work.ba}>
                    {" "}
                    <img src={bus} alt="" />{" "}
                  </span>{" "}
                </div>
                <div
                  className={Post.itemboximg2}
                  style={{ backgroundColor: "aqua" }}
                >
                  <span>
                    <span>
                      {" "}
                      <img src={bike} alt="" />{" "}
                    </span>{" "}
                  </span>
                </div>
                <div
                  className={Post.itemboximg2}
                  style={{ backgroundColor: "aqua" }}
                >
                  <span>
                    <span>
                      {" "}
                      <img src={car} alt="" />{" "}
                    </span>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={Post.button}>
            {" "}
            <span className={Post.center1}>add</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Workitem;
