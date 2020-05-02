import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Products from "./Product";
import NewOrUpdateProduct from "./NewOrUpdateProduct";

export default class AdminPanal extends Component {
  state = { products: [] };
  updateProductList = (updatedProduct) => {
    console.log(updatedProduct);
    const products = this.state.products.map((product) => {
      return product._id === updatedProduct._id ? updatedProduct : product;
    });
    this.setState({ products });
  };
  addNewProduct = (newProduct) => {
    this.setState((state) => {
      const products = state.products.concat(newProduct);
      return { products };
    });
  };

  render() {
    return (
      <Container className="my-2">
        <div className="mb-2">
          <NewOrUpdateProduct addNewProduct={this.addNewProduct} />
        </div>
        <div className="row">
          {this.state.products.map((product) => (
            <Products
              key={product._id}
              product={product}
              updateProductList={this.updateProductList}
            />
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
