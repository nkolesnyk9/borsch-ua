import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/CartContext";
import { Link, redirect } from "react-router-dom";

const Modal = ({ setIsOpen }) => {
  const { checkout, removeLineItem, addItemToCheckout, product } =
    useContext(ShopContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = checkout.lineItems.reduce((acc, item) => {
      console.log("acc", acc);
      acc += item.variant.price.amount * item.quantity;
      return acc;
    }, 0);
    console.log("total", total);
    setTotal(total);
  });

  console.log("here is the check out", checkout);

  return (
    <>
      <div className={styles.darkBG}>
        <div className={styles.centered}>
          <div className={styles.modal}>
            <h5 className={styles.heading}>Items in your cart: </h5>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              {checkout.lineItems.length == 0 && <h1>Your cart is empty! </h1>}
              {checkout.lineItems &&
                checkout.lineItems.map((item) => (
                  <div className={styles.itemCard} key={item.id}>
                    <div className={styles.leftPart}>
                      <div>
                        <p>{item.title}</p>
                      </div>
                      <div>
                        <img
                          className={styles.cartImg}
                          src={item.variant.image.src}
                        ></img>
                      </div>
                    </div>

                    <div className={styles.rightPart}>
                      <div>
                        <p>${item.variant.price.amount * item.quantity}</p>
                      </div>
                    </div>
                      <div className={styles.thirdPart}>
                        <div className={styles.qtyPart}>
                          <p>QTY: {item.quantity}</p>
                          <div className={styles.qtyBtn}>
                            <button
                              className={styles.minBtn}
                              onClick={() =>
                                addItemToCheckout(item.variant.id, 1)
                              }
                            >
                              {" "}
                              +
                            </button>
                            <button
                              className={styles.minBtn}
                              onClick={() =>
                                addItemToCheckout(item.variant.id, -1)
                              }
                            >
                              {" "}
                              -
                            </button>
                            {console.log(
                              "QTY",
                              item.quantity * item.variant.price.amount
                            )}
                          </div>
                          <button
                            className={styles.deleteBtn}
                            onClick={() => removeLineItem(item.id)}
                          >
                            delete
                          </button>
                        </div>
                      </div>
                      {console.log("lineitems", checkout.lineItems)}
                    
                  </div>
                ))}
            </div>

            <div className={styles.totalCost}>
              <p>Total price: {total.toFixed(2)}</p>
            </div>
            <div className={styles.parentCheckOut}>
            <button className={styles.checkoutBtn}>
              <a href={checkout.webUrl} target="_blank">
                Checkout
              </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
