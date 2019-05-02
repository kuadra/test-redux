import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import FooComponent from "./FooComponent";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter />
      <FooComponent />
    </div>
  );
}
export default App;
