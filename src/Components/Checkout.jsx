import React, { Component } from "react";
import { connect } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import { Card, Table } from "react-bootstrap";
import { Badge } from "react-bootstrap";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
});
const loadProducts = () => {
  return async (dispatch) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const responseProducts = await fetch(baseURL + "/products?active=1");
    const products = await responseProducts.json();
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: products,
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
      <div id="checkout">
        <Card style={{ width: "350px" }}>
          <Card.Header>Cart Total</Card.Header>
          <Card.Body>
            <Table hover borderless size="sm">
              <tbody>
                <tr>
                  <td>Subtotal: </td>
                  <td>
                    € {Number.parseFloat(amountToCharge).toFixed(2).toString()}
                  </td>
                </tr>
                <tr>
                  <td>Shipping: </td>
                  <td>€ 5.90</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>
                    <Badge variant="info">
                      € {(parseFloat(amountToCharge) + 5.9).toFixed(2)}
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
          <Card.Footer className="text-muted text-right">
            19% VAT included
          </Card.Footer>
        </Card>
        <hr />
        <Card style={{ width: "350px" }} className="mb-4">
          <Card.Body className="p-0 m-2 text-center">
            <PayPalButton
              createOrder={(data, actions) => {
                let productPurchased = [];
                products
                  .filter((product) => product.qty > 0)
                  .map((product) =>
                    productPurchased.push({
                      _id: product._id,
                      title: product.title,
                      qty: product.qty,
                    })
                  );

                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "EUR",
                        value: (
                          parseFloat(amountToCharge) + parseFloat(5.9)
                        ).toFixed(2),
                        breakdown: {
                          item_total: {
                            currency_code: "EUR",
                            value: amountToCharge,
                          },
                          shipping: {
                            currency_code: "EUR",
                            value: 5.9,
                          },
                        },
                      },
                    },
                  ],
                });
              }}
              onShippingChange={(data, actions) => {
                if (data.shipping_address.country_code !== "DE") {
                  return actions.reject();
                }
                return actions.resolve();
              }}
              onApprove={(data, actions) => {
                // This function captures the funds from the transaction.
                return actions.order.capture().then(async function (details) {
                  // This function shows a transaction success message to your buyer.
                  alert(
                    "Transaction completed by " +
                      details.payer.name.given_name +
                      ". The items will be delivered in 3-5 working days. Please contact us at +49-1766-9521145 for any further information. " +
                      "Your transaction ID is: " +
                      details.purchase_units[0].payments.captures[0].id +
                      "."
                  );
                  // Call your server to save the transaction
                  let productPurchased = [];
                  products
                    .filter((product) => product.qty > 0)
                    .map((product) =>
                      productPurchased.push({
                        _id: product._id,
                        title: product.title,
                        qty: product.qty,
                      })
                    );
                  const baseURL = process.env.REACT_APP_BASE_URL;
                  await fetch(baseURL + "/purchases", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      orderID: data.orderID,
                      totalAmount: amountToCharge,
                      products: productPurchased,
                      // payer: details.payer.email_address,
                      // deliveryAddress:
                      //   details.purchase_units[0].shipping.address,
                      // transactionCode:
                      //   details.purchase_units[0].payments.captures[0].id,
                      // captureDetail: details,
                    }),
                  });
                  await reloadProducts();
                });
              }}
            />
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            Pay with cryptocurrency (coming soon)
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
