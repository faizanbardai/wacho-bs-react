import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Link to="/">
        <Navbar.Brand>Wine N’Art</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#wines">Wines</Nav.Link>
          <Nav.Link href="#my-team">My Team</Nav.Link>
          <Nav.Link href="#philosophy">Philosophy</Nav.Link>
          <Nav.Link href="#sociology">Sociology</Nav.Link>
          <Nav.Link href="#my-dream">My Dream</Nav.Link>
          <Nav.Link href="#your-rights">Your Rights</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
