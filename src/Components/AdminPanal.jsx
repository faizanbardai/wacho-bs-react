import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Products from "./Product";
import NewOrUpdateProduct from "./NewOrUpdateProduct";

export default class AdminPanal extends Component {
  state = { show: "products" };
  render() {
    return (
      <Container className="my-2">
        <div className="mb-2">
          <NewOrUpdateProduct buttonTitle="Add new wine!" />
        </div>
        <div className="row">
          {this.state.products &&
            this.state.products.map((product) => (
              <Products product={product} />
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
