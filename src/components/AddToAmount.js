import React, { useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import '../App.css';




const Oamount = ({ product, setAmount }) => {


    const [newAmount, setNewAmount] = useState(0);
    const changeHandler = (e) => {
        setNewAmount(e.target.value);
        // console.log(newAmount);
    }

    const submitHandler = (e) =>{
        e.preventDefault(); //estetää lomakkeen lähetys palvelimille
        let tempAmount= Number(Math.abs(newAmount));
        setAmount(tempAmount, product.id); ///HUOM!!!
    }

    // console.log(products[0]);

    return (
        <div className="product">

                <div className="amount">
                    <form onSubmit={submitHandler}>
                        <label>
                            Määrä: 
                        {product.amount}

                        <input type="number"
                        className="nappi"
                        value={newAmount}
                        id={product.id} name="newAmount"
                        onChange={e => changeHandler(e)}/>
                        </label>
                        <input type="submit" value="Lisää ostoskoriin" />
                    </form>
                </div>
        </div>
    );
}

const OproductList = ({ product, products, setProducts }) => {

    const [show, setShow] = useState(!true); //TÄMÄ

    // setAmount !!!!

    const addAmount = (amount, id) => {
        // console.log(id);
        // console.log('Amount'+amount);
        const tempProducts = products.map(product => {
            if (product.id === id && product.amount >= 0 ) {
                const tempProduct = { ...product, amount:amount };
                return tempProduct;
            } else {
                return product;
            }
        })
        setProducts(tempProducts);
    } 

    return (
        <div className="product">
            <Col xs={4} md={8}>
                <div>
                    <h2 className="productH2" onClick={e => setShow(!show)}>
                        {product.name}</h2>
                    <p>Price:{product.price}€</p>
                    {/* <p>Määrä:{products.amount}</p> */}
                    <Image src={product.img} alt="Kuva" thumbnail />

                    {show &&
                        <div>
                            <p>{product.desc}</p>
                            <p>Kieli:{product.lang}</p>
                        </div>}

                    <Oamount product={product} key={product.id} setAmount={addAmount} />

                </div>
            </Col>
        </div>
    );
}


//ottaa props:ina Taulukon olijoita
const Products = ({ products, setProducts }) => {
    return (
        <div className="mainpart">
            <div className="flex" >
            {products.map(product => <OproductList product={product} products={products} setProducts={setProducts} key={products.id} />
            )}
            {/* <Add /> */}
            </div>
        </div>
    )
}


export default Products;

