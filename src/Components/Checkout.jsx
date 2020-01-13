import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  ButtonToolbar,
  ButtonGroup,
  Button
} from "react-bootstrap";
import wine1 from "../img/p1.jpg";
import { Badge } from "react-bootstrap";

export default class Checkout extends Component {
  render() {
    const { amountToCharge, productsInCart } = this.props;
    return (
      <Container id="checkout" className="mb-3">
        <Row className="d-flex justify-content-around">
          <Col xs={12} md={8}>
            <Row>
              {productsInCart.map(product => (
                <Col xs={6} className="mb-2">
                  <Card>
                    <Card.Header>
                      <Row className="d-flex justify-content-between">
                        <Col>
                          <ButtonToolbar className="d-flex flex-column">
                            <ButtonGroup>
                              <Button>+</Button>
                              <Button>{product.qty}</Button>
                              <Button>-</Button>
                            </ButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                    </Card.Body>
                    <Image src={wine1} style={{ width: "100%" }} />
                    <Card.Footer className="text-muted text-right px-2">
                      €0.22 x 2 = €0.44
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body className="p-0 m-2 text-center">
                <Badge pill variant="primary" className="my-2">
                  € 22.22
                </Badge>
                <PayPalButton
                  createOrder={(data, actions) => {
                    // This function sets up the details of the transaction, including the amount and line item details.
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            // value: "0.02"
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
