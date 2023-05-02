import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";
import { BsBagCheck, BsFillCartFill } from "react-icons/bs";

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
            <Nav.Link className="nav-link-custom">
              <Link to="/phones" style={style}>
                iPhone
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link-custom">
              <Link to="/laptops" style={style}>
                MacBook
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link-custom">
              <Link to="/" style={style}>
                iWatch
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link-custom">
              <Link to="/cart" style={style}>
                View cart{" "}<BsFillCartFill size={20} />
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