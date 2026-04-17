import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header';
import './Home.css';
import ProductGrid from './ProductGrid';

const Home = ({ cart, loadCart }) => {

  const [products, setProducts] = useState([])

  const getHomeData = async () => {
      const response = await axios.get('api/products')
      setProducts(response.data)
    }

  useEffect( () => {
  
    getHomeData()
  }, [])


  return (
    <>
      <link rel="icon" href="images/home-favicon.png" />
      <title>Ecommerce - Buy </title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}


export default Home
