import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import {  Col, Card, Table } from "react-bootstrap";
// import {  Container, Row, } from "react-bootstrap";

export default class Checkout extends Component {
  render() {
    const { amountToCharge } = this.props;
    return (
      // <Container id="checkout" className="mb-3">
      // <Row className="d-flex justify-content-around">
      <>
        <Col xs={12} md={4} className="my-2">
          <Card>
            <Card.Header>Cart Total</Card.Header>
            <Card.Body>
              <Table hover borderless size="sm">
                <tbody>
                  <tr>
                    <td>Subtotal: </td>
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
                      €{" "}
                      {Number.parseFloat(amountToCharge + 5.9)
                        .toFixed(2)
                        .toString()}
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
                  return actions.order.capture().then(function(details) {
                    // This function shows a transaction success message to your buyer.
                    alert(
                      "Transaction completed by " +
                        details.payer.name.given_name
                    );
                  });
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </> // </Row>
      // </Container>
    );
  }
}
