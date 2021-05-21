import React, { useContext } from "react";
import Cart from "./Cart.module.css";
import watermelon from "../../assets/watermelon.svg";
import { FaStar } from "react-icons/fa";
import Img from "./img";
import axios from "axios";
import { Usercontext } from "../../aaaaa";

function Items(props) {
  const usercontexts = useContext(Usercontext);
  const { _id, Rs, cart, imgs, items, itemid, kg, name, review } = props.arr;
  const star = review;
  var a = star;
  const reviews = [];
  for (let i = 0; i < 5; i++) {
    if (i < a) {
      var ins = <FaStar color="yellow" size={10} />;
    } else {
      var ins = <FaStar color="black" size={10} />;
    }
    reviews.push(ins);
  }
  const ale = async () => {
    var app = await axios.get(`http://localhost:2000/Peritems/${itemid}`);
    var kgg = app.data.kg;
    let data = {
      data: {
        idd: _id,
      },
    };

    var cha = kgg + cart;

    let update = {
      _id: itemid,
      kg: cha,
    };
    // console.log(update);
    await axios
      .delete("http://localhost:2000/cart", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await axios
      .put("http://localhost:2000/Peritems", update)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    usercontexts.dischas("change");
  };

  return (
    <div className={Cart.cartbox}>
      <div className={Cart.outcircle}>
        <div className={Cart.cardboximg}>
          <Img item={imgs} width="20px" />
        </div>{" "}
      </div>{" "}
      <div className={Cart.showname}>
        name <div className={Cart.bot}> {name} </div>{" "}
      </div>{" "}
      <div className={Cart.kg}>
        1 kg <div className={Cart.bot}> {Rs} </div>{" "}
      </div>{" "}
      <div className={Cart.place}>
        place <div className={Cart.bot}> {items} </div>{" "}
      </div>{" "}
      <div className={Cart.reating}>
        rating <div className={Cart.start}> {reviews} </div>{" "}
      </div>{" "}
      <div className={Cart.order}>
        order kg <div className={Cart.bot}> {cart} </div>{" "}
      </div>{" "}
      <div className={Cart.amount}>
        amount <div className={Cart.bot}> {Rs * cart} </div>{" "}
      </div>{" "}
      <button type="button" className={Cart.remove} onClick={ale}>
        X{" "}
      </button>{" "}
    </div>
  );
}

export default Items;
