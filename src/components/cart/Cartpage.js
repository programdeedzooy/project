import React, { useState } from "react";
import Cart from "./Cart.module.css";
import Cleave from "cleave.js/react";
import Card_sim from "../../assets/credit_card_chip.png";
import Tilt from "react-tilt";
import { event } from "jquery";
import { Consumer } from "../../components/Context";
import Items from "./items";
import bio from "../../assets/bio.svg";
function Cartpage() {
  const [cardnum, setcardnum] = useState(false);
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [cvv, setcvv] = useState("");
  return (
    <Consumer>
      {(val) => {
        const { cart } = val;
        var n = cart.length;
        var amount = 0;
        console.log("length", n);

        var aitm = cart.map((it) => <Items arr={it} />);
        var aa = cart.length > 0 ? aitm : null;
        const sub = () => {
          console.log(cardnum, name, date, cvv);
        };
        //stat is replace by props
        if (n) {
          for (let i = 0; i < n; i++) {
            let aa = cart[i].Rs * cart[i].cart;
            console.log(aa);
            amount = amount + aa;
          }
        }
        console.log("amount", amount);
        const num = cardnum ? cardnum : "xxxx xxxx xxxx xxxx";
        const vname = name ? name : "name";
        const vdate = date ? date : "mm/yyyy";
        return (
          <div className={Cart.box}>
            <div className={Cart.box1}>
              <div className={Cart.title}>My Cart</div>

              {aa}

              <div className={Cart.total}>
                <div className={Cart.outcircle}>
                  <div className={Cart.cardboximg}>
                    <img src={bio} alt="" width="50px" />
                  </div>
                </div>
                <div className={Cart.totalitems}>total items :</div>
                <div className={Cart.totalit}>{n}</div>
                <div className={Cart.tona}> total amount : </div>
                <div className={Cart.totalam}>₨ {amount}</div>
              </div>
            </div>
            <div className={Cart.box2}>
              <Tilt className="Title">
                <div className="Tilt-inner">
                  <div className={Cart.credit}>
                    <img
                      className={Cart.sim}
                      src={Card_sim}
                      alt=""
                      width="70px"
                    />
                    <div className={Cart.cartnum}>{num}</div>
                    <div className={Cart.name}>{vname}</div>
                    <div className={Cart.date}>{vdate}</div>{" "}
                    <div className={Cart.namecard}>VISA</div>
                  </div>
                </div>
              </Tilt>
              <div className={Cart.tit}>Payment Detial</div>
              <form action="">
                <label htmlFor="num" className={Cart.fornum}>
                  card number
                </label>
                <Cleave
                  placeholder="Enter your credit card number"
                  options={{ creditCard: true }}
                  onChange={(event) => {
                    setcardnum(event.target.value);
                  }}
                  className={Cart.inputnum}
                />
                <label htmlFor="name" className={Cart.forname}>
                  {" "}
                  Name on card
                </label>
                <input
                  type="text"
                  className={Cart.inputname}
                  placeholder="name on card"
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
                />
                <div className={Cart.divdate}>
                  <div className={Cart.gap}>
                    <label htmlFor="date" className={Cart.fordate}>
                      Date
                    </label>
                  </div>

                  <input
                    type="month"
                    className={Cart.inputDate}
                    onChange={(event) => {
                      setdate(event.target.value);
                    }}
                  />
                </div>

                <div className={Cart.divcvv}>
                  <div className={Cart.gap}>
                    <label htmlFor=" cvv" className={Cart.forcvv}>
                      cvv
                    </label>
                  </div>

                  <input
                    className={Cart.inputcvv}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{3}"
                    maxLength="3"
                    placeholder="Enter cvv number "
                    onChange={(event) => {
                      setcvv(event.target.value);
                    }}
                  />
                </div>

                <button className={Cart.button} onClick={sub}>
                  pay ₹{amount}
                </button>
              </form>
            </div>
          </div>
        );
      }}
    </Consumer>
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
