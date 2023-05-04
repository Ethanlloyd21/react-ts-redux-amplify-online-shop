import React, { useEffect } from 'react';
import Navigation from './screens/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './redux/features/cart/cartSlice';
import ModalCartConfirm from './components/ModalCartConfirm';
import './App.css';


function App() {

  const { cartItems } = useSelector((state: any) => state.cart);
  const { isOpen } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])
  
  return (
    <div className="App">
      { isOpen &&  <ModalCartConfirm /> }
     
      <Navigation />
    </div>
  );
}

export default App;
