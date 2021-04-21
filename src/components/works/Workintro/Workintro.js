import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import Tilt from "react-tilt";
import Work from "./Workintro.module.css";
import Items from "./Items";
import {
  FaThLarge,
  FaPlusCircle,
  FaLongArrowAltRight,
  FaFilter,
} from "react-icons/fa";

function Workintro() {
  const aaa = [
    {
      id: "q234ewq",
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 1,
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 2,
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 3,
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 4,
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 5,
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 6,
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 7,
      from: "covi",
      to: "palani",
      kg: 2,
    },
    {
      id: 8,
      from: "covi",
      to: "palani",
      kg: 2,
    },
  ];
  var a = aaa.length;
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
    let arra = aaa.slice(i * 4, (i + 1) * 4);
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
}

export default Workintro;
