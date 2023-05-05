import React, { useEffect } from 'react';
import Navigation from './screens/Navigation';
import { calculateTotals } from './redux/features/cart/cartSlice';
import { getCartItems } from './redux/features/store/storeSlice';
import ModalCartConfirm from './components/ModalCartConfirm';
import './App.css';

import { useAppDispatch, useAppSelector } from './hooks/hooks';


function App() {

  // const { cartItems, isLoading } = useSelector((state: any) => state.cart);
  // const { isOpen } = useSelector((state: any) => state.modal);
  // const dispatch = useDispatch();

  const { cartItems, isLoading } = useAppSelector(state => state.cart);
  const { isOpen } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  },[dispatch]);

  if(isLoading) {
    return <div className='center'><h1>Loading</h1></div>
  }
  
  return (
    <div className="App">
      { isOpen &&  <ModalCartConfirm /> }
     
      <Navigation />
    </div>
  );
}

export default App;
