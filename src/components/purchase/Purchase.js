import React from "react";
import style from "../sales/Shome.module.css";
import "../sales/ani.css";
import Shopani from "../sales/Shopani";
import { Link } from "react-router-dom";
function Purchase() {
  return (
    <div className={(`${style.row}`, `${style.con}`)}>
      <div className={style.column}>
        <h3 className={style.sales}> Purchase </h3>
        <p className={style.salesp}>
          you can purchase (ð,ð,ð,ðµ,ð¿,...) a product ...
        </p>
        <p className={style.salesp}>go downð and purchase your products</p>

        <div className={style.login}>
          <Link to="/Purchaseintro">
            {" "}
            <span className={style.lets}>Let's Go ð</span>
          </Link>
        </div>
      </div>
      <Shopani />
    </div>
  );
}
export default Purchase;
