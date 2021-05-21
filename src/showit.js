import React, { useContext, useState } from "react";
import { Usercontext } from "./aaaaa";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const notify = () =>
    toast.dark("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // notify();
  return (
    <div>
      <div>
        <button onClick={notify}> Notify! </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Showit;
