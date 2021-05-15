import React, { useContext, useState } from "react";
// import { Usercontext } from "./aaaaa";
import { Usercontext } from "./aaaaa";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function Showit() {
  const usercontexts = useContext(Usercontext);
  const [product, setproduct] = useState({
    name: "React from fb",
    price: 10,
    productBy: "facebook",
  });
  const makepay = async (token) => {
    const body = {
      token,
      product,
    };
    await axios
      .put("http://localhost:2000/payment", body)
      .then((res) => {
        console.log("res", res);
        console.log(("state", res.status));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={makepay}
        name="BUY React"
        amount={product.price * 100}
      >
        {/* <button className={Cart.button} onClick={sub}>
              pay ₹{amount}
            </button> */}
      </StripeCheckout>
    </div>
  );
}

export default Showit;
