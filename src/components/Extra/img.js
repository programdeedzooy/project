import React from "react";
import Sales from "../sales/Salesintro/Salesintro.module.css";
import carrot from "../../assets/carrot-svgrepo-com.svg";
import apple from "../../assets/apple.svg";
import banana from "../../assets/bananas.svg";
import bell_pepper from "../../assets/bell-pepper.svg";
import chili from "../../assets/chili-pepper.svg";
import orange from "../../assets/fruit.svg";
import mango from "../../assets/mango.svg";
import potato from "../../assets/potato.svg";
import pumpkin from "../../assets/pumpkin.svg";
import strawberry from "../../assets/strawberry.svg";
import watermelon from "../../assets/watermelon.svg";

function Img(props) {
    // console.log(props.item)
    const { item } = props;
    var items;
    switch (item) {
        case "carrot":
            items = carrot;
            break;
        case "apple":
            items = apple;
            break;
        case "banana":
            items = banana;
            break;
        case "bell_pepper":
            items = bell_pepper;
            break;
        case "chili":
            items = chili;
            break;
        case "orange":
            items = orange;
            break;
        case "mango":
            items = mango;
            break;
        case "potato":
            items = potato;
            break;
        case "pumpkin":
            items = pumpkin;
            break;
        case "strawberry":
            items = strawberry;
            break;
        case "watermelon":
            items = watermelon;
            break;
        default:
            items = null;
    }

    return <img className = { Sales.img }
    src = { items }
    alt = "" / > ;
}

export default Img;