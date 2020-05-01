import React, { Component } from "react";
import { api_active_wine } from "../APIs";
import { Card, Button } from "react-bootstrap";
import NewOrUpdateProduct from "./NewOrUpdateProduct";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
  }

  render() {
    const { _id, title, image, active } = this.state;
    return (
      <div className="col-12 col-md-3 mb-3">
        <Button
          variant={active ? "primary" : "outline-info"}
          block
          className="rounded-pill my-2"
          onClick={() => {
            console.log(_id);
            console.log(localStorage.getItem("token"));
            api_active_wine(_id, localStorage.getItem("token"));
          }}
        >
          {title}
        </Button>
        <Card className="mb-2">
          <Card.Img variant="top" src={image} />
        </Card>
        <NewOrUpdateProduct
          product={this.state}
          updateProductList={this.props.updateProductList}
        />
      </div>
    );
  }
}
