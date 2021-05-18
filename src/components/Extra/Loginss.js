import React, { useState } from "react";
import { useFormik } from "formik";
import log from "../Home/form.module.css";
import { Consumer } from "../Context";
import axios from "axios";
import { Usercontext } from "../../aaaaa";
import { useContext } from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";

var login = false;
const initialValues = {
  name: "",
  birthday: "",
  phone: "",
  email: "",
  pass: "",
  address: "",
  add: "",
  newobject: "",
};
const onSubmit = async (values) => {
  values.add = {
    name: values.name,
    birthday: values.birthday,
    phone: values.phone,
    email: values.email,
    pass: values.pass,
    address: values.address,
  };
  // axios.defaults.withCredentials = true;

  await axios
    .post("http://127.0.0.1:2000/sign", values.add, { withCredentials: true })
    .then((res) => {
      console.log("res", res);
      // const cookies = new Cookies();
      // cookies.set("token", res.data.token, { htmlOnly: true });
      // console.log(cookies.get("token")); // Pacmanc.

      // localStorage.setItem("token", res.data.token);
      // login = true;
    })
    .catch((err) => {
      console.log("err", err);
    });
  // values.newobject("add_Loginss", values.add);
};

const validate = (values) => {
  let error = {};
  if (!values.name) {
    error.name = "Required";
  }
  if (!values.birthday) {
    error.birthday = "Required";
  }
  if (!values.phone) {
    error.phone = "required";
  }
  if (!values.email) {
    error.email = "required";
  }
  if (!values.pass) {
    error.pass = "required";
  }
  if (!values.address) {
    error.address = "required";
  }
  return error;
};

function Loginss(props) {
  const usecontext = useContext(Usercontext);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  if (login == true) {
    return <Redirect to={"/sales"} />;
  }

  //  sin=usecontext.
  // const { newobject, signin } = val;
  // formik.values.newobject = newobject;
  // signin.map((sin) => {
  //   if (formik.values.email == sin.email) {
  //     formik.errors.email = "email is alrady is taken";
  //   }
  // });

  return (
    <form className={log.tit} onSubmit={formik.handleSubmit}>
      <div className={log.div}>
        <div>
          <label forhtml="name" className={log.label}>
            Name:
          </label>{" "}
        </div>{" "}
        <input
          type=" "
          name="name"
          placeholder="your name"
          className={log.input}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.name && formik.errors.name ? (
          <div> {formik.errors.name} </div>
        ) : null}{" "}
      </div>{" "}
      <div className={log.div}>
        <div>
          <label forhtml="birthday" className={log.label}>
            Birthday:
          </label>{" "}
        </div>
        <input
          type="date"
          id="birthday"
          name="birthday"
          className={log.input}
          onChange={formik.handleChange}
          value={formik.values.birthday}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.birthday && formik.errors.birthday ? (
          <div> {formik.errors.birthday} </div>
        ) : null}{" "}
      </div>{" "}
      <div className={log.div}>
        <div>
          <label forhtml="phone" className={log.label}>
            Phone number:
          </label>{" "}
        </div>{" "}
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="0123456789"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
          className={log.input}
        />{" "}
        {formik.touched.phone && formik.errors.phone ? (
          <div> {formik.errors.phone} </div>
        ) : null}{" "}
      </div>{" "}
      <div className={log.div}>
        <div>
          <label forhtml="email" className={log.label}>
            Email:
          </label>{" "}
        </div>{" "}
        <input
          type="email"
          name="email"
          placeholder="your mail"
          className={log.input}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <div> {formik.errors.email} </div>
        ) : null}{" "}
      </div>{" "}
      <div className={log.div}>
        <div>
          <label forhtml="pass" className={log.label}>
            Password:
          </label>{" "}
        </div>{" "}
        <input
          type="password"
          name="pass"
          placeholder="set password"
          className={log.input}
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.pass && formik.errors.pass ? (
          <div> {formik.errors.pass} </div>
        ) : null}{" "}
      </div>{" "}
      <div className={log.div}>
        <div>
          <label forhtml="address" className={log.label}>
            Address:
          </label>{" "}
        </div>{" "}
        <textarea
          type="text"
          name="address"
          className={log.intext}
          rows="3"
          cols="10"
          placeholder="your address"
          onChange={formik.handleChange}
          value={formik.values.address}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.address && formik.errors.address ? (
          <div> {formik.errors.address} </div>
        ) : null}{" "}
      </div>{" "}
      <button className={log.button} type="submit">
        {" "}
        submit{" "}
      </button>{" "}
    </form>
  );
}

export default Loginss;
