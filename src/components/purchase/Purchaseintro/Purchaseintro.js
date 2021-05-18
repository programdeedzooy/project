import React, { useState } from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import Items from "./Items";
import Post from "../Postitems/Postitems.module.css";
import { Consumer } from "../../Context";
import { Usercontext } from "../../../aaaaa";
import { useContext } from "react";
import { Redirect } from "react-router-dom";

function Purchaseintro() {
  const usecontext = useContext(Usercontext);
  const [reload, setreload] = useState(true);
  const [input, setinput] = useState("");

  // var { itemsarr } = value;
  var itemsarr = usecontext.itemsarrState;
  try {
    var search = itemsarr.filter((a) => {
      const aa = a.name.includes(input);
      return aa;
    });
    var iii = search.length == 0 ? itemsarr : search;

    var a = iii.length;
    var x = a / 4;
    if (typeof x === parseInt(x)) {
      // console.log(x);
    } else {
      x = parseInt(x);
      x++;
      // console.log(x);
    }

    // window.location.reload();
  } catch {
    // window.location.reload();
    return <Redirect to="/" />;
    // console.log("catch");
  }

  const arritem = [];
  for (let i = 0; i < x; i++) {
    let arra = iii.slice(i * 4, (i + 1) * 4);
    arritem.push(
      <div className={Sales.box}>
        {" "}
        {arra.map((arr) => (
          <Items arr={arr} />
        ))}{" "}
      </div>
    );
  }
  console.log("input", input);

  console.log("serach", search);

  // console.log(<Items />);
  // console.log(arritem);
  return (
    <div>
      <Searchbar set={setinput} placehold={false} />{" "}
      <div className={Sales.apps}>
        <div className={Sales.back}>
          <div className={Post.title}> Purchase </div>{" "}
        </div>{" "}
        {arritem}{" "}
      </div>{" "}
    </div>
  );
}

export default Purchaseintro;
