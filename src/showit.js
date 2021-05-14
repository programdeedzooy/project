import React, { useContext } from "react";
// import { Usercontext } from "./aaaaa";
import { Usercontext } from "./aaaaa";

function Showit() {
  const usercontexts = useContext(Usercontext);
  return (
    <div>
      {/* component a <div> {console.log(usercontexts.itemsarrState)} </div>{" "} */}
      <button
        onClick={() => {
          usercontexts.dischas("change");
        }}
      >
        {" "}
        cha - {usercontexts.chas}{" "}
      </button>{" "}
    </div>
  );
}

export default Showit;
