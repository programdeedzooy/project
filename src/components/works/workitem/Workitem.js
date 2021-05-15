import React, { useContext } from "react";
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
import { Consumer } from "../../Context";
import { Usercontext } from "../../../aaaaa";
import Searchbar from "../../Extra/Searchbar";
import Img from "../../Extra/img";

function Workitem(props) {
  const usecontext = useContext(Usercontext);

  // const { aa } = value;
  const aa = usecontext.del;
  const ida = props.match.params.id;
  // const ids = ida.slice(1);
  console.log(ida);
  console.log(aa);
  const items = aa.filter((aa) => ida == aa._id);
  // console.log(itemss);
  // var items = {
  //   id: "345",
  //   from: "covi",
  //   to: "palani",
  //   kg: "4",
  // };
  const { cname, from, to, kg, imgs, street } = items[0];
  return (
    <div>
      {" "}
      <Searchbar />
      <div className={Sales.apps}>
        <div className={Post.back}>
          <div className={Post.title}> Works </div>{" "}
        </div>{" "}
        <div className={Post.itemDetials}>
          <div className={Post.headbox}>
            <div className={Work.head}> Naem: {cname} </div>{" "}
            <div className={Post.itemabout}>
              <div className={Work.name}>
                {" "}
                {from}{" "}
                <span className={Work.arrow}>
                  <FaLongArrowAltRight />
                </span>{" "}
                {to}{" "}
              </div>{" "}
            </div>{" "}
            <div className={Work.KG}>
              {" "}
              {kg}
              kG{" "}
            </div>{" "}
          </div>{" "}
          <div className={Post.bubble}>
            <div className={Post.items}>
              <Img item={imgs} /> <div className={Post.rup}> ₨30 </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className={Post.headbox1}>
            <div className={Work.timing}> address : {street} </div>{" "}
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
                </div>{" "}
                <div
                  className={Post.itemboximg2}
                  style={{ backgroundColor: "aqua" }}
                >
                  <span>
                    <span>
                      {" "}
                      <img src={bike} alt="" />{" "}
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
                <div
                  className={Post.itemboximg2}
                  style={{ backgroundColor: "aqua" }}
                >
                  <span>
                    <span>
                      {" "}
                      <img src={car} alt="" />{" "}
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <button className={Post.button}>
            {" "}
            <span> add </span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Workitem;
