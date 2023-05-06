
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";
import { BsFillCartFill } from "react-icons/bs";
import { useAppSelector } from "../hooks/hooks";
import { LinkContainer } from "react-router-bootstrap";

const NavBarComponent = () => {
  console.log(
    useAppSelector((store) => {
      console.log(store);
    })
  ); // console log the store for dev purposes
  // const style = { textDecoration: "none", color: "inherit" };

  const { amount } = useAppSelector((store) => store.cart);

  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                id="App-logo"
              />{" "}
              Shop Online
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link className="nav-link-custom" >
                <Link to="/store" style={style}>
                  Store
                </Link>
              </Nav.Link> */}
              <LinkContainer to="/store">
                <Nav.Link className="nav-link-custom">Store</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/phones">
                <Nav.Link className="nav-link-custom">iPhone</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/laptops">
                <Nav.Link className="nav-link-custom">MacBook</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link className="nav-link-custom">iWatch</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/cartcontainer">
                <Nav.Link className="nav-link-custom">
                  Cart <BsFillCartFill size={20} />
                  {amount}
                </Nav.Link>
              </LinkContainer>
              {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
