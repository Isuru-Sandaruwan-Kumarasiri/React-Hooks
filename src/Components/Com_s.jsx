import React, { useContext } from "react";
import Com_t from "./Com_t";
import { userAuth } from "../App";

function Com_s() {
  const { username } = useContext(userAuth);
  return (
    <div>
      Com_s{username}
      <Com_t />
    </div>
  );
}

export default Com_s;
