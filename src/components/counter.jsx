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
  state = {
    tdk: 0
  };
  tambah = () => {
    this.setState({
      tdk: this.state.tdk + 1
    });
    this.props.tambahTotalHarga(this.props.harga);
  };

  kurang = () => {
    if (this.state.tdk === 0) {
      return;
    }
    this.setState({
      tdk: this.state.tdk - 1
    });
    this.props.kurangTotalHarga(this.props.harga);
  };

  render() {
    return (
      <div>
        <div>
          <Card style={this.props.ukuran} style={{ margin: "10px" }}>
            <CardImg top width="100%" src={this.props.gambar} alt="makanan" />
            <CardBody>
              <br />
              <CardTitle>
                <b>{this.props.menu}</b>
              </CardTitle>
              <CardSubtitle>Harga : Rp {this.props.harga}</CardSubtitle>
              <CardText>Pesan Sekarang</CardText>
              <Navbar>
                <Button onClick={this.kurang} outline color="danger">
                  -
                </Button>
                <h2>{this.state.tdk}</h2>
                <Button onClick={this.tambah} outline color="success">
                  +
                </Button>{" "}
              </Navbar>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
