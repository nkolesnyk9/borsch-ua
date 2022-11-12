import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { ShopContext } from "../context/CartContext";
import { Link, redirect } from 'react-router-dom'


const Modal = ({setIsOpen}) => {

  const { checkout, removeLineItem } = useContext(ShopContext)
  
  console.log("here is the check out",checkout)
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false) } >
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Items in your cart:</h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false) }>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              Here is the content of the cart
              {checkout.lineItems && checkout.lineItems.map(item => (
                <div key={item.id}>
                  <button className={styles.removeBtn} onClick={() => removeLineItem(item.id)}>Remove Item</button>
                  <div>
                  <img className={styles.cartImg} src={item.variant.image.src}></img>
                  </div>
                  <div>
                  <p>{item.title}</p>
                  </div>
                  <div>
                  <p>{item.variant.price.amount}</p>
                  </div>
                </div>
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