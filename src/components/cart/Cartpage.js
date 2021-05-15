import React, { useContext, useEffect, useState } from "react";
import Cart from "./Cart.module.css";
import Cleave from "cleave.js/react";
import Card_sim from "../../assets/credit_card_chip.png";
import Tilt from "react-tilt";
import { event } from "jquery";
import { Consumer } from "../../components/Context";
import Items from "./items";
import bio from "../../assets/bio.svg";
import { Usercontext } from "../../aaaaa";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function Cartpage() {
  const usercontexts = useContext(Usercontext);
  const [scussess, setscussess] = useState(false);
  // const [product, setproduct] = useState({
  //   name: "React from fb",
  //   price: 10,
  //   productBy: "facebook",
  // });
  const [name, setname] = useState("");
  const [street, setstreet] = useState("");
  const [City, setCity] = useState("");
  const [zip, setzip] = useState("");
  const [phone, setphone] = useState("");
  // const { cart } = val;
  const cart = usercontexts.cartitem;
  var n = cart.length;
  var amount = 0;
  // console.log("length", n);

  var aitm = cart.map((it) => <Items arr={it} />);
  var aa = cart.length > 0 ? aitm : null;

  //stat is replace by props
  if (n) {
    for (let i = 0; i < n; i++) {
      let aa = cart[i].Rs * cart[i].cart;
      // console.log(aa);
      amount = amount + aa;
    }
  }
  // console.log("amount", amount);
  const [product, setproduct] = useState({
    name: "product",
    price: amount,
    productBy: "gunalan",
  });
  const makepay = async (token) => {
    const body = {
      token,
      product,
    };
    let apps = await axios.put("http://localhost:2000/payment", body);
    if (apps.status == 200) {
      setscussess(true);
    }
  };

  useEffect(async () => {
    console.log(scussess);
    if (scussess == true) {
      console.log("success");
      if (cart.length > 0)
        cart.map(async (it) => {
          let add = {
            id: it._id,
            name: it.name,
            from: it.items,
            to: City,
            street: street,
            kg: it.cart,
            imgs: it.imgs,
            phone: phone,
            cname: name,
          };
          console.log(add);
          await axios.post("http://localhost:2000/deliver", add);
          let data = {
            data: {
              idd: it._id,
            },
          };
          await axios
            .delete("http://localhost:2000/cart", data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        });

      setscussess(false);
      usercontexts.dischas("change");
    }
  }, [scussess]);

  return (
    <div className={Cart.box}>
      <div className={Cart.box1}>
        <div className={Cart.title}> My Cart </div>
        {aa}
        <div className={Cart.total}>
          <div className={Cart.outcircle}>
            <div className={Cart.cardboximg}>
              <img src={bio} alt="" width="50px" />
            </div>{" "}
          </div>{" "}
          <div className={Cart.totalitems}> total items: </div>{" "}
          <div className={Cart.totalit}> {n} </div>{" "}
          <div className={Cart.tona}> total amount: </div>{" "}
          <div className={Cart.totalam}> ₨{amount} </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={Cart.box2}>
        <Tilt className="Title">
          <div className="Tilt-inner">
            <div className={Cart.credit}>
              <img className={Cart.sim} src={Card_sim} alt="" width="70px" />
              <div className={Cart.cartnum}> xxxx xxxx xxxx xxxx </div>{" "}
              <div className={Cart.name}> name </div>{" "}
              <div className={Cart.date}> mm / yyyy </div>{" "}
              <div className={Cart.namecard}> VISA </div>{" "}
            </div>{" "}
          </div>{" "}
        </Tilt>{" "}
        <div className={Cart.tit}> Payment Detial </div>{" "}
        <form action="">
          <label htmlFor="name" className={Cart.fornum}>
            name{" "}
          </label>{" "}
          <input
            type="text"
            className={Cart.inputnum}
            placeholder="Enter your name"
            onChange={(event) => {
              setname(event.target.value);
            }}
          />{" "}
          <label htmlFor="street" className={Cart.forname}>
            {" "}
            street{" "}
          </label>{" "}
          <input
            type="text"
            className={Cart.inputname}
            placeholder="your address street"
            onChange={(event) => {
              setstreet(event.target.value);
            }}
          />{" "}
          <div className={Cart.phonenumber}>
            <label htmlFor="street" className={Cart.phone}>
              {" "}
              phone{" "}
            </label>{" "}
            <input
              className={Cart.inputphone}
              type="text"
              // className={Cart.inputphone}
              placeholder="your number"
              onChange={(event) => {
                setphone(event.target.value);
              }}
            />
          </div>
          <div className={Cart.divdate}>
            <div className={Cart.gap}>
              <label htmlFor="city" className={Cart.fordate}>
                city{" "}
              </label>{" "}
            </div>
            <input
              type="text"
              className={Cart.inputDate}
              placeholder="city"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />{" "}
          </div>
          <div className={Cart.divcvv}>
            <div className={Cart.gap}>
              <label htmlFor=" zip" className={Cart.forcvv}>
                ZIP CODE{" "}
              </label>{" "}
            </div>
            <input
              className={Cart.inputcvv}
              type="number"
              inputMode="numeric"
              // pattern="[0-9]{3}"
              // maxLength="3"
              placeholder=" zip code "
              onChange={(event) => {
                setzip(event.target.value);
              }}
            />{" "}
          </div>{" "}
        </form>{" "}
        <StripeCheckout
          stripeKey="pk_test_51HG6wtGhO9MJjZPRusMbmhlx67KhTSCnlrFfcgq0IerPfCJmzb9zWAGVzfFte5zfYz7oG2a8VzkUu5RxH9INSj8T000PKUHpnU"
          token={makepay}
          name="BUY React"
          amount={product.price * 100}
          shippingAddress
          billingAddress
        >
          <button className={Cart.button}> pay₹ {amount} </button>{" "}
        </StripeCheckout>{" "}
      </div>{" "}
    </div>
  );
}

export default Cartpage;

{
  /* <Cleave
                placeholder="Enter your credit card number"
                options={{ creditCard: true }}
                onChange={onChange}
              />
              <Cleave
                placeholder="yy/mm"
                options={{ date: true }}
                datePattern={["m", "y"]}
              /> */
}
