import React, { Component } from "react";

import { Card } from "react-bootstrap";
import NewOrUpdateProduct from "./NewOrUpdateProduct";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
  }

  render() {
    const { title, image } = this.state;
    return (
      <Card className="col-12 col-md-3 col-lg-2">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <NewOrUpdateProduct product={this.state} />
      </Card>
    );
  }
  componentDidMount() {}
}
