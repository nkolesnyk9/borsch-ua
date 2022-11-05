import "./ProductCard.css"
import { CartContext } from "../CartContext"
import {useContext} from 'react'

function ProductCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)
    return (
        <div className="card">
            <div className="card-body">
                <div className="title">{product.title}</div>
                <div className="price">${product.price}</div>
                {productQuantity > 0 ?
                    <>
                        <div className="addToCart">
                        In Cart : {productQuantity}
                        {/* <input id="name" type="text" name="name" /> */}
                        <button onClick={() => cart.addOneToCart(product.id)}> + </button>
                        <button onClick={() => cart.removeOneFromCart(product.id)}> - </button>
                        </div>
                        <button onClick={() => cart.deleteFromCart(product.id)}> Remove from cart</button>
                        </>
                    :
                    <button className="card-button" onClick={() => cart.addOneToCart(product.id)}> Add To Cart</button>
                }
                
            </div>
        </div>
    )
}
export default ProductCard