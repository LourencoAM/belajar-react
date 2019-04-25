import React, { Component } from "react";
import Jumbo from "../../Components/jumbotron";
import Header from "../../Components/header";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header name="Home" />
        <Jumbo title="Go-Bakso" judul="Beli Sekarang" />
      </div>
    );
  }
}
