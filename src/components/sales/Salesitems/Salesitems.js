import React, { useContext, useState } from "react";
import Sales from "../Salesintro/Salesintro.module.css";
import Post from "../../purchase/Postitems/Postitems.module.css";
import carrot from "../../../assets/carrot-svgrepo-com.svg";
import { FaStar } from "react-icons/fa";
import Sal from "./Salesitems.module.css";
import { useFormik } from "formik";
import { Usercontext } from "../../../aaaaa";
import axios from "axios";
import uuid from "react-uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Redirect } from "react-router-dom";

function Salesitems(props) {
  const context = useContext(Usercontext);
  const item = context.itemsarrState;
  console.log("items", item);
  const idd = props.match.params.id;
  const id = idd.slice(1);
  const filters = item.filter((it) => it.id == id);
  console.log("filter", filters);
  const initialValues = {
    id: uuid(),
    fruitid: filters[0].fruitid,
    name: filters[0].name,
    kg: "",
    imgs: filters[0].imgs,
    review: 3,
    items: "",
    Rs: "",
    com: "",
  };
  const refress = () => {
    formik.values.id = uuid();
    formik.values.fruitid = filters[0].fruitid;
    formik.values.name = filters[0].name;
    formik.values.kg = "";
    formik.values.imgs = filters[0].imgs;
    formik.values.review = 3;
    formik.values.items = "";
    formik.values.Rs = "";
    formik.values.com = "";
  };
  const notify = () =>
    toast.success("🏄 success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  var app;
  const onSubmit = async (values) => {
    app = await axios.post("http://localhost:2000/Peritems", values);

    console.log("submit", app);
    notify();
    refress();
    console.log("values", values);

    context.dischas("change");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div>
      {" "}
      <div className={Sales.apps}>
        <div className={Post.back}>
          <div className={Post.title}> Sales </div>{" "}
        </div>{" "}
        <form onSubmit={formik.handleSubmit}>
          <div className={Post.itemDetials}>
            {" "}
            {/* <form onSubmit={formik.handleSubmit}> */}{" "}
            <div className={Post.headbox}>
              <div className={Sal.forms}>
                <label htmlFor="id"> your id </label>{" "}
                <input
                  type="text"
                  name="id"
                  onChange={formik.handleChange}
                  value={formik.values.id}
                />{" "}
              </div>{" "}
              <div className={Sal.forms}>
                <label htmlFor="title"> item name </label>{" "}
                <input
                  type="text"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />{" "}
              </div>{" "}
              <div className={Sal.forms}>
                <label htmlFor="kg"> kg you have </label>{" "}
                <input
                  type="text"
                  name="kg"
                  onChange={formik.handleChange}
                  value={formik.values.kg}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className={Post.bubble}>
              <div className={Post.items}> </div>{" "}
            </div>{" "}
            <div className={Post.headbox1}>
              <div className={Sal.forms1}>
                <label htmlFor="items"> place </label>{" "}
                <input
                  type="text"
                  name="items"
                  onChange={formik.handleChange}
                  value={formik.values.items}
                />{" "}
              </div>{" "}
              <div className={Sal.forms1}>
                <label htmlFor="Rs"> rate for 1 kg </label>{" "}
                <input
                  type="text"
                  name="Rs"
                  onChange={formik.handleChange}
                  value={formik.values.Rs}
                />{" "}
              </div>{" "}
              <div className={Sal.forms1}>
                <label htmlFor="com"> discription </label>{" "}
                <textarea
                  name="com"
                  id="discription"
                  onChange={formik.handleChange}
                  value={formik.values.com}
                >
                  {" "}
                </textarea>{" "}
              </div>{" "}
            </div>{" "}
            <button type="submit" className={Sal.center1}>
              {" "}
              submit{" "}
            </button>{" "}
            {/* </form> */}{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
      <ToastContainer />
    </div>
  );
}

export default Salesitems;
