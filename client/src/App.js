import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Bitcoins } from "./components/Bitcoins.js";
import { Ethereum } from "./components/Ethereum.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{"Test Technique : Wall of traders"}</p>
        <Bitcoins/>
        <Ethereum/>
      </header>
    </div>
  );
}

export default App;
