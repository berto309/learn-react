import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'

function App() {
 
  return (

    <Routes>
      <Route index element={<Home/>} />
      <Route path="/checkout" element={<div>Checkout page</div>} />
    </Routes>
  );
   
}

export default App
