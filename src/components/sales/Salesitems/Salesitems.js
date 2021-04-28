import React, { useState } from "react";
import Sales from "../Salesintro/Salesintro.module.css";
import Post from "../../purchase/Postitems/Postitems.module.css";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import { FaStar } from "react-icons/fa";
import Sal from "./Salesitems.module.css";
import { useFormik } from "formik";

function Salesitems() {
  const initialValues = {
    id: "",
    title: "",
    kg: "",
    photos: "",
    rate: "",
    discription: "",
  };

  const onSubmit = (values) => {
    console.log("values", values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const photos = async (e) => {
    formik.values.photos = e.target.value;
  };

  return (
    <div>
      {" "}
      {/* <Searchbar/> */}{" "}
      <div className={Sales.apps}>
        <div className={Post.back}> </div>{" "}
        <form onSubmit={formik.handleSubmit}>
          <div className={Post.itemDetials}>
            {/* <form onSubmit={formik.handleSubmit}> */}
            <div className={Post.headbox}>
              <div className={Sal.forms}>
                <label htmlFor="id"> your id </label>{" "}
                <input
                  type="text"
                  name="id"
                  onChange={formik.handleChange}
                  value={formik.values.id}
                />
              </div>{" "}
              <div className={Sal.forms}>
                <label htmlFor="title"> item name </label>{" "}
                <input
                  type="text"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </div>{" "}
              <div className={Sal.forms}>
                <label htmlFor="kg"> kg you have </label>{" "}
                <input
                  type="text"
                  name="kg"
                  onChange={formik.handleChange}
                  value={formik.values.kg}
                />
              </div>{" "}
            </div>{" "}
            <div className={Post.bubble}>
              <div className={Post.items}> </div>{" "}
            </div>{" "}
            <div className={Post.headbox1}>
              <div className={Sal.forms1}>
                <label htmlFor="photos"> photos </label>{" "}
                <input type="file" name="photos" onChange={photos} multiple />
              </div>
              <div className={Sal.forms1}>
                <label htmlFor="rate"> rate for 1 kg </label>{" "}
                <input
                  type="text"
                  name="rate"
                  onChange={formik.handleChange}
                  value={formik.values.rate}
                />
              </div>{" "}
              <div className={Sal.forms1}>
                <label htmlFor="discription"> discription </label>{" "}
                <textarea
                  name="discription"
                  id="discription"
                  onChange={formik.handleChange}
                  value={formik.values.discription}
                >
                  {" "}
                </textarea>{" "}
              </div>{" "}
            </div>{" "}
            <div className={Post.button}>
              {" "}
              <button type="submit" className={Sal.center1}>
                {" "}
                submit
              </button>
            </div>{" "}
            {/* </form> */}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default Salesitems;
