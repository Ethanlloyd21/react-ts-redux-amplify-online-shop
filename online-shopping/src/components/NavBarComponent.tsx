import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../logo.svg";
import { BsFillCartFill } from "react-icons/bs";
import CartContainer from "../screens/cart/CartContainer";

interface VerticalModalProps {
  modalShow: boolean;
  onHide: () => void;
}

const MyVerticallyCenteredModal: React.FC<VerticalModalProps> = ({
  modalShow,
  onHide,
}) => {
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Shopping Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CartContainer />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const NavBarComponent: React.FC<{}> = ({}) => {
  console.log(useSelector((store) => {console.log(store)}));
  const style = { textDecoration: "none", color: "inherit" };
  const [modalShow, setModalShow] = useState<boolean>(false);

  const { amount } = useSelector((store: any) => store.cart);

  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <MyVerticallyCenteredModal
          modalShow={modalShow}
          onHide={() => setModalShow(false)}
        />
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
              />{" "}
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
              <Nav.Link
                className="nav-link-custom"
                // onClick={() => setModalShow(true)}
              >
                <Link to="/cartcontainer" style={style}>
                Cart <BsFillCartFill size={20} />{amount}
                </Link>
              </Nav.Link>
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
