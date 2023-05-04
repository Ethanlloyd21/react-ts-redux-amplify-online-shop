
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

//Redux-toolkit
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/features/modal/modalSlice";
import "./cart.css";


const CartContainer = () => {

  const { cartItems, total, amount } = useSelector((state: any) => state.cart);
  const dispath = useDispatch();

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
              onClick={() => dispath(openModal())}
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
