import { createContext, useState } from "react";
import {productsArray, getProductData} from "./productsStore"

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}

})

// context (cart, addToCart, removeCart)
// Provider => gives my React app access to all the things in my contextc
// we don't define functions inside of the context . Context is just sayin function should be here. When we pass values to our provider, that what's important


/// cart provider
//childern are = if we were to wrap <CartProvider>slfngldn </CartProvider>  -> anything inside is children 
//why do we have an empty array of cart products? - when we create these functions(addOneToCart etc) we are going to use cartProducts state to manipulate what our provider is giving to the rest of our applicatoin 
export function CartProvider({children}) {

    const [cartProducts, setCartProducts] = useState([])
// [{id: 1, qty:2}]; .find() gives us accese to the current element we are looping over

    function getProductQuantity(id) {
        cartProducts.find(product => product.id === id)?.quantity //asking for qty of specific id item

        if (quantity === undefined) {
            return 0;
        } 
        return quantity
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) { //if product is not in cart
            setCartProducts(
                [
                    ...cartProducts, //take all of the objects that are in our cart and put the in fron of this array
                    { //here we adding another object on top of the oject we already have in our cart
                        id:id,
                        quantity:1
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
               cartProducts.map(
                    product => product.id === id                    // if condition ; take the product we are mapping over and if the product.id is = to id we passing in we going to use ternary operator
                    ? {...product, quantity: product.quantity + 1} // if statment is true return ;... - spread operator, which is sayin all the different properties of product put them on ... so it will give you id and qty values and then we are overiding qty. qty = to product.qty + 1
                    : product                                     // if statemetn is false (else statment) here we just want to add product back to our array
               )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id)

        if(quantity == 1){
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                     product => product.id === id                    // if condition ; take the product we are mapping over and if the product.id is = to id we passing in we going to use ternary operator
                     ? {...product, quantity: product.quantity - 1} // if statment is true return ;... - spread operator, which is sayin all the different properties of product put them on ... so it will give you id and qty values and then we are overiding qty. qty = to product.qty - 1
                     : product                                     // if statemetn is false (else statment) here we just want to add product back to our array
                )
             )
        }
    }

    function deleteFromCart(id) {
        // we are goingto start by setting our cart products state
        setCartProducts(
            //we can get current value of our state by saying
            cartProducts =>
            //we going to use cartProducts value and filter over it
            cartProducts.filter(currentProduct  => { // filter starts with empty [] if an {} meets the condition, add the object to [] 2 != 2 false, if its false its not going to be added to our new array
                return currentProduct.id != id
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id) //inside of our cart we have only accese to id
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost

    }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}