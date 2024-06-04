import React, { createContext, useState } from "react";
import Com_f from "./Components/Com_f";

//To create Contex(shoud be export)

export const userAuth = createContext({});

function App() {
const [username,setUserName]=useState("");

  return (
    <userAuth.Provider value={{
        username,
        setUserName
    }}>
      <h1>APP {username}</h1>
      <Com_f />
    </userAuth.Provider>
  );
}

export default App;
