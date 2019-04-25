import React, { Component } from "react";
import Header from "../../Components/header";
import Counter from "../../Components/counter";
import { Container, Row, Col, Jumbotron, Button } from "reactstrap";

class Dashboard extends Component {
  state = {
    makanan: [
      {
        id: 1,
        number: 0,
        nama: "Bakso Sapi",
        price: 10000,
        gambar:
          "https://i0.wp.com/notepam.com/wp-content/uploads/2017/10/Resep-Bakso-Sapi-Kenyal-Alami.jpg?zoom=2.625&resize=351%2C180&ssl=1"
      },
      {
        id: 2,
        number: 0,
        nama: "Bakso Ayam",
        price: 10000,
        gambar:
          "https://resepmakanan.id/wp-content/uploads/2018/05/Resep-Bakso-Ayam.jpg"
      },
      {
        id: 3,
        number: 0,
        nama: "Bakso Ikan",
        price: 10000,
        gambar:
          "http://1.bp.blogspot.com/-4YhWTOUIl_4/VTyfyIWTDsI/AAAAAAAAUec/qcpkGepHX6g/s1600/2015-04-26-15-07-05_deco.jpg"
      },
      {
        id: 4,
        number: 0,
        nama: "Bakso Keju",
        price: 15000,
        gambar:
          "http://cdn2.tstatic.net/style/foto/bank/images/bakso-keju_20180402_180109.jpg"
      },
      {
        id: 5,
        number: 0,
        nama: "Bakso Sarang Burung",
        price: 10000,
        gambar:
          "https://senaru.files.wordpress.com/2009/06/bakso-sarang-burung.jpg?w=320"
      },
      {
        id: 6,
        number: 0,
        nama: "Bakso Telur",
        price: 13000,
        gambar:
          "http://baksojwr.com/wp-content/uploads/2018/08/Screenshot_4-300x225.jpg"
      }
    ],
    total: 0
  };

  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };

  kurangTotalHarga = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };
  render() {
    return (
      <div align="center">
        <Header NamaHeader="Header" />
        <br />
        <Row>
          {this.state.makanan.map(item => (
            <Col xs="12" md="6" lg="4">
              {" "}
              <Counter
                menu={item.nama}
                gambar={item.gambar}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
                ukuran={{ width: "85%" }}
                harga={item.price}
              />
            </Col>
          ))}
        </Row>
        <Jumbotron style={{ backgroundColor: "springgreen" }}>
          <h5> Total Harga </h5>
          <p>
            <b>Rp {this.state.total}</b>
          </p>
          <Button outline color="danger">
            Bayar Sekarang
          </Button>
        </Jumbotron>
      </div>
    );
  }
}

export default Dashboard;
