import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header';
import './Home.css';
import ProductGrid from '../ProductGrid';

const Home = ({ cart }) => {

  const [products, setProducts] = useState([])


  useEffect(() => {
    axios.get('api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
      .finally(() => console.log())

  }, [])


  return (
    <>
      <link rel="icon" href="images/home-favicon.png" />
      <title>Ecommerce - Buy </title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  )
}


export default Home
