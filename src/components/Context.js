import { Alert } from "bootstrap";
import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  newobject = (action, newComments) => {
    switch (action) {
      case "add_comments":
        this.setState({
          comments: [newComments, ...this.state.comments],
        });
        console.log("hooo", this.state.comments);

      case "add_Loginss":
        this.setState({
          signin: [newComments, ...this.state.signin],
        });
        console.log("hooo", this.state.signin);
    }

    console.log("action", action);
  };
  state = {
    newobject: this.newobject,
    comments: [
      {
        id: 1,
        name: "asdv",
        comments: "suppper",
      },
    ],
    signin: [
      {
        name: "gunalan",
        birthday: 11 - 3 - 2002,
        phone: 943424432,
        email: "gunalandeedzooy@gmail.com",
        pass: "asgverver",
        address: "lig 249 gandhi manager covi",
      },
    ],
    aaa: [
      {
        id: 0,
        name: "carrot",
        com: "it is very good for our body...",
        Rs: 30,
        img: "carrot",
        review: 3,
      },
      {
        id: 1,
        name: "apple",
        com: "it is very good for our body...",
        Rs: 40,
        img: "carrot",
        review: 4,
      },
      {
        id: 2,
        name: "mango",
        com: "it is very good for our body...",
        Rs: 50,
        img: "carrot",
        review: 5,
      },
      {
        id: 3,
        name: "banana",
        com: "it is very good for our body...",
        Rs: 10,
        img: "carrot",
        review: 4,
      },
      {
        id: 4,
        name: "carrot",
        com: "it is very good for our body...",
        Rs: 30,
        img: "carrot",
        review: 3,
      },
      {
        id: 5,
        name: "carrot",
        com: "it is very good for our body...",
        Rs: 30,
        img: "carrot",
        review: 5,
      },
      {
        id: 6,
        name: "carrot",
        com: "it is very good for our body...",
        Rs: 30,
        img: "carrot",
        review: 3,
      },
      {
        id: 7,
        name: "carrot",
        com: "it is very good for our body...",
        Rs: 30,
        img: "carrot",
        review: 5,
      },
      {
        id: 8,
        name: "carrot",
        com: "it is very good for our body...",
        Rs: 30,
        img: "carrot",
        review: 4,
      },
    ],
    aa: [
      {
        id: "q234ewq",
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 1,
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 2,
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 3,
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 4,
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 5,
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 6,
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 7,
        from: "covi",
        to: "palani",
        kg: 2,
      },
      {
        id: 8,
        from: "covi",
        to: "palani",
        kg: 7,
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {" "}
        {this.props.children}{" "}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
