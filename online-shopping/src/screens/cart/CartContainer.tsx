import React from "react";
import data from "../../assets/data/data.json";
import CartItem from "./CartItem";
import { Container } from "react-bootstrap";
import "./cart.css";

const CartContainer = () => {
  // if (amount < 1) {
  //   return (
  //     <section className="cart">
  //       <header>
  //         <h2>your bag</h2>
  //         <h4 className="empty-cart">is currently empty</h4>
  //       </header>
  //     </section>
  //   );
  // }
  return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {data.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>$5000</span>
            </h4>
          </div>
          <button className="btn clear-btn">clear cart</button>
        </footer>
      </section>
  );
};

export default CartContainer;
