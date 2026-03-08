import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router'
import axios from 'axios'
import './App.css'
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout'
import Orders from './pages/orders/Orders';
import Tracking from './pages/Tracking';
import NotFound from './pages/NotFound';

function App() {
  
    const [cart, setCart] = useState([])

    const fetchAppData = async () => {
        const response =  axios.get('api/cart-items?expand=product')
        setCart(response.data)
    }
   
    useEffect(() => {
      fetchAppData
    },[])
    
  return (

    <Routes>
      <Route index element={<Home cart={cart} />} />
      <Route path="orders" element={<Orders cart={cart}/>} />
      <Route path="checkout" element={<Checkout cart={cart} />} />
      <Route path="tracking" element={<Tracking cart={cart}/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
   
}

export default App
