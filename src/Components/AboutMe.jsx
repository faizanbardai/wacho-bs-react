import React from "react";
import { ListGroup, Row, Col, Image, Container } from "react-bootstrap";
import aboutMeImg from "../img/aboutMeImg.jpg";

export default function AboutMe(props) {
  const {
    // heading,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
  } = props.section;
  return (
    <Container id="about-me">
      {/* <div
        className="vh-100 d-flex parallax justify-content-center align-items-center"
        style={{ backgroundImage: "url(" + aboutMeImg + ")" }}
      >
        <h2 className="text-white">{heading}</h2>
      </div> */}
      <Row className="d-flex justify-content-center mx-0">
        <Col xs="12" md="4" className="pb-3 text-center">
          <Image
            src={aboutMeImg}
            style={{ width: "100%", maxWidth: "300px" }}
            roundedCircle
          />
        </Col>
        <Col xs="12" md="8" className="pb-3">
          <ListGroup>
            <ListGroup.Item>{paragraph1}</ListGroup.Item>
            <ListGroup.Item>{paragraph2}</ListGroup.Item>
            <ListGroup.Item>{paragraph3}</ListGroup.Item>
            <ListGroup.Item>{paragraph4}</ListGroup.Item>
            <ListGroup.Item>{paragraph5}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
