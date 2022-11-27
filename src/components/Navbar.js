import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useState} from "react";
import Modal from "./Modal";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  // write function that states that if you scroll past the height of the navbar
  // then set the state to true and change the background color
  // else set it to false
  const changeBackground = () => {
    if (window.scrollY > 50) {
      setScrollBackground(true);
    } else {
      setScrollBackground(false);
    }
  };

  // add event listener that watches for scroll event
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className={scrollBackground ? "navbar scroll-background" : "navbar"}>
        <Link className="links" to="/">
          Home Page{" "}
        </Link>
        <Link className="links" to="/about">
          About{" "}
        </Link>
        <NavLink className="links" to="/store">
          Store
        </NavLink>
        <button className="cart" onClick={() => setIsOpen(true)}>
          Cart <MdShoppingCart />
        </button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
