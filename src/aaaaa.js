import React, { useState, useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import App from "./App";
import { use } from "matter-js";
export const Usercontext = React.createContext();

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const change = 0;

const varlogout = true;

export const reduxss = (state, action) => {
  switch (action) {
    case "change":
      return state + 1;
    default:
      return state;
  }
};

export const relog = (state, action) => {
  switch (action) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return false;
  }
};

export const reidcart = (state, action) => {
  switch (action) {
    default:
      return action;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "ERROR":
      return {
        loading: false,
        error: "somthing went wrong",
        post: [0],
      };
    default:
      return state;
  }
};

function Aaaaa(props) {
  const [itemarr, dispatch] = useReducer(reducer, initialState);
  const [item, disitem] = useReducer(reducer, initialState);
  const [cart, discart] = useReducer(reducer, initialState);
  const [deliver, disdeliver] = useReducer(reducer, initialState);
  const [cha, discha] = useReducer(reduxss, change);
  const [logoutvar, dislog] = useReducer(relog, varlogout);
  // const [idd, setidd] = useState(null);
  var idd;

  const fetchidd = useCallback(async () => {
    console.log("i am in ");
    await axios
      .get("http://127.0.0.1:2000/log", { withCredentials: true })
      .then((res) => {
        console.log("get_log", res);
        if (res.data.id) {
          // setidd(res.data.id);
          idd = res.data.id;
          disidcart(res.data.id);
          console.log("idd", res.data.id);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
  const [iddcart, disidcart] = useReducer(reidcart, idd);
  const fetchitemarr = useCallback(async () => {
    await axios
      .get("http://localhost:2000/items")
      .then((res) => {
        console.log("get_items", res.data);
        dispatch(
          { type: "SUCCESS", payload: res.data },
          { withCredentials: true }
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR" });
      });
  });

  const fetchitem = useCallback(async () => {
    await axios
      .get("http://localhost:2000/Peritems", { withCredentials: true })
      .then((res) => {
        console.log("get_Peritems", res.data);
        disitem({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        // console.log(err);
        disitem({ type: "ERROR" });
      });
  });
  // console.log(`hi${idd}`);
  const fetchcart = useCallback(async () => {
    if (idd !== null) {
      await axios
        .get(
          `http://localhost:2000/cart/${idd}`,
          { params: { id: idd } },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("get_cart", res.data);
          discart({ type: "SUCCESS", payload: res.data });
        })
        .catch((err) => {
          console.log("carterr", err);
          discart({ type: "ERROR" });
        });
    } else {
      console.log("cart id is empty");
    }
  });

  const fetchDeliver = useCallback(async () => {
    await axios
      .get("http://localhost:2000/deliver", { withCredentials: true })
      .then((res) => {
        console.log("deliver", res.data);
        disdeliver({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        // console.log(err);
        disdeliver({ type: "ERROR" });
      });
  });

  useEffect(async () => {
    fetchitemarr();
    fetchitem();
    fetchcart();
    fetchDeliver();
  }, []);

  useEffect(async () => {
    // fetchitemarr();
    await fetchidd();
    await fetchitem();
    await fetchcart();
    await fetchDeliver();
  }, [cha]);
  console.log(iddcart);
  return (
    <div>
      <Usercontext.Provider
        value={{
          itemsarrState: itemarr.post,
          itemDispatch: dispatch,
          itemitem: item.post,
          itemsDis: disitem,
          cartitem: cart.post,
          cartDis: discart,
          chas: cha,
          dischas: discha,
          disdel: disdeliver,
          del: deliver.post,
          logoutvar: logoutvar,
          dislog: dislog,
          iddcart: iddcart,
        }}
      >
        {" "}
        {/* {itemarr.loading ? "loading" : itemarr.post[0].name} */}{" "}
        {/* {itemarr.loading ? "loading" : item.post[0].name} */}{" "}
        {/* {console.log("arritem", item.post)} */}{" "}
        <button
          onClick={() => {
            discha("change");
          }}
        >
          {" "}
          cha - {cha}{" "}
        </button>{" "}
        <App />
      </Usercontext.Provider>{" "}
    </div>
  );
}

export default Aaaaa;
