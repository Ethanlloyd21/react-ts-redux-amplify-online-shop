import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarComponent: React.FC<{}> = ({}) => {
  const style = { textDecoration: "none", color: "inherit" };

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={style}>
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
              className="nav-link-custom"
              title="Laptops"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/" style={style}>
                  Apple
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >Dell</NavDropdown.Item>
              <NavDropdown.Item >HP</NavDropdown.Item>
              <NavDropdown.Item >Lenovo</NavDropdown.Item>
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
              <NavDropdown.Item >Phones</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav-link-custom"
              title="TV's"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item >TV's</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
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
