import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
