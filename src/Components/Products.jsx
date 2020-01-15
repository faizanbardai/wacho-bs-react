import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import Checkout from "./Checkout";

export default class Products extends Component {
  render() {
    let {
      products,
      addProductToCart,
      increaseQty,
      decreaseQty,
      productsInCart,
      amountToCharge
    } = this.props;
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
              <div key={product.id} className="col-6 col-md-3 pb-2">
                <Card>
                  {/* <Card.Header>{product.title}</Card.Header> */}
                  <div className="ml-auto">
                    {product.qty > 0 && (
                      <>
                        <button
                          onClick={() => {
                            increaseQty(product.id);
                          }}
                          className="btn btn-outline-info btn-sm rounded-circle m-2"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button
                          onClick={() => {
                            decreaseQty(product.id);
                          }}
                          className="btn btn-outline-info btn-sm rounded-circle m-2"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </>
                    )}
                    {product.qty === 0 && (
                      <button
                        onClick={() => {
                          addProductToCart(product.id);
                        }}
                        className="btn btn-outline-info btn-sm rounded-circle m-2"
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                      </button>
                    )}
                  </div>
                  <Card.Img variant="top" src={product.image} />
                  

                  <Card.Body><Button variant="outline-info" block className="rounded-pill">{product.title}</Button></Card.Body>
                  <Card.Footer className="px-2 text-center">
                    <div className="border border-info rounded-pill">
                      € {product.price}{" "}
                      {product.qty > 0 && (
                        <span>
                          {" "}
                          x {product.qty} ={" "}
                          <Badge pill variant="info">
                            € {product.price * product.qty}
                          </Badge>
                        </span>
                      )}
                    </div>
                  </Card.Footer>
                </Card>

                {/* <div className="card mb-3">
                  <div className="ml-auto">
                    <button
                      onClick={() => {
                        addProductToCart(product.id)
                      }}
                      className="btn btn-outline-info btn-sm rounded-circle m-2"
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                  </div>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body text-center">
                    <button
                      className="btn btn-outline-info"
                      data-toggle="modal"
                      data-target="#productModal"
                      data-title="{product.title}"
                      data-image="{product.image}"
                      data-variety="{product.variety}"
                      data-color="{product.color}"
                      data-aroma="{product.aroma}"
                      data-taste="{product.taste}"
                      data-alcohol="{product.alcohol}"
                      data-description="{product.description}"
                    >
                      {product.title}
                    </button>
                  </div>
                </div> */}
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
      </>
    );
  }
}
