import "./ProductCard.css"
import { CartContext } from "../CartContext"
// import {useContext} from 'react'

// function ProductCard(props) {
//     const product = props.product
//     const cart = useContext(CartContext)
//     const productQuantity = cart.getProductQuantity(product.id)
//     console.log(cart.items)
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <div className="title">{product.title}</div>
//                 <div className="price">${product.price}</div>
//                 {productQuantity > 0 ?
//                     <>
//                         <div className="addToCart">
//                         In Cart : {productQuantity}
//                         {/* <input id="name" type="text" name="name" /> */}
//                         <button onClick={() => cart.addOneToCart(product.id)}> + </button>
//                         <button onClick={() => cart.removeOneFromCart(product.id)}> - </button>
//                         </div>
//                         <button onClick={() => cart.deleteFromCart(product.id)}> Remove from cart</button>
//                         </>
//                     :
//                     <button className="card-button" onClick={() => cart.addOneToCart(product.id)}> Add To Cart</button>
//                 }
                
//             </div>
//         </div>
//     )
// }
// export default ProductCard

import React, {useEffect, useContext} from "react"
import {useParams, Link} from 'react-router-dom'
import { ShopContext } from "../context/shopContext"


const ProductCard = () => {
// here we are using the params to get handle component
    const {handle} = useParams()
    const {fetchProductWithHandle, addItemToCheckout, product} = useContext(ShopContext)
    // const productQuantity = cart.getProductQuantity(product.variants[0].id)
//destructure our Context
    

//will grab products with handle right away
    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])//here we are inputing all the variables this function is depended on. So whenever handle is changes we want to recall that function 

    
//this will allow us to show loading state whenever there is no product or the product is still loading  
   if (!product.title) return <div>Loading...</div> 

    return (
    
        <div className="card">
            <div className="card-image">
                <img src={product.images[0].src}></img>
            </div>
            <div className="card-text">
                <h3>{product.title}</h3>
                <h4>${product.variants[0].price.amount}</h4>
                <p>{product.description}</p>
            </div>
               
                    <>
                       <div className="addToCart">
                         In Cart : 
                        {/* <input id="name" type="text" name="name" /> */}
                        <button>  + </button>
                        <button>  - </button>
                        </div>
                         <button > Remove from cart</button>
                        </>
                   
                     <button className="card-button" onClick={() => addItemToCheckout(product.variants[0].id, 1)}> Add To Cart</button>
        
      
        </div>
 
       
    )
//let;s display the data that we are receiving from the particular product, just to see that it works
        // <>
        //     <h2>Product page</h2>
        //     <div className="card">
        //     <div className="card-body">
        //         <div className="title">{product.title}</div>
        //         <div className="img">{product.images[0].src}</div>
        //          <div className="price">${product.variants[0].price.amount}</div>
               
        //             {/* <Button 
        //                 onClick={() => addItemToCheckout(product.variants[0].id, 1)}
        //             >Add To Cart</Button> */}
        //     </div>
        //     </div>


        // </>
    
}

export default ProductCard