import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class NewOrUpdateProduct extends Component {
  state = { show: false, product: {} };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      product: { [name]: value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.product) {
    }
  };
  render() {
    const { title } = this.state.product;

    return (
      <div>
        <Button block variant="primary" onClick={this.handleShow}>
          {this.props.product ? "Update" : "Add new wine"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.product ? title : "New Wine"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  name="title"
                  required
                  onChange={this.handleInputChange}
                  placeholder="Enter wine name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="eg. €24.50" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.product) {
      this.setState({
        product: this.props.product,
      });
    }
  }
}
