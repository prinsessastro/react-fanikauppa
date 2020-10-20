import React from 'react';
import '../App.css';


const Detail = ({products}) => {


  return (
      <div className="product">
    <h2 className="productH2">{products.name}</h2>
              <p>{products.desc}</p>
              <p>Kieli:{products.lang}</p>
              <p>Price:{products.price}€</p>
              <img src={products.img} alt="Kuva" thumbnail/>
              <button>Osta</button>
      </div>
  );
}
//ottaa props:ina Taulukon olijoita
const Details= ({products}) =>{
    return(
        <div className="mainpart">
        {products.map(products => <Detail products={products} key={products.id}/>)}

        </div>
    )
}
export default Details;
