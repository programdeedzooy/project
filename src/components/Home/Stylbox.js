import React, { useState } from "react";
import log from "./form.module.css";
import { useFormik } from "formik";
import Loginss from "../Extra/Loginss";
import Loginsss from "../Extra/Loginsss";
function Stylebox() {
  const [showModal, setshowModal] = useState(false);
  const [logins, setlogins] = useState(true);

  const handleClick = () => {
    setshowModal(!showModal);
    console.log(showModal);
  };

  const initialValues = {
    name: "",
    birthday: "",
    phone: "",
    email: "",
    pass: "",
    address: "",
  };
  const onSubmit = (values) => {
    values.add = {
      name: values.name,
      birthday: values.birthday,
      phone: values.phone,
      email: values.email,
      pass: values.pass,
      address: values.address,
    };

    console.log("formik value", values);
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const ma = logins ? (
    <div className="logs">
      <div className={log.title}> sign in </div> <Loginss />
      <button
        className={log.loginbut}
        onClick={() => {
          setlogins(!logins);
        }}
      >
        login{" "}
      </button>
      <button className={log.close} onClick={handleClick}>
        close{" "}
      </button>
    </div>
  ) : (
    <div className="logs">
      <div className={log.title}> log in </div> <Loginsss />
      <button
        className={log.loginbutt}
        onClick={() => {
          setlogins(!logins);
        }}
      >
        sign in
      </button>
      <button className={log.close} onClick={handleClick}>
        close{" "}
      </button>
    </div>
  );

  const modal = showModal ? ma : null;

  return (
    <div className="back">
      <div className="div">
        <div className="login tog">
          <button onClick={handleClick}> sign in /login</button>
        </div>{" "}
      </div>{" "}
      {modal} <div className="div1"> </div> <div className="div2"> </div>{" "}
    </div>
  );
}

export default Stylebox;
