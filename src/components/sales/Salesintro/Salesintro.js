import React, { useContext, useState } from "react";
import Sales from "./Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import Items from "./Items";
import { Consumer } from "../../Context";
import Post from "../../purchase/Postitems/Postitems.module.css";
import { Usercontext } from "../../../aaaaa";
import { Redirect } from "react-router-dom";

function Salesintro() {
  const usercontexts = useContext(Usercontext);
  console.log(usercontexts.itemsarrState);
  var itemsarr = usercontexts.itemsarrState;
  const [input, setinput] = useState("");

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
  } catch {
    return <Redirect to="/" />;
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
}

export default Salesintro;
