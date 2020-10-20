import React,{useState} from 'react';
// import Image from 'react-bootstrap';
import '../App.css';


const Link= ({products, addProduct}) => {
    return(
        <div className="link">
           <p>Id {products.id}</p>
           <p>Nimi: {products.name}</p>
           <p>Hinta: {products.price}</p>

            <button onClick={e => addProduct(products.price)}> Osta </button>
        </div>
    )
}


const CartInfo = ({products, setLinks}) => {
    const addProduct = (id) => {
        let alv = 1.24;
        const tempList = products.map(products =>{
            if (products.id === id){
                const tempList = {...products, products:(products.price + products.price+ alv)};
                return tempList;
            } else {
                return products;
            }
        })
        setLinks(tempList);
    }
const totalPrice= ({products}) => {
    let total = 0;
    if (products.length !== 0){
        const ostosArray= products.map(products => products.price);
        console.log(ostosArray);
        total = ostosArray.reduce((a,b)=> a + b);
    }
    return total;
}
    return (
        <div className="product">
            <h2 className="productH2">Hello from Cart <Link /> </h2>
        </div>
    );
}

const superCart = () => {
    // const [newLink, setNewLink] = useState({
    //     url: "",
    //     newDesc: "",
    //     likes:0
    // });

    //{products, setLinks}

    // return (
    //     <div className="mainpart">
    //         <h2>Ostokset: </h2>
    //     {products.map(products => <totalPrice  key={products.id} />)}
    //         <p>Loppusumma: {totalPrice()} </p>
    //     </div>
    return (
        <div className="product">
            <h2 className="productH2">Hello from Cart <Link /> </h2>
        </div>
    );
}

export {Link, superCart};