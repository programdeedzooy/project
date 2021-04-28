import React, { useState } from "react";
import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./contact.css";
import { useFormik } from "formik";
import { Consumer } from "../Context";

function Contact() {
  const [name, setname] = useState(" ");
  const initialValues = {
    name: "",
    id: "",
    comments: "",
    add: "",
    newobject: "",
  };

  const onSubmit = (values) => {
    values.add = {
      id: values.id,
      name: values.name,
      comments: values.comments,
    };
    values.newobject("add_comments", values.add);
  };

  const validate = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "Required";
    }
    if (!values.id) {
      error.id = "Required";
    }
    if (!values.comments) {
      error.comments = "required";
    }
    return error;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <Consumer>
      {(val) => {
        // console.log("form values", formik.errors);

        const { newobject } = val;
        formik.values.newobject = newobject;

        let message = "";
        if (name == "whatsapp") {
          message = "9360556694";
        } else if (name == "instagram") {
          message = "gunalan_dee_dzooy";
        } else if (name == "facebook") {
          message = "gunalandeedzooy";
        } else if (name == "twitter") {
          message = "gunalan";
        } else {
          message = "click icon to see  detials";
        }

        const info = name ? <div className="content"> {message} </div> : "";

        return (
          <div className="in">
            <div className="info">
              <div className="cent"> {name} </div> {info}{" "}
            </div>{" "}
            <div className="form-style">
              <form onSubmit={formik.handleSubmit}>
                <div className="divvv">
                  <div className="cen"> command </div>{" "}
                  <label htmlFor="name"> Name </label>{" "}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />{" "}
                  {formik.touched.name && formik.errors.name ? (
                    <div> {formik.errors.name} </div>
                  ) : null}{" "}
                </div>{" "}
                <div className="divvv">
                  <label htmlFor="id"> your ID </label>{" "}
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="id"
                    onChange={formik.handleChange}
                    value={formik.values.id}
                    onBlur={formik.handleBlur}
                  />{" "}
                  {formik.touched.id && formik.errors.id ? (
                    <div> {formik.errors.id} </div>
                  ) : null}{" "}
                </div>{" "}
                <div className="divvv">
                  <label htmlFor="comments"> command </label>{" "}
                  <textarea
                    name="comments"
                    id="comments"
                    className="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.comments}
                    onBlur={formik.handleBlur}
                  ></textarea>{" "}
                  {formik.touched.comments && formik.errors.comments ? (
                    <div> {formik.errors.comments} </div>
                  ) : null}{" "}
                </div>{" "}
                <button type="submit" disabled={!formik.isValid}>
                  {" "}
                  submit{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
            <div className="form-style">
              <div className="icons">
                <FaWhatsapp
                  className="icon-items whatapp"
                  size={90}
                  onClick={() => setname("whatsapp")}
                />{" "}
                <FaFacebook
                  className="icon-items facebook"
                  size={90}
                  onClick={() => setname("facebook")}
                />{" "}
                <FaInstagram
                  className="icon-items instagram"
                  size={90}
                  onClick={() => setname("instagram")}
                />{" "}
                <FaTwitter
                  className="icon-items twitter"
                  size={90}
                  onClick={() => setname("twitter")}
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>
        );
      }}
    </Consumer>
  );
}

export default Contact;
