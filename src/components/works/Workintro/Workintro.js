import React, { useState } from "react";
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
  const [input, setinput] = useState("");
  return (
    <Consumer>
      {(value) => {
        const { aa } = value;
        var search = aa.filter((a) => {
          const aq = a.from.includes(input);
          return aq;
        });
        var iii = search.length == 0 ? aa : search;
        var a = iii.length;
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
          let arra = iii.slice(i * 4, (i + 1) * 4);
          arritem.push(
            <div className={Sales.box}>
              {arra.map((ar) => (
                <Items arr={ar} key={ar.id} />
              ))}
            </div>
          );
        }

        console.log("input", input);

        console.log("serach", search);
        return (
          <div>
            <Searchbar set={setinput} placehold={true} />
            <div className={Sales.apps}>
              {/* <button className={Work.but}>
                <div className={Work.fil}>
                  <FaFilter color="black" />
                  filter
                </div>
              </button> */}
              <div className={Sales.back}>
                <div className={Work.title}>Works</div>
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
