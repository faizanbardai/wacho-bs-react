import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">Wines N’ Roses</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#products">Products</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#philosophy">Philosophy</NavDropdown.Item>
              <NavDropdown.Item href="#sociology">Sociology</NavDropdown.Item>
              <NavDropdown.Item href="#my-dream">My Dream</NavDropdown.Item>
              <NavDropdown.Item href="#about-me">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#my-team">My team</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-info">
            <FontAwesomeIcon icon={faCartPlus} />
    <Badge pill variant="primary" className="ml-1">{this.props.cartCount}</Badge>
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
