import React, { useContext, useEffect, useState } from "react";
import log from "./form.module.css";
import Loginss from "../Extra/Loginss";
import Loginsss from "../Extra/Loginsss";
import { Usercontext } from "../../aaaaa";
import axios from "axios";
import Cookies from "universal-cookie";

function Stylebox() {
  const usercontexts = useContext(Usercontext);

  useEffect(async () => {
    await axios
      .get("http://127.0.0.1:2000/log")
      .then((res) => {
        console.log("res", res);
        if (res.data.err) {
          usercontexts.dislog("true");
        } else {
          usercontexts.dislog("false");
        }
      })
      .catch((err) => {
        console.log("err", err.data);
      });
  }, []);

  const [showModal, setshowModal] = useState(false);
  const [logins, setlogins] = useState(true);

  const handleClick = () => {
    setshowModal(!showModal);
    console.log(showModal);
  };

  const handlelogout = async () => {
    await axios
      .get("http://127.0.0.1:2000/logout")
      .then((res) => {
        console.log("res", res);
        const cookies = new Cookies();
        cookies.set("jwt", res.data.token, { htmlOnly: true });
        if (res.data.login) {
          if (!window.location.hash) {
            window.location = window.location + "#loaded";

            window.location.reload();
          }
          usercontexts.dislog("true");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

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
      </button>{" "}
      <button className={log.close} onClick={handleClick}>
        close{" "}
      </button>{" "}
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
      </button>{" "}
      <button className={log.close} onClick={handleClick}>
        close{" "}
      </button>{" "}
    </div>
  );

  const modal = showModal ? ma : null;
  const logsss =
    usercontexts.logoutvar == false ? (
      <button onClick={handlelogout}> logout </button>
    ) : (
      <button onClick={handleClick}> sign in /login</button>
    );

  return (
    <div className="back">
      <div className="div">
        <div className="login tog"> {logsss} </div>{" "}
      </div>{" "}
      {modal} <div className="div1"> </div> <div className="div2"> </div>{" "}
    </div>
  );
}

export default Stylebox;
