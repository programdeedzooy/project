import React from "react";
import { useFormik } from "formik";
import log from "../Home/form.module.css";
import { Consumer } from "../Context";

const initialValues = {
  email: "",
  pass: "",
};
const onSubmit = (values) => {
  values.add = {
    email: values.email,
    pass: values.pass,
  };
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
  return (
    <Consumer>
      {(val) => {
        const { signin } = val;
        const arr = signin.filter((sin) => sin.email == formik.values.email);
        console.log(arr);
        if (arr.length > 0) {
          formik.values.pass == arr[0].pass
            ? console.log("ss")
            : console.log("no");
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
              />
              {formik.touched.email && formik.errors.email ? (
                <div> {formik.errors.email} </div>
              ) : null}
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
              />
              {formik.touched.pass && formik.errors.pass ? (
                <div> {formik.errors.pass} </div>
              ) : null}
            </div>
            <button className={log.button} type="submit">
              {" "}
              submit{" "}
            </button>{" "}
          </form>
        );
      }}
    </Consumer>
  );
}

export default Loginsss;
