import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [navExpanded, setNavExpanded] = useState(false);
  return (
    <Navbar
      id="navbar"
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      onToggle={() => {
        setNavExpanded(!navExpanded);
      }}
      expanded={navExpanded}
    >
      <Link to="/">
        <Navbar.Brand>Wines N' Colors</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          onSelect={() => {
            setNavExpanded(false);
          }}
        >
          <Nav.Link href="#wines">Wines</Nav.Link>
          <Nav.Link href="#art">Art</Nav.Link>
          <Nav.Link href="#about-me">About Me</Nav.Link>
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
