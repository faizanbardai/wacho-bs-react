import React, { Component } from "react";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
  Col,
  Form,
  Button,
  Badge,
} from "react-bootstrap";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
  }
  handleChange = (event) => {
    this.setState({ qty: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { inventory, _id, quantity } = this.state;
    inventory = parseInt(inventory) + parseInt(quantity);
    inventory = inventory.toString();
    const baseURL = process.env.REACT_APP_BASE_URL;
    try {
      fetch(baseURL + "/products", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: _id, inventory }),
      })
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.setState({ quantity: "", inventory });
        });
    } catch (error) {
      alert("Something went wrong!");
    }
  };
  render() {
    const { title, image, inventory, qty } = this.state;
    return (
      <Row>
        <div className="col-4 px-0 mb-2">
          <Image style={{ width: "100%" }} src={image} rounded />
        </div>
        <div className="col-8 px-0 mb-2">
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Current Inventory: {inventory}</ListGroupItem>
              <ListGroupItem>
                <Form
                  onSubmit={(e) => {
                    this.handleSubmit(e);
                  }}
                >
                  <Form.Group>
                    <Row>
                      <Col xs={12} className="mb-2">
                        <Form.Control
                          onChange={this.handleChange}
                          value={qty}
                          type="number"
                          min="1"
                          max="20"
                          required
                          placeholder="New Stock"
                        />
                      </Col>
                      <Col xs={12}>
                        <Button type="submit" block variant="outline-info">
                          Update
                        </Button>
                      </Col>
                    </Row>
                    <Badge
                      className="my-2"
                      style={{ width: "100%" }}
                      pill
                      variant="info"
                    >
                      This will add to current inventory
                    </Badge>
                  </Form.Group>
                </Form>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </Row>
    );
  }
  componentDidMount() {
    this.setState({ quantity: "" });
  }
}
