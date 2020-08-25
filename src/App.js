import React from "react";
import "./App.css";
import Joke from "./getJoke.js";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div><Header/></div>
      <div>
        <Joke />
      </div>
    </div>
  );
}

export default App;
