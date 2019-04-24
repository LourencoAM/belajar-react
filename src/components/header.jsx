import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="bg" color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <h2>
              <b style={{ color: "white" }}>GO-Bakso</b>
            </h2>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
