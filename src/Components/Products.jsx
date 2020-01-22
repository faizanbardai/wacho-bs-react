import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Card, Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import Checkout from "./Checkout";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductDetail: false,
      selectedProduct: {}
    };
  }
  handleShowProductDetail = id => {
    this.setState({
      showProductDetail: true,
      selectedProduct: this.props.products.find(product => product._id === id)
    });
  };
  handleCloseProductDetail = () => {
    this.setState({ showProductDetail: false });
  };
  render() {
    let {
      products,
      addProductToCart,
      increaseQty,
      decreaseQty,
      productsInCart,
      amountToCharge
    } = this.props;
    const { selectedProduct } = this.state;
    return (
      <>
        {/* Be smart text */}
        <div
          id="products"
          className="handwritten shadow-lg p-3 my-5 bg-white rounded text-center display-4"
        >
          Be smart, just drink the best and fuck the rest!
        </div>
        {/* Products */}
        <section className="container mb-3">
          <div className="row wine-products d-flex justify-content-center">
            {products.map(product => (
              <div key={product._id} className="col-6 col-md-3 pb-2">
                <Card>
                  <div className="ml-auto">
                    {product.qty > 0 && (
                      <>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              {product.inventory === 0
                                ? "Last available item added to cart"
                                : "Increase Quantity"}
                            </Tooltip>
                          }
                        >
                          <span className="d-inline-block">
                            <Button
                              variant="outline-info"
                              size="sm"
                              disabled={product.inventory === 0 ? true : false}
                              onClick={() => {
                                increaseQty(product._id);
                              }}
                              className="rounded-circle m-2"
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </Button>
                          </span>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              Decrease Quantity
                            </Tooltip>
                          }
                        >
                          <span className="d-inline-block">
                            <Button
                              variant="outline-info"
                              size="sm"
                              onClick={() => {
                                decreaseQty(product._id);
                              }}
                              className="rounded-circle m-2"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </Button>
                          </span>
                        </OverlayTrigger>
                      </>
                    )}
                    {product.qty === 0 && (
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">
                            {product.inventory === 0
                              ? "Out of stock"
                              : "Add to Cart"}
                          </Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <Button
                            variant="outline-info"
                            size="sm"
                            disabled={product.inventory === 0 ? true : false}
                            onClick={() => {
                              addProductToCart(product._id);
                            }}
                            className="rounded-circle m-2"
                          >
                            <FontAwesomeIcon icon={faCartPlus} />
                          </Button>
                        </span>
                      </OverlayTrigger>
                    )}
                  </div>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Button
                      variant="outline-info"
                      block
                      className="rounded-pill"
                      onClick={() => this.handleShowProductDetail(product._id)}
                    >
                      {product.title}
                    </Button>
                  </Card.Body>
                  <Card.Footer className="px-2 text-center">
                    <div className="border border-info rounded-pill mb-2">
                      € {parseFloat(product.price).toFixed(2)}{" "}
                      {product.qty > 0 && (
                        <span>
                          {" "}
                          x {product.qty} ={" "}
                          <Badge pill variant="info">
                            €{" "}
                            {(
                              parseFloat(product.price) *
                              parseFloat(product.qty)
                            ).toFixed(2)}
                          </Badge>
                        </span>
                      )}
                    </div>
                    <div className="border border-info rounded-pill">
                      In-stock: {product.inventory}
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            ))}
            {amountToCharge > 0 && (
              <Checkout
                amountToCharge={amountToCharge}
                productsInCart={productsInCart}
              />
            )}
          </div>
        </section>
        <Modal
          show={this.state.showProductDetail}
          onHide={this.handleCloseProductDetail}
          centered
          size="xl"
          scrollable
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={selectedProduct.image}
                    class="card-img"
                    alt="Rice pitcher"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li id="variety" class="list-group-item">
                        Variety: {selectedProduct.variety}
                      </li>
                      <li id="color" class="list-group-item">
                        Color: {selectedProduct.color}
                      </li>
                      <li id="aroma" class="list-group-item">
                        Aroma: {selectedProduct.aroma}
                      </li>
                      <li id="taste" class="list-group-item">
                        The taste is {selectedProduct.taste}
                      </li>
                    </ul>
                    <p id="description" class="card-text">
                      {selectedProduct.description}
                    </p>
                    <p class="card-text">
                      <small id="alcohol" class="text-muted">
                        Alcohol: {selectedProduct.alcohol}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}
