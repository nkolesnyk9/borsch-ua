import "./Navbar.css"
import {NavLink, Link} from 'react-router-dom'
import {useState} from 'react'
import Modal from "./Modal";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
   

    return (
        <>
        <div className="navbar">
        <Link to="/">Welcome to Ukraine </Link>
        <Link to="/about">About </Link>  
        <NavLink to="/store">Store</NavLink>
        <button onClick={() => setIsOpen(true)}>Cart 0 items</button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        
        </div>

        
        </>
    )

}

export default Navbar