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

function Contact() {
  const [name, setname] = useState(" ");
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

  const info = name ? <div className="content">{message}</div> : "";
  return (
    <div className="in">
      <div className="info">
        <div className="cent">{name}</div>
        {info}
      </div>

      <div className="form-style">
        <form action="">
          <div className="divvv">
            <div className="cen">command</div>
            <label htmlFor="name"> Name</label>
            <input type="text" id="name" name="name" className="name" />
          </div>
          <div className="divvv">
            <label htmlFor="id">your ID</label>
            <input type="text" id="id" name="name" className="id" />
          </div>
          <div className="divvv">
            <label htmlFor="comments">command</label>
            <textarea
              name="comments"
              id="comments"
              className="textarea"
            ></textarea>
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
      <div className="form-style">
        <div className="icons">
          <FaWhatsapp
            className="icon-items whatapp"
            size={90}
            onClick={() => setname("whatsapp")}
          />
          <FaFacebook
            className="icon-items facebook"
            size={90}
            onClick={() => setname("facebook")}
          />
          <FaInstagram
            className="icon-items instagram"
            size={90}
            onClick={() => setname("instagram")}
          />
          <FaTwitter
            className="icon-items twitter"
            size={90}
            onClick={() => setname("twitter")}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
