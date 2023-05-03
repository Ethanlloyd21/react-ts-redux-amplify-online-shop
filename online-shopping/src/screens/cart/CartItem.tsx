
//Redux-toolkit
import { useSelector } from "react-redux";
import { removeItem } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import "./cart.css";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;

}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const { amount } = useSelector((state: any) => state.cart);
 
  return (
    <article className='cart-item'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          // onClick={() => {
          //   dispatch(increase({ id }));
          // }}
        >
          <BsChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          // onClick={() => {
          //   if (amount === 1) {
          //     dispatch(removeItem(id));
          //     return;
          //   }
          //   dispatch(decrease({ id }));
          // }}
        >
          <BsChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
