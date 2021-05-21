import React from "react";
import Typed from "react-typed";
import Tilt from "react-tilt";
import "./About.css";
import { useState } from "react";

function About() {
  // console.log(para);
  const about = [
    "I am gunalan, my first own project in React , it helps me to build my self confidence... typed.js is used to animation for this page...  i am going to continue update by project link in this site....",
  ];

  const para = [
    "For this project i have used React , Node.js , Express.js , MongoDB and some libarys like Jquery , Tilt etc.. and i have used Stripe it is real time payment gatway ",
  ];

  return (
    <div className="in">
      <div className="form-style">
        <div className="title">About</div>
        <Typed className="typed" strings={about} typeSpeed={60} />
      </div>

      <div className="form-style">
        <div className="title"> UPCOMING PROJECT'S </div>
        <div className="typed">
          <div className="grid">
            <Tilt className="Title">
              <div className="Tilt-inner">
                <div className="grid-con">three.js</div>
              </div>
            </Tilt>
            <Tilt className="Title">
              <div className="Tilt-inner">
                <div className="grid-con">pixil.js</div>
              </div>
            </Tilt>
            <Tilt className="Title">
              <div className="Tilt-inner">
                <div className="grid-con">flutter</div>
              </div>
            </Tilt>
            <Tilt className="Title">
              <div className="Tilt-inner">
                <div className="grid-con">model</div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <div className="form-style">
        {/* <div className="icons"></div> */}
        <div className="title">Project</div>
        <Typed className="typed" strings={para} typeSpeed={60} />
      </div>
    </div>
  );
}
export default About;
