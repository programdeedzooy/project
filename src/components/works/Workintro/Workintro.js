import React, { useState, useContext } from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Searchbar from "../../Extra/Searchbar";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import Tilt from "react-tilt";
import Work from "./Workintro.module.css";
import Items from "./Items";
import { Consumer } from "../../Context";
import { Usercontext } from "../../../aaaaa";
import {
  FaThLarge,
  FaPlusCircle,
  FaLongArrowAltRight,
  FaFilter,
} from "react-icons/fa";
import { Redirect } from "react-router-dom";

function Workintro() {
  const usecontext = useContext(Usercontext);
  const [input, setinput] = useState("");

  // const { aa } = value;

  const aa = usecontext.del;
  console.log("aa", aa);

  try {
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
  } catch {
    return <Redirect to="/" />;
  }
  var arritem = [];
  for (let i = 0; i < x; i++) {
    let arra = iii.slice(i * 4, (i + 1) * 4);
    arritem.push(
      <div className={Sales.box}>
        {" "}
        {arra.map((ar) => (
          <Items arr={ar} key={ar.id} />
        ))}{" "}
      </div>
    );
  }

  var deliversss = aa.length > 0 ? arritem : null;
  console.log("input", input);

  console.log("serach", search);
  return (
    <div>
      <Searchbar set={setinput} placehold={true} />{" "}
      <div className={Sales.apps}>
        {" "}
        {/* <button className={Work.but}>
                            <div className={Work.fil}>
                              <FaFilter color="black" />
                              filter
                            </div>
                          </button> */}{" "}
        <div className={Sales.back}>
          <div className={Work.title}> Works </div>{" "}
        </div>{" "}
        {deliversss}{" "}
      </div>{" "}
    </div>
  );
}

export default Workintro;
