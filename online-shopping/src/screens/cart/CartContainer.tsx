import React from "react";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

//Redux-toolkit
import { useDispatch ,useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";

import "./cart.css";


const CartContainer = () => {
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
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item: any) => {
          return (
            <CartItem
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <div>
              <span>${total}</span>{" "}
              <Button variant="outline-primary">Checkout</Button>
            </div>
          </h4>
        </div>
        <Button variant="outline-danger" onClick={() => dispath(clearCart())}>Clear Cart</Button>
      </footer>
    </section>
  );
};

export default CartContainer;
