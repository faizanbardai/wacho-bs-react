import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

export default class Checkout extends Component {
  render() {
    const { amountToCharge } = this.props;
    return (
      <Container id="checkout" className="mb-3">
        <Row className="d-flex justify-content-around">
          <Col xs={12} md={6} className="my-2">
            <Card>
              <Card.Header>Cart Total</Card.Header>
              <Card.Body>
                <Table hover borderless size="sm">
                  <tbody>
                    <tr>
                      <td>Subtotal: </td>
                      <td>€ {amountToCharge}</td>
                    </tr>
                    <tr>
                      <td>Shipping: </td>
                      <td>Flat Rate Shipping Costs: € 5.90</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>€ {amountToCharge + 5.9}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body className="p-0 m-2 text-center">
                
                <PayPalButton
                  createOrder={(data, actions) => {
                    // This function sets up the details of the transaction, including the amount and line item details.
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: amountToCharge
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
        </Row>
      </Container>
    );
  }
}
