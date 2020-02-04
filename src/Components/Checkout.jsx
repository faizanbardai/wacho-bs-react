import React, { Component } from "react";
import { connect } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import { Col, Card, Table } from "react-bootstrap";
import { Badge } from "react-bootstrap";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts())
});
const loadProducts = () => {
  return async dispatch => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const responseProducts = await fetch(baseURL + "/products");
    const products = await responseProducts.json();
    console.log("Testing with checkout");
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: products
    });
  };
};

class Checkout extends Component {
  render() {
    let products = null;
    let amountToCharge = 0;
    let reloadProducts;
    if (this.props.products && this.props.products.productsFromServer) {
      products = this.props.products.productsFromServer;
      amountToCharge = this.props.products.amountToCharge;
      reloadProducts = this.props.loadProducts;
    }

    return (
      <>
        <Col xs={12} md={4} className="my-2">
          <Card>
            <Card.Header>Cart Total</Card.Header>
            <Card.Body>
              <Table hover borderless size="sm">
                <tbody>
                  <tr>
                    <td onClick={() => this.props.loadProducts()}>
                      Subtotal:{" "}
                    </td>
                    <td>
                      €{" "}
                      {Number.parseFloat(amountToCharge)
                        .toFixed(2)
                        .toString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping: </td>
                    <td>€ 5.90</td>
                    {/* Flat Rate Shipping Costs:  */}
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      <Badge variant="info">
                        €{" "}
                        {Number.parseFloat(amountToCharge + 5.9)
                          .toFixed(2)
                          .toString()}
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body className="p-0 m-2 text-center">
              <PayPalButton
                createOrder={(data, actions) => {
                  let productPurchased = [];
                  products
                    .filter(product => product.qty > 0)
                    .map(product =>
                      productPurchased.push({
                        _id: product._id,
                        title: product.title,
                        qty: product.qty
                      })
                    );

                  // This function sets up the details of the transaction, including the amount and line item details.
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: Number.parseFloat(amountToCharge + 5.9)
                            .toFixed(2)
                            .toString()
                        }
                      }
                    ]
                  });
                }}
                onApprove={(data, actions) => {
                  // This function captures the funds from the transaction.
                  return actions.order.capture().then(async function(details) {
                    // This function shows a transaction success message to your buyer.
                    alert(
                      "Transaction completed by " +
                        details.payer.name.given_name
                    );
                    // Call your server to save the transaction
                    let productPurchased = [];
                    products
                      .filter(product => product.qty > 0)
                      .map(product =>
                        productPurchased.push({
                          _id: product._id,
                          title: product.title,
                          qty: product.qty
                        })
                      );
                    const baseURL = process.env.REACT_APP_BASE_URL;
                    await fetch(baseURL + "/purchases", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json"
                      },
                      body: JSON.stringify({
                        orderID: data.orderID,
                        totalAmount: amountToCharge,
                        products: productPurchased,
                        captureDetail: details
                      })
                    });
                    await reloadProducts();
                    console.log("after loading");
                    // return fetch("/paypal-transaction-complete", {
                    //   method: "POST",
                    //   headers: {
                    //     "content-type": "application/json"
                    //   },
                    //   body: JSON.stringify({ orderID: data.orderID })
                    // });
                  });
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);