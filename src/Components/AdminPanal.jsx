import React, { Component } from "react";
import { api_getPurchases } from "../APIs";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import Products from "./Product";
import NewOrUpdateProduct from "./NewOrUpdateProduct";

export default class AdminPanal extends Component {
  state = { products: [], purchases: null };
  updateProductList = (updatedProduct) => {
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
  removeDeletedProduct = (_id) => {
    this.setState((state) => {
      const products = state.products.filter((product) => product._id !== _id);
      return { products };
    });
  };

  render() {
    const { purchases } = this.state;
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
              removeDeletedProduct={this.removeDeletedProduct}
            />
          ))}
        </div>
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Transaction Code</th>
              <th>Product List</th>
              <th>Amount (without shipping cost)</th>
            </tr>
          </thead>
          <tbody>
            {purchases &&
              purchases.map((purchase, index) => (
                <tr key={purchase._id}>
                  <td>{index + 1}</td>
                  <td>
                    <Moment format="DD-MM-YYYY HH:mm">
                      {purchase.createdAt}
                    </Moment>
                  </td>
                  <td>{purchase.transactionCode}</td>
                  <td>
                    {purchase.products.map((product, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between mb-2"
                      >
                        {product.title}
                        <span className="badge badge-primary badge-pill mr-3">
                          {product.qty}
                        </span>
                      </div>
                    ))}
                  </td>
                  <td>{purchase.totalAmount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
    );
  }
  componentDidMount = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(baseURL + "/products");
    const products = await response.json();
    const responsePurchases = await api_getPurchases(
      localStorage.getItem("token")
    );

    this.setState({ products, purchases: await responsePurchases.json() });
  };
}
