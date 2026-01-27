import Header from '../components/Header';
import './Home.css';

const NotFound = () => {
  return (
    <>
      <link rel="icon"  href="images/home-favicon.png" />
      <title>Ecommerce - Not Found</title>
      <Header />

      <div className='home-page'><p>Page Not Found</p></div>
    </>
  )
}


export default NotFound
