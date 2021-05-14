import React, { useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import App from "./App";
export const Usercontext = React.createContext();

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const change = 0;

export const reduxss = (state, action) => {
  switch (action) {
    case "change":
      return state + 1;
    default:
      return state;
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
  const [cha, discha] = useReducer(reduxss, change);
  const fetchitemarr = useCallback(async () => {
    await axios
      .get("http://localhost:2000/items")
      .then((res) => {
        console.log("a", res.data);
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR" });
      });
  });

  const fetchitem = useCallback(async () => {
    await axios
      .get("http://localhost:2000/Peritems")
      .then((res) => {
        console.log("item", res.data);
        disitem({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        // console.log(err);
        disitem({ type: "ERROR" });
      });
  });

  const fetchcart = useCallback(async () => {
    await axios
      .get("http://localhost:2000/cart")
      .then((res) => {
        console.log("cart", res.data);
        discart({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        // console.log(err);
        discart({ type: "ERROR" });
      });
  });

  useEffect(async () => {
    fetchitemarr();
    fetchitem();
    fetchcart();
  }, []);

  useEffect(async () => {
    // fetchitemarr();
    await fetchitem();
    await fetchcart();
  }, [cha]);

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
        }}
      >
        {/* {itemarr.loading ? "loading" : itemarr.post[0].name} */}
        {/* {itemarr.loading ? "loading" : item.post[0].name} */}
        {/* {console.log("arritem", item.post)} */}
        <button
          onClick={() => {
            discha("change");
          }}
        >
          {" "}
          cha - {cha}
        </button>
        <App />
      </Usercontext.Provider>
    </div>
  );
}

export default Aaaaa;
