import "./Navbar.css"
import {NavLink, Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import Modal from "./Modal";
import { CartContext } from "../CartContext"

function Navbar() {
    const cart = useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false);

    //to get total amount of items in cart
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
   

    return (
        <>
        <div className="navbar">
        <Link to="/">Welcome to Ukraine </Link>
        <Link to="/about">About </Link>  
        <NavLink to="/store">Store</NavLink>
        <button onClick={() => setIsOpen(true)}>Cart ({productsCount} items)</button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        
        </div>

        
        </>
    )

}

export default Navbar