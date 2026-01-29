import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders';
import Tracking from './pages/Tracking';
import NotFound from './pages/NotFound';

function App() {
  
    const [cart, setCart] = useState([])

    useEffect(() => {
       axios.get('api/cart-items?expand=product')
        .then(response => setCart(response.data))
        .catch(error => console.log(error))
        .finally(() => console.log())  
     
    }, [])
    
  return (

    <Routes>
      <Route index element={<Home cart={cart} />} />
      <Route path="orders" element={<Orders/>} />
      <Route path="checkout" element={<Checkout cart={cart} />} />
      <Route path="tracking" element={<Tracking/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
   
}

export default App
