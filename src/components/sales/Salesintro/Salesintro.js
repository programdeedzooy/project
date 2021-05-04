import React, { useState } from "react";
import Sales from "./Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import Items from "./Items";
import { Consumer } from "../../Context";
import Post from "../../purchase/Postitems/Postitems.module.css";

function Salesintro() {
  const [input, setinput] = useState("");
  return (
    <Consumer>
      {(value) => {
        const { itemsarr } = value;
        var search = itemsarr.filter((a) => {
          const aa = a.name.includes(input);
          return aa;
        });
        var iii = search.length == 0 ? itemsarr : search;

        var a = iii.length;
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
          let arra = iii.slice(i * 4, (i + 1) * 4);
          arritem.push(
            <div className={Sales.box}>
              {" "}
              {arra.map((arr) => (
                <Items arr={arr} key={arr.id} />
              ))}{" "}
            </div>
          );
        }
        console.log(<Items />);
        return (
          <div>
            <Searchbar set={setinput} placehold={false} />{" "}
            <div className={Sales.apps}>
              <div className={Sales.back}>
                <div className={Post.title}> Sales </div>{" "}
              </div>{" "}
              {arritem}{" "}
            </div>{" "}
          </div>
        );
      }}
    </Consumer>
  );
}

export default Salesintro;
