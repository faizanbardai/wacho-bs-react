import React, { Component } from "react";
import { api_active_wine } from "../APIs";
import { Card, Button } from "react-bootstrap";
import NewOrUpdateProduct from "./NewOrUpdateProduct";

export default class Product extends Component {
  handleSubmit = async (_id) => {
    let updatedProduct = await api_active_wine(
      _id,
      localStorage.getItem("token")
    );
    updatedProduct = await updatedProduct.json();
    this.props.updateProductList(updatedProduct);
  };
  render() {
    const { _id, title, image, active } = this.props.product;
    return (
      <div className="col-12 col-md-3 mb-3">
        <Button
          variant={active ? "primary" : "outline-info"}
          block
          className="rounded-pill my-2"
          onClick={() => this.handleSubmit(_id)}
        >
          {title}
        </Button>
        <Card className="mb-2">
          <Card.Img variant="top" src={image} />
        </Card>
        <NewOrUpdateProduct
          product={this.props.product}
          updateProductList={this.props.updateProductList}
        />
      </div>
    );
  }
}
