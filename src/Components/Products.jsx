import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class Products extends Component {
  render() {
    let { products, addProductToCart } = this.props;
    return (
      <>
        {/* Be smart text */}
        <div className="handwritten shadow-lg p-3 my-5 bg-white rounded text-center display-4">
          Be smart, just drink the best and fuck the rest!
        </div>
        {/* Products */}
        <section id="products" className="container">
          <div className="row wine-products vh-100 d-flex justify-content-around">
            {products.map(product => (
              <div key={product.id} className="col-6 col-md-3 col-lg-2">
                <div className="card mb-3">
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
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}
