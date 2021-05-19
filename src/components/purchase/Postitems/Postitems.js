import React, { useState } from "react";
import Sales from "../../sales/Salesintro/Salesintro.module.css";
import Post from "./Postitems.module.css";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import { FaStar } from "react-icons/fa";
import Tilt from "react-tilt";
import { FaThLarge, FaCartPlus } from "react-icons/fa";
import Reviwe from "./Review";
import { Consumer } from "../../Context";
import Items from "./Items";
import Img from "../../Extra/img";
import Searchbar from "../../Extra/Searchbar";
import { Usercontext } from "../../../aaaaa";
import { useContext } from "react";
import axios from "axios";
import toastr from "toastr";

function Postitems(props) {
  const usercontext = useContext(Usercontext);
  console.log("aa", usercontext.itemitem);

  const [count, setcount] = useState(1);
  const [input, setinput] = useState("");

  var aaa = usercontext.itemitem;
  var itemsarr = usercontext.itemsarrState;

  // const { aaa, itemsarr } = value;

  const id = props.match.params.id;
  const namess = id.slice(1);

  const postss = aaa.filter((aa) => (namess == aa.name) & (aa.kg > 0));

  var search = postss.filter((a) => {
    // console.log("qwer", a);
    const aa = a.items.includes(input);
    return aa;
  });
  var iii = search.length == 0 ? postss : search;
  const [ite, setite] = useState(iii[0]._id);
  console.log("iii", iii);
  console.log("iddd", iii[0]._id);
  const x = iii.length;
  const arritem = [];
  for (let i = 0; i < x; i++) {
    let arra = iii.slice(i * 4, (i + 1) * 4);
    arritem.push(
      <div className={Sales.box}>
        {" "}
        {arra.map((arr) => (
          <Items arr={arr} set={setite} />
        ))}{" "}
      </div>
    );
  }
  let a = ite;
  const itempos = aaa.filter((aa) => a == aa._id);
  console.log("itempos", itempos);
  const { _id, name, com, Rs, imgs, review, kg, items } = itempos[0];
  console.log("itemsaaa", itempos[0]);
  const addcount = () => {
    if (count > 0 && kg > count) {
      setcount(count + 1);
    }
  };
  const subcount = () => {
    if (count > 1 && kg >= count) {
      setcount(count - 1);
    }
  };
  const submitcart = async () => {
    let add;
    add = {
      id: itempos[0].id,
      itemid: itempos[0]._id,
      fruitid: itempos[0].fruitid,
      name,
      kg,
      Rs,
      items,
      imgs,
      review,
      idcart: usercontext.iddcart,
      cart: count,
    };
    console.log("add", add);
    var cha = kg - count;
    let update = {
      _id: _id,
      kg: cha,
    };
    console.log(update);

    await axios.put("http://localhost:2000/Peritems", update);

    await axios
      .post("http://localhost:2000/cart", add)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    usercontext.dischas("change");
    // toastr.warning("SUCCESS");

    // newobject("add_cart", add);
  };

  console.log("input", input);

  console.log("serach", search);
  return (
    <div>
      <Searchbar set={setinput} placehold={true} />{" "}
      <div className={Sales.apps}>
        <div className={Post.back}>
          <div className={Post.title}> Purchase </div>{" "}
        </div>{" "}
        <div className={Post.itemDetials}>
          <div className={Post.headbox}>
            <div className={Post.head}> {name} </div>{" "}
            <div className={Post.itemabout}> {com} </div>{" "}
            <div className={Post.itemimgbox}>
              <div className={Post.Kgfont}> kg have: {kg} </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className={Post.bubble}>
            <div className={Post.items}>
              <Img item={imgs} /> <div className={Post.rup}> ₨{Rs} </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className={Post.headbox1}>
            <div className={Post.Rating}>
              Review: <Reviwe review={review} />{" "}
            </div>{" "}
            <div className={Post.Rating}>
              place:
              <div className={Post.itemimgbox}>
                <div className={Post.itemscss}> {items} </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className={Post.Kg}>
              kg:{" "}
              <button className={Post.but} onClick={addcount}>
                +
              </button>{" "}
              {count}{" "}
              <button className={Post.but} onClick={subcount}>
                -
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <button className={Post.button}>
            {" "}
            <span onClick={submitcart}> Add to cart </span>{" "}
          </button>{" "}
        </div>{" "}
        <div className={Post.box}>
          {" "}
          {""} {arritem} {""}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Postitems;
