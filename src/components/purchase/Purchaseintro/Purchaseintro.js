import React from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import Items from "./Items";
import Post from "../Postitems/Postitems.module.css";
function Purchaseintro() {
  const aaa = [
    {
      id: 0,
      name: "carrot",
      Rs: 30,
      img: "carrot",
    },
    {
      id: 1,
      name: "apple",
      Rs: 40,
      img: "carrot",
    },
    {
      id: 2,
      name: "mango",
      Rs: 50,
      img: "carrot",
    },
    {
      id: 3,
      name: "banana",
      Rs: 10,
      img: "carrot",
    },
    {
      id: 4,
      name: "carrot",
      Rs: 30,
      img: "carrot",
    },
    {
      id: 5,
      name: "carrot",
      Rs: 30,
      img: "carrot",
    },
    {
      id: 6,
      name: "carrot",
      Rs: 30,
      img: "carrot",
    },
    {
      id: 7,
      name: "carrot",
      Rs: 30,
      img: "carrot",
    },
    {
      id: 8,
      name: "carrot",
      Rs: 30,
      img: "carrot",
    },
  ];
  var a = aaa.length;
  var x = a / 4;
  if (typeof x === parseInt(x)) {
    console.log(x);
  } else {
    x = parseInt(x);
    x++;
    console.log(x);
  }
  const arritem = [];
  for (let i = 0; i < x; i++) {
    let arra = aaa.slice(i * 4, (i + 1) * 4);
    arritem.push(
      <div className={Sales.box}>
        {" "}
        {arra.map((arr) => (
          <Items arr={arr} />
        ))}{" "}
      </div>
    );
  }
  console.log(<Items />);
  console.log(arritem);
  return (
    <div>
      <Searchbar />
      <div className={Sales.apps}>
        <div className={Sales.back}>
          <div className={Post.title}>Purchase</div>
        </div>{" "}
        {arritem}{" "}
      </div>{" "}
    </div>
  );
}

export default Purchaseintro;
