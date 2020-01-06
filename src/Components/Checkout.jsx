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

export default class Checkout extends Component {
  render() {
    return (
      <Container id="checkout" className="mb-3">
        <Row>
          <Col xs={12} md={8} className="d-flex justify-content-around">
            <Card className="col-4">
              <Card.Body>
                <Card.Header>
                  <Row className="d-flex justify-content-between">
                    <Col>
                      <ButtonToolbar className="d-flex flex-column">
                        <ButtonGroup>
                          <Button>+</Button>
                          <Button>2</Button>
                          <Button>-</Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                    </Col>
                    {/* <Col>
                      <spam>€20.22</spam>
                    </Col> */}
                  </Row>
                </Card.Header>
                <Card.Title>Rice Pitcher</Card.Title>
                <Image src={wine1} style={{ width: "100%" }} />
              </Card.Body>
              <Card.Footer className="text-muted text-right">
                €0.22 x 2 = €0.44
              </Card.Footer>
            </Card>
            {/* <Card className="col-4">
              <Card.Body>
                <Card.Header>
                  <Row className="d-flex justify-content-between">
                    <Col>
                      <ButtonToolbar className="d-flex flex-column">
                        <ButtonGroup>
                          <Button>+</Button>
                          <Button>2</Button>
                          <Button>-</Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Title>Rice Pitcher</Card.Title>
                <Image src={wine1} style={{ width: "100%" }} />
              </Card.Body>
              <Card.Footer className="text-muted text-right">
                €0.22 x 2 = €0.44
              </Card.Footer>
            </Card> */}
          </Col>

          <Col xs={12} md={4}>
            <Card>
              <Card.Body className="p-0 m-2">
                <PayPalButton
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: "0.01"
                          }
                        }
                      ]
                      // application_context: {
                      //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                      // }
                    });
                  }}
                  onApprove={(data, actions) => {
                    // Capture the funds from the transaction
                    return actions.order.capture().then(function(details) {
                      // Show a success message to your buyer
                      alert(
                        "Transaction completed by " +
                          details.payer.name.given_name
                      );

                      // OPTIONAL: Call your server to save the transaction
                      return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                          orderID: data.orderID
                        })
                      });
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
