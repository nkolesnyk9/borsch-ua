import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { CartContext } from "../CartContext"
import { useContext } from "react";
import CartProduct from "./CartProduct";
import { ShopContext } from "../context/shopContext";


const Modal = ({setIsOpen}) => {
//   const cart = useContext(CartContext)

//   const checkout = async () => {
//     await fetch('http://localhost:3003/checkout', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({items: cart.items}) // we are passing items from our cart to our backend
//     }).then((response) => {
//         return response.json();
//     }).then((response) => {
//         if(response.url) {
//             window.location.assign(response.url); // this will forward users over to stripe paymetn 
//         }
//     });
// }
  // const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  const { checkout, removeLineItem} = useContext(ShopContext)

 
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} >
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Items in your cart:</h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              {
                checkout.lineItems?.length ? checkout.lineItems.map(item => (
                  <div key={item.id}>
                    <h2>{item.title}</h2>
                  </div>
              
                )) :<div>Cart is Empty</div>
              }
            </div> 
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}></div>
            </div>
          </div>
        </div>
      </div>
    </>
)}

export default Modal;