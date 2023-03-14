import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getCartItems } from './redux/cartSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);
  const { cartItems } = useSelector((state) => state.cart);

  return <div className="">Concept Clear</div>;
}

export default App;
