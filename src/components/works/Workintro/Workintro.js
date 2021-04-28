import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import Tilt from "react-tilt";
import Work from "./Workintro.module.css";
import Items from "./Items";
import { Consumer } from "../../Context";
import {
  FaThLarge,
  FaPlusCircle,
  FaLongArrowAltRight,
  FaFilter,
} from "react-icons/fa";

function Workintro() {
  return (
    <Consumer>
      {(value) => {
        const { aa } = value;
        var a = aa.length;
        var x = a / 4;
        if (typeof x === parseInt(x)) {
          // console.log(x);
        } else {
          x = parseInt(x);
          x++;
          // console.log(x);
        }
        const arritem = [];
        for (let i = 0; i < x; i++) {
          let arra = aa.slice(i * 4, (i + 1) * 4);
          arritem.push(
            <div className={Sales.box}>
              {arra.map((ar) => (
                <Items arr={ar} key={ar.id} />
              ))}
            </div>
          );
        }
        return (
          <div>
            <Searchbar />
            <div className={Sales.apps}>
              <div className={Sales.back}>
                <div className={Work.title}>Works</div>
                <div className={Work.filter}>
                  <FaFilter color="black" />
                  filter
                </div>
              </div>
              {arritem}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Workintro;
