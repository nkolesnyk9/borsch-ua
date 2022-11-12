import './Store.css'
import { ShopContext } from '../context/CartContext'
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Store = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  //useEffect is the same as component did mount; what we're going to do with the useEffect is fetch all of the product when the home page loads. So basically on home page load, the first thing is going to do is fetch product. And we're going to call the function. What we need to pass to the useEffect hook is a variable that it would watch, and this variable is the one that we want to watch when we want to update the use effect, when we want to fetch again, and we want to do that  when this function changes or when new products are available.
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log("here are the products", products);

//here we are saying if products are not available
  if (!products) return <div>Loading ....</div>;
  return (
   <>
    <h2>Welcome to the store!</h2>
    <div className='display-items'>
      {
        products.map(product => (
        <Link to={`/products/${product.handle}`} key={product.id}>
        <div className='product-card'>
        <img src={product.images[0].src}></img>
        <p>{product.title}</p>
        <p>${product.variants[0].price.amount}</p>
        </div>
        </Link>
        
        
       


      ))}
      </div>
    </>
    )
}

export default Store;
