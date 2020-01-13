import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
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
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
