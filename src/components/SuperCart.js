import React, { useState } from 'react';
// import { Card, CardGroup } from 'react-bootstrap';
import '../App.css';


// const MyCard = ({ products }) => {
//     return (

// <CardGroup>
//   <Card>
//     <Card.Img variant="top" src={filteredProduct.img} alt="Kuva" />
//     <Card.Body>
//       <Card.Title>{filteredProduct.name}</Card.Title>
//       <Card.Text>
//     <p>Price:{filteredProduct.price}€</p>
//     <p>Määrä:{filteredProduct.amount}</p>
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">    <p>Määrä:{filteredProduct.amount}</p></small>
//     </Card.Footer>
//   </Card>
//   </CardGroup>
//     )
// }



const MyFilter = ({ products, product, setProducts }) => {



    const editAddAmount = (amount, id) => {
        const tempProducts = products.map(product => {
            if (product.id === id && product.amount > 0) {
                const tempProduct = { ...product, amount: product.amount + amount };
                return tempProduct;
            } else {
                return product;
            }
        })
        setProducts(tempProducts);
    }


    return (
        <div>
            {products.filter(product => product.amount > 0).map(filteredProduct => (
                <div className="flex">
                    <h4>{filteredProduct.name}</h4>
                    <img className="thumb" src={filteredProduct.img} alt="Kuva" />
                    <p>Price:{filteredProduct.price}€</p>
                    <button className="thumbuttonminus" onClick={() => editAddAmount(-1, filteredProduct.id)} > - </button>
                    <p>Määrä:{filteredProduct.amount}</p>
                    <button className="thumbutton" onClick={() => editAddAmount(1, filteredProduct.id)}>+</button>



                </div>
            ))}
        </div>
    )
}

const Kaikki = ({ products }) => {

    const totalAmount = () => {
        let total = 0;
        if (products.length !== 0) {
            const ostosArray = products.map(product => product.amount * product.price);
            console.log(ostosArray);
            total = ostosArray.reduce((a, b) => a + b, 0);
        }
        return total;
    }
    return (
        <div className="ALL">
            <p>Koko Hinta: {totalAmount()}€ </p>

        </div>
    )
}

const PurchaseAll = ({ products, setForm }) => {

    const [show, setShow] = useState(!true); //TÄMÄ

    const [newInfo, setNewInfo] = useState({
        name: "",
        email: "",
        address: "",
        postalcode: "",
        district: ""
    });

    const changeHandler = (e, field) => {
        const tempForm = { ...newInfo };//kopio olion sisällön, spread!
        tempForm[field] = e.target.value;
        setNewInfo(tempForm);
    }
    // console.log(newInfo);

    const submitHandler = (e) => {
        e.preventDefault(); //estetää lomakkeen lähetys palvelimille
        if (newInfo.name !== "" && newInfo.email !== "" && newInfo.address !== "" && newInfo.postalcode !== "" && newInfo.district !== "") {
            // console.log('button clicked', e.target.value)
           // setForm(tempInfo);
        }
        else {
            console.log("Anna Tiedot");
        }
    }
    return (
        <div>
            <button onClick={e => setShow(!show)}>Tee tilaus</button>
            {show &&
                <div className="amount">
                    <form onSubmit={submitHandler}>
                        <label>
                            Name:
                                <input type="text" value={newInfo.name} onChange={(e)=>changeHandler(e, "name")} />
                        </label>
                        <br/>
                        <label>
                            Email:
                                <input type="email" value={newInfo.email} onChange={(e)=>changeHandler(e, "email")} />
                        </label>
                        <br/>
                        <label>
                            Address:
                                <input type="text" value={newInfo.address} onChange={(e)=>changeHandler(e, "address")} />
                        </label>
                        <br/>
                        <label>
                            PostalCode:
                                <input type="text" value={newInfo.postalcode} onChange={(e)=>changeHandler(e, "postalcode")} />
                        </label>
                        <br/>
                        <label>
                            District:
                                <input type="text" value={newInfo.district} onChange={(e)=>changeHandler(e, "district")} />
                        </label>
                        <br/>

                        <input onClick={e => alert("Tilaus on vahvistettu, kiitos kaupoista!")} type="submit" value="Vahvista Tilaus" />
                    </form>
                </div>}
        </div>
    )
}



const SuperCart = ({ products, setProducts }) => {

    return (
        <div className="product">
            <h2 className="productH2">Cart: </h2>
            <MyFilter products={products} setProducts={setProducts} />
            <Kaikki products={products} />
            {/* Tähän laita Vahvista Tilaus! */}
            <PurchaseAll />
        </div>
    );
}

export default SuperCart;