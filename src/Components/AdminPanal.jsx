import React, { Component } from "react";
import { api_getPurchases } from "../APIs";
import { Container } from "react-bootstrap";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import Products from "./Product";
import NewOrUpdateProduct from "./NewOrUpdateProduct";
import NewOrUpdateArt from "./NewOrUpdateArt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Container fluid className="my-2">
        <div className="mb-2 d-flex justify-content-between">
          <NewOrUpdateProduct addNewProduct={this.addNewProduct} />
          <NewOrUpdateArt addNewArt={this.addNewArt} />
          <button
            type="button"
            className="mx-2 btn btn-outline-danger rounded-circle"
            onClick={this.props.logout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
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
        <table className="table-responsive-sm table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Transaction Code</th>
              <th scope="col">Product List</th>
              <th scope="col">Amount (without shipping cost)</th>
            </tr>
          </thead>
          <tbody>
            {purchases &&
              purchases.map((purchase, index) => (
                <tr key={purchase._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Moment format="DD-MM-YYYY HH:mm">
                      {purchase.createdAt}
                    </Moment>
                  </td>
                  <td>{purchase.transactionCode}</td>
                  <td>
                    {purchase.products.map((product, index) => (
                      <div key={index}>
                        <span className="badge badge-primary badge-pill mr-3">
                          {product.qty}
                        </span>
                        {product.title}
                      </div>
                    ))}
                  </td>
                  <td className="text-right">{purchase.totalAmount}</td>
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
