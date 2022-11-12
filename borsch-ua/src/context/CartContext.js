import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
   });
   


class CartProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    // isCartOpen: false
  };


  componentDidMount() {
    console.log("compenent did Mount")
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id)
    } else {
      this.createCheckout()
    }
  }

  createCheckout = async () => {
    // set to wait for a Promise and get its fulfillment value
    
    const checkout = await client.checkout.create();
    console.log("this is checkout", checkout.id)
    // localStorage - comes with javascript 
    localStorage.setItem("checkout_id", checkout.id)
    this.setState({ checkout: checkout });
    
    
  };


  fetchCheckout = (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((error) => console.log(error));
  };

  

  addItemToCheckout = async (variantId, quantity) => {
  
    console.log("here is checkout id", this.state.checkout.id)
    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: quantity
      },
    ]
    // as per docs
    
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    )
    this.setState({ checkout: checkout });
    

    
  };

  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove)
    this.setState({ checkout: checkout })
  }

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
    return product;
  };

  // closeCart = () => {
  //   this.setState({ isCartOpen: false });
  // };
  // openCart = () => {
  //   this.setState({ isCartOpen: true });
  // };

  render() {
 
    return (

    // Use a Provider to pass the current value to the tree below.
    // Any component can read it, no matter how deep it is.
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem

        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
// Context.Consumer A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.
const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default CartProvider;