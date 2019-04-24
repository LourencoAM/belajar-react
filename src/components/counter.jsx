import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          <Card>
            <CardImg top width="100%" src={this.props.gambar} alt="makanan" />
            <CardBody>
              <br />
              <CardTitle>{this.props.menu}</CardTitle>
              <CardSubtitle>Harga : Rp {this.props.harga}</CardSubtitle>
              <CardText>Pesan Sekarang</CardText>
              <Button onClick={this.kurang} outline color="danger">
                -
              </Button>
              <h2 align="center" />
              <Button onClick={this.tambah} outline color="success">
                +
              </Button>{" "}
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
