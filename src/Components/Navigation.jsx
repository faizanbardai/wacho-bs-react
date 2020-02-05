import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Link to="/">
        <Navbar.Brand>Wines N’ Roses</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
