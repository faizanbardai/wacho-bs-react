import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Products from "./Product";
import LoginModal from "../../Components/LoginModal";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthorized: false };
  }

  render() {
    const { products } = this.state;
    return this.state.isAuthorized ? (
      <Container className="my-2">
        <div className="row">
          {products &&
            products.map((product) => (
              <div key={product._id} className="col-6">
                <Products product={product} />
              </div>
            ))}
        </div>
      </Container>
    ) : (
      <LoginModal />
    );
  }
  componentDidMount = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(baseURL + "/products");
    const products = await response.json();
    this.setState({ products });
  };
}
