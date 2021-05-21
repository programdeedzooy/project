import React from "react";
import style from "./Shome.module.css";
import "./ani.css";
import Shopani from "./Shopani";
import { Link } from "react-router-dom";

function Shome() {
  return (
    <div className={(`${style.row}`, `${style.con}`)}>
      <div className={style.column}>
        <h3 className={style.sales}> Sales </h3>{" "}
        <p className={style.salesp}>
          you can post a product(🍏, 🍅, 🍐, 🌵, 🌿, ...) to sell here{" "}
        </p>{" "}
        <p className={style.salesp}> go down👇 and post your products </p>
        <div className={style.login}>
          <Link to="Salesintro">
            {" "}
            <span className={style.lets}> Let 's Go 🔜</span>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
      <Shopani />
    </div>
  );
}
export default Shome;
