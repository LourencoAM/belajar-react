import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import home from "./containers/Home";
import Dashboard from "./containers/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <switch>
          <Route path="/" exact component={home} />
          <Route path="/dashboard" component={Dashboard} />
        </switch>
      </div>
    );
  }
}

export default App;
