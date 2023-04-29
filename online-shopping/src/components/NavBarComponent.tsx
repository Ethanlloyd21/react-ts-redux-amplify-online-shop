import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarComponent: React.FC<{}> = ({}) => {
  const style = { textDecoration: "none", color: "inherit" };

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shop Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <Nav.Link>
              <Link to="/store" style={style}>
                Store
              </Link>
            </Nav.Link>
            <NavDropdown title="Laptops" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/" style={style}>
                  Apple
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dell</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lenovo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/laptops" style={style}>
                  VIEW ALL
                </Link>
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

            <NavDropdown
              className="nav-link-custom"
              title="TV's"
              id="collasible-nav-dropdown"
            >
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
            <Nav.Link>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View cart
              </Link>
            </Nav.Link>
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
