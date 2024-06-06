
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import {useState} from 'react';

function App() {
  const [product, Setproduct] = useState([
    {
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/6/w/9-vs-9500-9-world-wear-footwear-white-original-imagn6a5fqbncryj.jpeg?q=70&crop=false',
      name: 'TRQ white shoes',
      category: 'shoes',
      seller: 'AMZ seller Ghz',
      price: 1999
    },
    {
      url: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7a13259f/images/Fastrack/Catalog/3147KM01_1.jpg?sw=800&sh=800',
      name: 'fastrack watch',
      category: 'watches',
      seller: 'watch Ltd',
      price: 4395
    },
    {
      url: "https://m.media-amazon.com/images/I/61LKYyGTn7L._SX679_.jpg",
      name: 'dell',
      category: 'laptops',
      seller: 'dell laptop',
      price: 40000 
    },
    {
      url: 'https://m.media-amazon.com/images/I/516WPkDM-wL._SX569_.jpg',
      name: 'Trueview',
      category: 'cctv',
      seller: 'cctv Ltd',
      price: 2699
    },
    {
      url: 'https://www.fliptwirls.com/wp-content/uploads/2023/09/sk2025.png',
      name: 'samsung',
      category: 'mobile',
      seller: 'galaxy Ltd',
      price: 16999
    },
    {
     url: 'https://m.media-amazon.com/images/I/61R8aiy+-9L._SX679_.jpg',
     name: 'boat',
     category:'smart watch',
     seller:'watch Ltd',
     price: 2000
    },
  ])

  const [cart, setCart] = useState([])
  const [ShowCart, setShowCart] = useState(false)

  const addToCart = (data) => {
  setCart([...cart, { ...data, quantity: 1 }])
  }
  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
 <Header count={cart.length} 
 handleShow={handleShow} ></Header>

 {
  ShowCart ?
  <CartList cart={cart}  ></CartList> :
  <ProductList product={product} addTocart={addToCart} ></ProductList>
 }
 
 
    </div>
  );
}
export default App;