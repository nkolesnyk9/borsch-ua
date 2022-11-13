import "./ProductCard.css"
import React, {useEffect, useContext} from "react"
import {useParams} from 'react-router-dom'
import { ShopContext } from "../context/CartContext"


const ProductCard = () => {
// useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path
    const {handle} = useParams()
  
    const {fetchProductWithHandle, addItemToCheckout, product} = useContext(ShopContext)



//will grab products with handle right away
    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])//inputing all the variables this function is depended on. So whenever handle is changes we want to recall that function 
  
console.log("here is the product", product)


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
                
                <button className="card-button" 
                    onClick={() => addItemToCheckout(product.variants[0].id, 1)}> Add To Cart
                </button>
               
            </div>
               

        </div>

    )

 
}
export default ProductCard