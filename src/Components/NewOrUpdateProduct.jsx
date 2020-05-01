import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { api_add_wine, api_updateImage, api_update_wine } from "../APIs";

export default class NewOrUpdateProduct extends Component {
  state = {
    show: false,
    product: { title: "", price: "", inventory: "", description: "" },
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      product: { ...this.state.product, [name]: value },
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.props.product) {
      const response = await api_update_wine(
        this.state.product,
        localStorage.getItem("token")
      );
      switch (response.status) {
        case 200:
          //OK
          const updatedProduct = await response.json();
          if (this.state.picture) {
            const data = new FormData();
            data.append("key", "f4249a89674c3ba51752e0c729919897");
            data.append("image", this.state.picture);
            data.append("name", updatedProduct._id);
            const responseImage = await api_updateImage(data);
            const updatedProductImage = await responseImage.json();
            const respUpdatedWineWithImage = await api_update_wine(
              {
                _id: updatedProduct._id,
                image: updatedProductImage.data.url,
              },
              localStorage.getItem("token")
            );
            const updatedWineWithImageURL = await respUpdatedWineWithImage.json();
            //This need to be worked on
            this.props.updateProductList(updatedWineWithImageURL);
          } else {
            //This need to be worked on
            this.props.updateProductList(updatedProduct);
          }
          break;
        default:
          console.log("Some error");
      }

      this.handleClose();
    } else {
      const response = await api_add_wine(
        this.state.product,
        localStorage.getItem("token")
      );
      const newProduct = await response.json();
      const data = new FormData();
      data.append("key", "f4249a89674c3ba51752e0c729919897");
      data.append("image", this.state.picture);
      data.append("name", newProduct._id);
      const responseImage = await api_updateImage(data);
      const newProductImage = await responseImage.json();
      const respWineWithImage = await api_update_wine(
        {
          _id: newProduct._id,
          image: newProductImage.data.url,
        },
        localStorage.getItem("token")
      );
      const updatedWineWithImageURL = await respWineWithImage.json();
      this.props.addNewProduct(updatedWineWithImageURL);
      this.handleClose();
    }
  };
  render() {
    const { title, price, inventory, description } = this.state.product;

    return (
      <div>
        <Button
          block
          className="rounded-pill"
          variant="primary"
          onClick={this.handleShow}
        >
          {this.props.product ? "Update" : "Add new wine"}
        </Button>

        <Modal size="xl" show={this.state.show} onHide={this.handleClose}>
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
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  required={!this.props.product}
                  name="picture"
                  accept="image/*"
                  onChange={(e) =>
                    this.setState({ picture: e.target.files[0] })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={price}
                  placeholder="eg. €24.50"
                  min="10"
                  max="100"
                  step="0.05"
                  required
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Inventory</Form.Label>
                <Form.Control
                  type="number"
                  name="inventory"
                  value={inventory}
                  placeholder="eg. 30"
                  min="0"
                  max="500"
                  step="1"
                  required
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows="5"
                  value={description}
                  placeholder="eg. Some info about the wine."
                  required
                  onChange={this.handleInputChange}
                />
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
