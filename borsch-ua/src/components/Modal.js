import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { CartContext } from "../CartContext"
import { useContext } from "react";
import CartProduct from "./CartProduct";


const Modal = ({setIsOpen}) => {
  const cart = useContext(CartContext)

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    });
}
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

 
  return <>
    <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Items in your cart:</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent} >
            {productsCount > 0 ?
              <>
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                ))}
                  <h1>Total:{cart.getTotalCost().toFixed(2)}</h1>
                  <button className={styles.deleteBtn} onClick={checkout}>
                  {/* <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}> */}
                Purchase items!
              </button>
              </>

            :
              <h1>There are no items in your cart</h1>
            }
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              
              {/* <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      </div>
      </>
  
};

export default Modal;