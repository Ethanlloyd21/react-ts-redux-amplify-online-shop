import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarComponent: React.FC<{}> = ({}) => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shop Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link-custom">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link-custom">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Electronics
              </Link>
            </Nav.Link>
            <NavDropdown className="nav-link-custom" title="Laptops" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                  Laptops
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav-link-custom"
              title="Phone"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Phones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="nav-link-custom" title="TV's" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TV's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">View cart</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
