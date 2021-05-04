import React from "react";
import Cart from "./Cart.module.css";
import watermelon from "../../assets/watermelon.svg";
import { FaStar } from "react-icons/fa";
import Img from "./img";
function Items(props) {
  console.log("props", props.arr);
  const { Rs, cart, imgs, items, kg, name, review } = props.arr;
  const star = review;
  var a = star;
  // var n = 5;
  const reviews = [];
  for (let i = 0; i < 5; i++) {
    if (i < a) {
      var ins = <FaStar color="yellow" size={10} />;
    } else {
      var ins = <FaStar color="black" size={10} />;
    }
    reviews.push(ins);
  }
  const ale = () => {
    alert("hii");
  };

  return (
    <div className={Cart.cartbox}>
      <div className={Cart.outcircle}>
        <div className={Cart.cardboximg}>
          <Img item={imgs} width="20px" />
        </div>
      </div>
      <div className={Cart.showname}>
        name
        <div className={Cart.bot}>{name}</div>
      </div>
      <div className={Cart.kg}>
        1kg
        <div className={Cart.bot}>{Rs}</div>
      </div>
      <div className={Cart.place}>
        place
        <div className={Cart.bot}>{items}</div>
      </div>
      <div className={Cart.reating}>
        rating
        <div className={Cart.start}>{reviews}</div>
      </div>
      <div className={Cart.order}>
        order kg
        <div className={Cart.bot}>{cart}</div>
      </div>
      <div className={Cart.amount}>
        amount
        <div className={Cart.bot}>{Rs * cart} </div>
      </div>
      <button type="button" className={Cart.remove} onClick={ale}>
        X
      </button>
    </div>
  );
}

export default Items;
