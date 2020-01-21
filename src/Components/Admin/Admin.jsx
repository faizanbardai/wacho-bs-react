import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Products from "./Product";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { products } = this.state;
    return (
      <Container className="my-2">
        <div className="row">
          {products &&
            products.map(product => (
              <div key={product._id} className="col-6">
                <Products product={product} />
              </div>
            ))}
        </div>
      </Container>
    );
  }
  componentDidMount = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(baseURL + "/products");
    const products = await response.json();
    this.setState({ products });
  };
}
