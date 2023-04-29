import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";

const NavBarComponent: React.FC<{}> = ({}) => {
  const style = { textDecoration: "none", color: "inherit" };

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={style}>
          <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              id="App-logo"
            />{' '}
            Shop Online
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link-custom">
              <Link to="/store" style={style}>
                Store
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Laptops"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/" style={style} className="nav-link-custom">
                  Apple
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >Dell</NavDropdown.Item>
              <NavDropdown.Item >HP</NavDropdown.Item>
              <NavDropdown.Item >Lenovo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/laptops" style={style}>
                  All Laptops
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav-link-custom"
              title="Phone"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item >
                iPhone
              </NavDropdown.Item>
              <NavDropdown.Item >Samsung</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to="/phones" style={style}>
                All Phones
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav-link-custom"
              title="TV's"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item >
                LG
              </NavDropdown.Item>
              <NavDropdown.Item >Samsung</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to="/tv" style={style}>
                All T.V's
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link-custom">
              <Link to="/cart" style={style}>
                View cart
              </Link>
            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
