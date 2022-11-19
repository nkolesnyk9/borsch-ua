import "./Navbar.css"
import {NavLink, Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import Modal from "./Modal";
import {MdShoppingCart} from 'react-icons/md'
import {ShopContext} from '../context/CartContext'


function Navbar() {
    // const [show, setShow] = useState(false)
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)
    
    const [isOpen, setIsOpen] = useState(false);
    
   

    return (
        <>
        <div className="navbar">
        <Link className="links" to="/">Home Page </Link>
        <Link className="links" to="/about">About </Link>  
        <NavLink className="links" to="/store">Store</NavLink>
        <button className="cart"  onClick={() => setIsOpen(true)}>Cart <MdShoppingCart />
        </button>
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    )

}

export default Navbar