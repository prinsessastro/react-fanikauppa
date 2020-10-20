// // const Lista = ({products, setProducts}) => {
// //     const addProduct = (id) => {
// //         const tempList = products.map(products =>{
// //             if (products.id === id){
// //                 const tempList = {...products, products:(products.price + products.price+ 0)};
// //                 return tempList;
// //             } else {
// //                 return products;
// //             }
// //         })
// //         //setLinks(tempList);
// //     }

//     const Info= ({products, addLike}) => {
//         return(
//             <div className="link">
//                <a href= {products.url}>Tästä mennään</a>
//                <p>Id {products.id}</p>
//                <p>Tykkäykset: {products.price}</p>
//                 <button onClick={e => addLike(products.id)}> Osta </button>
//             </div>
//         )
//     }
    
//     const Kartta = ({productinfos, setLinks}) => {
//         const addLike = (id) => {
//             const tempLinks = productinfos.map(products =>{
//                 if (products.id === id){
//                     const tempLink = {...products, prodcuts:(products.price + 1)};
//                     return tempLink;
//                 } else {
//                     return products;
//                 }
//             })
//             setLinks(tempLinks);
//         }
//         const totalPrice= () => {
//             let total = 0;
//             if (products.length !== 0){
//                 const ostosArray= products.map(products => products.price);
//                 console.log(ostosArray);
//                 total = ostosArray.reduce((a,b)=> a + b);
//             }
//             return total;
//         }
//         return (
//         <div className="mainpart"> {products.map(products=> <Info key={products.id} products={products.name} addLike={addLike} />)}
//         <p>Koko Hinta: {totalLikes()} </p>
//         </div>
//         )
//     }

//     addAction =(event)=> {
//         let x = this.state.num1 + this.state.num2
//         this.setState({result: x })
//       }


      
// <Nav.Link className="right" href="#cart">
// <button  className="ostoskarry" onClick={e => setShow(!show)}> {show ? "Piilota Ostoskori" : "Näytä Ostoskori"}
// {/* <button className="ostoskarry" onClick={e => alert("Maksu onnistui")}> */}
//         <span><i className="cart"/></span>
//         {/* {totalPrice()} Muista laittaa kokonaishinta näkyviin ostoskoriin */}
//         {/* Kuinka saada sisältö näkyviin? */}
//         </button>
//     </Nav.Link>


// //https://stackoverflow.com/questions/60138717/add-new-items-to-my-shopping-cart-in-react