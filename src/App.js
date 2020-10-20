import React, {useState} from 'react';
import logo from './logo.svg';
import productsCatalog from './components/product_data';
import images from './components/shop_data';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
// import Products from './components/Products';
import Products from './components/AddToAmount';
import Details from './components/Details';
import Application from './components/History';
// import {Link, superCart} from './components/Cart';
import SuperCart from './components/SuperCart'
import Default from './components/Default';
// import forshop from '../public/img/forshop.png'; // with import
import { Container, Row } from 'react-bootstrap';
import './App.css';

const App = () => {
  const linkki = [{ id: 1, desc: "Cart", url: "./components/Cart" },
  { id: 2, desc: "Default", url: "./components/Default" }
  ];

  const [counter, setCounter] = useState(0);
  const[links, setLinks] = useState([]);

  const[show, setShow] = useState(true); //TÄMÄ

  const [products, setProducts] = useState(productsCatalog);

  return (
    <div className="App">
      <header>
      <MyNavbar />
      </header>
      {/* <MyCarousel images={images} /> */}
      <Container>
        <section className="toRightSide">
        
        <button  className="ostoskarry" onClick={e => setShow(!show)}> {show ? "Näytä Ostoskori" : "Piilota Ostoskori"}
        </button>
        {/* <Default /> */}
        </section>
        <section className="product">
        { show && 
          <Row>
        <section><h1>Tuotteet:</h1></section>
            <Products products={products} setProducts={setProducts}/>
          </Row>}
        </section>
        {!show &&
        <SuperCart products={products} setProducts={setProducts} />}
          {/* <Application /> */}

      </Container>
    </div>
  );
}

export default App;
