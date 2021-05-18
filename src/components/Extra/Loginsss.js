import React, { useContext } from "react";
import { useFormik } from "formik";
import log from "../Home/form.module.css";
import { Consumer } from "../Context";
import { Usercontext } from "../../aaaaa";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
var login = false;
const initialValues = {
  email: "",
  pass: "",
};
const onSubmit = async (values) => {
  values.add = {
    email: values.email,
    pass: values.pass,
  };

  await axios
    .post("http://127.0.0.1:2000/log", values.add, { withCredentials: true })
    .then((res) => {
      console.log("res", res);
      const cookies = new Cookies();
      cookies.set("jwt", res.data.token, { htmlOnly: true });
      if (res.data.login) {
        login = true;
      }
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log("err", err);
    });

  await axios
    .get("http://127.0.0.1:2000/log")
    .then((res) => {
      console.log("res", res);
      if (res.data.err) {
        login = false;
      } else {
        login = true;
      }
    })
    .catch((err) => {
      console.log("err", err.data);
    });
};

const validate = (values) => {
  let error = {};
  if (!values.email) {
    error.email = "required";
  }
  if (!values.pass) {
    error.pass = "required";
  }

  return error;
};

function Loginsss() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  if (login == true) {
    return <Redirect to={"/sales"} />;
  }

  return (
    <form className={log.tit} onSubmit={formik.handleSubmit}>
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
          placeholder=" password"
          className={log.input}
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.pass && formik.errors.pass ? (
          <div> {formik.errors.pass} </div>
        ) : null}{" "}
      </div>{" "}
      <button className={log.button} type="submit">
        {" "}
        submit{" "}
      </button>{" "}
    </form>
  );
}

export default Loginsss;
