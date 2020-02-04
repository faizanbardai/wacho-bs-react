import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  Badge,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Modal,
  Toast
} from "react-bootstrap";
import Checkout from "./Checkout";
import Loader from "react-loader-spinner";
import { increaseQty, decreaseQty, loadProducts } from "../actions";

const mapStateToProps = state => {
  return {
    products: state.products.productsFromServer,
    fetchInProgress: state.products.fetchInProgress,
    amountToCharge: state.products.amountToCharge
  };
};
const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts()),
  increaseQty: _id => dispatch(increaseQty(_id)),
  decreaseQty: _id => dispatch(decreaseQty(_id))
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductDetail: false,
      showCartToast: true,
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
  handleCloseCartToast = () => {
    this.setState({ showCartToast: false });
  };
  handleOpenCartToast = () => {
    this.setState({ showCartToast: true });
  };
  render() {
    const { selectedProduct, showCartToast } = this.state;

    const {
      increaseQty,
      decreaseQty,
      products,
      fetchInProgress,
      amountToCharge
    } = this.props;
    return (
      <>
        {/* Products */}
        {fetchInProgress ? (
          // Loader
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <section className="container-fluid mb-3">
            {selectedProduct && (
              <Toast
                show={showCartToast}
                onClose={() => this.handleCloseCartToast()}
                delay={2000}
                autohide
                aria-live="polite"
                aria-atomic="true"
                style={{
                  zIndex: 1,
                  position: "fixed",
                  bottom: "10px",
                  left: "10px",
                  minHeight: "100px",
                  minWidth: "300px"
                }}
              >
                <Toast.Header>
                  <img
                    src={products[0].image}
                    style={{ width: "30px" }}
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">{products[0].title}</strong>
                  <small>Quantity: {products[0].qty}</small>
                </Toast.Header>
                <Toast.Body>Rice Pitcher added to Cart.</Toast.Body>
              </Toast>
            )}
            <div className="row wine-products d-flex justify-content-center">
              {products &&
                products.map(product => (
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
                                  disabled={
                                    product.inventory === 0 ? true : false
                                  }
                                  onClick={() => {
                                    increaseQty(product._id);
                                    this.setState({ showCartToast: true });
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
                                    this.setState({ showCartToast: true });
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
                                disabled={
                                  product.inventory === 0 ? true : false
                                }
                                onClick={() => {
                                  increaseQty(product._id);
                                  this.setState({ showCartToast: true });
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
                          onClick={() =>
                            this.handleShowProductDetail(product._id)
                          }
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
              {amountToCharge > 0 && <Checkout />}
            </div>
          </section>
        )}

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
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={selectedProduct.image}
                    className="card-img"
                    alt="Rice pitcher"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li id="variety" className="list-group-item">
                        Variety: {selectedProduct.variety}
                      </li>
                      <li id="color" className="list-group-item">
                        Color: {selectedProduct.color}
                      </li>
                      <li id="aroma" className="list-group-item">
                        Aroma: {selectedProduct.aroma}
                      </li>
                      <li id="taste" className="list-group-item">
                        The taste is {selectedProduct.taste}
                      </li>
                    </ul>
                    <p id="description" className="card-text">
                      {selectedProduct.description}
                    </p>
                    <p className="card-text">
                      <small id="alcohol" className="text-muted">
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
  componentDidMount = async () => {
    await this.props.loadProducts();
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);