import React from "react";
import Post from "./Postitems.module.css";
import { FaStar } from "react-icons/fa";
function Review(props) {
  const star = props.review;
  var a = star;
  var n = 5;
  const review = [];
  for (let i = 0; i < 5; i++) {
    if (i < a) {
      var ins = <FaStar color="yellow" size={30} />;
    } else {
      var ins = <FaStar color="black" size={30} />;
    }
    review.push(ins);
  }
  console.log(review);
  return (
    <span className={Post.Star}>
      {/* <FaStar color="yellow" size={30} /> */}
      {review}
    </span>
  );
}
export default Review;
