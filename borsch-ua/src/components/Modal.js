import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { ShopContext } from "../context/CartContext";
import { Link, redirect } from 'react-router-dom'


const Modal = ({setIsOpen}) => {

  const { checkout, removeLineItem, addItemToCheckout, product } = useContext(ShopContext)

  // const [setTotalPrice] = useState();
  // <p setTotalPrice={item.variant.price.amount * item.quantity}>Total Price:{setTotalPrice}</p>

  
  console.log("here is the check out",checkout)
  
  return (
    <>
      <div className={styles.darkBG}  >
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Items in your cart:  </h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false) }>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              {checkout.lineItems && checkout.lineItems.map(item => (
                <div className={styles.itemCard} key={item.id}>
                  <div className={styles.leftPart}>
                    <div>
                    <p>{item.title}</p> 
                    </div>
                    <div>
                      <img className={styles.cartImg} src={item.variant.image.src}></img>
                    </div>
                  </div>
                  <div className={styles.rightPart}>
                    <div>
                      <p>${item.variant.price.amount * item.quantity}</p>
                    </div>
                    <div className={styles.qtyPart}>
                      <p>QTY:{item.quantity }</p>
                    <div className={styles.qtyBtn}> 
                      <button className={styles.minBtn} onClick={() => addItemToCheckout(item.variant.id, 1)}> +</button>
                      <button className={styles.minBtn} onClick={() => addItemToCheckout(item.variant.id, -1)}> - </button>
                      {console.log("QTY", item.quantity * item.variant.price.amount )}
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeLineItem(item.id)}>delete</button>
                  </div>
                  </div>
                  {console.log("lineitems", checkout.lineItems)}
                </div>
              ))}
            </div> 
            <div>
            {checkout.lineItems && checkout.lineItems.map(item => (
              <p>Total price: {item.variant.price.amount * item.quantity}</p>
            ))}
            </div>
            <button className={styles.checkoutBtn}>
            Checkout
            <a href={checkout.webUrl} target="_blank">{checkout.webUrl}</a>
            </button>
              
            {/* <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
              
              
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
)}

export default Modal;