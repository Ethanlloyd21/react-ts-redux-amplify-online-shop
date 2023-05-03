import React, { useState } from "react";
import CartItem from "./CartItem";
import { Button, Modal } from "react-bootstrap";

//Redux-toolkit
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";

import "./cart.css";

const CartContainer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cartItems, total, amount } = useSelector((store: any) => store.cart);
  const dispath = useDispatch();

  console.log(cartItems);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button 
            variant="danger" 
            onClick={() => {
              dispath(clearCart());
              handleClose();
            }
          }>
            Yes, I want to clear my cart!
          </Button>{" "}
          <Button variant="secondary" onClick={handleClose}>No, go back to my cart.</Button>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item: any) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total
              <div>
                <span>${total}</span>{" "}
                {cartItems.length ? (
                  <Button variant="outline-primary">Checkout</Button>
                ) : null}
              </div>
            </h4>
          </div>
          {cartItems.length ? (
            <Button
              variant="outline-danger"
              onClick={() => setShow(true)}
            >
              Clear Cart
            </Button>
          ) : null}
        </footer>
      </section>
    </>
  );
};

export default CartContainer;
