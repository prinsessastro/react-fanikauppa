import React, { useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import '../App.css';




const OproductList = ({ products, setProducts }) => {

    // const [right, setRight] = useState(0);
    // const [newPlus, setNewPlus] = useState({
    //     amount: 0
    // });
    // const [newMinus, setNewMinus] = useState({
    //     amount: 0
    // });

    // const addAmount = (id) => {
    //     // const tempProducts = products.map(product => {
    //     //     if (product.id === id) {
    //     //         const tempProduct = { ...product, amount: (MIETI) };
    //     //         return tempProduct;
    //     //     } else {
    //     //         return product;
    //     //     }
    //     // })
    //     // setProducts(tempProducts);
    // }


    // const [allClicks, setAll] = useState([]);





    // const changeHandler = (e, field) => {

    //     const tempProduct = { ...newAmount};//kopio olion sisällön, spread!
    //     // setAll(allClicks.concat(newAmount +1));
    //     tempProduct[field] = e.target.value;
    //     setNewAmount(tempProduct);
    // }


    // const submitHandler = (e) => {
    //     e.preventDefault(); //estetää lomakkeen lähetys palvelimille
    //     if (newAmount.plus !== 0) {
    //         setProducts(products.concat({ ...newAmount, id: products.id }));
    //         // console.log(setProducts);
    //     }
    //     else {
    //         console.log("Anna Tiedot");
    //     }
    // }



    const [show, setShow] = useState(!true); //TÄMÄ

    return (
        <div className="product">
            <Col xs={4} md={8}>
                <div>
                    <h2 className="productH2" onClick={e => setShow(!show)}>
                        {products.name}</h2>
                    <p>Price:{products.price}€</p>
                    <p>Määrä:{products.amount}</p>
                    <Image src={products.img} alt="Kuva" thumbnail />


                    {show &&
                        <div>
                            <p>{products.desc}</p>
                            <p>Kieli:{products.lang}</p>
                        </div>}


                </div>

                {/* <div className="amount">
                    <form>
                        <label>
                            Määrä: </label>
                        <div>
                            <button onClick={() => setRight(right + 1)}>
                                Testi +
                            </button>
                            <button onClick={() => setRight(right - 1)}>
                                Testi -
                            </button>
                            {right}
                        </div>
                        
                    onClick={() => setNewAmount()} 
                       

                    </form>
                </div> */}

                {/* <div>
                        <Button onClick={handlePlus} text='+' />
                        <Button onClick={handleMinus} text='-' />

                        <p>Yllä vaaralliset buttonit, alla melkein toimivat buttonit</p>
                            <button  value={newAmount.plus}
                                onChange={e => changeHandler(e, "plus")}>
                                +
                            </button>
                            {newAmount.yht}
                            <button  value={newAmount.minus}
                                onChange={e => changeHandler(e, "minus")}
                            >
                                -
                            </button>
                            <Add allClicks={allClicks}/>
                            && newAmount.minus !== 0

                        </div> */}

                        {/* 
                        <select
                            name="amount"
                            value={products.amount}
                            onChange={e => changeHandler(e)}
                            required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select> */}
            </Col>
        </div>
    );
}

//ottaa props:ina Taulukon olijoita
const Products = ({ products }) => {
    return (
        <div className="mainpart">
            {products.map(products => <OproductList products={products} key={products.id} />)}

        </div>
    )
}
export default Products;

