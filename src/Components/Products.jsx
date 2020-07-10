import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import BannarText from "../Components/BannarText";
import {
  Badge,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import Checkout from "./Checkout";
import Loader from "react-loader-spinner";
import { increaseQty, decreaseQty, loadProducts } from "../actions";
import ProductToast from "./ProductToast";
import ComingSoon from "../Components/ComingSoon";

const mapStateToProps = (state) => {
  return {
    products: state.products.productsFromServer,
    fetchInProgress: state.products.fetchInProgress,
    amountToCharge: state.products.amountToCharge,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  increaseQty: (_id) => dispatch(increaseQty(_id)),
  decreaseQty: (_id) => dispatch(decreaseQty(_id)),
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductDetail: false,
      propsForToast: {
        image: null,
        message: null,
        title: null,
        qty: 0,
      },
      selectedProduct: {},
    };
  }
  handleShowProductDetail = (id) => {
    this.setState({
      showProductDetail: true,
      selectedProduct: this.props.products.find(
        (product) => product._id === id
      ),
    });
  };
  handleCloseProductDetail = () => {
    this.setState({ showProductDetail: false });
  };

  render() {
    const { selectedProduct, propsForToast } = this.state;

    const {
      increaseQty,
      decreaseQty,
      products,
      fetchInProgress,
      amountToCharge,
    } = this.props;
    return (
      <div id="wines">
        <BannarText text="Be smart, just drink the best and fuck the rest!" />
        {/* Products */}
        {fetchInProgress && (
          // Loader
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        )}
        {!fetchInProgress && products && products.length > 0 ? (
          <section className="container-fluid mb-3">
            <ProductToast propsForToast={propsForToast} />
            <div className="row wine-products d-flex justify-content-center bg-white pt-4">
              {products &&
                products.map((product) => (
                  <div key={product._id} className="px-2 pb-2">
                    <Button
                      variant="outline-info"
                      block
                      className="rounded-pill my-2"
                      onClick={() => this.handleShowProductDetail(product._id)}
                    >
                      {product.title}
                    </Button>
                    <Card className="border-0" style={{ width: "180px" }}>
                      <div className="d-flex justify-content-end">
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
                                    this.setState({
                                      propsForToast: {
                                        image: product.image,
                                        message: `${product.title} added to cart!`,
                                        title: product.title,
                                        qty: product.qty,
                                      },
                                    });
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
                                    this.setState({
                                      propsForToast: {
                                        image: product.image,
                                        message: `${product.title} removed from cart!`,
                                        title: product.title,
                                        qty: product.qty,
                                      },
                                    });
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
                            <button
                              type="button"
                              className="btn btn-block btn-outline-info rounded-pill mb-2"
                              disabled={product.inventory === 0 ? true : false}
                              onClick={() => {
                                increaseQty(product._id);
                                this.setState({
                                  propsForToast: {
                                    image: product.image,
                                    message: `${product.title} added to cart!`,
                                    title: product.title,
                                    qty: product.qty,
                                  },
                                });
                              }}
                            >
                              <FontAwesomeIcon icon={faCartPlus} /> €
                              {parseFloat(product.price).toFixed(2)}
                            </button>
                          </OverlayTrigger>
                        )}
                      </div>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Footer className="px-2 text-center">
                        {product.qty > 0 && (
                          <div className="border border-info rounded-pill mb-2">
                            <span>
                              € {parseFloat(product.price).toFixed(2)} x{" "}
                              {product.qty} ={" "}
                              <Badge pill variant="info">
                                €{" "}
                                {(
                                  parseFloat(product.price) *
                                  parseFloat(product.qty)
                                ).toFixed(2)}
                              </Badge>
                            </span>
                          </div>
                        )}
                        {product.qty === 0 && (
                          <div className="border border-info rounded-pill">
                            {this.props.section.available}
                          </div>
                        )}
                      </Card.Footer>
                    </Card>
                    <hr />
                  </div>
                ))}
              {amountToCharge > 0 && <Checkout />}
            </div>
          </section>
        ) : (
          <ComingSoon />
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
                    {/* <ul className="list-group list-group-flush">
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
                    </ul> */}
                    <p id="description" className="card-text">
                      {selectedProduct.description}
                    </p>
                    {/* <p className="card-text">
                      <small id="alcohol" className="text-muted">
                        Alcohol: {selectedProduct.alcohol}
                      </small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
  componentDidMount = async () => {
    await this.props.loadProducts();
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
