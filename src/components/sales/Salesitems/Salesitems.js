import React from "react";
import Sales from "../Salesintro/Salesintro.module.css";
import Post from "../../purchase/Postitems/Postitems.module.css";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import { FaStar } from "react-icons/fa";
import Sal from "./Salesitems.module.css";
function Salesitems() {
  return (
    <div>
      {/* <Searchbar/> */}
      <div className={Sales.apps}>
        <div className={Post.back}></div>
        <form action="post">
          <div className={Post.itemDetials}>
            <div className={Post.headbox}>
              {/* <div className={Sal.}></div> */}
              <div className={Sal.forms}>
                <label htmlFor="id">your id</label>
                <input type="text" name="id" />
              </div>
              <div className={Sal.forms}>
                <label htmlFor="title">item name</label>
                <input type="text" name="title" />
              </div>
              <div className={Sal.forms}>
                <label htmlFor="kg">kg you have</label>
                <input type="text" name="kg" />
              </div>
            </div>
            <div className={Post.bubble}>
              <div className={Post.items}></div>
            </div>
            <div className={Post.headbox1}>
              <div className={Sal.forms1}>
                <label htmlFor="photos">photos</label>
                <input type="file" name="photos" />
              </div>

              <div className={Sal.forms1}>
                <label htmlFor="rate">rate for 1kg</label>
                <input type="text" name="rate" multiple />
              </div>
              <div className={Sal.forms1}>
                <label htmlFor="discription">discription</label>
                <textarea name="discription" id="discription"></textarea>
              </div>
            </div>
            <div className={Post.button}>
              {" "}
              <span className={Post.center1}>submit</span>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Salesitems;
