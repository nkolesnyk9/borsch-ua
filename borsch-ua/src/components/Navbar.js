import "./Navbar.css"
import {NavLink, Link} from 'react-router-dom'

function Navbar() {

    return (
        <div className="navbar">
        <Link to="/">Welcome to Ukraine </Link>
        <Link to="/about">About </Link>  
        <NavLink to="/store">Store</NavLink>
        <button>Cart 0 items</button>
        </div>
    )

}

export default Navbar